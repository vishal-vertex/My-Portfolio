import { useState } from 'react';
import { soundFx } from './SoundEffects';
import { Map, Cpu, Globe, Server, Radio, ArrowUpRight, Crosshair } from 'lucide-react';

const WorldMap = () => {
  const [activeNode, setActiveNode] = useState('ai');

  const nodes = [
    {
      id: 'ai',
      title: 'AI & DATA SCIENCE',
      subtitle: 'Neural Models, Python & Intelligent Workflows',
      desc: 'Developing innovative AI-powered applications, machine learning prediction models, and intelligent backend automation.',
      tech: ['Python', 'Flask', 'AI Product Dev', 'ML Concepts', 'Data Analysis'],
      missions: ['Code Vulnerability Scanner', 'Customizable Chatbot', 'Mental Health Prediction', 'Food Waste Prediction'],
      icon: Cpu,
      color: 'var(--gta-red)',
      coord: { x: '25%', y: '25%' },
    },
    {
      id: 'web',
      title: 'WEB & MERN STACK',
      subtitle: 'High-Performance Web Platforms & Interfaces',
      desc: 'Engineering scalable, responsive web solutions with modular React frontends, robust Express APIs, and clean UX.',
      tech: ['React.js', 'Node.js', 'Express.js', 'JavaScript ES6+', 'HTML5/CSS3'],
      missions: ['Invoice Generator (Live)', 'Spidex Study Notes (Live)', 'AuraGene Portfolio', 'Home-Services Platform'],
      icon: Globe,
      color: 'var(--gta-cyan)',
      coord: { x: '15%', y: '75%' },
    },
    {
      id: 'saas',
      title: 'SaaS & DESKTOP PRODUCTS',
      subtitle: 'Local Business & Offline-First Systems',
      desc: 'Building production-grade desktop software and dynamic SaaS utilities with offline persistence and dynamic billing.',
      tech: ['Electron', 'SQLite', 'Flask Backend', 'React UI', 'REST APIs'],
      missions: ['Bill-Vault Desktop Software', 'Local Business Invoice Manager', 'SnapThrow-Drop'],
      icon: Server,
      color: 'var(--gta-yellow)',
      coord: { x: '75%', y: '25%' },
    },
    {
      id: 'hardware',
      title: 'HARDWARE & IoT INTEGRATION',
      subtitle: 'Physical Sensor & AI Bridging',
      desc: 'Integrating embedded sensor hardware with real-time software dashboards, AI energy saving, and environmental monitoring.',
      tech: ['Hardware Sensors', 'AI Integration', 'IoT Data Streams', 'Python Controllers'],
      missions: ['AI Air Monitor Detection', 'AI Electricity Bill Saver', 'Phone Anti-Lock Touch Recognizer'],
      icon: Radio,
      color: 'var(--gta-green)',
      coord: { x: '85%', y: '75%' },
    },
  ];

  const currentData = nodes.find((n) => n.id === activeNode) || nodes[0];

  const handleSelectNode = (id) => {
    soundFx.playClick();
    setActiveNode(id);
  };

  const handleExploreMissions = () => {
    soundFx.playClick();
    const el = document.querySelector('#missions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="map"
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
          <span className="mission-badge badge-live">
            <Map size={13} />
            TACTICAL MAP
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            SECTOR: ENGINEERING ECOSYSTEM
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
          DEVELOPMENT <span style={{ color: 'var(--gta-red)' }}>MAP</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Main Map Layout: Interactive Node Graph & Radar Briefing */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}
      >
        {/* Left: Tactical Radar Map Container */}
        <div
          className="hud-panel"
          style={{
            padding: '24px',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            background: 'radial-gradient(circle at center, rgba(18, 22, 32, 0.95) 0%, rgba(8, 10, 15, 0.98) 100%)',
            border: '1px solid rgba(255, 42, 75, 0.3)',
            overflow: 'hidden',
          }}
        >
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Radar Top Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 3,
            }}
          >
            <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', color: 'var(--gta-red)', letterSpacing: '1.5px', fontWeight: 800 }}>
              [ GPS RADAR GRID // SECTOR 04 ]
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00ff88' }}>
              SAT-LINK: ACTIVE
            </span>
          </div>

          {/* Map Node Grid Visual */}
          <div
            style={{
              position: 'relative',
              height: '320px',
              margin: '20px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Center Core Node: Vishal A */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 4,
                padding: '10px 16px',
                background: 'rgba(255, 42, 75, 0.2)',
                border: '2px solid var(--gta-red)',
                borderRadius: '4px',
                boxShadow: '0 0 25px rgba(255, 42, 75, 0.6)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.85rem', fontWeight: 900, color: '#ffffff' }}>
                VISHAL CORE
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#ff7b00' }}>
                AI &amp; FULL-STACK
              </div>
            </div>

            {/* SVG Connecting Circuits */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255, 42, 75, 0.6)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(255, 208, 0, 0.6)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(0, 240, 255, 0.6)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(0, 255, 136, 0.6)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* 4 Interactive Discipline Nodes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                width: '100%',
                height: '100%',
                zIndex: 3,
              }}
            >
              {nodes.map((node) => {
                const isSelected = activeNode === node.id;
                const IconComp = node.icon;
                return (
                  <div
                    key={node.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                    }}
                  >
                    <button
                      onClick={() => handleSelectNode(node.id)}
                      onMouseEnter={() => soundFx.playHover()}
                      style={{
                        padding: '12px 16px',
                        background: isSelected ? node.color : 'rgba(18, 22, 32, 0.9)',
                        color: isSelected ? (node.id === 'saas' ? '#000' : '#fff') : '#ffffff',
                        border: `1px solid ${node.color}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: isSelected ? `0 0 20px ${node.color}` : 'none',
                        transition: 'all 0.2s ease',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <IconComp size={18} />
                      <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '1px' }}>
                        {node.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '8px',
            }}
          >
            [ CLICK ANY NODE ON THE RADAR TO INSPECT SECTOR CAPABILITIES ]
          </div>
        </div>

        {/* Right: Selected Sector Dossier / Missions list */}
        <div
          className="hud-panel"
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(145deg, rgba(18, 22, 32, 0.95) 0%, rgba(10, 12, 18, 0.95) 100%)',
            border: `1px solid ${currentData.color}`,
          }}
        >
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Crosshair size={18} color={currentData.color} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: currentData.color, fontWeight: 700 }}>
                  SECTOR DOSSIER
                </span>
              </div>
              <span className="mission-badge badge-active" style={{ fontSize: '0.65rem' }}>
                ACTIVE NODE
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '4px',
              }}
            >
              {currentData.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-game)', fontSize: '1rem', color: 'var(--gta-orange)', fontWeight: 700, marginBottom: '14px' }}>
              {currentData.subtitle}
            </p>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              {currentData.desc}
            </p>

            {/* Core Tech in this Sector */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                // CORE TECHNOLOGIES &amp; FRAMEWORKS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentData.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      background: 'rgba(255, 255, 255, 0.05)',
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

            {/* Associated Verified Missions */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                // RELEVANT PROJECT MISSIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {currentData.missions.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: 'var(--font-game)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#f0f2f5',
                      padding: '6px 10px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderLeft: `3px solid ${currentData.color}`,
                    }}
                  >
                    &bull; {m}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={handleExploreMissions}
              className="gta-btn gta-btn-primary"
              style={{ width: '100%' }}
            >
              <span>VIEW ALL MISSIONS IN MISSIONS HUB</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
