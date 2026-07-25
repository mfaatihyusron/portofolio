import { useEffect, useState, useRef } from "react";
import { technologies } from "./data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

export default function TechStackSection() {
  const sectionRef = useRef(null);

  // States for tabs and hover effects
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Intersection observer for section entrance animation
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

  // Category tab definitions
  const tabs = [
    { id: "all", label: "All" },
    { id: "Design", label: "Design" },
    { id: "Code", label: "Code" },
    { id: "tools", label: "Tools" }
  ];

  // Filtering logic
  const filteredTech = technologies.filter((tech) => {
    if (activeTab === "all") return true;
    if (activeTab === "Design") {
      return tech.category === "UI/UX Design" || tech.category === "Design";
    }
    if (activeTab === "Code") {
      return tech.category === "Code";
    }
    if (activeTab === "tools") {
      return tech.category === "Languages" || tech.category === "Tools";
    }
    return true;
  });

  // Dynamic brand-color getter
  const getBrandColor = (tech) => {
    if (tech.name === "Archi") return "#57c5f7"; // Cyan/Blue
    if (tech.name === "Maze") return "#FF007A";  // Maze Magenta
    if (tech.name === "MS Office 365") return "#D83B01"; // Office Red/Orange
    if (tech.name === "Next.js" || tech.name === "Vercel" || tech.name === "CapCut") return "#E6E4DD"; // Bone White fallback for black logo brands
    const isSimpleIcon = tech.icon && tech.icon.path;
    return isSimpleIcon ? `#${tech.icon.hex}` : '#E6E4DD';
  };

  return (
    <section id="tech" ref={sectionRef} style={{ background: 'transparent', position: 'relative', zIndex: 1, padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Background Decorative Soft Blur Glow */}
      <div style={{
        content: "''",
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle,rgba(230,228,221,.02),transparent 65%)',
        pointerEvents: 'none',
        zIndex: -1
      }}></div>
      
      <p className="section-eyebrow fade-in">Tech Stack</p>
      
      <div className="fade-in" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '1rem'
      }}>
        <h2 className="section-title" style={{ margin: 0 }}>Tools &amp; technologies<br />I use on a daily basis.</h2>
        
        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border)',
          padding: '0.35rem',
          borderRadius: '14px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setHoveredIndex(null); // Reset hovered card on filter switch
                }}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Animated Clean Flex-Wrap Badges Cloud */}
      <div 
        className="tech-grid stagger" 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'flex-start',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '1rem 0'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech, i) => {
            const isSimpleIcon = tech.icon && tech.icon.path;
            const brandColor = getBrandColor(tech);
            const isHovered = hoveredIndex === i;
            const Icon = tech.icon;
            const needsWhiteBg = ["GitHub", "Java", "Miro", "Express", "SQLite"].includes(tech.name);
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: isHovered ? `${brandColor}45` : 'var(--border)',
                  boxShadow: isHovered ? `0 0 15px ${brandColor}18` : 'none',
                  borderRadius: '12px',
                  padding: '0.5rem 1rem',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  position: 'relative'
                }}
              >
                {/* SVG Brand / Lucide Icon */}
                <span className="tech-icon" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: brandColor,
                  transition: 'transform 0.2s ease',
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                  ...(needsWhiteBg ? {
                    background: '#ffffff',
                    borderRadius: '4px',
                    padding: '2px',
                    width: '22px',
                    height: '22px'
                  } : {})
                }}>
                  {isSimpleIcon ? (
                    <svg 
                      role="img" 
                      viewBox="0 0 24 24" 
                      width={needsWhiteBg ? "14" : "18"} 
                      height={needsWhiteBg ? "14" : "18"}
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={tech.icon.path} />
                    </svg>
                  ) : (
                    Icon && <Icon size={needsWhiteBg ? 14 : 18} strokeWidth={1.5} />
                  )}
                </span>

                {/* Tech Name */}
                <span className="tech-name" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: isHovered ? 'var(--text)' : 'var(--cream-dim)',
                  transition: 'color 0.2s ease'
                }}>
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
