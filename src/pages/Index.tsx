
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <ProjectsSection />
      <GetInTouchSection />
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
};

export default Index;
