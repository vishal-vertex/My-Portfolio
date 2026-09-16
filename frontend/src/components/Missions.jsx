import { useState } from 'react';
import { soundFx } from './SoundEffects';
import MissionCard from './MissionCard';
import { Target, Layers, Cpu, Radio, Sparkles } from 'lucide-react';

const Missions = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL MISSIONS (16)', icon: Target },
    { id: 'saas', label: 'FULL-STACK & SAAS', icon: Layers },
    { id: 'ai', label: 'AI & MACHINE LEARNING', icon: Cpu },
    { id: 'iot', label: 'HARDWARE & IOT', icon: Radio },
    { id: 'portfolio', label: 'CREATIVE APPS', icon: Sparkles },
  ];

  const missionsData = [
    {
      id: 'MISSION 01',
      isMajor: true,
      title: 'Bill-Vault Desktop Billing Software',
      category: 'saas',
      description: 'Offline desktop billing software for managing products, bills, and local business data with high performance, local data privacy, and zero internet reliance.',
      technologies: ['React', 'Electron', 'Flask', 'SQLite', 'Desktop App'],
      status: 'MAJOR PROJECT',
      githubUrl: 'https://github.com/vishal-vertex/Bill-Vault',
    },
    {
      id: 'MISSION 02',
      isMajor: true,
      title: 'Invoice Generator Platform',
      category: 'saas',
      description: 'Modern web application platform featuring dynamic invoice generation, customer billing management, and structured export capabilities.',
      technologies: ['React.js', 'Express.js', 'Node.js', 'MERN Stack'],
      status: 'LIVE DEMO',
      liveUrl: 'https://invoice-generator-o87g.onrender.com/',
      githubUrl: 'https://github.com/vishal-vertex/Invoice-Generator',
    },
    {
      id: 'MISSION 03',
      isMajor: true,
      title: 'Spidex Study Notes Provider Platform',
      category: 'saas',
      description: 'Web-based study notes management platform that streamlines uploading, organizing, and accessing academic resources and student notes collaboratively.',
      technologies: ['MERN Stack', 'HTML5', 'CSS3', 'JavaScript'],
      status: 'LIVE DEMO',
      liveUrl: 'https://spidex-saas.netlify.app/',
      githubUrl: 'https://github.com/vishal-vertex/SpideX',
    },
    {
      id: 'MISSION 04',
      title: 'AI Air Monitor Detection',
      category: 'iot',
      description: 'Hardware + Software integrated real-time environmental monitoring system utilizing embedded sensors and AI analytics for air quality detection.',
      technologies: ['AI Analytics', 'Hardware Sensors', 'Python', 'IoT Bridge'],
      status: 'ACTIVE MISSION',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 05',
      title: 'Code Vulnerability Scanner',
      category: 'ai',
      description: 'AI-powered code bug and security vulnerability scanning platform designed to inspect source code for vulnerabilities and optimize code health.',
      technologies: ['Python', 'AI/ML Analysis', 'Cybersecurity', 'AST Parser'],
      status: 'COMPLETED',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 06',
      title: 'Customizable AI Chatbot',
      category: 'ai',
      description: 'AI-integrated conversational chatbot with customizable prompt context, domain adaptation, and dynamic interactive response engines.',
      technologies: ['React.js', 'Python API', 'AI Prompts', 'Flask'],
      status: 'COMPLETED',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 07',
      title: 'AuraGene Technologies Portfolio',
      category: 'portfolio',
      description: 'Official company portfolio website of Auragene Technologies, showcasing services, projects, technologies, and AI-driven client solutions.',
      technologies: ['React', 'Modern CSS', 'Responsive UI/UX', 'Web Architecture'],
      status: 'PUBLIC REPO',
      liveUrl: 'https://www.auragene.in/',
      githubUrl: 'https://github.com/vishal-vertex/AuraGene-Portfolio',
    },
    {
      id: 'MISSION 08',
      title: 'AI Electricity Bill Saver with Hardware',
      category: 'iot',
      description: 'AI-driven power consumption analysis with smart hardware integration to detect peak energy spikes and optimize electricity billing.',
      technologies: ['Python', 'IoT Hardware', 'AI Optimization', 'Smart Metering'],
      status: 'ONGOING MISSION',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 09',
      title: 'Phone Anti-Lock Touch Recognizer',
      category: 'iot',
      description: 'Interactive touch and sensor gesture recognition technology preventing accidental device lockouts during continuous physical handling.',
      technologies: ['Sensor Logics', 'Touch APIs', 'Python', 'Hardware UI'],
      status: 'ONGOING MISSION',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 10',
      title: 'AI Home-Made Food Suggestion Platform',
      category: 'ai',
      description: 'AI recommendation platform creating dynamic meal suggestions and recipe combinations based on available pantry ingredients and dietary preferences.',
      technologies: ['Python', 'AI Recommendation Engine', 'MERN UI', 'REST APIs'],
      status: 'ONGOING MISSION',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 11',
      title: 'Local Home Services Connector',
      category: 'saas',
      description: 'A full stack local home services platform built with React and Flask, enabling users to report home maintenance issues and connect with nearby verified providers.',
      technologies: ['React', 'Flask', 'RESTful APIs', 'Database Storage'],
      status: 'PUBLIC REPO',
      githubUrl: 'https://github.com/vishal-vertex/Home-Services',
    },
    {
      id: 'MISSION 12',
      title: 'Car Parker & Land Provider Connector',
      category: 'saas',
      description: 'Location-based matching platform connecting vehicle drivers looking for parking spots with verified private land providers for organized parking.',
      technologies: ['MERN Stack', 'Geolocation Logic', 'Interactive UI', 'Booking Flow'],
      status: 'ONGOING MISSION',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 13',
      title: 'Mental Health Prediction System',
      category: 'ai',
      description: 'An AI-powered mental health prediction system that uses data analysis and machine learning techniques to provide early insights into mental well-being.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'],
      status: 'PUBLIC REPO',
      githubUrl: 'https://github.com/vishal-vertex/Mental-Health-Prediction',
    },
    {
      id: 'MISSION 14',
      title: 'Food Waste Prediction System',
      category: 'ai',
      description: 'An AI-powered food waste prediction system using data analysis and machine learning techniques to provide actionable insights into consumption patterns and minimize waste.',
      technologies: ['JavaScript', 'Machine Learning', 'Data Analytics', 'Pattern Analysis'],
      status: 'PUBLIC REPO',
      githubUrl: 'https://github.com/vishal-vertex/Food-Waste-Prediction',
    },
    {
      id: 'MISSION 15',
      title: 'Cinematic Cafe & Restaurant Portfolios',
      category: 'portfolio',
      description: 'Cinematic, scroll-driven culinary showcase websites built with React and Vite, featuring frame-by-frame immersive visual storytelling.',
      technologies: ['React', 'Vite', 'Frame-by-Frame Scroll', 'JavaScript'],
      status: 'COMPLETED',
      githubUrl: 'https://github.com/vishal-vertex',
    },
    {
      id: 'MISSION 16',
      title: 'SnapThrow-Drop & Productivity To-Do List',
      category: 'saas',
      description: 'Interactive utility applications and productive task managers built using modern HTML, CSS, and JavaScript for seamless daily workflow execution.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Storage'],
      status: 'PUBLIC REPO',
      githubUrl: 'https://github.com/vishal-vertex/To-do-List',
    },
  ];

  const filteredMissions = activeCategory === 'all'
    ? missionsData
    : missionsData.filter((m) => m.category === activeCategory);

  return (
    <section
      id="missions"
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
            <Target size={13} />
            MISSION BRIEFINGS
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            ACTIVE CAMPAIGN: {missionsData.length} TOTAL OPS
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
          FEATURED <span style={{ color: 'var(--gta-red)' }}>MISSIONS</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--gta-red), transparent)',
          }}
        />
      </div>

      {/* Category Filter Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '36px',
        }}
      >
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                fontFamily: 'var(--font-hud)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '1px',
                cursor: 'pointer',
                borderRadius: '2px',
                background: isSelected ? 'var(--gta-red)' : 'rgba(18, 22, 32, 0.85)',
                color: isSelected ? '#ffffff' : 'var(--text-muted)',
                border: isSelected ? '1px solid var(--gta-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isSelected ? '0 0 15px rgba(255, 42, 75, 0.5)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <IconComp size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Missions 3D Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {filteredMissions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </section>
  );
};

export default Missions;
