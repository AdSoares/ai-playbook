# Eval — Summarization

Measures the quality of summaries produced by a prompt/agent: faithfulness to the original text, coverage of key points, and conciseness.

## How to run (conceptual)
1. For each line in `dataset.jsonl`, send the `input` to the system under test.
2. Score the output with the graders described in `rubric.md`.
3. Aggregate the scores and compare across prompt versions.

## Graders
- **Faithfulness** (LLM-as-judge): does the summary claim anything not in the original? (0-5)
- **Coverage** (LLM-as-judge): were the key points included? (0-5)
- **Conciseness** (programmatic): does the summary respect the token limit?

Details in [`rubric.md`](rubric.md).
