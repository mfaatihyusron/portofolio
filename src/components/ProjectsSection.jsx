import { useEffect, useRef, useState } from "react";
import { projects } from "./data/portfolioData";
import { ExternalLink, Palette, Code2, Brain } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';

const tabs = [
  { id: "uiux", label: "Design", icon: Palette, color: "#ffe600" },      // Yellow
  { id: "web", label: "Web Development", icon: Code2, color: "#00f0ff" },    // Cyan
  { id: "datascience", label: "Data Science", icon: Brain, color: "#ffffff" } // White
];

function ProjectCard({ project, i, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const Icon = project.icon;

  const ghostButtonStyle = {
    fontSize: '.75rem',
    padding: '.45rem 0.85rem',
    borderRadius: '7px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all .2s',
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    background: 'transparent',
    color: 'var(--muted)',
    border: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    gap: '.35rem'
  };

  return (
    <div 
      className="project-card" 
      onClick={() => onSelect(project)}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all .25s',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
    >
      <div className="project-mockup" style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg,#111113 0%,#16161A 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        color: 'var(--cream-dim)'
      }}>
        {!imgError && project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          Icon && <Icon size={48} strokeWidth={1.5} />
        )}
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
          letterSpacing: '-0.01em',
          color: 'var(--text)'
        }}>
          {project.title}
        </div>
        
        <div className="project-sub" style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>
          {project.subtitle}
        </div>
        
        <div className="project-star" style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '1.25rem', lineHeight: 1.65, flex: 1 }}>
          <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Situation:</strong> {project.situation}<br />
          <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Action:</strong> {project.action}<br />
          <strong style={{ color: 'var(--cream-dim)', fontWeight: 500 }}>Result:</strong> {project.result}
        </div>
        
        <div className="project-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.25rem' }}>
          {project.techStack.map((tech, j) => (
            <span key={j} className="tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-actions" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }} onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={() => onSelect(project)} 
            className="btn-sm-primary" 
            style={{
              fontSize: '.75rem',
              padding: '.45rem 0.95rem',
              borderRadius: '7px',
              fontWeight: 500,
              transition: 'all .2s',
              cursor: 'pointer',
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              background: 'var(--cream)',
              color: '#0A0A0B',
              display: 'flex',
              alignItems: 'center',
              gap: '.35rem'
            }}
          >
            Case Study <ExternalLink size={14} />
          </button>
          
          {/* Render links dynamically from the array */}
          {project.links && project.links.map((link, idx) => {
            let LinkIcon = ExternalLink;
            if (link.type === 'github') LinkIcon = FaGithub;
            if (link.type === 'figma') LinkIcon = FaFigma;
            if (link.type === 'colab') LinkIcon = SiGooglecolab;

            return (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-sm-ghost" 
                style={ghostButtonStyle}
              >
                {link.label} <LinkIcon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onProjectClick }) {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("uiux");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 4;

  // Reset page to 1 when changing tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

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

  // Filter projects by active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "uiux") {
      return project.category === "UI/UX Design" || project.category === "Mobile Design" || project.category === "Graphic Design" || project.category === "Design System";
    }
    if (activeTab === "web") {
      return project.category === "Full Stack" || project.category === "Frontend" || project.category === "Backend";
    }
    if (activeTab === "datascience") {
      return project.category === "Machine Learning" || project.category === "Data Science";
    }
    return true;
  });

  // Calculate pages
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Header and Tabs Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '2.5rem',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1.5rem'
      }}>
        <div>
          <p className="section-eyebrow fade-in" style={{ marginBottom: '0.5rem' }}>Selected Projects</p>
          <h2 className="section-title fade-in" style={{ margin: 0, lineHeight: 1.15 }}>Case studies of<br />real-world projects.</h2>
        </div>
        
        {/* Tabs Filter Menu - styled identically to Experience Section */}
        <div className="fade-in" style={{
          display: 'flex',
          gap: '0.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border)',
          padding: '0.4rem',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  position: 'relative',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--muted)';
                }}
              >
                <TabIcon size={14} />
                {tab.label}

                {/* Accent Underline indicator */}
                {isActive && (
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: tab.color
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Grid of Projects */}
      <div className="projects-grid stagger" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem'
      }}>
        {currentProjects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            i={(currentPage - 1) * PAGE_SIZE + i} 
            onSelect={onProjectClick} 
          />
        ))}
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '3.5rem',
          fontFamily: "'Inter', sans-serif"
        }}>
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: currentPage === 1 ? 'var(--muted)' : 'var(--text)',
              padding: '0.4rem 0.8rem',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '0.82rem',
              transition: 'all 0.2s',
              opacity: currentPage === 1 ? 0.4 : 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 1) e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            Prev
          </button>
          
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(page => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: currentPage === page ? 'var(--cream)' : 'transparent',
                border: '1px solid ' + (currentPage === page ? 'var(--cream)' : 'var(--border)'),
                borderRadius: '8px',
                color: currentPage === page ? '#0A0A0B' : 'var(--muted)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: currentPage === page ? 600 : 400,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--muted)';
                }
              }}
            >
              {page}
            </button>
          ))}
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: currentPage === totalPages ? 'var(--muted)' : 'var(--text)',
              padding: '0.4rem 0.8rem',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '0.82rem',
              transition: 'all 0.2s',
              opacity: currentPage === totalPages ? 0.4 : 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== totalPages) e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            Next
          </button>
        </div>
      )}
      
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
