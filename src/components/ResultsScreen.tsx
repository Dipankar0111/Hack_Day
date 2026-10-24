import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Home, Share2, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import type { PlayerAnswer } from '../types';
import { getPlayerTitle } from '../data/challenges';
import { sound } from '../utils/sound';

interface ResultsScreenProps {
  score: number;
  answers: PlayerAnswer[];
  maxStreak: number;
  playerName: string;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  answers,
  maxStreak,
  playerName,
  onPlayAgain,
  onBackToHome
}) => {
  const [copied, setCopied] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const totalQuestions = answers.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const accuracyPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const titleInfo = getPlayerTitle(accuracyPercent);
  const totalSpeedBonuses = answers.filter((a) => a.speedBonus).length;

  useEffect(() => {
    // Play celebratory sound
    sound.playVictory();

    // Trigger confetti if decent score
    if (accuracyPercent >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00ff66', '#a855f7', '#ff2a5f', '#fbbf24']
        });
      } catch {
        // Fallback if canvas unsupported
      }
    }
  }, [accuracyPercent]);

  const handleShare = () => {
    sound.playClick();
    const nameStr = playerName.trim() ? `${playerName}'s` : 'My';
    const textToCopy = `🧢 HACK OR CAP? Quiz Result\n` +
      `👤 ${nameStr} Score: ${score} pts\n` +
      `🎯 Accuracy: ${accuracyPercent}% (${correctCount}/${totalQuestions})\n` +
      `🔥 Max Streak: ${maxStreak}\n` +
      `🏆 Title: ${titleInfo.title}\n\n` +
      `Played at the FOSSASIA & Eventyay Booth! 🚀`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback
    });
  };

  return (
    <div style={{
      maxWidth: '680px',
      margin: '0 auto',
      width: '100%',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      alignItems: 'center'
    }} className="animate-pop">

      {/* Main Results Hero Card */}
      <div className="glass-panel glass-panel-glow" style={{
        padding: '32px 24px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        position: 'relative'
      }}>
        {/* Title Trophy & Icon */}
        <div style={{
          fontSize: '3rem',
          lineHeight: 1,
          filter: 'drop-shadow(0 0 16px rgba(168, 85, 247, 0.4))'
        }}>
          {titleInfo.icon}
        </div>

        {/* Player Title */}
        <div>
          <div style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {playerName ? `${playerName}'s Official Rank` : 'Your Official Rank'}
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            color: '#fff',
            marginTop: '4px',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
          }}>
            {titleInfo.title}
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            marginTop: '6px',
            maxWidth: '460px'
          }}>
            {titleInfo.subtitle}
          </p>
        </div>

        {/* Big Score Display */}
        <div style={{
          background: 'rgba(5, 8, 15, 0.7)',
          padding: '16px 36px',
          borderRadius: '16px',
          border: '1px solid var(--border-subtle)',
          margin: '8px 0'
        }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
            Final Game Score
          </div>
          <div style={{
            fontSize: '3rem',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            color: 'var(--neon-yellow)',
            lineHeight: 1.1,
            textShadow: '0 0 25px rgba(251, 191, 36, 0.4)'
          }}>
            {score} <span style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>PTS</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          width: '100%'
        }}>
          {/* Accuracy */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '12px',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Accuracy
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: accuracyPercent >= 60 ? 'var(--neon-green)' : 'var(--neon-red)' }}>
              {accuracyPercent}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {correctCount} / {totalQuestions} Correct
            </div>
          </div>

          {/* Longest Streak */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '12px',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Max Streak
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#ff9933' }}>
              {maxStreak} 🔥
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              In a Row
            </div>
          </div>

          {/* Speed Bonuses */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '12px',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Speed Hits
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
              {totalSpeedBonuses} ⚡
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Under 3s
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%'
      }}>
        <button
          onClick={() => {
            sound.playClick();
            onPlayAgain();
          }}
          className="btn-primary-action"
          style={{
            padding: '16px 24px',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <RotateCcw size={22} />
          PLAY AGAIN
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <button
            onClick={() => {
              sound.playClick();
              onBackToHome();
            }}
            className="btn-cyber"
            style={{ padding: '14px', fontSize: '1rem' }}
          >
            <Home size={18} />
            BACK TO HOME
          </button>

          <button
            onClick={handleShare}
            className="btn-cyber"
            style={{
              padding: '14px',
              fontSize: '1rem',
              borderColor: copied ? 'var(--neon-green)' : 'rgba(168, 85, 247, 0.4)',
              color: copied ? 'var(--neon-green)' : '#fff'
            }}
          >
            {copied ? <Check size={18} /> : <Share2 size={18} />}
            {copied ? 'COPIED TO CLIPBOARD!' : 'SHARE RESULT'}
          </button>
        </div>
      </div>

      {/* Question Breakdown Accordion */}
      <div className="glass-panel" style={{ width: '100%', overflow: 'hidden' }}>
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setShowReview(!showReview);
          }}
          style={{
            width: '100%',
            padding: '14px 20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: 700,
            fontFamily: 'var(--font-display)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--neon-purple)" />
            Review All {totalQuestions} Questions & Explanations
          </div>
          {showReview ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showReview && (
          <div style={{
            padding: '0 16px 16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '380px',
            overflowY: 'auto'
          }}>
            {answers.map((ans, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(5, 8, 15, 0.6)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  borderLeft: ans.isCorrect ? '4px solid var(--neon-green)' : '4px solid var(--neon-red)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    Q{ans.questionNumber} • Question {idx + 1}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: ans.isCorrect ? 'var(--neon-green)' : 'var(--neon-red)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {ans.isCorrect ? '✓ CORRECT (+100)' : '✗ INCORRECT'}
                  </span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>
                  "{ans.questionText}"
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', gap: '12px' }}>
                  <span>Your Answer: <strong style={{ color: ans.isCorrect ? 'var(--neon-green)' : 'var(--neon-red)' }}>{ans.userAnswer ? `Option ${ans.userAnswer}` : 'Timed Out'}</strong></span>
                  <span>•</span>
                  <span>Correct: <strong style={{ color: 'var(--neon-green)' }}>Option {ans.correctOption}</strong></span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {ans.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
