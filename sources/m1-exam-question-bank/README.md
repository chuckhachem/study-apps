# CelestLUBANKM1

A study app for the Lebanese University M1 Clinical Psychology courses. It has about 2,100 multiple-choice questions, including a 553-question statistics and SPSS course, each with the reasoning behind the answer and the source section.

**Open the app:** https://chuckhachem.github.io/CelestLUBANKM1/

## What it covers

- Intervention Techniques (midterm and finals summaries, Lucas case)
- Research Methodology (midterm summary)
- SPSS (final summary and previous exams)
- WISC-V (final summary)
- Clarkin, Yeomans & Kernberg (2006), *Psychotherapy for Borderline Personality*, chapters 1–11 plus a synthesis set
- Sommers-Flanagan & Sommers-Flanagan (2009), *Clinical Interviewing* (4th ed.), chapters 1–14 plus a synthesis set

## How it works

- **Spaced review** mixes due reviews with new questions in shuffled order, never the same topic twice in a row.
- A missed question comes back a few questions later, then after 10 minutes, then the next day, then at growing gaps (FSRS memory model).
- **Fix my misses** drills only the questions you have missed and not yet mastered.
- **Mock exam** gives a random scored set of 10–60 questions.
- Settings include a daily new-question limit, target recall, an optional exam date (every learned question comes back before it) and recall-first mode.

Progress is saved in your browser on this device. Keys: 1–4 or A–D to answer, 1/2/3 to grade, U to undo, Esc to end a session.

## Editing

The app is built from `src/app.html` and the question files in `questions/`. Every change pushed to `main` is checked and published automatically. Read [AGENTS.md](AGENTS.md) before editing: it explains the question format and the rules that keep saved progress intact.
