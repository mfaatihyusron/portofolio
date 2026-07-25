import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import LoadingScreen from "./components/LoadingScreen";
import ProjectDetailSection from "./components/ProjectDetailSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRevealing, setIsRevealing] = useState(false);
  const [componentsReveal, setComponentsReveal] = useState(false); // Controls navbar/hero components delay
  const [activeProject, setActiveProject] = useState(null);

  // Lock scrolling while loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Handle staggered reveal delay for website elements (2 seconds after particles/curtain slide up starts)
  useEffect(() => {
    if (isRevealing) {
      const timer = setTimeout(() => {
        setComponentsReveal(true);
      }, 2000); // 2-second delay
      return () => clearTimeout(timer);
    }
  }, [isRevealing]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", color: "var(--text)" }}>
      {isLoading && (
        <LoadingScreen 
          onStartReveal={() => setIsRevealing(true)} 
          onFinished={() => setIsLoading(false)} 
        />
      )}
      <ParticleBackground reveal={isRevealing} />
      
      {/* Background Ambient Nebula Glow Blobs */}
      <div style={{
        position: 'fixed',
        top: '-15%',
        left: '-15%',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.07) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'fixed',
        top: '40%',
        right: '-15%',
        width: '750px',
        height: '750px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 230, 0, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(120px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-15%',
        left: '-10%',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(110px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Website content revealed naturally as loading screen slides up */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: activeProject ? "4rem" : "0" // Offset fixed navbar in detailed view
        }}
      >
        <Navbar reveal={componentsReveal} onLinkClick={() => setActiveProject(null)} />
        
        {activeProject ? (
          <>
            <ProjectDetailSection 
              project={activeProject} 
              onBack={() => setActiveProject(null)} 
            />
            <div className="divider"></div>
            <Footer />
          </>
        ) : (
          <>
            <HeroSection reveal={componentsReveal} />
            <div className="divider"></div>
            <AboutSection />
            <div className="divider"></div>
            <TechStackSection />
            <div className="divider"></div>
            <ProjectsSection onProjectClick={setActiveProject} />
            <div className="divider"></div>
            <ExperienceSection />
            <div className="divider"></div>
            <ContactSection />
            <div className="divider"></div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
