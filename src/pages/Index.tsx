
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GetInTouchSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
