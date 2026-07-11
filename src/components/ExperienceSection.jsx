import { useEffect, useState, useRef } from "react";
import { experiences } from "./data/portfolioData";
import { Users, Briefcase, Award, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  // States for tabs and autoplay
  const [activeTab, setActiveTab] = useState("work");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Intersection observer for entrance animations
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

    const elements = sectionRef.current?.querySelectorAll(".fade-in, .stagger");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Autoplay cycle effect: transitions every 4.5 seconds unless paused (hovered)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "work") return "organisasi";
        if (prev === "organisasi") return "sertifikasi";
        return "work";
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Tab definitions with matching icons and indicator colors
  const tabs = [
    { id: "work", label: "Work Experiences", icon: Briefcase, color: "#00f0ff" }, // Cyan
    { id: "organisasi", label: "Organizations", icon: Users, color: "#ffe600" },  // Yellow
    { id: "sertifikasi", label: "Certifications", icon: Award, color: "#ffffff" }  // White
  ];

  const currentItems = experiences[activeTab] || [];

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ padding: '6rem 2rem', maxWidth: '850px', margin: '0 auto' }}
    >
      <p className="section-eyebrow fade-in">Experience & Achievements</p>
      
      <div className="fade-in" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <h2 className="section-title" style={{ margin: 0 }}>My journey<br />so far.</h2>
        
        {/* Futuristic Tab Switcher Panel */}
        <div style={{
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
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setHoveredIndex(null); // Reset hovered accordion item on tab change
                }}
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
              >
                <Icon size={14} />
                {tab.label}

                {/* Ambient Autoplay Progress Bar Indicator */}
                {isActive && (
                  <div 
                    className="tab-progress-bar"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: tab.color,
                      transformOrigin: 'left',
                      animation: 'progressFill 4.5s linear forwards',
                      animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Spacious Single-Column Stagger Timeline */}
      <div className="stagger-timeline-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {currentItems.map((exp, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="timeline-item"
                  style={{
                    position: 'relative',
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top-Row Title Accordion Trigger */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.35rem'
                      }}>
                        {/* Timeline Date Tag */}
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.72rem',
                          color: isHovered ? 'var(--text)' : 'var(--muted)',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          transition: 'color 0.3s ease'
                        }}>
                          {exp.date}
                        </span>
                        
                        {/* Organization/Company Name */}
                        <span style={{
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: isHovered ? tabs.find(t => t.id === activeTab)?.color : 'var(--cream-dim)',
                          transition: 'color 0.3s ease'
                        }}>
                          {exp.org}
                        </span>
                      </div>

                      {/* Main Role Title */}
                      <h3 style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.08rem',
                        color: 'var(--text)',
                        margin: 0
                      }}>
                        {exp.title}
                      </h3>
                    </div>

                    {/* Rotating Indicator Chevron */}
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: isHovered ? 'var(--text)' : 'var(--muted)'
                    }}>
                      <ChevronDown size={15} />
                    </div>
                  </div>

                  {/* Expandable Accordion Bullet Points */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          marginTop: '1.25rem',
                          fontSize: '0.84rem',
                          color: 'var(--muted)',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                          paddingTop: '1.25rem'
                        }}>
                          {exp.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .stagger-timeline-container {
          height: 585px;
          overflow: visible;
        }
        @media (max-width: 900px) {
          .stagger-timeline-container {
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
