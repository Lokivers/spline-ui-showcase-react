
'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function GetInTouchSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="get-in-touch" className="pt-0 pb-12 md:pb-20 relative min-h-screen bg-black/[0.99]">
      {/* Ethereal Shadow Background with enhanced glow */}
      <div className="absolute inset-0">
        <EtherealShadow 
          color="rgba(34, 197, 94, 0.12)" 
          animation={{
            scale: 55,
            speed: 30
          }} 
          noise={{
            opacity: 0.2,
            scale: 1.1
          }} 
          sizing="fill" 
          className="w-full h-full" 
        />
      </div>

      {/* Additional glowing background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-8 md:mb-12 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-neutral-300 max-w-2xl mx-auto"
              >
                Ready to bring your ideas to life? Let's collaborate and create something amazing together.
              </motion.p>
            </div>
          }
        >
          <div className="h-full flex items-center justify-center p-8">
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Mail className="text-green-400" size={32} />
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-neutral-300">logeshwaran@example.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Phone className="text-blue-400" size={32} />
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-neutral-300">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <MapPin className="text-purple-400" size={32} />
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-neutral-300">San Francisco, CA</p>
              </motion.div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
