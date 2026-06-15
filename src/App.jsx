import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0A0A0B] text-[#F5F5F0] overflow-x-hidden">
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
