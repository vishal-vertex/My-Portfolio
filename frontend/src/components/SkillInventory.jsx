import { useState } from 'react';
import { soundFx } from './SoundEffects';
import {
  Code,
  Cpu,
  Database,
  Terminal,
  Globe,
  Layers,
  Users,
  Flame,
  Languages,
  Check,
  ShieldCheck
} from 'lucide-react';

const SkillInventory = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL GEAR' },
    { id: 'web', label: 'WEB & MERN' },
    { id: 'ai', label: 'AI & PYTHON' },
    { id: 'tools', label: 'TOOLS & SAAS' },
    { id: 'soft', label: 'LEADERSHIP' },
  ];

  const skillCards = [
    {
      category: 'web',
      name: 'React.js & Modern UI',
      type: 'PRIMARY WEAPON',
      tech: 'Hooks, Component Architecture, SPAs, State Flows',
      status: 'VERIFIED EXPERT',
      icon: Globe,
      color: 'var(--gta-red)',
    },
    {
      category: 'web',
      name: 'MERN Stack Architecture',
      type: 'CORE ENGINE',
      tech: 'MongoDB, Express.js, React.js, Node.js, REST APIs',
      status: 'FULL-STACK READY',
      icon: Layers,
      color: 'var(--gta-orange)',
    },
    {
      category: 'ai',
      name: 'Python & Flask Backend',
      type: 'AI HEAVY ARTILLERY',
      tech: 'Flask APIs, Automation, Data Processing, Scripting',
      status: 'PRODUCTION GRADE',
      icon: Terminal,
      color: 'var(--gta-yellow)',
    },
    {
      category: 'ai',
      name: 'AI Application Engineering',
      type: 'SPECIAL ABILITY',
      tech: 'AI-based Application Dev, LLM Integration, Data Analysis',
      status: 'ACTIVE INNOVATION',
      icon: Cpu,
      color: 'var(--gta-green)',
    },
    {
      category: 'web',
      name: 'JavaScript (ES6+) & HTML/CSS',
      type: 'FOUNDATION',
      tech: 'Modern JS, Asynchronous Logic, Responsive Flex/Grid, Glassmorphism',
      status: 'HIGH MASTERY',
      icon: Code,
      color: 'var(--gta-cyan)',
    },
    {
      category: 'tools',
      name: 'Desktop & Database Systems',
      type: 'UTILITY GEAR',
      tech: 'Electron, SQLite, Git, GitHub, Vite, Netlify, Render',
      status: 'DEPLOYED IN PRODUCTION',
      icon: Database,
      color: 'var(--gta-red)',
    },
    {
      category: 'soft',
      name: 'Problem Solving & Critical Logic',
      type: 'PASSIVE TRAIT',
      tech: 'Algorithmic Solutions, Hackathon Fast-Execution, Debugging',
      status: 'COMPETITIVE WINNER',
      icon: Flame,
      color: 'var(--gta-orange)',
    },
    {
      category: 'soft',
      name: 'Leadership & Team Collaboration',
      type: 'COMMAND ABILITY',
      tech: 'Cross-functional Collaboration, Agile Project Management, Communication',
      status: 'COMMUNITY ACTIVE',
      icon: Users,
      color: 'var(--gta-green)',
    },
    {
      category: 'soft',
      name: 'Languages & Communication',
      type: 'COMM PROTOCOL',
      tech: 'Tamil (Native Proficiency), English (Professional Working)',
      status: 'FLUENT COMMS',
      icon: Languages,
      color: 'var(--gta-cyan)',
    },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillCards
    : skillCards.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
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
          <span className="mission-badge badge-active">
            <ShieldCheck size={13} />
            WEAPON &amp; SKILL INVENTORY
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            SLOTS: 100% UNLOCKED
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
          SKILL <span style={{ color: 'var(--gta-red)' }}>INVENTORY</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundFx.playClick();
              setActiveTab(cat.id);
            }}
            onMouseEnter={() => soundFx.playHover()}
            style={{
              padding: '10px 20px',
              fontFamily: 'var(--font-hud)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              cursor: 'pointer',
              borderRadius: '2px',
              background: activeTab === cat.id ? 'var(--gta-red)' : 'rgba(18, 22, 32, 0.85)',
              color: activeTab === cat.id ? '#ffffff' : 'var(--text-muted)',
              border: activeTab === cat.id ? '1px solid var(--gta-red)' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: activeTab === cat.id ? '0 0 15px rgba(255, 42, 75, 0.5)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            [ {cat.label} ]
          </button>
        ))}
      </div>

      {/* Skills Grid with 3D Hover & GTA HUD Frame */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              onMouseEnter={() => soundFx.playHover()}
              className="hud-panel"
              style={{
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(145deg, rgba(18, 22, 32, 0.95) 0%, rgba(10, 12, 18, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'default',
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div>
                {/* Header with Type & Icon */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '3px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `1px solid ${skill.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 12px ${skill.color}33`,
                    }}
                  >
                    <IconComponent size={20} color={skill.color} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: skill.color,
                      fontWeight: 700,
                      letterSpacing: '1px',
                    }}
                  >
                    // {skill.type}
                  </span>
                </div>

                {/* Skill Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-hud)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '8px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {skill.name}
                </h3>

                {/* Tech Subtext */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.4',
                    marginBottom: '16px',
                  }}
                >
                  {skill.tech}
                </p>
              </div>

              {/* Status Footer */}
              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} color="var(--gta-green)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--gta-green)',
                      fontWeight: 700,
                    }}
                  >
                    {skill.status}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-hud)',
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  [READY]
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillInventory;
