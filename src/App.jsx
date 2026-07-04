import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", color: "var(--text)" }}>
      <ParticleBackground />
      <Navbar />
      <HeroSection />
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
  );
}

export default App;
