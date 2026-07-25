import { navigationLinks } from "./data/portfolioData";
import { motion } from "framer-motion";

export default function Navbar({ reveal, onLinkClick }) {
  // Stagger container for navbar items
  const navContainer = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Stagger child element sliding from left to right
  const navItem = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <motion.nav 
      variants={navContainer}
      initial="hidden"
      animate={reveal ? "visible" : "hidden"}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 10, 11, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      {/* Logo sliding in from left */}
      <motion.div 
        variants={navItem}
        onClick={() => onLinkClick && onLinkClick("#about")}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: 'var(--cream)',
          letterSpacing: '-0.02em',
          cursor: onLinkClick ? 'pointer' : 'default'
        }}
      >
        MFY.
      </motion.div>
 
      {/* Navigation menu list */}
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none'
      }}>
        {navigationLinks.map((link) => (
          <motion.li 
            variants={navItem}
            key={link.name}
          >
            <a 
              href={link.href}
              onClick={(e) => {
                if (onLinkClick) {
                  onLinkClick(link.href);
                }
              }}
              style={{
                color: 'var(--muted)',
                fontSize: '.875rem',
                textDecoration: 'none',
                transition: 'color .2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
