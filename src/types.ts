export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  key: OptionKey;
  text: string;
}

export interface Question {
  id: string;
  roundNumber: 1 | 2 | 3 | 4;
  roundTitle: string;
  questionNumber: number; // 1 to 20
  questionText: string;
  tag?: string; // e.g. "Easy · Conceptual"
  options: QuestionOption[];
  correctOption: OptionKey;
  explanation: string;
}

export interface PlayerAnswer {
  questionId: string;
  questionNumber: number;
  questionText: string;
  userAnswer: OptionKey | null;
  correctOption: OptionKey;
  isCorrect: boolean;
  timeRemaining: number;
  pointsEarned: number;
  speedBonus: boolean;
  streakBonus: boolean;
  explanation: string;
}

export type ScreenState = 'start' | 'playing' | 'results';

export type RoundSelection = 'all' | 1 | 2 | 3 | 4;

export interface GameSettings {
  selectedRound: RoundSelection;
  playerName: string;
  soundEnabled: boolean;
  boothMode: boolean;
}

export interface AnswerResult {
  isCorrect: boolean;
  pointsEarned: number;
  speedBonus: boolean;
  streakBonus: boolean;
  reactionMsg: string;
  explanation: string;
  selectedOptionText?: string;
  correctOptionText: string;
  challenge?: string;
}
