import { useState, useRef } from 'react';
import { soundFx } from './SoundEffects';
import { Crosshair, Play, Terminal, ArrowRight } from 'lucide-react';
import vishalImg from '../assets/Vishal1.jpg';
import spiderImg from '../assets/spider.png';

const SpiderManHero = () => {
  const [pointer, setPointer] = useState({ x: '50%', y: '50%' });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = `${((event.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((event.clientY - rect.top) / rect.height) * 100}%`;
    setPointer({ x, y });
  };

  const handleTouchMove = (event) => {
    if (!containerRef.current || !event.touches[0]) return;
    const touch = event.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = `${((touch.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((touch.clientY - rect.top) / rect.height) * 100}%`;
    setPointer({ x, y });
  };

  const scrollToMissions = (e) => {
    e.preventDefault();
    soundFx.playClick();
    const elem = document.querySelector('#missions');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlayer = (e) => {
    e.preventDefault();
    soundFx.playClick();
    const elem = document.querySelector('#player');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambience Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(255, 42, 75, 0.12) 0%, rgba(255, 123, 0, 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1350px',
          width: '100%',
          margin: '0 auto',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left Column: GTA Developer Persona & HUD Briefing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Mission Tag / Status */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <span className="mission-badge badge-active">
              <span className="status-dot" style={{ width: '6px', height: '6px' }} />
              MAIN MISSION // CAREER QUEST
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#00f0ff',
                letterSpacing: '1px',
                background: 'rgba(0, 240, 255, 0.1)',
                padding: '3px 8px',
                borderRadius: '2px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
              }}
            >
              LOC: KANYAKUMARI, TN, INDIA
            </span>
          </div>

          {/* Heading */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              // WELCOME TO
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-hud)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 900,
                letterSpacing: '2px',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#ffffff',
                textShadow: '0 0 30px rgba(255, 42, 75, 0.4)',
              }}
            >
              VISHAL A <span style={{ color: 'var(--gta-red)' }}>VERTEX</span>
            </h1>
          </div>

          {/* Subtitles & Specialties */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-game)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ff7b00',
                letterSpacing: '1px',
              }}
            >
              <Terminal size={18} color="var(--gta-orange)" />
              <span>AI PRODUCT DEVELOPER &bull; WEB &amp; SaaS INNOVATOR</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#00ff88',
                letterSpacing: '1px',
              }}
            >
              FUTURE-READY ENGINEER &bull; B.TECH AI &amp; DS (CGPA 8.5)
            </p>
          </div>

          {/* EXACT TAGLINE */}
          <div
            style={{
              padding: '14px 18px',
              background: 'rgba(255, 42, 75, 0.08)',
              borderLeft: '4px solid var(--gta-red)',
              borderRadius: '0 4px 4px 0',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-game)',
                fontSize: '1.15rem',
                fontWeight: 600,
                fontStyle: 'italic',
                color: '#ffffff',
                letterSpacing: '0.5px',
                lineHeight: 1.4,
              }}
            >
              Be ready to sacrifice yourself to satisfy yourself
            </p>
          </div>

          {/* GTA HUD CTA Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '10px',
            }}
          >
            <a
              href="#player"
              onClick={scrollToPlayer}
              onMouseEnter={() => soundFx.playHover()}
              className="gta-btn gta-btn-primary"
            >
              <Play size={16} fill="#ffffff" />
              <span>START EXPERIENCE</span>
            </a>

            <a
              href="#missions"
              onClick={scrollToMissions}
              onMouseEnter={() => soundFx.playHover()}
              className="gta-btn"
            >
              <Crosshair size={16} color="var(--gta-red)" />
              <span>VIEW MISSIONS</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="gta-btn gta-btn-cyan"
            >
              <ArrowRight size={16} />
              <span>CONTACT PLAYER</span>
            </a>
          </div>

          {/* Quick HUD Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--gta-red)' }}>
                16+
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                PROJECT MISSIONS
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--gta-green)' }}>
                8.5
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                AI &amp; DS CGPA
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--gta-yellow)' }}>
                NIT
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                TRICHY CERTIFIED
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: PRESERVED SPIDER-MAN SPOTLIGHT HOVER INTERACTION */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* HUD Character Frame Wrapper */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              aspectRatio: '3 / 4',
              borderRadius: '6px',
              padding: '8px',
              background: 'rgba(18, 22, 32, 0.75)',
              border: '1px solid rgba(255, 42, 75, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 42, 75, 0.2)',
            }}
          >
            {/* Corner HUD Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Top Bar on Character Frame */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4px 8px 8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '6px',
              }}
            >
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.7rem', color: '#ff2a4b', letterSpacing: '1px', fontWeight: 700 }}>
                [ SPIDER-MAN PROTOCOL ]
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#00ff88' }}>
                TARGET: IDENTIFIED
              </span>
            </div>

            {/* Interactive Spider-Man Hover Canvas/Area */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseEnter={() => {
                setIsHovered(true);
                soundFx.playHover();
              }}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              className="spiderman-spotlight-box"
              style={{
                position: 'relative',
                width: '100%',
                height: 'calc(100% - 40px)',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'crosshair',
                backgroundColor: '#050608',
                '--x': pointer.x,
                '--y': pointer.y,
              }}
            >
              {/* Layer 1: Real Photo of Vishal A (Base) */}
              <div
                className="layer-bottom"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${vishalImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* Layer 2: Spider-Man Suit (Revealed via Radial Mask on Hover) */}
              <div
                className="layer-top"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${spiderImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(1.15) contrast(1.15)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                  WebkitMaskImage: `radial-gradient(circle 120px at ${pointer.x} ${pointer.y}, black 0%, black 80px, transparent 120px)`,
                  maskImage: `radial-gradient(circle 120px at ${pointer.x} ${pointer.y}, black 0%, black 80px, transparent 120px)`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              />

              {/* HUD Targeting Reticle over cursor */}
              <div
                style={{
                  position: 'absolute',
                  left: pointer.x,
                  top: pointer.y,
                  width: '60px',
                  height: '60px',
                  border: '1px solid rgba(255, 42, 75, 0.7)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  boxShadow: '0 0 15px rgba(255, 42, 75, 0.5)',
                  display: isHovered ? 'block' : 'none',
                  transition: 'opacity 0.2s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '4px',
                    height: '4px',
                    background: '#ff2a4b',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Character Identity HUD Overlay Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(7, 8, 12, 0.85)',
                  border: '1px solid rgba(255, 42, 75, 0.4)',
                  padding: '8px 12px',
                  borderRadius: '3px',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>
                    VISHAL A
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#ff7b00' }}>
                    IDENTITY: AI PRODUCT DEVELOPER 
                  </div>
                </div>
                <span className="mission-badge badge-live" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Prompt instruction badge underneath */}
            <div
              style={{
                marginTop: '6px',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.5px',
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiderManHero;
