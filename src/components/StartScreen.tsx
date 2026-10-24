import React from 'react';
import { Play, MonitorPlay, Sparkles, Zap } from 'lucide-react';
import type { GameSettings, RoundSelection } from '../types';
import { sound } from '../utils/sound';

interface StartScreenProps {
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onStartGame: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  settings,
  onUpdateSettings,
  onStartGame,
}) => {
  const roundOptions: { id: RoundSelection; label: string; desc: string; icon: string; count: string; badge?: string }[] = [
    { id: 'all', label: '🔥 All 20 Questions', desc: '5 Easy Warmup + 15 Hard Mindbenders', icon: '🏆', count: '20 Qs', badge: 'Full Quiz' },
    { id: 1, label: 'Round 1 — Easy Warmup', desc: 'Pricing, Local Git, Forks & Copyright Traps', icon: '🌱', count: 'Q1–Q5', badge: '5 Easy' },
    { id: 2, label: 'Round 2 — Git & GitHub Traps', desc: 'Reflog, Fast-Forwards, Secrets & Public Forks', icon: '🐙', count: 'Q6–Q10', badge: '5 Hard' },
    { id: 3, label: 'Round 3 — Licensing & Supply Chain', desc: 'MIT vs GPL, OSI Criteria & npm CI Traps', icon: '🛡️', count: 'Q11–Q15', badge: '5 Hard' },
    { id: 4, label: 'Round 4 — Security & Architecture', desc: '100% Coverage Myths, Typosquatting & Bus Factor', icon: '🧠', count: 'Q16–Q20', badge: '5 Hard' },
  ];

  const handleStart = () => {
    sound.playClick();
    onStartGame();
  };

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
      width: '100%',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      alignItems: 'center'
    }} className="animate-pop">
      
      {/* Hero Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px',
        borderRadius: '9999px',
        background: 'rgba(168, 85, 247, 0.15)',
        border: '1px solid rgba(168, 85, 247, 0.35)',
        fontSize: '0.82rem',
        fontWeight: 700,
        color: '#c084fc',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
        <Sparkles size={14} /> FOSSASIA & Eventyay Booth Rapid Fire
      </div>

      {/* Main Title Hero */}
      <div style={{ textAlign: 'center' }}>
        <div className="animate-float" style={{ fontSize: '3.2rem', marginBottom: '6px' }}>
          ⚡🧢
        </div>
        <h1 style={{
          fontSize: 'clamp(2.3rem, 5.5vw, 3.6rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.03em',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
        }}>
          <span style={{ color: 'var(--neon-green)' }}>HACK</span>{' '}
          <span style={{ color: 'var(--text-muted)', fontSize: '0.75em' }}>OR</span>{' '}
          <span style={{ color: 'var(--neon-red)' }}>CAP?</span>
          <div style={{ fontSize: '0.45em', color: 'var(--neon-yellow)', letterSpacing: '0.12em', marginTop: '6px' }}>
            RAPID FIRE EDITION
          </div>
        </h1>
        <p style={{
          fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
          fontWeight: 600,
          color: 'var(--text-main)',
          marginTop: '10px',
          letterSpacing: '-0.01em'
        }}>
          10 seconds per question. Can you beat the open-source clock?
        </p>
      </div>

      {/* Rules Banner */}
      <div className="glass-panel" style={{
        padding: '16px 22px',
        width: '100%',
        textAlign: 'center',
        borderLeft: '4px solid var(--neon-yellow)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{ 
          fontSize: '0.8rem', 
          fontFamily: 'var(--font-mono)', 
          color: 'var(--neon-yellow)', 
          textTransform: 'uppercase', 
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <Zap size={14} /> RAPID FIRE RULES
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 600 }}>
          Each question has a strict <strong style={{ color: 'var(--neon-yellow)' }}>10-second timer</strong>! Pick the best answer (<strong style={{ color: 'var(--neon-purple)' }}>A, B, C, or D</strong>).
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '16px', 
          marginTop: '6px', 
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap'
        }}>
          <span>⏱️ 10s Per Question</span>
          <span>•</span>
          <span>⚡ +25 Speed Bonus (&lt;3s)</span>
          <span>•</span>
          <span>🔥 +50 Streak Bonus (3 in a row)</span>
        </div>
      </div>

      {/* Configuration Card */}
      <div className="glass-panel glass-panel-glow" style={{
        padding: '22px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>

        {/* Optional Nickname Field */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            marginBottom: '8px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            Player Nickname <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. CodeNinja or BoothVisitor"
            value={settings.playerName}
            onChange={(e) => onUpdateSettings({ playerName: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleStart();
            }}
            maxLength={20}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(5, 8, 15, 0.8)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '1rem',
              fontFamily: 'var(--font-main)',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--neon-purple)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
          />
        </div>

        {/* Round Selector */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            marginBottom: '10px',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            Select Rapid Fire Round
          </label>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {roundOptions.map((opt) => {
              const isSelected = settings.selectedRound === opt.id;
              return (
                <button
                  key={String(opt.id)}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onUpdateSettings({ selectedRound: opt.id });
                  }}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: isSelected 
                      ? '2px solid var(--neon-purple)' 
                      : '1px solid var(--border-subtle)',
                    background: isSelected 
                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(99, 102, 241, 0.2) 100%)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.4rem' }}>{opt.icon}</span>
                    <div>
                      <div style={{
                        fontSize: '0.98rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        color: isSelected ? '#ffffff' : 'var(--text-main)'
                      }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: isSelected ? '#d8b4fe' : 'var(--text-dim)' }}>
                        {opt.desc}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {opt.badge && (
                      <span style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: opt.badge.includes('Easy') 
                          ? 'rgba(0, 255, 102, 0.15)' 
                          : opt.badge.includes('Hard') 
                            ? 'rgba(255, 42, 95, 0.15)' 
                            : 'rgba(168, 85, 247, 0.15)',
                        border: opt.badge.includes('Easy')
                          ? '1px solid rgba(0, 255, 102, 0.4)'
                          : opt.badge.includes('Hard')
                            ? '1px solid rgba(255, 42, 95, 0.4)'
                            : '1px solid rgba(168, 85, 247, 0.4)',
                        color: opt.badge.includes('Easy')
                          ? 'var(--neon-green)'
                          : opt.badge.includes('Hard')
                            ? '#ff6b8b'
                            : '#d8b4fe'
                      }}>
                        {opt.badge}
                      </span>
                    )}
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: isSelected ? 'var(--neon-purple)' : 'rgba(255, 255, 255, 0.06)',
                      color: '#fff'
                    }}>
                      {opt.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Booth Mode quick toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MonitorPlay size={20} color={settings.boothMode ? "var(--neon-green)" : "var(--text-dim)"} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Booth Mode (Kiosk)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                Instant replay, full-screen ready, clean kiosk state
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onUpdateSettings({ boothMode: !settings.boothMode });
            }}
            style={{
              width: '48px',
              height: '26px',
              borderRadius: '9999px',
              background: settings.boothMode ? 'var(--neon-green)' : 'rgba(255, 255, 255, 0.15)',
              position: 'relative',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#0d1117',
              position: 'absolute',
              top: '3px',
              left: settings.boothMode ? '25px' : '3px',
              transition: 'left 0.2s'
            }} />
          </button>
        </div>

      </div>

      {/* Start Button */}
      <button
        onClick={handleStart}
        className="btn-primary-action"
        style={{
          width: '100%',
          padding: '18px 32px',
          fontSize: '1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          letterSpacing: '0.02em'
        }}
      >
        <Play size={26} fill="white" />
        START RAPID FIRE
        <span className="key-hint" style={{ color: '#fff' }}>[ENTER]</span>
      </button>

      {/* Keyboard hints */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontSize: '0.8rem',
        color: 'var(--text-dim)',
        fontFamily: 'var(--font-mono)',
        flexWrap: 'wrap'
      }}>
        <span>Keys: <strong style={{ color: 'var(--neon-purple)' }}>A, B, C, D</strong> (or <strong style={{ color: 'var(--neon-purple)' }}>1, 2, 3, 4</strong>)</span>
        <span>•</span>
        <span><strong style={{ color: '#fff' }}>Enter</strong> to Continue</span>
      </div>

    </div>
  );
};
