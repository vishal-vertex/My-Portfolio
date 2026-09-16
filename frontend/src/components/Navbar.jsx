import { useState } from 'react';
import { Crosshair, Menu, Volume2, VolumeX, X } from 'lucide-react';
import { soundFx } from './SoundEffects';

const navItems = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'PLAYER', href: '#player', id: 'player' },
  { label: 'MISSIONS', href: '#missions', id: 'missions' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'MAP', href: '#map', id: 'map' },
  { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

const Navbar = ({ activeSection = 'home', onNavigate = () => {} }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundFx.isMuted());

  const navigateTo = (href) => {
    soundFx.playClick();
    setMobileOpen(false);
    onNavigate(href.slice(1));
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSound = () => setIsMuted(soundFx.toggleMute());

  const menuLinks = (mobile = false) => navItems.map((item, index) => (
    <a
      key={item.id}
      href={item.href}
      onClick={(event) => { event.preventDefault(); navigateTo(item.href); }}
      onMouseEnter={() => soundFx.playHover()}
      className={`game-menu-link ${activeSection === item.id ? 'is-active' : ''} ${mobile ? 'mobile-menu-link' : ''}`}
    >
      <span className="game-menu-number">{String(index + 1).padStart(2, '0')}</span>
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <aside className="game-sidebar">
        <a className="game-sidebar-brand" href="#home" onClick={(event) => { event.preventDefault(); navigateTo('#home'); }}>
          <span className="game-brand-icon"><Crosshair size={21} /></span>
          <span>
            <strong>VISHAL <b>A</b></strong>
            <small><i /> SYSTEM ONLINE</small>
          </span>
        </a>

        <nav className="game-sidebar-menu" aria-label="Portfolio sections">
          {menuLinks()}
        </nav>

        <div className="game-sidebar-footer">
          <button className="game-sound-toggle" onClick={toggleSound} title={isMuted ? 'Turn sound on' : 'Turn sound off'}>
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            SFX: {isMuted ? 'OFF' : 'ON'}
          </button>
          <span>V1.0 // PLAYER MENU</span>
        </div>
      </aside>

      <header className="mobile-game-header">
        <a href="#home" onClick={(event) => { event.preventDefault(); navigateTo('#home'); }}>VISHAL <b>A</b></a>
        <button onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen && <nav className="mobile-game-menu">{menuLinks(true)}</nav>}

      <style>{`
        .game-sidebar { position: fixed; inset: 0 auto 0 0; z-index: 100; width: 235px; display: flex; flex-direction: column; padding: 24px 16px 18px; background: linear-gradient(90deg, rgba(7,8,10,.98), rgba(11,13,18,.95)); border-right: 1px solid rgba(255,42,75,.35); box-shadow: 12px 0 40px rgba(0,0,0,.45); }
        .game-sidebar-brand { display: flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; }
        .game-brand-icon { width: 38px; height: 38px; display: grid; place-items: center; color: var(--gta-red); border: 1px solid var(--gta-red); background: rgba(255,42,75,.1); box-shadow: 0 0 16px rgba(255,42,75,.2); }
        .game-sidebar-brand strong { display: block; font-family: var(--font-hud); font-size: 1rem; letter-spacing: 1.5px; }.game-sidebar-brand strong b, .mobile-game-header b { color: var(--gta-red); }.game-sidebar-brand small { display: flex; align-items: center; gap: 5px; color: var(--gta-green); font: .61rem var(--font-mono); letter-spacing: .8px; }.game-sidebar-brand small i { width: 6px; height: 6px; border-radius: 50%; background: var(--gta-green); box-shadow: 0 0 8px var(--gta-green); }
        .game-sidebar-menu { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 5px; }.game-sidebar-menu p { color: var(--text-dim); font: .65rem var(--font-mono); letter-spacing: 1.5px; margin: 0 0 10px 12px; }
        .game-menu-link { position: relative; display: flex; align-items: center; gap: 12px; padding: 11px 12px; color: var(--text-muted); font: 700 .9rem var(--font-hud); letter-spacing: 1px; text-decoration: none; border-left: 3px solid transparent; transition: transform .2s ease, color .2s ease, background .2s ease, box-shadow .2s ease; }.game-menu-link:hover, .game-menu-link:focus-visible { color: #fff; background: rgba(255,255,255,.075); transform: translateX(6px); box-shadow: -4px 0 14px rgba(255,42,75,.22); outline: none; }.game-menu-link.is-active { color: #fff; border-left-color: var(--gta-red); background: linear-gradient(90deg, rgba(255,42,75,.2), transparent); }.game-menu-link.is-active:hover, .game-menu-link.is-active:focus-visible { background: linear-gradient(90deg, rgba(255,42,75,.42), transparent); box-shadow: -4px 0 18px rgba(255,42,75,.55); }.game-menu-number { color: var(--gta-red); font: .65rem var(--font-mono); }
        .game-sidebar-footer { display: flex; flex-direction: column; gap: 10px; color: var(--text-dim); font: .6rem var(--font-mono); letter-spacing: .8px; }.game-sound-toggle { display: flex; align-items: center; justify-content: center; gap: 7px; padding: 9px; color: var(--text-muted); background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.14); font: .7rem var(--font-mono); cursor: pointer; }.game-sound-toggle:hover { color: var(--gta-green); border-color: var(--gta-green); }
        .mobile-game-header, .mobile-game-menu { display: none; }
        @media (max-width: 899px) { .game-sidebar { display: none; }.mobile-game-header { position: fixed; inset: 0 0 auto; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 12px 18px; background: rgba(7,8,10,.96); border-bottom: 1px solid rgba(255,42,75,.35); }.mobile-game-header a { color: #fff; font: 800 1rem var(--font-hud); text-decoration: none; letter-spacing: 1px; }.mobile-game-header button { display: grid; place-items: center; color: #fff; padding: 6px; background: transparent; border: 1px solid rgba(255,255,255,.25); }.mobile-game-menu { position: fixed; z-index: 99; inset: 58px 0 auto; display: flex; flex-direction: column; padding: 12px; background: rgba(7,8,10,.98); border-bottom: 2px solid var(--gta-red); }.mobile-menu-link { padding: 13px 16px; } }
      `}</style>
    </>
  );
};

export default Navbar;
