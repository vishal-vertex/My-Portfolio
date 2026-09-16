import { soundFx } from './SoundEffects';
import { GraduationCap, Award, BookOpen, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

const EducationJourney = () => {
  const steps = [
    {
      level: 'LEVEL 01',
      title: 'Secondary School Leaving Certificate (10th)',
      institution: 'State Board Education',
      score: '88%',
      status: 'MILESTONE ACHIEVED',
      desc: 'Built fundamental mathematical logic, algorithmic thinking, and science foundation with outstanding academic excellence.',
      color: 'var(--gta-green)',
      icon: BookOpen,
    },
    {
      level: 'LEVEL 02',
      title: 'Higher Secondary Certificate (12th)',
      institution: 'State Board Education',
      score: '88%',
      status: 'MILESTONE ACHIEVED',
      desc: 'Mastered advanced mathematics and computer science fundamentals, sparking deep passion for full-stack engineering.',
      color: 'var(--gta-cyan)',
      icon: Award,
    },
    {
      level: 'LEVEL 03',
      title: 'B.Tech — Artificial Intelligence & Data Science',
      institution: 'St. Xavier Catholic College of Engineering',
      score: 'CGPA 8.5 (Expected to Improve)',
      status: 'CURRENT MISSION // 4TH SEMESTER',
      desc: 'Specializing in MERN stack, Python, machine learning, AI-based software product engineering, and hackathon problem-solving.',
      color: 'var(--gta-red)',
      icon: GraduationCap,
      isCurrent: true,
    },
    {
      level: 'LEVEL 04',
      title: 'Next Level: AI Product Innovator & SaaS Engineer',
      institution: 'Global Tech Frontier',
      score: '∞ XP',
      status: 'OBJECTIVE IN PROGRESS',
      desc: 'Engineering impactful AI SaaS products, high-performance web systems, and innovative software solutions.',
      color: 'var(--gta-yellow)',
      icon: Rocket,
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: '80px 24px',
        maxWidth: '1350px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Title */}
      <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="mission-badge badge-completed">
            <CheckCircle2 size={13} />
            PROGRESSION TIMELINE
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            EXP SYSTEM: 8.5 CGPA ACTIVE
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
          EDUCATION <span style={{ color: 'var(--gta-red)' }}>JOURNEY</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Game Timeline Path */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}
      >
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="hud-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: step.isCurrent
                  ? 'linear-gradient(145deg, rgba(255, 42, 75, 0.12) 0%, rgba(18, 22, 32, 0.95) 100%)'
                  : 'rgba(18, 22, 32, 0.85)',
                border: step.isCurrent ? '1px solid var(--gta-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: step.isCurrent ? '0 0 25px rgba(255, 42, 75, 0.25)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Card Top Level Badge */}
              <div>
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
                      padding: '4px 10px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `1px solid ${step.color}`,
                      borderRadius: '2px',
                    }}
                  >
                    <IconComp size={14} color={step.color} />
                    <span
                      style={{
                        fontFamily: 'var(--font-hud)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: '1px',
                      }}
                    >
                      {step.level}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-hud)',
                      fontSize: '1.1rem',
                      fontWeight: 900,
                      color: step.color,
                    }}
                  >
                    {step.score}
                  </span>
                </div>

                {/* Title and Institution */}
                <h3
                  style={{
                    fontFamily: 'var(--font-game)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: '1.3',
                    marginBottom: '6px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--gta-orange)',
                    marginBottom: '14px',
                  }}
                >
                  {step.institution}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5',
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Card Footer Status */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: step.color,
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  &gt; {step.status}
                </span>
                <ChevronRight size={14} color={step.color} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationJourney;
