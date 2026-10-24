import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Flame, Clock, Zap, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import type { Question, PlayerAnswer, AnswerResult, OptionKey } from '../types';
import { getRandomChallenge, getRandomReaction } from '../data/challenges';
import { sound } from '../utils/sound';

interface GameScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  streak: number;
  onAnswerSubmitted: (answer: PlayerAnswer) => void;
  onNextQuestion: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  questions,
  currentQuestionIndex,
  score,
  streak,
  onAnswerSubmitted,
  onNextQuestion
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isAnswerLocked, setIsAnswerLocked] = useState<boolean>(false);
  const [selectedChoice, setSelectedChoice] = useState<OptionKey | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState<number>(4);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnsweredRef = useRef<boolean>(false);

  // Initialize or reset question state
  useEffect(() => {
    setTimeLeft(10);
    setIsAnswerLocked(false);
    setSelectedChoice(null);
    setResult(null);
    setAutoAdvanceCountdown(4);
    hasAnsweredRef.current = false;

    // Start 10s countdown timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        if (prev <= 4) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [currentQuestionIndex]);

  // Handle Answer Selection
  const handleAnswer = useCallback((choice: OptionKey | null, isTimeout: boolean = false) => {
    if (hasAnsweredRef.current || isAnswerLocked) return;
    hasAnsweredRef.current = true;
    setIsAnswerLocked(true);
    setSelectedChoice(choice);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const isCorrect = !isTimeout && choice === currentQuestion.correctOption;
    const remainingTime = isTimeout ? 0 : timeLeft;

    let pointsEarned = 0;
    let speedBonus = false;
    let streakBonus = false;

    if (isCorrect) {
      pointsEarned += 100;
      // Speed bonus: answered within first 3 seconds (remaining time >= 7s)
      if (remainingTime >= 7) {
        speedBonus = true;
        pointsEarned += 25;
      }
      // Streak bonus: 3 or more consecutive
      if (streak + 1 >= 3) {
        streakBonus = true;
        pointsEarned += 50;
      }

      if (streakBonus) {
        sound.playStreak();
      } else {
        sound.playCorrect();
      }
    } else {
      sound.playWrong();
    }

    const reactionMsg = getRandomReaction(isCorrect);
    const challenge = !isCorrect ? getRandomChallenge() : undefined;

    const correctOpt = currentQuestion.options.find((o) => o.key === currentQuestion.correctOption);
    const selectedOpt = currentQuestion.options.find((o) => o.key === choice);

    const answerResult: AnswerResult = {
      isCorrect,
      pointsEarned,
      speedBonus,
      streakBonus,
      reactionMsg,
      explanation: currentQuestion.explanation,
      correctOptionText: `${currentQuestion.correctOption}: ${correctOpt?.text || ''}`,
      selectedOptionText: selectedOpt ? `${selectedOpt.key}: ${selectedOpt.text}` : undefined,
      challenge
    };

    setResult(answerResult);

    onAnswerSubmitted({
      questionId: currentQuestion.id,
      questionNumber: currentQuestion.questionNumber,
      questionText: currentQuestion.questionText,
      userAnswer: choice,
      correctOption: currentQuestion.correctOption,
      isCorrect,
      timeRemaining: remainingTime,
      pointsEarned,
      speedBonus,
      streakBonus,
      explanation: currentQuestion.explanation
    });

    // Start 4-second auto-advance
    let countdown = 4;
    setAutoAdvanceCountdown(countdown);
    autoAdvanceRef.current = setInterval(() => {
      countdown -= 1;
      setAutoAdvanceCountdown(countdown);
      if (countdown <= 0) {
        clearInterval(autoAdvanceRef.current!);
        onNextQuestion();
      }
    }, 1000);

  }, [isAnswerLocked, timeLeft, currentQuestion, streak, onAnswerSubmitted, onNextQuestion]);

  // Handle Timeout
  useEffect(() => {
    if (timeLeft === 0 && !hasAnsweredRef.current && !isAnswerLocked) {
      handleAnswer(null, true);
    }
  }, [timeLeft, isAnswerLocked, handleAnswer]);

  // Keyboard navigation: A, B, C, D or 1, 2, 3, 4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;

      if (!isAnswerLocked) {
        const key = e.key.toUpperCase();
        if (key === 'A' || key === '1') handleAnswer('A');
        else if (key === 'B' || key === '2') handleAnswer('B');
        else if (key === 'C' || key === '3') handleAnswer('C');
        else if (key === 'D' || key === '4') handleAnswer('D');
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
          onNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswerLocked, handleAnswer, onNextQuestion]);

  const handleManualNext = () => {
    sound.playClick();
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    onNextQuestion();
  };

  const timerColor = timeLeft > 5 ? 'var(--neon-green)' : timeLeft > 2 ? 'var(--neon-yellow)' : 'var(--neon-red)';
  const timerPercentage = (timeLeft / 10) * 100;

  return (
    <div style={{
      maxWidth: '820px',
      margin: '0 auto',
      width: '100%',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }} className="animate-pop">

      {/* Top HUD: Round Info, Question Index, Score, Streak, Timer */}
      <div className="glass-panel" style={{
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Round & Question Indicator */}
        <div>
          <div style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--neon-purple)',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            {currentQuestion.roundTitle}
          </div>
          <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
            <span style={{ color: 'var(--text-main)' }}>Q{currentQuestion.questionNumber}</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}> ({currentQuestionIndex + 1}/{totalQuestions})</span>
          </div>
        </div>

        {/* Live Score */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
            Score
          </div>
          <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--neon-yellow)' }}>
            {score}
          </div>
        </div>

        {/* Streak */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '12px',
            background: streak >= 3 ? 'rgba(255, 100, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: streak >= 3 ? '1px solid #ff7700' : '1px solid var(--border-subtle)',
            color: streak >= 3 ? '#ff9933' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.88rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <Flame size={16} color={streak >= 3 ? '#ff6600' : 'currentColor'} />
            <span>{streak} STREAK</span>
            {streak >= 3 && <span style={{ fontSize: '0.7rem', color: '#ffcc00' }}>+50</span>}
          </div>
        </div>

        {/* Timer Display */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '12px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: `1.5px solid ${timerColor}`,
            boxShadow: timeLeft <= 3 ? `0 0 16px ${timerColor}` : 'none',
            transition: 'all 0.25s ease'
          }}>
            <Clock size={16} color={timerColor} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: timerColor,
              minWidth: '32px',
              textAlign: 'right'
            }}>
              {timeLeft}s
            </span>
          </div>
        </div>
      </div>

      {/* Timer Progress Bar */}
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '9999px',
        overflow: 'hidden',
        marginTop: '-8px'
      }}>
        <div style={{
          width: `${timerPercentage}%`,
          height: '100%',
          background: timerColor,
          transition: 'width 1s linear, background 0.3s ease',
          boxShadow: `0 0 10px ${timerColor}`
        }} />
      </div>

      {/* Main Question Card */}
      <div className="glass-panel" style={{
        padding: '24px 22px',
        minHeight: '130px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        border: '1px solid rgba(168, 85, 247, 0.25)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Category / Tag */}
        {currentQuestion.tag && (
          <div style={{ marginBottom: '10px' }}>
            <span className="badge-arcade" style={{
              background: 'rgba(168, 85, 247, 0.15)',
              color: '#d8b4fe',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              fontSize: '0.75rem',
              padding: '3px 10px'
            }}>
              {currentQuestion.tag}
            </span>
          </div>
        )}

        {/* Question Text */}
        <h2 style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
          fontWeight: 700,
          lineHeight: 1.35,
          color: 'var(--text-main)',
          letterSpacing: '-0.01em'
        }}>
          {currentQuestion.questionText}
        </h2>
      </div>

      {/* 4 Options (A, B, C, D) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {currentQuestion.options.map((opt) => {
          const isSelected = selectedChoice === opt.key;
          const isCorrectChoice = opt.key === currentQuestion.correctOption;

          let cardClass = 'option-card';
          if (isAnswerLocked) {
            if (isCorrectChoice) {
              cardClass += ' option-card-correct';
            } else if (isSelected) {
              cardClass += ' option-card-wrong';
            } else {
              cardClass += ' option-card-dimmed';
            }
          }

          return (
            <button
              key={opt.key}
              type="button"
              disabled={isAnswerLocked}
              onClick={() => handleAnswer(opt.key)}
              className={cardClass}
            >
              <div className="letter-badge">
                {opt.key}
              </div>
              <div style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                fontWeight: 600,
                lineHeight: 1.4,
                flex: 1
              }}>
                {opt.text}
              </div>
              <span className="key-hint" style={{ color: 'var(--text-muted)' }}>
                {opt.key}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation Card */}
      {isAnswerLocked && result && (
        <div className="glass-panel animate-pop" style={{
          padding: '20px 22px',
          borderLeft: result.isCorrect ? '6px solid var(--neon-green)' : '6px solid var(--neon-red)',
          background: result.isCorrect ? 'rgba(0, 255, 102, 0.05)' : 'rgba(255, 42, 95, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Reaction Header & Points */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {result.isCorrect ? (
                <CheckCircle2 size={26} color="var(--neon-green)" />
              ) : (
                <XCircle size={26} color="var(--neon-red)" />
              )}
              <div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: result.isCorrect ? 'var(--neon-green)' : 'var(--neon-red)'
                }}>
                  {result.reactionMsg}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {result.isCorrect ? 'Spot on! Correct answer.' : selectedChoice === null ? 'Time Expired!' : 'Incorrect option chosen.'}
                </div>
              </div>
            </div>

            {/* Earned Points Badges */}
            {result.isCorrect && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge-arcade" style={{ background: 'rgba(0, 255, 102, 0.15)', color: 'var(--neon-green)', border: '1px solid var(--neon-green)' }}>
                  +{result.pointsEarned} PTS
                </span>
                {result.speedBonus && (
                  <span className="badge-arcade" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: '1px solid #fbbf24' }}>
                    <Zap size={12} /> SPEED +25
                  </span>
                )}
                {result.streakBonus && (
                  <span className="badge-arcade" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', border: '1px solid #f97316' }}>
                    <Flame size={12} /> STREAK +50
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Correct answer display & Explanation */}
          <div style={{
            fontSize: '0.95rem',
            lineHeight: 1.45,
            color: 'var(--text-main)',
            background: 'rgba(0, 0, 0, 0.35)',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {!result.isCorrect && (
              <div style={{ marginBottom: '6px', color: 'var(--neon-green)', fontWeight: 700 }}>
                Correct Answer: {result.correctOptionText}
              </div>
            )}
            <div>{result.explanation}</div>
          </div>

          {/* Funny Wrong-Answer Challenge: "DEFEND YOUR CAP! 😂" */}
          {!result.isCorrect && result.challenge && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 42, 95, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              border: '1px dashed rgba(255, 42, 95, 0.4)',
              borderRadius: '14px',
              padding: '12px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                color: '#ff7092',
                textTransform: 'uppercase'
              }}>
                <Sparkles size={14} /> DEFEND YOUR CAP! 😂
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: '#fff',
                fontWeight: 600,
                fontStyle: 'italic'
              }}>
                "{result.challenge}"
              </p>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                (Booth crowd challenge! Convince everyone or skip to next)
              </div>
            </div>
          )}

          {/* Auto advance countdown and Manual Next Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '2px'
          }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Next question in <strong>{autoAdvanceCountdown}s</strong>...
            </div>

            <button
              type="button"
              onClick={handleManualNext}
              className="btn-primary-action"
              style={{
                padding: '10px 22px',
                fontSize: '0.98rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              NEXT QUESTION
              <ArrowRight size={18} />
              <span className="key-hint" style={{ color: '#fff' }}>[ENTER]</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
