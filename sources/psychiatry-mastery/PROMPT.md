# Praxis rebuild prompt

Use this file to get any AI to rebuild Praxis without retyping the instructions.

## Which option to use

| You want | Do this |
|---|---|
| **The exact same app** | Give the AI `index.html` (attach it, or paste the link below) and say *"Run/host this file as-is."* Nothing needs to be rebuilt. |
| **The same app, rebuilt from scratch** (to change it, port it, or add features) | Copy the **prompt below** into the AI and attach `data/praxis-bank.json` (or let it fetch the link). |

Links (these work once the files are on the `main` branch):

- App: https://raw.githubusercontent.com/chuckhachem/Praxis/main/index.html
- Content: https://raw.githubusercontent.com/chuckhachem/Praxis/main/data/praxis-bank.json
- Prompt (this file): https://raw.githubusercontent.com/chuckhachem/Praxis/main/PROMPT.md

> Why the data file matters: Praxis holds 2,425 hand-written questions, a 71-move interview playbook, 1,700+ memory hooks, 400+ diagrams, a 100+ drug receptor atlas and 6 interview simulations. An AI can rebuild the **app** from the prompt, but it can't make up the same **content**. Without the data file you'd get a lookalike with different questions.

---

## The prompt (copy everything inside the box)

````text
Build "Praxis": a single-file, offline-capable psychiatry study app (one index.html, no build step).

