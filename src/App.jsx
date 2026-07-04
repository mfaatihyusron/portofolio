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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRevealing, setIsRevealing] = useState(false);
  const [componentsReveal, setComponentsReveal] = useState(false); // Controls navbar/hero components delay

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
      
      {/* Website content revealed naturally as loading screen slides up */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Navbar reveal={componentsReveal} />
        <HeroSection reveal={componentsReveal} />
        <div className="divider"></div>
        <AboutSection />
        <div className="divider"></div>
        <TechStackSection />
        <div className="divider"></div>
        <ProjectsSection />
        <div className="divider"></div>
        <ExperienceSection />
        <div className="divider"></div>
        <ContactSection />
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
