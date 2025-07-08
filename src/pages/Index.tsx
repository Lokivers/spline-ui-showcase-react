
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsCarousel />
      <GetInTouchSection />
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
};

export default Index;
