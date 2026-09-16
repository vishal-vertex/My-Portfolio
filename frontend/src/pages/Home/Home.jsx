import { useEffect, useState } from 'react';
import { AtSign, Code2, Link, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import './Home.css';
import Navbar from '../../components/Navbar';
import SpiderManHero from '../../components/SpiderManHero';
import PlayerProfile from '../../components/PlayerProfile';
import Missions from '../../components/Missions';
import SkillInventory from '../../components/SkillInventory';
import WorldMap from '../../components/WorldMap';
import Achievements from '../../components/Achievements';
import EducationJourney from '../../components/EducationJourney';

const sections = ['home', 'player', 'missions', 'skills', 'map', 'achievements', 'contact'];

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-panel hud-panel">
      <div className="hud-corner-tl" /><div className="hud-corner-tr" />
      <div className="hud-corner-bl" /><div className="hud-corner-br" />
      <p className="contact-eyebrow">// OPEN A NEW MISSION</p>
      <h2>LET'S BUILD SOMETHING <span>USEFUL.</span></h2>
      <p className="contact-copy">Have an idea, a product challenge, or an opportunity to collaborate? Explore my work or reach out through GitHub.</p>
      <div className="contact-meta">
        <span><MapPin size={16} /> Kanyakumari, Tamil Nadu, India</span>
        <span><Send size={16} /> Available for meaningful projects</span>
      </div>
      <div className="contact-links">
        <a className="contact-link whatsapp" href="https://wa.me/919150401433" target="_blank" rel="noreferrer">
          <MessageCircle size={19} /><span><small>WHATSAPP</small>+91 91504 01433</span>
        </a>
        <a className="contact-link email" href="mailto:itz.me.vishal.24@gmail.com">
          <Mail size={19} /><span><small>GMAIL</small>itz.me.vishal.24@gmail.com</span>
        </a>
        <a className="contact-link linkedin" href="https://www.linkedin.com/in/vishal-vertex/" target="_blank" rel="noreferrer">
          <Link size={19} /><span><small>LINKEDIN</small>/in/vishal-vertex</span>
        </a>
        <a className="contact-link github" href="https://github.com/vishal-vertex" target="_blank" rel="noreferrer">
          <Code2 size={19} /><span><small>GITHUB</small>@vishal-vertex</span>
        </a>
        <a className="contact-link instagram" href="https://www.instagram.com/__vishal_spidex__._/?__pwa=1" target="_blank" rel="noreferrer">
          <AtSign size={19} /><span><small>INSTAGRAM</small>@__vishal_spidex__._</span>
        </a>
        <a className="contact-link portfolio" href="https://www.vishal-vertex.vercel.app" target="_blank" rel="noreferrer">
          <AtSign size={19} /><span><small>PORTFOLIO</small>/vishal-vertex</span>
        </a>
      </div>
    </div>
    <p className="footer-copy">© {new Date().getFullYear()} VISHAL A</p>
  </section>
);

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-28% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] });
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="portfolio-shell">
        <div className="game-grid-overlay" />
        <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
        <main>
          <SpiderManHero /><PlayerProfile /><Missions /><SkillInventory />
          <WorldMap /><Achievements /><EducationJourney /><Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