CONTENT
Load all content from praxis-bank.json (attached, or fetch
https://raw.githubusercontent.com/chuckhachem/Praxis/main/data/praxis-bank.json).
Do not invent, rewrite or drop any questions. Embed the JSON inline in the HTML so the app works offline.
The JSON has six banks: core, binding, clinic, extra, niche, interview, plus interviewPlaybook (used by the Interview screen).
- Areas = core.taxonomy.areas + extraAreas.clinic + extraAreas.interview + extraAreas.niche (10 areas, each with id, label, short title t, color).
- Domains = core.taxonomy.domains, plus binding.domains (area "pharm"), clinic.domains (area "clinic"),
  interview.domains (area "interview"), niche.domains (area "niche"). 93 domains total.
- Questions = concatenation of all six banks' questions. Validate each: domain must exist; an mcq needs ≥2 options and a
  valid correctIndex; a written item needs modelAnswer. Drop exact duplicates (same concept + question text), give each a uid,
  and console.warn any problems.
- Question fields: type ("mcq" | "written"), domain, concept, question, options[], correctIndex, optionExplanations[],
  explanation, explanationLabel?, objective?, level? (1 Foundation, 2 Working, 3 Senior), modelAnswer?, keyPoints[]?, clinicMode?, hard?
- Memory hooks = merge of every bank's memoryHooks, keyed by concept. Diagrams = core.diagrams + binding.diagrams, keyed by concept.
  clinicalApplication (core) is keyed by concept: {steps[], ...}. binding.atlas = drug cards. clinic.rooms = interview simulations.
- Tracks = core.taxonomy.tracks, with these changes: "pharm" also includes all binding domains; "mixed" includes every domain
  except the niche ones. Add tracks: binding "Receptor Binding" (#4FD8B0), clinic "Clinic", interview "Master Interviewing", niche "Niche".

STACK & LOOK
- React 18.3.1 UMD from cdnjs, plain React.createElement (no JSX/build). Inline styles.
- Fonts (Google): Fraunces (display/headings), Inter (body, 13.5px), JetBrains Mono (labels, numbers, tags).
- Dark theme only: ink #0B0D17, surfaces #141826 / #191E2E / #212840, lines rgba(255,255,255,.08/.15),
  text #ECEEF5 / #9AA0B4 / #646C82, accentA teal #36DCC0, accentB amber #ECB05A, good #43D9A3, bad #F4768B, violet #8B7BF5.
  Each area/track uses its own color for tags, bars and buttons.
- Mobile-first column, max-width 560px, centered, radial gradient background (#141a2e at top → ink). Cards: radius 18, padding 16.
  Primary buttons: gradient of the accent color, radius 14. Small mono uppercase pill tags. Segmented radio controls.
  Respect safe-area insets, prefers-reduced-motion, visible focus rings (#36DCC0). Subtle fade-in on screen change.
- Header: "Praxis" wordmark, today's progress toward the daily goal, and day streak (flame icon).
- Bottom tab bar with line icons. Tabs (also deep-linkable via #hash):
  Practice, Neuro, Psycha, Clinic, Interview, Niche, Atlas, Coach, Tune.

PRACTICE ENGINE (the core)
- Pick the next question from the enabled domains of the active track (or of a section the user launched).
- Format setting: mcq / written / mixed (mixed uses writtenRatio, default 0.25).
- Every 4th question (total % 4 === 3) serve a due spaced-review item if one exists.
- Apply focus topics (substring match on concept + question + domain label) and difficulty bias
  (-2 Gentle, -1 Steady, 0 Standard, +1 Hard, +2 Brutal) by filtering on level.
- Prefer the least-seen concepts; never repeat the concept just shown.
- ALWAYS reshuffle MCQ options (and their explanations) at render time so answer position can't be memorized.
- After answering an MCQ: mark correct/incorrect, then show "Every option, explained" (each option's explanation),
  the main Explanation, the Memory hook if one exists for the concept, an inline diagram if one exists, and a
  clinical-application box ("In the room") when available. Buttons: Next question, Skip.
- Written answers: a textarea, then grade by key-point coverage: tokenize (drop stopwords and words ≤2 letters, stem to the
  first 6 letters); a key point counts as covered if ≥40% of its tokens appear in the answer; correct if ≥50% of key points
  are covered. Show which key points were hit or missed, plus the model answer.
- Diagram renderer supports types: bars (label, value 0–100, note, color), compare (two columns a/b with title + items),
  spectrum (points with label/sub/color on a gradient line), chain (steps joined by arrows), grid.

LEARNING STATE (localStorage key "praxis:state:v1"; load defensively, merge with defaults)
- settings {track:"mixed", format:"mcq", writtenRatio:.25, difficultyBias:0, dailyGoal:25, focus:[], enabled:{}}
- stats {total, correct, streak, lastActive, byDay{YYYY-MM-DD: count}}; the streak increments if last active was yesterday, else resets to 1.
- mastery per domain {score starts 50, attempts, correct}: right → +6 if attempts<3 else +4, plus 2 (or 1 if score>72);
  wrong → −7 if score>70 else −5; clamp 0–100.
- seen per concept {right, wrong, lastTick}.
- Spaced repetition list (max 80, keyed by concept), measured in "answers since": a miss adds or resets the item
  (ease 1.9, or −0.2 down to a floor of 1.3; due in 8 answers). A hit raises reps and ease (+0.1, cap 2.8); intervals
  [8,16,35,70] × ease/2.3; remove after 4 reps.
- rooms: best result per interview simulation.

SCREENS
- Practice: the current track (chips to switch track), daily goal bar, the question card.
- Neuro / Psycha / Niche: section hubs listing their domains with mastery bars; tap one to drill it in Practice.
- Clinic: clinic domains plus "Interview simulations" (clinic.rooms). A room shows the intro, then steps: patient line →
  "How do you open?/What next?" → options. Picking one shows "Strong move" (2) / "Acceptable, not the strongest" (1) /
  "Costly move" (0), the patient's reply in italic Fraunces, why it scored that way, and the strongest move. At the end,
  a debrief with a score summary ("Close to a senior clinician's reading of the room." / "Sound instincts, with a few
  costly moments." / etc.), plus "Run it again". Store the best score per room.
- Interview: a row of pill tabs, Playbook / See it / Golden lines / Myths / Drill (remember the last tab in localStorage
  "praxis.ivx.tab"). Content comes from interviewPlaybook in the JSON.
  Playbook: a hero card ("The Interview Playbook", counts of phases, moves, signs, golden lines, and a bar of moves practised),
  then numbered phase cards (title, goal, practised/total). Tapping a phase shows its moves as collapsible cards: header = name
  + "When: ...". Expanded: "Say" lines in Fraunces with a left accent border, "Watch for", "Why it works", an "Avoid" box
  tinted red, the source in mono, and a "Mark as practised" toggle (saved in localStorage "praxis.ivx.done").
  Bottom: "Next: <phase>" button, or on the last phase a "Drill: what do you say next?" button (drills domain ivx_moments).
  See it: filter chips by category, then cards with title + category tag, "You see", "It may mean", "Do / say", source;
  ends with "Drill: seeing what others miss" (domain ivx_seeing).
  Golden lines: cards with the question in Fraunces quotes, a "when" tag, what it opens, and the source.
  Myths: cards with the myth struck through, then the evidence and source.
  Drill: the Master Interviewing domains as a section hub. Interview accent color #6FB7F0.
- Atlas: segmented control Overview / Missed (count) / Browse / Receptors.
  Overview: Mastery %, Accuracy %, Answered tiles; mastery by area; mastery by domain; activity.
  Missed: concepts in the SRS list ("Review my misses"). Browse: search the whole bank and open any item.
  Receptors: searchable drug atlas from binding.atlas (name, memory hook, summary, binding actions by tier, "No appreciable
  binding", source).
- Coach: a chat that runs locally, with no API. Parse plain-English commands: "focus on X / quiz me on X / drill X" adds a focus;
  "clear focus"; "only written" / "only mcq" / "mixed format"; "harder" / "brutal" / "easier"; "switch to <track>" /
  "review my misses". Reply with what changed. Otherwise treat the message as a concept question: score every question
  (concept-word hit = 3, text hit = 1, phrase hit +4, −2 per missing word) and answer with the best match's explanation
  and memory hook. Suggested chips: Harder, Review my misses, Clinic, Only written, Focus on lithium, What is reflected
  intent?, Clear focus. Keep the last 60 messages in localStorage "praxis:coach:v1".
- Tune: track, question format, written share, difficulty, daily goal (raise/lower), focus topics (add/clear), toggle
  domains on/off per area (Turn all on/off), and Reset progress (confirm: "Erase everything, including settings, and start fresh?").

Deliver one complete index.html that works by opening it in a browser.
````
