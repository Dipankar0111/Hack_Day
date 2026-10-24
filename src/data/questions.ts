import type { Question, RoundSelection } from '../types';

export const RAPID_FIRE_QUESTIONS: Question[] = [
  // ==========================================
  // Round 1 — Git & GitHub Core (Questions 1–5)
  // ==========================================
  {
    id: 'q1',
    roundNumber: 1,
    roundTitle: 'Round 1 — Git & GitHub Core',
    questionNumber: 1,
    questionText: 'What is the fundamental difference between Git and GitHub?',
    tag: 'Git vs GitHub',
    options: [
      { key: 'A', text: 'Git is a remote server; GitHub is a local command-line tool' },
      { key: 'B', text: 'Git is a version control engine; GitHub is a cloud hosting platform' },
      { key: 'C', text: 'Git is a programming language; GitHub is a code compiler' },
      { key: 'D', text: 'Git is a central database; GitHub is a local desktop IDE' }
    ],
    correctOption: 'B',
    explanation: 'Git is the distributed version control system running on your machine, whereas GitHub is a web platform for hosting repositories and collaborating.'
  },
  {
    id: 'q2',
    roundNumber: 1,
    roundTitle: 'Round 1 — Git & GitHub Core',
    questionNumber: 2,
    questionText: 'What happens when you fork a repository on GitHub?',
    tag: 'GitHub Forks',
    options: [
      { key: 'A', text: 'It clones the repository directly to your local computer disk' },
      { key: 'B', text: 'It creates an independent copy under your GitHub account' },
      { key: 'C', text: 'It creates an isolated branch inside the original repository' },
      { key: 'D', text: 'It transfers maintainer ownership and permissions to you' }
    ],
    correctOption: 'B',
    explanation: 'Forking creates a personal remote copy on GitHub, allowing you to experiment or prepare pull requests without modifying upstream.'
  },
  {
    id: 'q3',
    roundNumber: 1,
    roundTitle: 'Round 1 — Git & GitHub Core',
    questionNumber: 3,
    questionText: 'Can someone contribute to open source without writing code?',
    tag: 'Community Contribution',
    options: [
      { key: 'A', text: 'No, open-source metrics count only merged code pull requests' },
      { key: 'B', text: 'Only if they purchase an official project sponsor tier' },
      { key: 'C', text: 'Yes, via documentation, bug triage, design, and beta testing' },
      { key: 'D', text: 'No, non-programmers cannot submit valid contributions' }
    ],
    correctOption: 'C',
    explanation: 'Open source relies heavily on non-code contributions including technical writing, reproducible bug reports, localization, and testing.'
  },
  {
    id: 'q4',
    roundNumber: 1,
    roundTitle: 'Round 1 — Git & GitHub Core',
    questionNumber: 4,
    questionText: 'What is the key difference between public and private repositories?',
    tag: 'Repository Visibility',
    options: [
      { key: 'A', text: 'Private repositories disable Git commit history tracking' },
      { key: 'B', text: 'Public repos allow anyone to push commits without review' },
      { key: 'C', text: 'Public repos are visible to everyone; private repos restrict access' },
      { key: 'D', text: 'Private repositories cannot include open-source license files' }
    ],
    correctOption: 'C',
    explanation: 'Public repositories are viewable and clonable by anyone on the internet, while private repositories restrict access strictly to invited collaborators.'
  },
  {
    id: 'q5',
    roundNumber: 1,
    roundTitle: 'Round 1 — Git & GitHub Core',
    questionNumber: 5,
    questionText: 'What is the primary purpose of a pull request?',
    tag: 'Pull Requests',
    options: [
      { key: 'A', text: 'To download released binary packages to your machine' },
      { key: 'B', text: 'To propose, review, and merge branch changes into a target branch' },
      { key: 'C', text: 'To fetch remote commits directly into the local index' },
      { key: 'D', text: 'To permanently lock or archive an inactive branch' }
    ],
    correctOption: 'B',
    explanation: 'A pull request proposes merging changes from one branch into another, enabling discussion, code review, and automated CI test checks.'
  },

  // ==========================================
  // Round 2 — Open Source & Workflows (Questions 6–10)
  // ==========================================
  {
    id: 'q6',
    roundNumber: 2,
    roundTitle: 'Round 2 — Open Source & Workflows',
    questionNumber: 6,
    questionText: 'What occurs when two developers modify the exact same line of code?',
    tag: 'Merge Conflicts',
    options: [
      { key: 'A', text: 'Git halts merging and flags a conflict for manual resolution' },
      { key: 'B', text: 'Git automatically chooses the change with the newer timestamp' },
      { key: 'C', text: 'Git permanently deletes both modified commits to prevent corruption' },
      { key: 'D', text: 'Git silently overwrites the target branch with incoming changes' }
    ],
    correctOption: 'A',
    explanation: 'When competing changes modify identical lines, Git cannot determine author intent automatically and creates a merge conflict that requires human resolution.'
  },
  {
    id: 'q7',
    roundNumber: 2,
    roundTitle: 'Round 2 — Open Source & Workflows',
    questionNumber: 7,
    questionText: 'What is the primary purpose of a README.md file?',
    tag: 'Documentation',
    options: [
      { key: 'A', text: 'To configure compiler optimization and production flags' },
      { key: 'B', text: 'To explain project purpose, setup steps, and usage guidelines' },
      { key: 'C', text: 'To store encrypted repository access tokens and secrets' },
      { key: 'D', text: 'To index internal Git object database tree hashes' }
    ],
    correctOption: 'B',
    explanation: 'README.md is the entry point of a project, orienting users and contributors with installation steps, architecture overview, and examples.'
  },
  {
    id: 'q8',
    roundNumber: 2,
    roundTitle: 'Round 2 — Open Source & Workflows',
    questionNumber: 8,
    questionText: 'Why do open-source projects require licenses such as MIT or GPL?',
    tag: 'Software Licensing',
    options: [
      { key: 'A', text: 'To prevent downstream developers from ever viewing source code' },
      { key: 'B', text: 'To define legal permissions and terms for using, modifying, and sharing code' },
      { key: 'C', text: 'To legally certify that the codebase contains zero security vulnerabilities' },
      { key: 'D', text: 'To require that all derivative projects must be proprietary' }
    ],
    correctOption: 'B',
    explanation: 'By default, software is copyright "all rights reserved". Open licenses explicitly grant legal permissions to inspect, modify, and distribute the code.'
  },
  {
    id: 'q9',
    roundNumber: 2,
    roundTitle: 'Round 2 — Open Source & Workflows',
    questionNumber: 9,
    questionText: 'What is the difference between git clone and downloading a ZIP file?',
    tag: 'Git Clone vs ZIP',
    options: [
      { key: 'A', text: 'Both always contain full .git commit history and remote tracking' },
      { key: 'B', text: 'Clone preserves full Git history and remotes; ZIP provides only files without .git' },
      { key: 'C', text: 'Downloading a ZIP allows pushing commits directly back to GitHub' },
      { key: 'D', text: 'Cloning only downloads files without preserving commit history' }
    ],
    correctOption: 'B',
    explanation: 'Cloning copies the entire repository including `.git` history, branches, and remote links. A ZIP download is merely a snapshot of current files without Git history.'
  },
  {
    id: 'q10',
    roundNumber: 2,
    roundTitle: 'Round 2 — Open Source & Workflows',
    questionNumber: 10,
    questionText: 'What is the best workflow when discovering a bug in an open-source project?',
    tag: 'Bug Reporting & Workflow',
    options: [
      { key: 'A', text: 'Immediately force-push a hotfix directly to upstream main' },
      { key: 'B', text: 'Reproduce the bug, check existing issues/guidelines, then propose and test a fix' },
      { key: 'C', text: 'Post duplicate complaints repeatedly on social media channels' },
      { key: 'D', text: 'Delete your local fork and rewrite the library from scratch' }
    ],
    correctOption: 'B',
    explanation: 'Good open-source etiquette involves verifying the bug, checking for existing issue reports, reviewing CONTRIBUTING.md, and opening an issue or tested PR.'
  }
];

export function getQuestionsBySelection(selection: RoundSelection): Question[] {
  if (selection === 'all') {
    return [...RAPID_FIRE_QUESTIONS];
  }
  return RAPID_FIRE_QUESTIONS.filter((q) => q.roundNumber === selection);
}
