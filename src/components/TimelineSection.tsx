
'use client';

import { Timeline } from "@/components/ui/timeline";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function TimelineSection() {
  const timelineData = [
    {
      title: "2015-2022",
      content: (
        <div className="text-foreground">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            the sengunthar Higher Secondary school,erode.
            veveaham higher secondary school,dharapuram.
            Specialized inbioand Mathematics.
          </p>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
            <h4 className="text-purple-400 font-semibold mb-2">Achievement</h4>
            <p className="text-muted-foreground text-sm">Scored 72% in State Board Examinations</p>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div className="text-foreground">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Bachelor's in Computer Science Engineering at ,excel Engineering college ,namakkal.
            Focused on full-stack development, algorithms, and modern web technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/30">
              <h4 className="text-blue-400 font-semibold mb-2">Academic Excellence</h4>
              <p className="text-muted-foreground text-sm">CGPA: 9.2/10</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Key Projects</h4>
              <p className="text-muted-foreground text-sm">Built 15+ web applications</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025-Present",
      content: (
        <div className="text-foreground">
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Full Stack Developer - Building innovative web solutions and learning the new technologies.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-green-400 text-xs md:text-sm mb-2">
              ✅ React & Next.js Applications
            </div>
            <div className="flex gap-2 items-center text-green-400 text-xs md:text-sm mb-2">
              ✅ Node.js & Express Backend
            </div>
            <div className="flex gap-2 items-center text-green-400 text-xs md:text-sm mb-2">
              ✅ MongoDB & PostgreSQL Databases
            </div>
            <div className="flex gap-2 items-center text-green-400 text-xs md:text-sm mb-2">
              ✅ Mobile App Development
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative min-h-screen bg-background pt-20 pb-2">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(139, 69, 19, 0.06)"
          animation={{ scale: 45, speed: 25 }}
          noise={{ opacity: 0.1, scale: 1.5 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
