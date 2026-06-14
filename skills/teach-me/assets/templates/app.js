/* teach-me capsule — shared client logic. Vanilla JS, no dependencies.
 * Handles: progress tracking (LocalStorage), interactive quizzes, and flashcards.
 * Note: under file://, some browsers scope LocalStorage per file; progress then persists per page.
 */
(function () {
  "use strict";

  function store(capsule) {
    const key = "teachme:" + (capsule || "default");
    let data = { completed: {} };
    try { data = JSON.parse(localStorage.getItem(key)) || data; } catch (e) {}
    return {
      data: data,
      save: function () { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {} },
    };
  }

  document.addEventListener("DOMContentLoaded", function () {
    const capsule = document.body.getAttribute("data-capsule");
    const s = store(capsule);

    // --- Mark-complete button (non-index pages) ---
    const markBtn = document.querySelector("[data-complete]");
    if (markBtn) {
      const file = markBtn.getAttribute("data-complete");
      const sync = function () {
        const done = !!s.data.completed[file];
        markBtn.textContent = done ? "✓ Completed" : "Mark this section complete";
        markBtn.classList.toggle("primary", !done);
      };
      markBtn.addEventListener("click", function () {
        s.data.completed[file] = !s.data.completed[file];
        s.save(); sync();
      });
      sync();
    }

    // --- Progress (index page): items carry data-file; bar reflects completion ---
    const items = Array.prototype.slice.call(document.querySelectorAll("[data-file]"));
    if (items.length) {
      let done = 0;
      items.forEach(function (li) {
        const f = li.getAttribute("data-file");
        const ok = !!s.data.completed[f];
        if (ok) done++;
        const mark = li.querySelector(".check");
        if (mark) mark.textContent = ok ? "✓" : "○";
      });
      const pct = Math.round((done / items.length) * 100);
      const bar = document.querySelector(".progress > span");
      if (bar) bar.style.width = pct + "%";
      const label = document.querySelector("[data-progress-label]");
      if (label) label.textContent = done + " / " + items.length + " (" + pct + "%)";
    }

    // --- Quizzes: .opt elements with data-correct="true" ---
    document.querySelectorAll(".quiz .q").forEach(function (q) {
      q.querySelectorAll(".opt").forEach(function (opt) {
        opt.addEventListener("click", function () {
          const correct = opt.getAttribute("data-correct") === "true";
          opt.classList.add(correct ? "correct" : "wrong");
          if (!correct) {
            const right = q.querySelector('.opt[data-correct="true"]');
            if (right) right.classList.add("correct");
          }
        });
      });
    });

    // --- Flashcards: click to flip ---
    document.querySelectorAll(".flashcard").forEach(function (card) {
      card.addEventListener("click", function () { card.classList.toggle("flipped"); });
    });
  });
})();
