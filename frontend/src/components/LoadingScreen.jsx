import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING VISHAL WORLD...');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const statuses = [
      'INITIALIZING VISHAL VERTEX...',
      'CALIBRATING SPIDER-MAN PROTOCOL...',
      'LOADING AI & SAAS MISSIONS...',
      'SYNCING SKILL INVENTORY...',
      'CONNECTING TO SATELLITE HUD...',
      'SYSTEM ONLINE // READY'
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 18) + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setStatusText(statuses[statuses.length - 1]);
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
        }, 300);
      } else {
        const textIdx = Math.min(Math.floor((current / 100) * statuses.length), statuses.length - 2);
        setStatusText(statuses[textIdx]);
        setProgress(current);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#07080a',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      {/* GTA Background Vignette & Grids */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 42, 75, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          width: '90%',
          maxWidth: '520px',
          position: 'relative',
          padding: '24px',
          background: 'rgba(18, 22, 32, 0.9)',
          border: '1px solid rgba(255, 42, 75, 0.4)',
          borderRadius: '4px',
          boxShadow: '0 0 35px rgba(255, 42, 75, 0.25)',
        }}
      >
        {/* HUD Corners */}
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Top GTA HUD Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="status-dot" />
            <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8rem', color: '#ff2a4b', fontWeight: 800, letterSpacing: '2px' }}>
              VISHAL A
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#9aa2b1' }}>
            B.TECH AI & DS
          </span>
        </div>

        {/* Big Glitch Title */}
        <h2
          style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '1.6rem',
            fontWeight: 900,
            letterSpacing: '3px',
            color: '#ffffff',
            marginBottom: '6px',
            textTransform: 'uppercase'
          }}
        >
          VISHAL A
        </h2>
        <p style={{ fontFamily: 'var(--font-game)', fontSize: '0.95rem', color: '#ff7b00', fontWeight: 600, letterSpacing: '1px', marginBottom: '20px' }}>
          AI PRODUCT DEVELOPER &bull; WEB &amp; SAAS INNOVATOR
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '14px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #ff2a4b 0%, #ff7b00 70%, #00ff88 100%)',
              transition: 'width 0.1s ease',
              boxShadow: '0 0 15px rgba(255, 42, 75, 0.8)',
            }}
          />
        </div>

        {/* Status Line and Percentage */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00f0ff', letterSpacing: '1px' }}>
            &gt; {statusText}
          </span>
          <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.9rem', color: '#ffffff', fontWeight: 700 }}>
            {progress}%
          </span>
        </div>

        {/* Skip button */}
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button
            onClick={handleSkip}
            className="gta-btn gta-btn-sm"
            style={{ fontSize: '0.7rem', padding: '6px 12px' }}
          >
            [ SKIP INTRO &gt;&gt; ]
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
