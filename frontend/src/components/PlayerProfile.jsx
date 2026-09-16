import { useState } from 'react';
import { soundFx } from './SoundEffects';
import { Shield, Award, Cpu, Code2, Flame, UserCheck, Star, Layers } from 'lucide-react';
import vishalImg from '../assets/Vishal1.jpg';

const PlayerProfile = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const stats = [
    { label: 'AI PRODUCT ENGINEERING', level: 92, icon: Cpu, color: 'var(--gta-red)' },
    { label: 'MERN & FULL-STACK DEV', level: 90, icon: Code2, color: 'var(--gta-orange)' },
    { label: 'PROBLEM SOLVING & LOGIC', level: 95, icon: Flame, color: 'var(--gta-yellow)' },
    { label: 'SYSTEM ARCHITECTURE & SAAS', level: 88, icon: Layers, color: 'var(--gta-cyan)' },
    { label: 'LEADERSHIP & COLLABORATION', level: 90, icon: UserCheck, color: 'var(--gta-green)' },
  ];

  return (
    <section
      id="player"
      style={{
        padding: '100px 24px',
        maxWidth: '1350px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="mission-badge badge-active">CHARACTER DOSSIER</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            DATABASE ID: VISHAL-AI-01
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-hud)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#ffffff',
            letterSpacing: '2px',
          }}
        >
          PLAYER <span style={{ color: 'var(--gta-red)' }}>PROFILE</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Main Grid: Left 3D Character Card, Right Player Stats & Bio */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: 3D Character Dossier Card */}
        <div
          className="perspective-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ height: '100%' }}
        >
          <div
            className="hud-panel transform-3d"
            style={{
              padding: '24px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              background: 'linear-gradient(145deg, rgba(18, 22, 32, 0.95) 0%, rgba(10, 12, 18, 0.95) 100%)',
              border: '1px solid rgba(255, 42, 75, 0.3)',
            }}
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Profile Avatar & Name Tag */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: '2px solid var(--gta-red)',
                    boxShadow: '0 0 15px rgba(255, 42, 75, 0.4)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={vishalImg}
                    alt="Vishal A"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-hud)',
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '1px',
                    }}
                  >
                    VISHAL A
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-game)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--gta-orange)',
                      letterSpacing: '1px',
                    }}
                  >
                    AI &amp; DS ENGINEER
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '4px',
                      color: 'var(--gta-yellow)',
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="var(--gta-yellow)" />
                    ))}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#ffffff', marginLeft: '4px' }}>
                      MAX WANTED LEVEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Dossier Meta Table */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    ROLE
                  </div>
                  <div style={{ fontFamily: 'var(--font-game)', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                    AI Product Developer
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    SPECIALIZATION
                  </div>
                  <div style={{ fontFamily: 'var(--font-game)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--gta-cyan)' }}>
                    AI + Full Stack + SaaS
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    STATUS
                  </div>
                  <div style={{ fontFamily: 'var(--font-game)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--gta-green)' }}>
                    BUILDING THE FUTURE
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    BASE HQ
                  </div>
                  <div style={{ fontFamily: 'var(--font-game)', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                    Kanyakumari, India
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Resume Bio Box */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                borderRadius: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Shield size={14} color="var(--gta-red)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gta-red)', fontWeight: 700 }}>
                  ABOUT PLAYER [AUTHENTIC DOSSIER]
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  lineHeight: '1.6',
                }}
              >
                Motivated and Innovative B.Tech AI &amp; DS student skilled in MERN, React, Python, and AI product development. Experienced in real-world projects, hackathons, and building impactful digital solutions with strong problem-solving abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: GTA Player Attributes & Special Abilities Screen */}
        <div
          className="hud-panel"
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(145deg, rgba(14, 17, 25, 0.95) 0%, rgba(8, 10, 15, 0.95) 100%)',
          }}
        >
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="var(--gta-red)" />
                <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px' }}>
                  PLAYER ATTRIBUTES &amp; CAPABILITIES
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--gta-green)' }}>
                EFFICIENCY: 100%
              </span>
            </div>

            {/* Skill Attributes Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {stats.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} onMouseEnter={() => soundFx.playHover()}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <IconComponent size={15} color={item.color} />
                        <span
                          style={{
                            fontFamily: 'var(--font-game)',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: '#ffffff',
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: item.color,
                        }}
                      >
                        [ EXPERT ]
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      style={{
                        height: '10px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: `${item.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${item.color} 0%, rgba(255, 255, 255, 0.8) 100%)`,
                          boxShadow: `0 0 10px ${item.color}`,
                          borderRadius: '1px',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Traits Badges */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              // ACTIVE COMBAT / DEV PERKS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                '⚡ Rapid Prototyping',
                '🛡️ Clean Modular Code',
                '🏆 Hackathon Winner',
                '🤖 AI/LLM Integration',
                '💡 Problem Solver',
                '🎯 Agile Team Lead',
              ].map((perk, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    background: 'rgba(255, 42, 75, 0.12)',
                    border: '1px solid rgba(255, 42, 75, 0.3)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                  }}
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
