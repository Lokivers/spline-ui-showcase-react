
'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function GetInTouchSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-in-touch" className="py-20 relative min-h-screen bg-black/[0.99]">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(34, 197, 94, 0.08)"
          animation={{ scale: 55, speed: 30 }}
          noise={{ opacity: 0.15, scale: 1.1 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>
          }
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="text-center space-y-6">
              <div className="space-y-4 text-white">
                <p className="text-lg">logeshwaran.dev@gmail.com</p>
                <p className="text-lg">+91 9876543210</p>
                <p className="text-lg">Chennai, Tamil Nadu, India</p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Start a Conversation
                </h3>
                <p className="text-neutral-400 mb-6">
                  Drop me a line and let's discuss your next big idea
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
