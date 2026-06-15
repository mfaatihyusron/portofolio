import { useEffect, useRef } from "react";
import { projects } from "./data/portfolioData";

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-eyebrow fade-in">Proyek Pilihan</p>
      <h2 className="section-title fade-in">Studi kasus dari<br />proyek nyata.</h2>
      <div className="projects-grid stagger" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem',
        marginTop: '2.5rem'
      }}>
        {projects.map((project, i) => (
          <div key={project.id} className="project-card" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all .25s',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div className="project-mockup" style={{
              height: '160px',
              background: 'linear-gradient(135deg,#111113 0%,#16161A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '1px solid var(--border)'
            }}>
              <span style={{ fontSize: '3rem' }}>{project.icon}</span>
              <div className="project-mockup-bg" style={{
                position: 'absolute',
                inset: 0,
                opacity: .15,
                background: 'linear-gradient(135deg,#E8E4D920,transparent)'
              }}></div>
            </div>
            <div className="project-body" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="project-num" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '.7rem', color: 'var(--muted)', marginBottom: '.5rem' }}>
                0{i + 1} — {project.category}
              </div>
              <div className="project-name" style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '.35rem',
                letterSpacing: '-0.01em'
              }}>
                {project.title}
              </div>
              <div className="project-sub" style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                {project.subtitle}
              </div>
              <div className="project-star" style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '1.25rem', lineHeight: 1.65, flex: 1 }}>
                <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Situasi:</strong> {project.situation}<br />
                <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Tindakan:</strong> {project.action}<br />
                <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Hasil:</strong> {project.result}
              </div>
              <div className="project-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.25rem' }}>
                {project.techStack.map((tech, j) => (
                  <span key={j} className="tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions" style={{ display: 'flex', gap: '.75rem' }}>
                <a href={project.demo} className="btn-sm-primary" style={{
                  fontSize: '.78rem',
                  padding: '.45rem 1rem',
                  borderRadius: '7px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all .2s',
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: "'Inter', sans-serif",
                  background: 'var(--cream)',
                  color: '#0A0A0B'
                }}>View Case Study</a>
                <a href={project.github} className="btn-sm-ghost" style={{
                  fontSize: '.78rem',
                  padding: '.45rem 1rem',
                  borderRadius: '7px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all .2s',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  background: 'transparent',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}>GitHub →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .project-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-3px);
        }
        .btn-sm-primary:hover {
          background: #fff !important;
        }
        .btn-sm-ghost:hover {
          border-color: var(--border-hover) !important;
          color: var(--text) !important;
        }
        @media (max-width: 700px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
