
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Globe } from "@/components/ui/globe";

export function GetInTouchSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-in-touch" className="bg-black/[0.96] relative overflow-hidden min-h-screen">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-4">
              Ready to work together? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto mt-4">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </>
        }
      >
        <div className="h-full w-full p-4 md:p-8 relative min-h-[80vh]">
          {/* Globe Background with enhanced visibility */}
          <div className="absolute inset-0 opacity-30">
            <Globe className="top-0" />
          </div>
          
          {/* Enhanced Gradient Animation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.2),transparent_50%)] animate-pulse" />
          
          <Card className="h-full bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-xl border-neutral-600/50 relative z-10 min-h-[70vh]">
            <CardContent className="p-6 md:p-12 h-full flex flex-col justify-center">
              <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                {/* Left side - Contact Info */}
                <div className="space-y-8 relative z-20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Let's Create Something Amazing
                  </h3>
                  <p className="text-neutral-200 text-xl leading-relaxed mb-8">
                    I'm always excited to work on new projects and collaborate with talented individuals. 
                    Whether you have a project in mind or just want to connect, I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-lg">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Mail className="text-blue-400" size={24} />
                      </div>
                      <span className="text-neutral-200">logeshwaran.dev@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Phone className="text-blue-400" size={24} />
                      </div>
                      <span className="text-neutral-200">+91 9876543210</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <MapPin className="text-blue-400" size={24} />
                      </div>
                      <span className="text-neutral-200">Chennai, Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-8">
                    <a href="https://github.com" className="w-14 h-14 bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                      <Github size={28} />
                    </a>
                    <a href="https://linkedin.com" className="w-14 h-14 bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                      <Linkedin size={28} />
                    </a>
                    <a href="https://twitter.com" className="w-14 h-14 bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                      <Twitter size={28} />
                    </a>
                  </div>
                </div>

                {/* Right side - CTA */}
                <div className="flex flex-col justify-center items-center text-center space-y-8 relative z-20">
                  <div className="w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse shadow-2xl shadow-blue-500/50">
                    <Mail className="text-white" size={60} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Start a Conversation
                  </h4>
                  <p className="text-neutral-200 text-lg mb-8 max-w-md">
                    Drop me a line and let's discuss your next big idea
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30"
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
