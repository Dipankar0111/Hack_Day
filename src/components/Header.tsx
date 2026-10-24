import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, RotateCcw, MonitorPlay, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  boothMode: boolean;
  onToggleBoothMode: () => void;
  onResetGame: () => void;
  isGameActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  boothMode,
  onToggleBoothMode,
  onResetGame,
  isGameActive
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = async () => {
    sound.playClick();
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen not supported or blocked
    }
  };

  return (
    <header className="w-full max-w-5xl mx-auto px-4 py-3 flex items-center justify-between z-20 border-b border-white/5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Brand & Booth Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div 
          onClick={onResetGame}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          title="Click to return home"
        >
          <div style={{ 
            fontSize: '1.6rem', 
            background: 'linear-gradient(135deg, #a855f7 0%, #00ff66 100%)',
            borderRadius: '10px',
            padding: '2px 8px',
            boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
          }}>
            🧢
          </div>
          <div>
            <div style={{ 
              fontWeight: 900, 
              fontSize: '1.25rem', 
              letterSpacing: '-0.02em', 
              fontFamily: 'var(--font-display)',
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px' 
            }}>
              <span style={{ color: 'var(--neon-green)' }}>HACK</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>OR</span>
              <span style={{ color: 'var(--neon-red)' }}>CAP?</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              FOSSASIA & Eventyay Booth
            </div>
          </div>
        </div>

        {boothMode && (
          <span 
            className="badge-arcade"
            style={{ 
              background: 'rgba(168, 85, 247, 0.2)', 
              color: '#c084fc', 
              border: '1px solid rgba(168, 85, 247, 0.4)',
              fontSize: '0.7rem',
              padding: '3px 8px'
            }}
          >
            <MonitorPlay size={12} /> BOOTH MODE
          </span>
        )}
      </div>

      {/* Header controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Booth Mode toggle */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleBoothMode();
          }}
          className="btn-cyber"
          style={{ padding: '8px 12px', fontSize: '0.8rem', background: boothMode ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.05)' }}
          title={boothMode ? "Disable Booth Mode" : "Enable Booth Mode for Public Display"}
        >
          <Sparkles size={14} color={boothMode ? "var(--neon-green)" : "var(--text-muted)"} />
          <span style={{ display: 'none', mdDisplay: 'inline' } as React.CSSProperties} className="btn-text">
            {boothMode ? "Booth ON" : "Booth Mode"}
          </span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={() => {
            onToggleSound();
          }}
          className="btn-cyber"
          style={{ padding: '8px 12px', fontSize: '0.8rem' }}
          title={soundEnabled ? "Mute Arcade SFX" : "Unmute Arcade SFX"}
          aria-label="Toggle Sound"
        >
          {soundEnabled ? <Volume2 size={16} color="var(--neon-green)" /> : <VolumeX size={16} color="var(--neon-red)" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="btn-cyber"
          style={{ padding: '8px 12px', fontSize: '0.8rem' }}
          title="Toggle Fullscreen"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>

        {/* Quick Reset if in active game */}
        {isGameActive && (
          <button
            onClick={() => {
              sound.playClick();
              if (window.confirm("Reset current game and return to start?")) {
                onResetGame();
              }
            }}
            className="btn-cyber"
            style={{ padding: '8px 12px', fontSize: '0.8rem', color: 'var(--text-dim)' }}
            title="Reset Game"
          >
            <RotateCcw size={16} />
          </button>
        )}
      </div>
    </header>
  );
};
