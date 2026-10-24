# 🧢 HACK OR CAP? — Rapid Fire Tech Game Show

A fast-paced, high-stakes arcade trivia game built for the **FOSSASIA & Eventyay** booth at tech events and conferences.

Each question features a strict **10-second countdown**. Choose the best answer (<kbd>A</kbd>, <kbd>B</kbd>, <kbd>C</kbd>, or <kbd>D</kbd>) before time runs out!

---

## ⚡ 4 Rounds of Rapid Fire (20 Questions)

- **Round 1 — Basics (Q1–Q5):** Open source definition, Linux kernel, Git purpose, repositories, and freeware differences.
- **Round 2 — Git, GitHub & Collaboration (Q6–Q10):** Pull requests, clone vs. fork, bug reporting, merge conflicts, and `CONTRIBUTING.md`.
- **Round 3 — Licensing, Security & Real-World Scenarios (Q11–Q15):** MIT License, GPL copyleft, leaked API keys, GitHub stars evaluation, and breaking API changes.
- **Round 4 — Advanced & Expert Thinking (Q16–Q20):** Vulnerabilities vs. tests, corporate open source strategy, performance tradeoffs, the bus factor, and unmaintained dependencies.

---

## 🎮 Game Controls & Accessibility

| Action | Touch / Mouse | Keyboard Shortcut |
| :--- | :--- | :--- |
| **Option A** | Click Option A card | <kbd>A</kbd> or <kbd>1</kbd> |
| **Option B** | Click Option B card | <kbd>B</kbd> or <kbd>2</kbd> |
| **Option C** | Click Option C card | <kbd>C</kbd> or <kbd>3</kbd> |
| **Option D** | Click Option D card | <kbd>D</kbd> or <kbd>4</kbd> |
| **Next / Start** | Click Next Question / Start | <kbd>Enter</kbd> or <kbd>Space</kbd> |
| **Fullscreen** | Click ⛶ Fullscreen Icon | Header button |
| **Mute / Unmute** | Click 🔊 Audio Icon | Header button |

---

## 🏆 Scoring System

- **Correct Answer:** `+100` points
- **Speed Bonus:** `+25` points for answering within the first 3 seconds (≥ 7s remaining)
- **Streak Bonus:** `+50` points for 3 or more consecutive correct answers
- **Incorrect Answer / Timeout:** `0` points
- **10-Second Timer:** Visual progress bar turns yellow at 5s, pulsing red with tick audio at ≤ 3s.

---

## 😂 "DEFEND YOUR CAP!" Wrong-Answer Challenge

When a player gets an answer wrong, a random, humorous crowd challenge appears:
- *"Defend your answer like a dramatic TV lawyer arguing before the Supreme Court!"*
- *"Explain your answer like a robot running on 1% battery!"*
- *"Act like a panicked programmer whose production code just crashed at 5 PM on a Friday!"*
- *"Convince the audience in five seconds!"*

*(Challenges are fun, friendly, and completely optional to perform at the booth).*

---

## 🎪 Booth Mode Features

- **No login or account required:** Visitors can start playing immediately.
- **Large touch controls:** Readable from a distance for passersby.
- **Zero external audio files:** 100% synthesized Web Audio API sound effects that work completely offline.
- **Round selector:** Choose between 5 (Quick Dash), 10 (Standard), or 15 (Marathon) questions.
- **Quick operator reset:** Booth staff can restart or toggle settings with one click.
- **Review Mode:** Players can review all statements, correct answers, and explanations on the Results screen.

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Header with booth mode, sound, fullscreen
│   │   ├── StartScreen.tsx    # Round selector, nickname, instructions
│   │   ├── GameScreen.tsx     # 10s timer, statement card, HACK/CAP buttons, feedback
│   │   └── ResultsScreen.tsx  # Score, accuracy, titles, confetti, question review
│   ├── data/
│   │   ├── questions.ts       # Curated 35+ questions bank (FOSSASIA, Eventyay, Git, Linux, AI)
│   │   └── challenges.ts      # "Defend your Cap" challenges & player rank titles
│   ├── utils/
│   │   └── sound.ts           # Web Audio API sound effects synthesizer
│   ├── types.ts               # Core TypeScript data contracts
│   ├── index.css              # Cyber arcade neon aesthetic & animations
│   ├── App.tsx                # Main state controller
│   └── main.tsx               # Entry point
├── index.html                 # Google fonts & meta tags
└── package.json
```

---

## ✏️ Adding / Editing Questions

Questions are stored cleanly in [src/data/questions.ts](file:///Users/kumardipankarsahoo/Hello/src/data/questions.ts). To add a new question, simply add an object:

```ts
{
  id: 'custom-1',
  statement: 'Your statement here...',
  isHack: true, // true = HACK (Fact), false = CAP (False)
  category: 'opensource',
  categoryLabel: 'Open Source',
  explanation: 'Why this is a hack or cap...'
}
```
