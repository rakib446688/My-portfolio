import NavBar from "../components/portfolio/NavBar.jsx";
import HeroSection from "../components/portfolio/HeroSection.jsx";
import AboutSection from "../components/portfolio/AboutSection.jsx";
import SkillsSection from "../components/portfolio/SkillsSection.jsx";
import ProjectsSection from "../components/portfolio/ProjectsSection.jsx";
import ExperienceSection from "../components/portfolio/ExperienceSection.jsx";
import EducationSection from "../components/portfolio/EducationSection.jsx";
import ContactSection from "../components/portfolio/ContactSection.jsx";

export default function Portfolio() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={[]} isLoading={false} />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />

      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-zinc-600 text-sm">? 2026 MD Rakib Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
}
