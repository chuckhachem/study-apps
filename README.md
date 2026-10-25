# Study Apps

All of Dodo's study apps, built with Claude, in one private repo. Each app is a single self-contained `index.html` that runs in the browser.

| App | Folder | What it teaches |
|---|---|---|
| Psychiatry Mastery | `psychiatry-mastery/` | Board-level psychiatry: 2,425 questions, spaced repetition, memory hooks, receptor atlas, interview simulations and the Interview Playbook |
| Clinical Judgment Trainer | `clinical-judgment-trainer/` | What to say next, bedside pattern recognition and case simulations |
| Psychiatric Drug Reference | `psychiatric-drug-reference/` | Psychopharmacology by drug class: dosing, pearls, warnings and a board-level quiz |
| LU M1 Clinical Psychology | `lu-m1-clinical-psychology/` | The Lebanese University M1 Clinical Psychology courses as MCQ practice |
| M1 Exam Question Bank | `m1-exam-question-bank/` | Spaced-repetition questions from the M1 course files, past exams, TFP, Clinical Interviewing and a statistics & SPSS course |
| Chemistry & Physics Foundations | `chemistry-physics-foundations/` | Chemistry and physics from zero to tutor level |

Progress is saved in the browser you use. The AI features (the drug reference's assistant, the LU M1 coach) only work in the Claude versions.

## How to open them

1. On this repo's page, tap **Code → Download ZIP** and unzip it.
2. Open `index.html` at the top of the folder for the app menu, or open any app's own `index.html`.

## Source code

`sources/` keeps everything used to build the apps, so this one repo holds it all:

- `sources/psychiatry-mastery/`: the rebuild prompt, the full content bank as JSON, and the scripts that build the Master Interviewing bank and Interview Playbook.
- `sources/m1-exam-question-bank/`: the full M1 Exam Question Bank project (question files, app source, build and sync tools). The scheduled sync with the Claude version still runs from the `CelestLUBANKM1` repo.
- `sources/psychiatric-drug-reference/` and `sources/chemistry-physics-foundations/`: the original code recovered from older Claude chats.

Clinical Judgment Trainer and LU M1 Clinical Psychology have no separate source: their `index.html` is the source.
