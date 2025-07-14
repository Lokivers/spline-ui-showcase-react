
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ElaborateAboutSection } from "@/components/ElaborateAboutSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { AwardsSection } from "@/components/AwardsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { StartConversationSection } from "@/components/StartConversationSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ElaborateAboutSection />
      <LanguagesSection />
      <ProjectsCarousel />
      <AwardsSection />
      <TimelineSection />
      <GetInTouchSection />
      <StartConversationSection />
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
};

export default Index;
