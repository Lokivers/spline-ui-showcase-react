
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ElaborateAboutSection } from "@/components/ElaborateAboutSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import GitHubProjects from "../components/GitHubProjects";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { AwardsSection } from "@/components/AwardsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { DownloadResumeSection } from "@/components/DownloadResumeSection";
import { StartConversationSection } from "@/components/StartConversationSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { GestureRobot } from "@/components/GestureRobot";
import { BlendShapeBackground } from "@/components/BlendShapeBackground";
<<<<<<< HEAD
import React from "react";

=======
 
>>>>>>> f99432ddecc531fab6d25c7d4e2e172afdff6337

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Blend shape background */}
      <BlendShapeBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ElaborateAboutSection />
        <LanguagesSection />
        <GitHubProjects />
  
        <AwardsSection />
        <TimelineSection />
        <DownloadResumeSection />
        <StartConversationSection />
        <ContactSection />
        <AnimatedFooter />
      </div>

      {/* Gesture Robot */}
      <GestureRobot />
    </div>
  );
};

export default Index;
