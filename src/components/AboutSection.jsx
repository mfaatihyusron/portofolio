import { useEffect, useRef } from "react";
import { personalInfo, stats, skillCategories } from "./data/portfolioData";

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-eyebrow fade-in">About Me</p>
      
      <div className="fade-in" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'start',
        marginBottom: '3rem'
      }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
            Building at the<br />intersection of design<br />&amp; data.
          </h2>
        </div>
        <div style={{ paddingTop: '.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.95rem', marginBottom: '1.25rem' }}>
            {personalInfo.longBio.split('\n\n')[0]}
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.95rem' }}>
            {personalInfo.longBio.split('\n\n')[1]}
          </p>
        </div>
      </div>

      <div className="metrics-row fade-in" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="metric" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1.25rem' }}>
            <div className="metric-num" style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>
              {stat.value}
            </div>
            <div className="metric-label" style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.2rem' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-grid stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <div key={i} className="skill-card" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              transition: 'border-color .2s, transform .2s'
            }}>
              <div className="skill-card-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: 'var(--cream-dim)'
              }}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="skill-card-title" style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: '.95rem',
                marginBottom: '.75rem',
                color: 'var(--text)'
              }}>
                {category.title}
              </div>
              <div className="skill-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {category.skills.map((skill, j) => (
                  <span key={j} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .skill-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
