import { useEffect, useRef } from "react";
import { personalInfo, stats } from "./data/portfolioData";

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

      {/* Core Soft Skills / Professional Qualities */}
      <div className="fade-in" style={{ marginTop: '3.5rem' }}>
        <p style={{ 
          fontFamily: "'JetBrains Mono', monospace", 
          fontSize: '0.72rem', 
          color: 'var(--muted)', 
          letterSpacing: '0.08em', 
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          Core Qualities
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {[
            "Communication", 
            "Problem Solving", 
            "Team Collaboration", 
            "Adaptability", 
            "Project Management", 
            "Creativity", 
            "Attention to Detail"
          ].map((quality, i) => (
            <span key={i} className="tag" style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '6px', 
              fontSize: '0.8rem', 
              padding: '0.35rem 0.8rem', 
              color: 'var(--cream-dim)',
              fontFamily: "'Inter', sans-serif"
            }}>
              {quality}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
