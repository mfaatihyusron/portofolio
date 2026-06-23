import { useEffect, useRef } from "react";
import { personalInfo } from "./data/portfolioData";
import { Mail, Send } from 'lucide-react';
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
          <p className="section-eyebrow">Contact</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's<br />Collaborate.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Open to internships, freelance projects, collaborations, and other professional opportunities. I would love to hear about your project.
          </p>
          <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
            <a href={personalInfo.linkedin} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
              <div className="contact-link-icon" style={{ width: '40px', height: '40px', background: 'var(--subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream-dim)' }}>
                <FaLinkedin size={20} />
              </div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 500, fontSize: '.85rem' }}>LinkedIn</div>
                <div style={{ fontSize: '.78rem' }}>linkedin.com/in/mfaatihyusron</div>
              </div>
            </a>
            <a href={personalInfo.github} className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '.9rem', padding: '.75rem', borderRadius: '10px', border: '1px solid transparent', transition: 'all .2s' }}>
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
        
        <div className="fade-in" style={{ transitionDelay: '.15s' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--muted)', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
              SEND MESSAGE
            </p>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>NAME</label>
              <input type="text" className="form-control" placeholder="Your full name" style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>EMAIL</label>
              <input type="email" className="form-control" placeholder="email@domain.com" style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.5rem', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.05em' }}>MESSAGE</label>
              <textarea className="form-control" placeholder="Tell me about the project or opportunity you would like to discuss..." style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.75rem 1rem', color: 'var(--text)', fontSize: '.9rem', fontFamily: "'Inter', sans-serif", outline: 'none', transition: 'border-color .2s', minHeight: '120px', resize: 'none' }}></textarea>
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: '.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem' }}>
              Send Message <Send size={16} />
            </button>
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
