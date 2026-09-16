import { soundFx } from './SoundEffects';
import { Trophy, Award, CheckCircle2, Star, Sparkles, Flame } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      id: 'ACHIEVEMENT 01',
      title: 'Winner in Hackathon Events',
      organization: 'Competitive Innovation Challenges',
      reward: '+5000 XP // GOLD TROPHY',
      desc: 'Secured victory in competitive hackathons by designing, architecting, and deploying high-impact digital solutions within rigorous time constraints.',
      icon: Trophy,
      color: 'var(--gta-yellow)',
      badge: 'VICTORY ROYALE',
    },
    {
      id: 'ACHIEVEMENT 02',
      title: 'Junior Software Development Course',
      organization: 'National Institute of Technology (NIT), Trichy',
      reward: '+4500 XP // CERTIFIED',
      desc: 'Completed comprehensive software development coursework at premier national institute NIT Trichy, mastering core software architecture and algorithmic foundations.',
      icon: Award,
      color: 'var(--gta-red)',
      badge: 'NIT TRICHY',
    },
    {
      id: 'ACHIEVEMENT 03',
      title: 'Won in Neurax26',
      organization: 'Technical Symposium & AI Innovation',
      reward: '+3000 XP // HONOR',
      desc: 'Active participant in high-intensity technical innovation symposium, competing in technical challenges and software solution design.',
      icon: Star,
      color: 'var(--gta-cyan)',
      badge: 'NEURAX26',
    },
    {
      id: 'ACHIEVEMENT 04',
      title: 'Won in Voyce26',
      organization: 'State-Level Tech Ideation Summit',
      reward: '+3000 XP // HONOR',
      desc: 'Contributed innovative software ideas and interactive engineering demos in competitive college technical forum.',
      icon: Sparkles,
      color: 'var(--gta-orange)',
      badge: 'VOYCE26',
    },
    {
      id: 'ACHIEVEMENT 05',
      title: 'Won in TechTide25',
      organization: 'Technical Fest & Coding Challenge',
      reward: '+3000 XP // HONOR',
      desc: 'Overall it is Hackathon Event I won first prize in. Competed in coding and software design challenges, demonstrating rapid development and problem-solving skills.',
      icon: Flame,
      color: 'var(--gta-green)',
      badge: 'TECHTIDE25',
    },
    {
      id: 'ACHIEVEMENT 06',
      title: 'Active Software & AI Contributor',
      organization: 'Open Source & Independent Engineering',
      reward: '+4000 XP // BUILDER',
      desc: 'Active contributor in innovative software and AI-based project development, consistently shipping functional repositories and real-world tools.',
      icon: CheckCircle2,
      color: 'var(--gta-cyan)',
      badge: 'ACTIVE DEV',
    },
    {
  id: 'ACHIEVEMENT 07',
  title: 'AI Data Analyst Intern',
  organization: 'AgileInfo Techytern Solutions LLP',
  reward: '+5000 XP // AI BUILDER',
  desc: 'Completed a 4-week Data Analyst Internship, developing an AI-powered Mental Health Prediction System using Python, CSV data analysis, React.js, and API integration.',
  icon: CheckCircle2,
  color: 'var(--gta-cyan)',
  badge: 'AI INTERN',
},
  ];

  return (
    <section
      id="achievements"
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
          <span className="mission-badge badge-completed">
            <Trophy size={13} />
            HONORS &amp; RECOGNITION
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            MISSION STATUS: 100% PASSED
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
          MISSION <span style={{ color: 'var(--gta-red)' }}>ACCOMPLISHED</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Grid of GTA Mission Passed Badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {achievementsList.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div
              key={index}
              onMouseEnter={() => {
                soundFx.playHover();
              }}
              className="hud-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(145deg, rgba(18, 22, 32, 0.95) 0%, rgba(10, 12, 18, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div>
                {/* Header with GTA MISSION COMPLETED Stamp */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(0, 255, 136, 0.12)',
                      border: '1px solid rgba(0, 255, 136, 0.4)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    <CheckCircle2 size={12} color="var(--gta-green)" />
                    <span
                      style={{
                        fontFamily: 'var(--font-hud)',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: 'var(--gta-green)',
                        letterSpacing: '1px',
                      }}
                    >
                      MISSION COMPLETED
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: item.color,
                      fontWeight: 700,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title and Org */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '3px',
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: `1px solid ${item.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 0 10px ${item.color}33`,
                    }}
                  >
                    <IconComp size={18} color={item.color} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-hud)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: '1.3',
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--gta-orange)',
                        marginTop: '2px',
                      }}
                    >
                      {item.organization}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5',
                    marginTop: '10px',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Reward Footer */}
              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: item.color,
                    fontWeight: 700,
                    letterSpacing: '1px',
                  }}
                >
                  {item.reward}
                </span>

                <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                  [PASSED]
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
