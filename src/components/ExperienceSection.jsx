import { useEffect, useRef } from "react";
import { experiences } from "./data/portfolioData";
import { Users, Trophy } from 'lucide-react';

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-eyebrow fade-in">Pengalaman & Pencapaian</p>
      <h2 className="section-title fade-in">Perjalanan<br />saya sejauh ini.</h2>
      
      <div className="exp-cols fade-in" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem'
      }}>
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--muted)', marginBottom: '1.25rem', letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <Users size={14} /> ORGANISASI & KEPANITIAAN
          </p>
          <div className="timeline" style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '.5rem', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }}></div>
            {experiences.organisasi.map((exp, i) => (
              <div key={i} className="timeline-item" style={{ position: 'relative', marginBottom: '2.5rem' }}>
                <div className="timeline-dot" style={{ position: 'absolute', left: '-1.625rem', top: '.3rem', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--cream-dim)', border: '2px solid var(--bg)' }}></div>
                <div className="timeline-date" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--muted)', marginBottom: '.35rem' }}>{exp.date}</div>
                <div className="timeline-title" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '.95rem', color: 'var(--text)', marginBottom: '.2rem' }}>{exp.title}</div>
                <div className="timeline-org" style={{ fontSize: '.82rem', color: 'var(--cream-dim)', marginBottom: '.4rem' }}>{exp.org}</div>
                <div className="timeline-desc" style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{exp.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--muted)', marginBottom: '1.25rem', letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <Trophy size={14} /> KOMPETISI & SERTIFIKASI
          </p>
          <div className="timeline" style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '.5rem', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }}></div>
            {experiences.kompetisi.map((exp, i) => (
              <div key={i} className="timeline-item" style={{ position: 'relative', marginBottom: '2.5rem' }}>
                <div className="timeline-dot" style={{ position: 'absolute', left: '-1.625rem', top: '.3rem', width: '10px', height: '10px', borderRadius: '50%', background: exp.color || 'var(--cream-dim)', border: '2px solid var(--bg)' }}></div>
                <div className="timeline-date" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--muted)', marginBottom: '.35rem' }}>{exp.date}</div>
                <div className="timeline-title" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '.95rem', color: 'var(--text)', marginBottom: '.2rem' }}>{exp.title}</div>
                <div className="timeline-org" style={{ fontSize: '.82rem', color: 'var(--cream-dim)', marginBottom: '.4rem' }}>{exp.org}</div>
                <div className="timeline-desc" style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{exp.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .exp-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
