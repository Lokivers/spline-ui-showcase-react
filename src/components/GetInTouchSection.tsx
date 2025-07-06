
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Globe } from "@/components/ui/globe";

export function GetInTouchSection() {
  const scrollToGetInTouch = () => {
    const getInTouchSection = document.getElementById('get-in-touch');
    if (getInTouchSection) {
      getInTouchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-in-touch" className="bg-black/[0.96] relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-4">
              Ready to work together? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto mt-4">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </>
        }
      >
        <div className="h-full w-full p-8 relative">
          {/* Globe Background with Animation */}
          <div className="absolute inset-0 opacity-20">
            <Globe className="top-0" />
          </div>
          
          {/* Gradient Animation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse" />
          
          <Card className="h-full bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 backdrop-blur-lg border-neutral-700/50 relative z-10">
            <CardContent className="p-8 h-full flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-8 h-full">
                {/* Left side - Contact Info */}
                <div className="space-y-6 relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Let's Create Something Amazing
                  </h3>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    I'm always excited to work on new projects and collaborate with talented individuals. 
                    Whether you have a project in mind or just want to connect, I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-blue-400" size={20} />
                      <span className="text-neutral-300">logeshwaran.dev@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-blue-400" size={20} />
                      <span className="text-neutral-300">+91 9876543210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-blue-400" size={20} />
                      <span className="text-neutral-300">Chennai, Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href="https://github.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>

                {/* Right side - CTA */}
                <div className="flex flex-col justify-center items-center text-center space-y-6 relative z-20">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Mail className="text-white" size={48} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Start a Conversation
                  </h4>
                  <p className="text-neutral-300">
                    Drop me a line and let's discuss your next big idea
                  </p>
                  <Button 
                    onClick={scrollToGetInTouch}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContainerScroll>
    </section>
  );
}
