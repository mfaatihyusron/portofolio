import { useEffect, useRef } from "react";
import { personalInfo } from "./data/portfolioData";
import { Mail, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = heroRef.current.querySelectorAll(".fade-in, .stagger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero" ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 'none'
    }}>
      <div className="hero-grain" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        opacity: .4
      }}></div>
      <div className="hero-glow" style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle,rgba(232,228,217,.06) 0%,transparent 70%)',
        pointerEvents: 'none'
      }}></div>
      
      <div className="hero-inner" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div className="fade-in">
          <div className="hero-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '.35rem .85rem',
            borderRadius: '100px',
            fontSize: '.8rem',
            color: 'var(--muted)',
            marginBottom: '1.5rem'
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              background: '#4ade80',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            <span>{personalInfo.tagline}</span>
          </div>
          
          <h1 className="hero-name" style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '.75rem',
            color: 'var(--text)'
          }}>
            {personalInfo.name.split(' ').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          
          <p className="hero-role" style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--cream-dim)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>
            {personalInfo.title}
          </p>
          
          <p className="hero-desc" style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            lineHeight: 1.75,
            marginBottom: '2.5rem'
          }}>
            {personalInfo.shortBio}
          </p>
          
          <div className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href={personalInfo.cv} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              Download CV <Download size={16} />
            </a>
          </div>
          
          <div className="hero-social" style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="avatar-wrap fade-in" style={{ position: 'relative' }}>
          <div className="avatar" style={{
            width: '280px',
            height: '280px',
            borderRadius: '24px',
            background: 'var(--bg-card2)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div className="avatar-deco" style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 70% 30%,rgba(232,228,217,.08),transparent 60%)'
            }}></div>
            <span className="avatar-initial" style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '5rem',
              fontWeight: 800,
              color: 'var(--subtle)',
              position: 'relative',
              zIndex: 1
            }}>{personalInfo.avatarInitial}</span>
          </div>
          <div className="avatar-badge" style={{
            position: 'absolute',
            bottom: '-12px',
            right: '-12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '.6rem 1rem',
            fontSize: '.75rem',
            color: 'var(--cream-dim)',
            display: 'flex',
            alignItems: 'center',
            gap: '.4rem'
          }}>
            <Sparkles size={14} /> {personalInfo.availability}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }
        @media (max-width: 700px) {
          .hero-inner { grid-template-columns: 1fr !important; }
          .avatar-wrap { display: none !important; }
        }
      `}</style>
    </div>
  );
}
