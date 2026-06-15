export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem'
    }}>
      <div className="footer-copy" style={{ fontSize: '.8rem', color: 'var(--muted)' }}>
        © 2025 Rizki Pratama. Dibangun dengan ♥ dan banyak kopi.
      </div>
      <ul className="footer-links" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><a href="#about" style={{ fontSize: '.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}>Tentang</a></li>
        <li><a href="#projects" style={{ fontSize: '.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}>Proyek</a></li>
        <li><a href="#contact" style={{ fontSize: '.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}>Kontak</a></li>
      </ul>
      <a href="#hero" className="back-top" title="Kembali ke atas" style={{
        width: '36px',
        height: '36px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all .2s',
        textDecoration: 'none',
        color: 'var(--muted)'
      }}>↑</a>
      <style>{`
        .footer-links a:hover { color: var(--text) !important; }
        .back-top:hover { border-color: var(--border-hover) !important; color: var(--text) !important; }
      `}</style>
    </footer>
  );
}
