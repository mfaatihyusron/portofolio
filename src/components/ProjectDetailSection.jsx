import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Briefcase, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';

function ProjectCarousel({ images, title, icon: Icon, isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  if (!images || images.length === 0) return null;

  const validImages = images.filter((src, idx) => src && !failedIndexes.includes(idx));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  // Touch Swipe handlers for mobile devices
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (validImages.length === 0) {
    return (
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, #121216 0%, #1a1a22 100%)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        color: 'var(--cream-dim)',
        marginBottom: '3.5rem'
      }}>
        {Icon && <Icon size={64} strokeWidth={1} />}
        <span style={{ fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)' }}>
          [ Visual Mockup Placeholder ]
        </span>
      </div>
    );
  }

  const showControls = validImages.length > 1;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: isMobile ? '0' : '1.25rem',
      marginBottom: '3.5rem',
      position: 'relative'
    }}>
      {/* External Prev Arrow (Desktop Only) */}
      {showControls && !isMobile && (
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border)',
            color: 'var(--cream-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 5,
            transition: 'all 0.2s ease',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 240, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            e.currentTarget.style.color = 'var(--cream-dim)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Main Slider Container */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          flex: 1,
          aspectRatio: '16/9',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid var(--border)',
          background: 'linear-gradient(135deg, #121216 0%, #1a1a22 100%)',
        }}
      >
        {/* Sliding Track */}
        <div style={{
          display: 'flex',
          width: `${validImages.length * 100}%`,
          height: '100%',
          transform: `translate3d(-${(currentIndex * 100) / validImages.length}%, 0, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {validImages.map((src, idx) => (
            <div key={idx} style={{ width: `${100 / validImages.length}%`, height: '100%' }}>
              <img 
                src={src} 
                alt={`${title} slide ${idx + 1}`}
                onError={() => setFailedIndexes((prev) => [...prev, idx])}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        {showControls && (
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 5,
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            background: 'rgba(10, 10, 12, 0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}>
            {validImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: idx === currentIndex ? 'var(--cream)' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                  transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* External Next Arrow (Desktop Only) */}
      {showControls && !isMobile && (
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border)',
            color: 'var(--cream-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 5,
            transition: 'all 0.2s ease',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 240, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            e.currentTarget.style.color = 'var(--cream-dim)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

// Projects links mapping helper is no longer needed since project.links is a dynamic array

export default function ProjectDetailSection({ project, onBack }) {
  const [showFloatingBack, setShowFloatingBack] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Scroll to top when this section loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  // Listen to scroll position for toggling the floating back button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowFloatingBack(true);
      } else {
        setShowFloatingBack(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to window size to adapt floating button layout (pill vs circle)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!project) return null;
  const cs = project.caseStudy || {};

  return (
    <>
      {/* Floating Back Button */}
      {showFloatingBack && (
        <button
          onClick={onBack}
          style={{
            position: 'fixed',
            top: isMobile ? '4.75rem' : '5.5rem',
            left: isMobile ? '1rem' : '2.5rem',
            zIndex: 110,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            width: isMobile ? '38px' : 'auto',
            height: isMobile ? '38px' : 'auto',
            padding: isMobile ? '0' : '0.55rem 1.1rem',
            borderRadius: '50px',
            background: 'rgba(10, 10, 12, 0.85)',
            border: '1px solid var(--border)',
            color: 'var(--cream-dim)',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 240, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--cream-dim)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
          }}
        >
          <ArrowLeft size={16} />
          {!isMobile && <span>Back</span>}
        </button>
      )}

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

        {/* Main Image Carousel */}
        <ProjectCarousel 
          images={[project.image, ...(cs.gallery || [])]} 
          title={project.title} 
          icon={project.icon} 
          isMobile={isMobile}
        />

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
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--muted)', whiteSpace: 'pre-line', textAlign: 'justify' }}>
              {cs.overview ? cs.overview.replace(/\/n/g, '\n') : ''}
            </p>
          </div>

          {/* The Challenge (Situation) */}
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: '#E6E4DD', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} style={{ color: '#ff6b6b' }} /> The Challenge
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
              <Briefcase size={20} style={{ color: '#4dadf7' }} /> The Solution
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
              <CheckCircle size={20} style={{ color: '#51cf66' }} /> Key Features &amp; Impact
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
              {project.links && project.links.map((link, idx) => {
                let LinkIcon = ExternalLink;
                if (link.type === 'github') LinkIcon = FaGithub;
                if (link.type === 'figma') LinkIcon = FaFigma;
                if (link.type === 'colab') LinkIcon = SiGooglecolab;

                const isPrimary = idx === 0;
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
                      background: isPrimary ? 'var(--cream)' : 'transparent',
                      color: isPrimary ? '#0A0A0B' : 'var(--muted)',
                      border: isPrimary ? 'none' : '1px solid var(--border)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (isPrimary) {
                        e.currentTarget.style.background = '#ffffff';
                      } else {
                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                        e.currentTarget.style.color = 'var(--text)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isPrimary) {
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
    </>
  );
}
