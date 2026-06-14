#!/usr/bin/env python3
"""Scaffold a teach-me study capsule.

Deterministic mechanics that should NOT be hand-written by the LLM: build the dated directory
tree, copy templates into place, and emit valid manifest.json / progress.json / question-bank.json
/ results.json. After running this, fill the {{placeholders}} in the generated HTML.

Usage:
    python new_capsule.py --subject "Docker for Developers" --level beginner \
        --lang pt-BR --minutes 600 --out .

Also exposes `dedupe_questions(bank, history)` for picking fresh questions on re-assessments.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

LEVELS = ["introductory", "beginner", "intermediate", "advanced", "expert"]
TEMPLATES_DIR = Path(__file__).resolve().parent.parent / "assets" / "templates"

# capsule-relative file  ->  source template file name
FILE_TEMPLATES: dict[str, str] = {
    "index.html": "index.html",
    "roadmap.html": "roadmap.html",
    "diagnosis.html": "page.html",
    "prerequisites.html": "page.html",
    "objectives.html": "page.html",
    "key-topics.html": "page.html",
    "ignorance-map.html": "page.html",
    "rubric.html": "page.html",
    "glossary.html": "glossary.html",
    "lessons/lesson-01-overview.html": "lesson.html",
    "lessons/lesson-02-fundamentals.html": "lesson.html",
    "lessons/lesson-03-examples.html": "lesson.html",
    "lessons/lesson-04-common-mistakes.html": "lesson.html",
    "lessons/lesson-05-case-study.html": "lesson.html",
    "lessons/lesson-06-review.html": "lesson.html",
    "activities/exercises.html": "page.html",
    "activities/flashcards.html": "flashcards.html",
    "activities/recall-questions.html": "page.html",
    "activities/case-study.html": "page.html",
    "assessment/assessment.html": "assessment.html",
    "assessment/assessment-history.html": "assessment-history.html",
    "references/sources.html": "sources.html",
    "references/caveats.html": "page.html",
    "references/deepening.html": "page.html",
}

# Human-friendly titles per generated file (used to fill {{title}}).
TITLES: dict[str, str] = {
    "diagnosis.html": "Diagnosis",
    "prerequisites.html": "Prerequisites",
    "objectives.html": "Objectives & Applications",
    "key-topics.html": "Key Topics",
    "ignorance-map.html": "Ignorance Map",
    "rubric.html": "Mastery Rubric",
    "activities/exercises.html": "Exercises",
    "activities/recall-questions.html": "Recall Questions",
    "activities/case-study.html": "Case Study",
    "references/caveats.html": "Caveats",
    "references/deepening.html": "Deepening",
}


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return re.sub(r"-{2,}", "-", text).strip("-")


def render(template_text: str, values: dict[str, str]) -> str:
    """Replace only the global {{key}} placeholders we own; leave the rest for the LLM."""
    out = template_text
    for key, val in values.items():
        out = out.replace("{{" + key + "}}", val)
    return out


def build_capsule(subject: str, level: str, lang: str, minutes: int, out: Path) -> Path:
    if level not in LEVELS:
        raise SystemExit(f"--level must be one of {LEVELS}, got {level!r}")
    if not 1 <= minutes <= 600:
        raise SystemExit("--minutes must be between 1 and 600 (10h budget)")
    if not TEMPLATES_DIR.is_dir():
        raise SystemExit(f"templates not found at {TEMPLATES_DIR}")

    today = date.today().isoformat()
    capsule_id = f"{slugify(subject)}-{level}-{today}"
    folder = out / f"{subject} - {level} - {today}"
    if folder.exists():
        raise SystemExit(f"capsule already exists: {folder}")

    # cache templates
    cache: dict[str, str] = {}
    for tpl in set(FILE_TEMPLATES.values()):
        cache[tpl] = (TEMPLATES_DIR / tpl).read_text(encoding="utf-8")

    base_values = {
        "subject": subject,
        "level": level,
        "date": today,
        "language": lang,
        "capsule_id": capsule_id,
        "minutes": str(minutes),
        "hours": f"{minutes / 60:.1f}".rstrip("0").rstrip("."),
    }

    for rel, tpl in FILE_TEMPLATES.items():
        dest = folder / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        depth = rel.count("/")
        values = dict(base_values)
        values["root"] = "../" * depth
        values["relpath"] = rel
        values["title"] = TITLES.get(rel, subject)
        dest.write_text(render(cache[tpl], values), encoding="utf-8")

    # static assets at root
    for asset in ("style.css", "app.js"):
        (folder / asset).write_text((TEMPLATES_DIR / asset).read_text(encoding="utf-8"), encoding="utf-8")

    # JSON state files
    manifest = {
        "capsule_id": capsule_id,
        "subject": subject,
        "level": level,
        "language": lang,
        "created_at": today,
        "max_duration_minutes": minutes,
        "estimated_duration_minutes": 0,
        "user_goal": "",
        "status": "generated",
        "files": sorted(FILE_TEMPLATES.keys()),
    }
    progress = {
        "capsule_id": capsule_id,
        "completed_files": [],
        "completed_activities": [],
        "total_progress_percent": 0,
        "last_accessed_at": None,
        "self_confidence": {},
    }
    _write_json(folder / "manifest.json", manifest)
    _write_json(folder / "progress.json", progress)
    _write_json(folder / "assessment" / "question-bank.json", [])
    _write_json(folder / "assessment" / "results.json", {"capsule_id": capsule_id, "assessments": []})

    return folder


def _write_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def dedupe_questions(bank: list[dict], history: list[dict] | None = None,
                     spacing_threshold: int = 1) -> list[dict]:
    """Pick fresh questions for a new assessment.

    Drops items already answered correctly, unless they are fundamental and were last asked at
    least `spacing_threshold` assessments ago. Wrong/partial items are kept (re-test). Never-asked
    items are always eligible. Ordered: never-asked first, then by `asked_count` ascending.

    `history` (optional) is the list under results.json -> "assessments"; its length defines how
    many assessments have happened, used to space out fundamentals.
    """
    assessments_so_far = len(history or [])
    eligible: list[dict] = []
    for q in bank:
        last = q.get("last_result")
        asked = q.get("asked_count", 0) or 0
        if last == "correct":
            if q.get("is_fundamental") and asked <= max(0, assessments_so_far - spacing_threshold):
                eligible.append(q)
            continue  # skip recently-correct non-fundamentals
        eligible.append(q)  # never-asked, wrong, or partial
    eligible.sort(key=lambda q: (q.get("asked_count", 0) or 0, q.get("question_id", "")))
    return eligible


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description="Scaffold a teach-me study capsule.")
    p.add_argument("--subject", required=True, help="Subject name, e.g. 'Docker for Developers'")
    p.add_argument("--level", required=True, choices=LEVELS)
    p.add_argument("--lang", default="pt-BR", help="BCP-47 tag for the learner's language")
    p.add_argument("--minutes", type=int, default=600, help="Time budget in minutes (<=600)")
    p.add_argument("--out", default=".", help="Base directory to create the capsule in")
    args = p.parse_args(argv)

    folder = build_capsule(args.subject, args.level, args.lang, args.minutes, Path(args.out))
    print(f"Created capsule: {folder}")
    print("Next: fill the {{placeholders}} in the generated HTML (see references/capsule-blueprint.md).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
