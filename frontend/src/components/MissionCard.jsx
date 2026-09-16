import { useState } from 'react';
import { soundFx } from './SoundEffects';
import { ExternalLink, Code2 } from 'lucide-react';

const MissionCard = ({ mission }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ rotateX, rotateY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  return (
    <div
      className="perspective-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => soundFx.playHover()}
      onMouseLeave={handleMouseLeave}
      style={{ height: '100%' }}
    >
      <div
        className="hud-panel transform-3d"
        style={{
          height: '100%',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: tilt.isHovered
            ? 'linear-gradient(145deg, rgba(22, 28, 40, 0.95) 0%, rgba(12, 15, 22, 0.98) 100%)'
            : 'linear-gradient(145deg, rgba(16, 20, 28, 0.92) 0%, rgba(9, 11, 16, 0.95) 100%)',
          border: tilt.isHovered ? '1px solid var(--gta-red)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: tilt.isHovered
            ? '0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 42, 75, 0.25)'
            : '0 8px 20px rgba(0, 0, 0, 0.5)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${tilt.isHovered ? 'translateZ(10px)' : 'translateZ(0)'}`,
        }}
      >
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        <div>
          {/* Mission Top Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  color: 'var(--gta-red)',
                  letterSpacing: '1.5px',
                }}
              >
                {mission.id}
              </span>
              {mission.isMajor && (
                <span
                  style={{
                    background: 'rgba(255, 42, 75, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.62rem',
                    fontFamily: 'var(--font-hud)',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    border: '1px solid var(--gta-red)',
                  }}
                >
                  MAJOR OPS
                </span>
              )}
            </div>

            <span
              className={`mission-badge ${
                mission.liveUrl
                  ? 'badge-live'
                  : mission.status === 'COMPLETED' || mission.status === 'PUBLIC REPO'
                  ? 'badge-completed'
                  : 'badge-active'
              }`}
            >
              {mission.status}
            </span>
          </div>

          {/* Mission Title */}
          <h3
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: '1.3',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}
          >
            {mission.title}
          </h3>

          {/* Mission Objective / Description */}
          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--gta-orange)',
                marginBottom: '4px',
                letterSpacing: '1px',
              }}
            >
              // OBJECTIVE:
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: '1.55',
              }}
            >
              {mission.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-dim)',
                marginBottom: '6px',
                letterSpacing: '1px',
              }}
            >
              // ARSENAL / TECH:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {mission.technologies.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#e2e8f0',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Actions (Live Demo if verified, GitHub Link for all) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {mission.liveUrl && (
            <a
              href={mission.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="gta-btn gta-btn-primary gta-btn-sm"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <ExternalLink size={13} />
              <span>LIVE DEMO</span>
            </a>
          )}

          <a
            href={mission.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className={`gta-btn gta-btn-sm ${!mission.liveUrl ? 'gta-btn-cyan' : ''}`}
            style={{ flex: 1, textDecoration: 'none' }}
          >
            <Code2 size={13} />
            <span>VIEW GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
