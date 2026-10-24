import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { ResultsScreen } from './components/ResultsScreen';
import type { GameSettings, ScreenState, Question, PlayerAnswer } from './types';
import { getQuestionsBySelection } from './data/questions';
import { sound } from './utils/sound';

export const App: React.FC = () => {
  const [settings, setSettings] = useState<GameSettings>({
    selectedRound: 'all',
    playerName: '',
    soundEnabled: true,
    boothMode: false
  });

  const [screen, setScreen] = useState<ScreenState>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [answers, setAnswers] = useState<PlayerAnswer[]>([]);

  // Keep sound engine in sync with settings
  useEffect(() => {
    sound.setEnabled(settings.soundEnabled);
  }, [settings.soundEnabled]);

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const startGame = () => {
    const selected = getQuestionsBySelection(settings.selectedRound);
    setQuestions(selected);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswers([]);
    setScreen('playing');
  };

  const handleAnswerSubmitted = (answer: PlayerAnswer) => {
    setAnswers((prev) => [...prev, answer]);
    setScore((prev) => prev + answer.pointsEarned);

    if (answer.isCorrect) {
      setStreak((prevStreak) => {
        const nextStreak = prevStreak + 1;
        setMaxStreak((prevMax) => Math.max(prevMax, nextStreak));
        return nextStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreen('results');
    }
  };

  const handlePlayAgain = () => {
    startGame();
  };

  const handleBackToHome = () => {
    setScreen('start');
  };

  const handleResetGame = () => {
    setScreen('start');
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswers([]);
  };

  return (
    <div className="arcade-bg">
      <Header
        soundEnabled={settings.soundEnabled}
        onToggleSound={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
        boothMode={settings.boothMode}
        onToggleBoothMode={() => updateSettings({ boothMode: !settings.boothMode })}
        onResetGame={handleResetGame}
        isGameActive={screen === 'playing'}
      />

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 16px 32px 16px'
      }}>
        {screen === 'start' && (
          <StartScreen
            settings={settings}
            onUpdateSettings={updateSettings}
            onStartGame={startGame}
          />
        )}

        {screen === 'playing' && questions.length > 0 && (
          <GameScreen
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            score={score}
            streak={streak}
            onAnswerSubmitted={handleAnswerSubmitted}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            score={score}
            answers={answers}
            maxStreak={maxStreak}
            playerName={settings.playerName}
            onPlayAgain={handlePlayAgain}
            onBackToHome={handleBackToHome}
          />
        )}
      </main>

      {/* Footer Booth Info */}
      <footer style={{
        textAlign: 'center',
        padding: '16px',
        fontSize: '0.8rem',
        color: 'var(--text-dim)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontFamily: 'var(--font-mono)'
      }}>
        <div>
          Built with 💚 for the <strong style={{ color: 'var(--text-main)' }}>FOSSASIA</strong> & <strong style={{ color: 'var(--text-main)' }}>Eventyay</strong> Community Booth
        </div>
        <div style={{ marginTop: '4px', fontSize: '0.72rem' }}>
          Open Source Rapid Fire • 10s Timer • 4 Rounds • 100% Offline Ready
        </div>
      </footer>
    </div>
  );
};

export default App;
