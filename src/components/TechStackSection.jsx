import { useEffect, useRef } from "react";
import { technologies } from "./data/portfolioData";

export default function TechStackSection() {
  const sectionRef = useRef(null);

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

    const elements = sectionRef.current.querySelectorAll(".fade-in, .stagger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" ref={sectionRef} style={{ background: 'var(--bg)', position: 'relative', padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        content: "''",
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle,rgba(232,228,217,.03),transparent 65%)',
        pointerEvents: 'none'
      }}></div>
      
      <p className="section-eyebrow fade-in">Tech Stack</p>
      <h2 className="section-title fade-in">Alat &amp; teknologi<br />yang saya gunakan sehari-hari.</h2>
      
      <div className="tech-grid stagger" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '1rem',
        marginTop: '2.5rem'
      }}>
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div key={i} className="tech-card" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '1.25rem',
              cursor: 'default',
              transition: 'all .25s',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="tech-icon" style={{ 
                fontSize: '1.75rem', 
                marginBottom: '.75rem', 
                display: 'block',
                color: 'var(--cream-dim)'
              }}>
                <Icon size={32} strokeWidth={1.5} />
              </span>
              <div className="tech-name" style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: '.85rem',
                color: 'var(--text)',
                marginBottom: '.25rem'
              }}>
                {tech.name}
              </div>
              <div className="tech-cat" style={{ fontSize: '.7rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                {tech.category}
              </div>
              <div className="tech-skill-bar" style={{ height: '2px', background: 'var(--subtle)', borderRadius: '2px', marginTop: '.75rem', overflow: 'hidden' }}>
                <div className="tech-skill-fill" style={{ height: '100%', background: 'var(--cream-dim)', borderRadius: '2px', transition: 'width .8s ease', width: `${tech.level}%` }}></div>
              </div>
              <div className="tech-desc" style={{
                fontSize: '.75rem',
                color: 'var(--muted)',
                lineHeight: 1.5,
                marginTop: '.6rem',
                maxHeight: 0,
                overflow: 'hidden',
                transition: 'max-height .4s ease, opacity .3s',
                opacity: 0
              }}>
                {tech.description}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .tech-card:hover {
          border-color: var(--cream-dim) !important;
          transform: translateY(-3px);
          background: var(--bg-card2) !important;
        }
        .tech-card:hover .tech-desc {
          max-height: 100px;
          opacity: 1;
        }
        .tech-card::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          background: radial-gradient(circle at 50% 0%,rgba(232,228,217,.06),transparent 70%);
          transition: opacity .3s;
          pointer-events: none;
        }
        .tech-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
