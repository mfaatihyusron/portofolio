import { useState } from "react";
import { personalInfo } from "./data/portfolioData";
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
import profileImg from "../assets/hero.png";

export default function HeroSection({ reveal }) {
  const [avatarHovered, setAvatarHovered] = useState(false);
  // Stagger container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  // Stagger child elements reveal variants (sliding from left to right)
  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: -30, 
      filter: "blur(6px)" 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 1.0, 
        ease: [0.22, 1, 0.36, 1] // Apple-inspired cubic-bezier
      } 
    }
  };

  // Avatar/Image special transition (soft scale and blur-out)
  const avatarVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.94, 
      filter: "blur(10px)" 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 1.4, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      } 
    }
  };

  return (
    <div id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 'none'
    }}>
      <div className="hero-grain" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        opacity: .4
      }}></div>
      <div className="hero-glow" style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle,rgba(232,228,217,.06) 0%,transparent 70%)',
        pointerEvents: 'none'
      }}></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={reveal ? "visible" : "hidden"}
        className="hero-inner" 
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div>
          {/* Tagline element */}
          <motion.div variants={childVariants} className="hero-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '.35rem .85rem',
            borderRadius: '100px',
            fontSize: '.8rem',
            color: 'var(--muted)',
            marginBottom: '1.5rem'
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              background: '#4ade80',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            <span>{personalInfo.tagline}</span>
          </motion.div>
          
          {/* Headline element */}
          <motion.h1 variants={childVariants} className="hero-name" style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '.75rem',
            color: 'var(--text)'
          }}>
            {personalInfo.name.split(' ').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>
          
          {/* Role element */}
          <motion.p variants={childVariants} className="hero-role" style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--cream-dim)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>
            {personalInfo.title}
          </motion.p>
          
          {/* Description element */}
          <motion.p variants={childVariants} className="hero-desc" style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            lineHeight: 1.75,
            marginBottom: '2.5rem'
          }}>
            {personalInfo.shortBio}
          </motion.p>
          
          {/* CTA Buttons element */}
          <motion.div variants={childVariants} className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href={personalInfo.cv} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              Download CV <Download size={16} />
            </a>
          </motion.div>
          
          {/* Social Icons element */}
          <motion.div variants={childVariants} className="hero-social" style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--muted)', transition: 'color .2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'} title="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
        
        {/* Hero Image (Avatar Wrap) element - Customized for transparent PNG silhouette */}
        <motion.div 
          variants={avatarVariants} 
          className="avatar-wrap" 
          style={{ position: 'relative' }}
          onMouseEnter={() => setAvatarHovered(true)}
          onMouseLeave={() => setAvatarHovered(false)}
        >
          <div className="avatar" style={{
            width: '320px',
            height: '320px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'visible', // Allows drop-shadow glow to spread outside container boundary
            position: 'relative',
            background: 'transparent', // Transparent background to blend PNG
            border: 'none', // Remove boxy border
            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }}>
            {/* Photo with dynamic drop-shadow following the PNG silhouette contour on hover */}
            <img 
              src={profileImg} 
              alt={personalInfo.name} 
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
                filter: avatarHovered 
                  ? 'grayscale(0%) contrast(1.05) brightness(1.05) drop-shadow(0 0 25px rgba(0, 240, 255, 0.65))' 
                  : 'grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 0 8px rgba(255, 255, 255, 0.05))',
                transform: avatarHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator element */}
      <motion.div 
        variants={childVariants}
        initial="hidden"
        animate={reveal ? "visible" : "hidden"}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--muted)',
          fontSize: '0.75rem',
          fontFamily: "'JetBrains Mono', monospace",
          zIndex: 15,
          pointerEvents: 'none'
        }}
      >
        <span style={{
          width: '18px',
          height: '30px',
          border: '1px solid var(--border-hover)',
          borderRadius: '100px',
          position: 'relative',
          display: 'inline-block'
        }}>
          <motion.span 
            animate={{ y: [2, 12, 2] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: '4px',
              height: '6px',
              background: 'var(--cream)',
              borderRadius: '50%',
              position: 'absolute',
              left: '6px',
              top: '4px'
            }}
          />
        </span>
        <span style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.65rem' }}>Scroll</span>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }
        @media (max-width: 700px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .avatar-wrap { display: none !important; }
        }
      `}</style>
    </div>
  );
}
