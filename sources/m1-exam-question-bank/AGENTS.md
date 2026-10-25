# Rules for any AI or person editing CelestLUBANKM1

CelestLUBANKM1 is a spaced-repetition study app with about 2,100 multiple-choice questions for the Lebanese University M1 Clinical Psychology courses, including a full statistics and SPSS course. The live site is https://chuckhachem.github.io/CelestLUBANKM1/. A copy also runs inside Claude and is synced with this repository automatically.

## Where things are

| What you want to change | Edit this |
| --- | --- |
| Questions, answers, explanations | `questions/<section>.json` (one file per section, e.g. `ci3.json` = Clinical Interviewing chapter 3, `stat11.json` = Statistics & SPSS chapter 11, t-tests) |
| Section order | `questions/order.json` |
| The app itself (screens, styles, logic) | `src/app.html` |
| Build checks and website wrapper | `tools/build.py` |

Do not create or edit an `index.html` at the root. The site is built from the files above by `tools/build.py`, and GitHub publishes the result automatically after every push to `main`.

## Question format

Each file is a JSON list. Each question is an object:

```json
{
  "t": "Topic label (TFP, Interviewing and Statistics files start with Ch<N>, e.g. \"Ch3 Attending\"; synthesis files start with Synthesis)",
  "d": 2,
  "q": "The question stem",
  "o": ["CORRECT answer", "distractor", "distractor", "distractor"],
  "e": "Why the answer is right, taught in a professor's voice",
  "w": ["Why distractor 1 is wrong", "Why distractor 2 is wrong", "Why distractor 3 is wrong"],
  "k": "Remember: the one-line rule to take away",
  "h": "Optional memory hook",
  "r": "Exact source section, e.g. \"Sommers-Flanagan Ch3 – Attending behavior\"",
  "n": "Optional precision note"
}
```

- `d` is difficulty: 1 Core, 2 Applied, 3 Expert.
- `o` has exactly 4 options and the correct one is always first. The app shuffles them.
- Keep distractors plausible and similar in length to the correct answer, so length does not give the answer away.
- Every fact must come from the course material named in `r`. Do not invent content.

### Teaching standard (every question)

The owner studies only through this app, so every question must teach, not just test. The app shows these fields after each answer.

- `e` (Why): 45–120 words. Explain the concept behind the right answer, the cue in the stem that points to it, and how it applies (a clinical example for clinical items). Never just "the summary says X"; keep the course's own framing and numbering.
- `w` (Option by option): exactly 3 texts, in the same order as the 3 distractors in `o`. Each says what that option actually is, where it belongs, or the exact error behind it (for a wrong number, the mistake that produces it). If the learner picks it, this is the first thing they read.
- `k` (Remember): one transferable rule, 8–30 words, recallable without the question. It also feeds the "What you learned" list at the end of each session.
- `h` (Memory hook, optional): a mnemonic built from word roots, sound-alikes or a vivid image. Only add one that genuinely helps.

## Rules that protect saved progress

Progress is stored per question as `<section>-<position>`, for example `ci3-12`. Therefore:

1. Add new questions only at the end of a section's list.
2. Never delete, reorder or move questions between files. To fix a bad question, edit its text in place.
3. Never rename a section file or remove it from `questions/order.json`. A new section gets a new file, added to `order.json`. The app also needs a matching course entry in `src/app.html` (`COURSES`, and for a chaptered course the file-name pattern `/^(tfp|ci|stat)(\d+)$/`, a chapter list, a prefs key and a chip block, as done for `stat`).
4. Never change the storage name `cpqb-v1` in `src/app.html`. Renaming it erases everyone's progress.

## Before you finish

Run `python3 tools/build.py`. It checks every question and the rules above and builds the site. If it fails, fix the errors it lists. A push that fails these checks is not published, and the live site keeps the previous version. After adding questions, run `python3 tools/build.py --lock` so the new counts are protected.

Commit only source files. `_site/` and `dist/` are build output and are ignored by git.
