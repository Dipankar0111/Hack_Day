import type { Question, RoundSelection } from '../types';

export const RAPID_FIRE_QUESTIONS: Question[] = [
  // ==========================================
  // Round 1 — Basics (Questions 1–5)
  // ==========================================
  {
    id: 'q1',
    roundNumber: 1,
    roundTitle: 'Round 1 — Basics',
    questionNumber: 1,
    questionText: 'What is open-source software?',
    tag: 'Easy · Conceptual',
    options: [
      { key: 'A', text: 'Software that is always free of cost' },
      { key: 'B', text: 'Software whose source code is available under a license allowing use, modification, and redistribution' },
      { key: 'C', text: 'Software that works only online' },
      { key: 'D', text: 'Software developed only by volunteers' }
    ],
    correctOption: 'B',
    explanation: 'Open-source software provides public access to its source code under a license granting rights to use, modify, study, and redistribute it.'
  },
  {
    id: 'q2',
    roundNumber: 1,
    roundTitle: 'Round 1 — Basics',
    questionNumber: 2,
    questionText: 'Which of the following is an open-source operating system kernel?',
    tag: 'Easy · Systems',
    options: [
      { key: 'A', text: 'Windows NT' },
      { key: 'B', text: 'Linux' },
      { key: 'C', text: 'macOS Finder' },
      { key: 'D', text: 'Microsoft Office' }
    ],
    correctOption: 'B',
    explanation: 'Linux is a renowned open-source kernel created by Linus Torvalds in 1991 and released under the GNU General Public License.'
  },
  {
    id: 'q3',
    roundNumber: 1,
    roundTitle: 'Round 1 — Basics',
    questionNumber: 3,
    questionText: 'What is the primary purpose of Git?',
    tag: 'Easy · Tooling',
    options: [
      { key: 'A', text: 'Designing websites' },
      { key: 'B', text: 'Managing databases' },
      { key: 'C', text: 'Tracking changes in source code' },
      { key: 'D', text: 'Compiling every programming language' }
    ],
    correctOption: 'C',
    explanation: 'Git is a distributed version control system designed to track changes in source code files across history and team contributions.'
  },
  {
    id: 'q4',
    roundNumber: 1,
    roundTitle: 'Round 1 — Basics',
    questionNumber: 4,
    questionText: 'On GitHub, what is a repository?',
    tag: 'Easy · GitHub',
    options: [
      { key: 'A', text: "A collection of files and their project history" },
      { key: 'B', text: 'A programming language' },
      { key: 'C', text: "A computer's RAM" },
      { key: 'D', text: 'A type of software license' }
    ],
    correctOption: 'A',
    explanation: 'A repository (or repo) houses all project files along with each file’s revision history, branches, tags, and commits.'
  },
  {
    id: 'q5',
    roundNumber: 1,
    roundTitle: 'Round 1 — Basics',
    questionNumber: 5,
    questionText: 'What is the difference between open-source software and freeware?',
    tag: 'Concepts',
    options: [
      { key: 'A', text: 'They are exactly the same' },
      { key: 'B', text: 'Freeware is always open source' },
      { key: 'C', text: 'Open source permits specific uses and modifications under its license; freeware is generally free to use but may keep its source code closed' },
      { key: 'D', text: 'Freeware always allows redistribution' }
    ],
    correctOption: 'C',
    explanation: 'Freeware offers zero-cost binaries but keeps source code proprietary and closed, while open source explicitly provides source code and legal rights to inspect and modify it.'
  },

  // ==========================================
  // Round 2 — Git, GitHub & Collaboration (Questions 6–10)
  // ==========================================
  {
    id: 'q6',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git, GitHub & Collaboration',
    questionNumber: 6,
    questionText: 'What is the main purpose of a pull request?',
    tag: 'Collaboration',
    options: [
      { key: 'A', text: 'To download a repository' },
      { key: 'B', text: 'To propose changes and request their review before merging' },
      { key: 'C', text: 'To delete a branch' },
      { key: 'D', text: 'To create a new GitHub account' }
    ],
    correctOption: 'B',
    explanation: 'A pull request notifies maintainers about changes you have pushed to a branch or fork so they can review, discuss, and merge them.'
  },
  {
    id: 'q7',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git, GitHub & Collaboration',
    questionNumber: 7,
    questionText: 'What is the difference between git clone and git fork?',
    tag: 'Git vs GitHub',
    options: [
      { key: 'A', text: 'Both always create the same thing in the same place' },
      { key: 'B', text: 'clone copies a repository locally; fork creates a separate hosted copy on a platform such as GitHub' },
      { key: 'C', text: 'clone deletes the original repository' },
      { key: 'D', text: 'fork is used only for private repositories' }
    ],
    correctOption: 'B',
    explanation: 'git clone copies a repository to your local machine, whereas a fork creates an independent remote copy under your own GitHub account.'
  },
  {
    id: 'q8',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git, GitHub & Collaboration',
    questionNumber: 8,
    questionText: 'You find a bug in an open-source project. What is the best first step before submitting a fix?',
    tag: 'Best Practices',
    options: [
      { key: 'A', text: 'Immediately rewrite the entire project' },
      { key: 'B', text: 'Check existing issues and contribution guidelines, then reproduce and understand the bug' },
      { key: 'C', text: 'Create multiple duplicate issues' },
      { key: 'D', text: 'Push directly to the main branch without permission' }
    ],
    correctOption: 'B',
    explanation: 'Checking existing issues prevents duplicates, reading guidelines ensures alignment, and reproducing the bug guarantees you solve the true root cause.'
  },
  {
    id: 'q9',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git, GitHub & Collaboration',
    questionNumber: 9,
    questionText: 'What happens during a merge conflict in Git?',
    tag: 'Git Fundamentals',
    options: [
      { key: 'A', text: 'Git automatically deletes both versions' },
      { key: 'B', text: 'Git cannot automatically reconcile competing changes and needs a resolution' },
      { key: 'C', text: 'The repository becomes permanently unusable' },
      { key: 'D', text: 'GitHub blocks all future commits' }
    ],
    correctOption: 'B',
    explanation: 'A merge conflict occurs when concurrent edits change the same lines of code; Git pauses the merge so a developer can choose the correct version.'
  },
  {
    id: 'q10',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git, GitHub & Collaboration',
    questionNumber: 10,
    questionText: 'What is the purpose of a CONTRIBUTING.md file?',
    tag: 'Open Source Docs',
    options: [
      { key: 'A', text: 'To store passwords' },
      { key: 'B', text: "To list only the project's developers" },
      { key: 'C', text: 'To explain how contributors should report issues, make changes, and submit contributions' },
      { key: 'D', text: 'To replace the software license' }
    ],
    correctOption: 'C',
    explanation: 'CONTRIBUTING.md provides clear instructions on branch naming, code style, testing requirements, and pull request procedures for new contributors.'
  },

  // ==========================================
  // Round 3 — Licensing, Security & Real-World Scenarios (Questions 11–15)
  // ==========================================
  {
    id: 'q11',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing, Security & Real-World Scenarios',
    questionNumber: 11,
    questionText: 'Which statement about the MIT License is generally correct?',
    tag: 'Licensing',
    options: [
      { key: 'A', text: 'It prohibits commercial use' },
      { key: 'B', text: 'It permits broad reuse, modification, and distribution, subject to its conditions, including retaining the copyright and license notice' },
      { key: 'C', text: 'It requires every derivative project to be open source' },
      { key: 'D', text: 'It prohibits modification' }
    ],
    correctOption: 'B',
    explanation: 'The MIT License is highly permissive; anyone can use, modify, distribute, and sell the code as long as the original copyright and notice are preserved.'
  },
  {
    id: 'q12',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing, Security & Real-World Scenarios',
    questionNumber: 12,
    questionText: 'A developer copies GPL-licensed code into a project they distribute. What should they consider?',
    tag: 'Copyleft',
    options: [
      { key: 'A', text: 'GPL code has no licensing requirements' },
      { key: 'B', text: 'GPL obligations can apply to the combined distributed work, depending on how the code is used and the applicable license terms' },
      { key: 'C', text: 'Adding a copyright notice of their own removes the original license' },
      { key: 'D', text: 'Uploading the project to GitHub automatically makes it MIT-licensed' }
    ],
    correctOption: 'B',
    explanation: 'The GNU General Public License is a copyleft license; distributing combined or derivative works typically requires the combined code to be released under the GPL.'
  },
  {
    id: 'q13',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing, Security & Real-World Scenarios',
    questionNumber: 13,
    questionText: 'You discover an API key accidentally committed to a public repository. What should you do first?',
    tag: 'Security Incident',
    options: [
      { key: 'A', text: 'Only delete the visible line of code' },
      { key: 'B', text: 'Make the repository private and take no further action' },
      { key: 'C', text: 'Revoke or rotate the exposed key immediately, then address the repository history and investigate possible misuse' },
      { key: 'D', text: 'Wait to see whether someone uses it' }
    ],
    correctOption: 'C',
    explanation: 'Committed secrets are instantly scraped by automated scanning bots. Revoking and rotating the key invalidates it before an attacker can exploit your services.'
  },
  {
    id: 'q14',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing, Security & Real-World Scenarios',
    questionNumber: 14,
    questionText: 'A project has 10,000 GitHub stars but almost no recent maintenance. What is the most reasonable conclusion?',
    tag: 'Project Evaluation',
    options: [
      { key: 'A', text: 'It is definitely the best project' },
      { key: 'B', text: 'It is definitely malicious' },
      { key: 'C', text: 'Stars alone cannot establish project quality; check maintenance, issues, releases, security, and community activity' },
      { key: 'D', text: 'It must be officially supported by GitHub' }
    ],
    correctOption: 'C',
    explanation: 'GitHub stars measure historical popularity or bookmarking, not maintenance status, test health, or vulnerability management.'
  },
  {
    id: 'q15',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing, Security & Real-World Scenarios',
    questionNumber: 15,
    questionText: 'An open-source library introduces a breaking API change. What is the most responsible approach for its maintainers?',
    tag: 'API Design',
    options: [
      { key: 'A', text: 'Release it without documentation' },
      { key: 'B', text: "Communicate the change, document migration steps, and follow the project's versioning and release practices" },
      { key: 'C', text: 'Delete all previous releases' },
      { key: 'D', text: 'Stop accepting bug reports' }
    ],
    correctOption: 'B',
    explanation: 'Adhering to Semantic Versioning (major version bump), providing deprecation warnings, and documenting upgrade paths prevents breaking downstream users.'
  },

  // ==========================================
  // Round 4 — Advanced & Expert Thinking (Questions 16–20)
  // ==========================================
  {
    id: 'q16',
    roundNumber: 4,
    roundTitle: 'Round 4 — Advanced & Expert Thinking',
    questionNumber: 16,
    questionText: "A contributor's pull request passes all tests but introduces a serious security vulnerability. Should it be merged?",
    tag: 'Code Review',
    options: [
      { key: 'A', text: 'Yes, because all tests passed' },
      { key: 'B', text: 'Yes, if the contributor has many followers' },
      { key: 'C', text: 'No; passing tests does not guarantee security, so the vulnerability must be assessed and resolved first' },
      { key: 'D', text: 'Yes, if it adds a popular feature' }
    ],
    correctOption: 'C',
    explanation: 'Tests verify anticipated functionality, not unseen vulnerabilities. Critical security concerns must always block merging until patched.'
  },
  {
    id: 'q17',
    roundNumber: 4,
    roundTitle: 'Round 4 — Advanced & Expert Thinking',
    questionNumber: 17,
    questionText: 'Why might a company contribute to an open-source project even when competitors also use it?',
    tag: 'Ecosystem & Strategy',
    options: [
      { key: 'A', text: 'To prevent anyone else from using it' },
      { key: 'B', text: 'To improve shared infrastructure, influence technical direction, reduce duplicated work, and build trust with the ecosystem' },
      { key: 'C', text: 'To automatically own every contribution' },
      { key: 'D', text: 'To make all competing products illegal' }
    ],
    correctOption: 'B',
    explanation: 'Open standards and shared common infrastructure lower R&D overhead for everyone while letting businesses focus on proprietary domain differentiation.'
  },
  {
    id: 'q18',
    roundNumber: 4,
    roundTitle: 'Round 4 — Advanced & Expert Thinking',
    questionNumber: 18,
    questionText: 'A project accepts a contribution that fixes a bug but makes the software significantly slower. What is the best engineering response?',
    tag: 'Engineering Tradeoffs',
    options: [
      { key: 'A', text: 'Accept it because correctness is the only consideration' },
      { key: 'B', text: 'Reject every performance-related change' },
      { key: 'C', text: 'Evaluate correctness, performance impact, benchmarks, and trade-offs before deciding or requesting revisions' },
      { key: 'D', text: 'Merge it because more code always means better software' }
    ],
    correctOption: 'C',
    explanation: 'Engineering decisions balance correctness against algorithmic complexity and benchmarks, often prompting an optimized revision.'
  },
  {
    id: 'q19',
    roundNumber: 4,
    roundTitle: 'Round 4 — Advanced & Expert Thinking',
    questionNumber: 19,
    questionText: 'A critical open-source project depends on one maintainer, who suddenly becomes unavailable. What is the biggest underlying risk?',
    tag: 'Sustainability Risk',
    options: [
      { key: 'A', text: 'The software will immediately stop working on every computer' },
      { key: 'B', text: 'A single point of failure in project knowledge, review, releases, and security response' },
      { key: 'C', text: 'The programming language will stop being supported' },
      { key: 'D', text: 'The source code will automatically become private' }
    ],
    correctOption: 'B',
    explanation: 'A "bus factor of one" exposes projects to unaddressed security vulnerabilities, lack of release management, and loss of institutional knowledge.'
  },
  {
    id: 'q20',
    roundNumber: 4,
    roundTitle: 'Round 4 — Advanced & Expert Thinking',
    questionNumber: 20,
    questionText: 'A company uses an open-source dependency that becomes unmaintained. Which strategy best reduces long-term risk?',
    tag: 'Dependency Governance',
    options: [
      { key: 'A', text: 'Continue using it indefinitely because the source code is available' },
      { key: 'B', text: 'Immediately rewrite the entire application without analysis' },
      { key: 'C', text: 'Assess exposure and alternatives, monitor vulnerabilities, pin and audit versions, and plan to maintain, replace, or fork it if necessary' },
      { key: 'D', text: 'Assume that GitHub will take over maintenance' }
    ],
    correctOption: 'C',
    explanation: 'Prudent dependency management includes vulnerability audits, version pinning, evaluating maintained forks or replacements, and contributing upstream.'
  }
];

export function getQuestionsBySelection(selection: RoundSelection): Question[] {
  if (selection === 'all') {
    return [...RAPID_FIRE_QUESTIONS];
  }
  return RAPID_FIRE_QUESTIONS.filter((q) => q.roundNumber === selection);
}
