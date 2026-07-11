import { useEffect, useRef } from "react";
import { personalInfo } from "./data/portfolioData";
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="contact-wrap" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Column: Title, Description, and Social Links (LinkedIn, GitHub, Email) */}
        <div className="contact-info fade-in">
          <p className="section-eyebrow">Contact</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)' }}>
            Let's<br />Collaborate.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Open to internships, freelance projects, collaborations, and other professional opportunities. Feel free to connect or drop a line!
          </p>
          <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '40px', height: '40px', background: 'var(--subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-dim)' }}>
                <FaLinkedin size={20} />
              </div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>LinkedIn</div>
                <div style={{ fontSize: '.78rem' }}>linkedin.com/in/mfaatihyusron</div>
              </div>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '40px', height: '40px', background: 'var(--subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-dim)' }}>
                <FaGithub size={20} />
              </div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>GitHub</div>
                <div style={{ fontSize: '.78rem' }}>github.com/mfaatihyusron</div>
              </div>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '40px', height: '40px', background: 'var(--subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-dim)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>Email</div>
                <div style={{ fontSize: '.78rem' }}>{personalInfo.email}</div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Right Column: Premium Direct Email CTA Card (Replacing the input form fields) */}
        <div className="fade-in" style={{ transitionDelay: '.15s' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '.06em' }}>
              DIRECT EMAIL
            </p>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
              Send a direct message
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Have a project or question? Send me an email, and I'll get back to you within 24 hours.
            </p>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="email-contact-btn"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '.75rem', 
                color: '#0A0A0B', 
                background: 'var(--cream)',
                textDecoration: 'none', 
                fontSize: '.92rem', 
                fontWeight: 600,
                padding: '1rem 2rem', 
                width: '100%',
                borderRadius: '14px', 
                transition: 'all .3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: '0 4px 15px rgba(230, 228, 221, 0.05)',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <Mail size={18} strokeWidth={2} />
              Send Email
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .contact-link:hover {
          color: var(--text) !important;
          border-color: var(--border) !important;
          background: var(--bg-card) !important;
        }
        .email-contact-btn:hover {
          background: #FFFFFF !important;
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(230, 228, 221, 0.25) !important;
        }
        .email-contact-btn:active {
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
