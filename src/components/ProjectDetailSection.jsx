import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Briefcase, Award, CheckCircle } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';

function GalleryImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <div style={{
      borderRadius: '16px',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.02)',
      aspectRatio: '16/9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <img 
        src={src} 
        alt={alt} 
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          cursor: 'zoom-in'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
  );
}

const getProjectLinks = (project) => {
  const links = project.links || {};
  const list = [];
  
  if (links.demo) {
    list.push({ type: 'demo', label: 'Live Project Demo', url: links.demo, icon: ExternalLink, primary: true });
  }
  if (links.figma) {
    list.push({ type: 'figma', label: 'Figma Prototype', url: links.figma, icon: FaFigma, primary: true });
  }
  if (links.colab) {
    list.push({ type: 'colab', label: 'Colab Notebook', url: links.colab, icon: SiGooglecolab, primary: true });
  }
  if (links.github) {
    list.push({ type: 'github', label: 'Source Code (GitHub)', url: links.github, icon: FaGithub, primary: !list.some(l => l.primary) });
  }
  
  return list;
};

export default function ProjectDetailSection({ project, onBack }) {
  const [imgError, setImgError] = useState(false);

  // Scroll to top when this section loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) return null;

  const Icon = project.icon;
  const cs = project.caseStudy || {};

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        padding: '2rem 1.5rem 6rem 1.5rem',
        maxWidth: '850px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        color: 'var(--text)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Sticky/Fixed-style Back Button Nav */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '1rem'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--cream-dim)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            cursor: 'pointer',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            transition: 'color 0.2s ease',
            padding: 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream-dim)'}
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        <span style={{ 
          fontSize: '0.75rem', 
          fontFamily: "'JetBrains Mono', monospace", 
          color: 'var(--muted)',
          letterSpacing: '0.05em' 
        }}>
          CASE STUDY — {project.category.toUpperCase()}
        </span>
      </div>

      {/* Hero Header Block */}
      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ 
          display: 'inline-flex', 
          padding: '0.35rem 0.75rem', 
          background: 'rgba(255,255,255,0.03)', 
          border: '1px solid rgba(255,255,255,0.06)', 
          borderRadius: '20px', 
          fontSize: '0.75rem', 
          color: 'var(--cream-dim)',
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: '1rem'
        }}>
          {project.category}
        </div>
        
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#E6E4DD',
          marginBottom: '0.75rem'
        }}>
          {project.title}
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
          color: 'var(--muted)',
          lineHeight: 1.4,
          fontWeight: 400
        }}>
          {project.subtitle}
        </p>
      </header>

      {/* Main Feature Image / Mockup Fallback */}
      <div style={{
        width: '100%',
        height: 'clamp(220px, 45vw, 420px)',
        background: 'linear-gradient(135deg, #121216 0%, #1a1a22 100%)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3.5rem'
      }}>
        {!imgError && project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--cream-dim)' }}>
            {Icon && <Icon size={64} strokeWidth={1} />}
            <span style={{ fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>
              [ Visual Mockup Placeholder ]
            </span>
          </div>
        )}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,12,0.8) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Project Meta Information Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2rem',
        background: 'rgba(30, 30, 36, 0.45)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '2rem',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        marginBottom: '3.5rem'
      }}>
        <div>
          <h4 style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Role
          </h4>
          <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--cream-dim)' }}>
            {cs.role || "Creator"}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Timeline
          </h4>
          <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--cream-dim)' }}>
            {cs.timeline || "Completed"}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Tech Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.2rem' }}>
            {project.techStack.map((tech, i) => (
              <span key={i} className="tag" style={{ fontSize: '0.72rem', padding: '0.25rem 0.55rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Deliverables
          </h4>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {(cs.deliverables || []).map((item, i) => (
              <li key={i} style={{ fontSize: '0.85rem', color: 'var(--cream-dim)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study Detailed Body */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Overview */}
        <div>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#E6E4DD' }}>
            Overview
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--muted)' }}>
            {cs.overview}
          </p>
        </div>

        {/* The Challenge (Situation) */}
        <div>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: '#E6E4DD', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={20} style={{ color: '#ff6b6b' }} /> The Challenge (Situation)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(cs.challenges || []).map((challenge, i) => (
              <div key={i} style={{ 
                background: 'rgba(255, 107, 107, 0.03)', 
                borderLeft: '3px solid #ff6b6b', 
                padding: '1rem 1.25rem', 
                borderRadius: '0 12px 12px 0' 
              }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--cream-dim)', margin: 0 }}>
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Solution (Action) */}
        <div>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: '#E6E4DD', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Briefcase size={20} style={{ color: '#4dadf7' }} /> The Solution (Action)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(cs.solutions || []).map((solution, i) => (
              <div key={i} style={{ 
                background: 'rgba(77, 173, 247, 0.03)', 
                borderLeft: '3px solid #4dadf7', 
                padding: '1rem 1.25rem', 
                borderRadius: '0 12px 12px 0' 
              }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--cream-dim)', margin: 0 }}>
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Impact (Result) */}
        <div>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: '#E6E4DD', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={20} style={{ color: '#51cf66' }} /> Key Features &amp; Impact (Result)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            {(cs.features || []).map((feature, i) => {
              const [title, desc] = feature.split(': ');
              return (
                <div key={i} style={{ 
                  background: 'rgba(81, 207, 102, 0.03)', 
                  borderLeft: '3px solid #51cf66', 
                  padding: '1rem 1.25rem', 
                  borderRadius: '0 12px 12px 0' 
                }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--cream-dim)', margin: 0 }}>
                    <strong style={{ color: '#E6E4DD' }}>{title}:</strong> {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Gallery (Conditional) */}
        {cs.gallery && cs.gallery.length > 0 && (
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#E6E4DD' }}>
              Project Gallery
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Screenshots, interface designs, and key deliverables.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem'
            }}>
              {cs.gallery.map((imgSrc, idx) => (
                <GalleryImage key={idx} src={imgSrc} alt={`${project.title} screenshot ${idx + 1}`} />
              ))}
            </div>
          </div>
        )}

        {/* Action Links & Footer Back Button */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2.5rem',
          borderTop: '1px solid var(--border)', 
          marginTop: '2rem',
          paddingTop: '3rem' 
        }}>
          {/* External Code & Live Demo Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {getProjectLinks(project).map((link, idx) => {
              const LinkIcon = link.icon;
              return (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    fontFamily: "'Inter', sans-serif",
                    background: link.primary ? 'var(--cream)' : 'transparent',
                    color: link.primary ? '#0A0A0B' : 'var(--muted)',
                    border: link.primary ? 'none' : '1px solid var(--border)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (link.primary) {
                      e.currentTarget.style.background = '#ffffff';
                    } else {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.color = 'var(--text)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (link.primary) {
                      e.currentTarget.style.background = 'var(--cream)';
                    } else {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--muted)';
                    }
                  }}
                >
                  {link.label} <LinkIcon size={16} />
                </a>
              );
            })}
          </div>

          {/* Large Back Button */}
          <button 
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '0.75rem 2rem',
              color: 'var(--cream-dim)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--cream-dim)';
            }}
          >
            <ArrowLeft size={16} /> Back to Projects List
          </button>
        </div>

      </section>
    </motion.article>
  );
}
