import { useEffect, useRef } from "react";
import { personalInfo } from "./data/portfolioData";

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="contact-wrap" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'start'
      }}>
        <div className="contact-info fade-in">
          <p className="section-eyebrow">Kontak</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Mari<br />Berkolaborasi.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Terbuka untuk internship, freelance project, kolaborasi, dan peluang profesional lainnya. Saya akan senang mendengar tentang proyek Anda.
          </p>
          <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
            <a href={personalInfo.linkedin} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '36px', height: '36px', background: 'var(--subtle)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '1rem', display: 'flex', justifyContent: 'center' }}>in</div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>LinkedIn</div>
                <div style={{ fontSize: '.78rem' }}>linkedin.com/in/rizkipratama</div>
              </div>
            </a>
            <a href={personalInfo.github} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '36px', height: '36px', background: 'var(--subtle)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', display: 'flex', justifyContent: 'center' }}>gh</div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>GitHub</div>
                <div style={{ fontSize: '.78rem' }}>github.com/rizkipratama</div>
              </div>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '36px', height: '36px', background: 'var(--subtle)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', display: 'flex', justifyContent: 'center' }}>@</div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>Email</div>
                <div style={{ fontSize: '.78rem' }}>{personalInfo.email}</div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="fade-in" style={{ transitionDelay: '.15s' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--muted)', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
              KIRIM PESAN
            </p>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>NAMA</label>
              <input type="text" className="form-control" placeholder="Nama lengkap Anda" style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>EMAIL</label>
              <input type="email" className="form-control" placeholder="email@domain.com" style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>PESAN</label>
              <textarea className="form-control" placeholder="Ceritakan tentang proyek atau peluang yang ingin Anda diskusikan..." style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s', minHeight: '120px', resize: 'none' }}></textarea>
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: '.85rem' }}>Kirim Pesan →</button>
          </div>
        </div>
      </div>
      <style>{`
        .contact-link:hover {
          color: var(--text) !important;
          border-color: var(--border) !important;
          background: var(--bg-card) !important;
        }
        .form-control:focus {
          border-color: var(--cream-dim) !important;
        }
      `}</style>
    </section>
  );
}
