
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ElaborateAboutSection } from "@/components/ElaborateAboutSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { AwardsSection } from "@/components/AwardsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { DownloadResumeSection } from "@/components/DownloadResumeSection";
import { StartConversationSection } from "@/components/StartConversationSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { FuturisticRobot } from "@/components/FuturisticRobot";
import { BlendShapeBackground } from "@/components/BlendShapeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Blend shape background */}
      <BlendShapeBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ElaborateAboutSection />
        <LanguagesSection />
        <ProjectsCarousel />
        <AwardsSection />
        <TimelineSection />
        <GetInTouchSection />
        <DownloadResumeSection />
        <StartConversationSection />
        <ContactSection />
        <AnimatedFooter />
      </div>

      {/* Futuristic Robot */}
      <FuturisticRobot />
    </div>
  );
};

export default Index;
