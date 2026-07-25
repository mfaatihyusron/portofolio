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
  const [activeProject, setActiveProject] = useState(null);
  const [scrollTarget, setScrollTarget] = useState(null);

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

  // Handle smooth scroll when returning to a specific section from detailed project view
  useEffect(() => {
    if (scrollTarget && !activeProject) {
      const targetId = scrollTarget.substring(1); // remove '#'
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setScrollTarget(null); // Reset target
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollTarget, activeProject]);

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
        <Navbar 
          reveal={!isLoading} 
          onLinkClick={(target) => {
            setActiveProject(null);
            if (target) setScrollTarget(target);
          }} 
        />
        
        {activeProject ? (
          <>
            <ProjectDetailSection 
              project={activeProject} 
              onBack={() => {
                setActiveProject(null);
                setScrollTarget("#projects");
              }} 
            />
            <div className="divider"></div>
            <Footer />
          </>
        ) : (
          <>
            <HeroSection reveal={!isLoading} />
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
