import { navigationLinks } from "./data/portfolioData";

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10, 10, 11, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: '1.1rem',
        color: 'var(--cream)',
        letterSpacing: '-0.02em'
      }}>RP.</div>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none'
      }}>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
