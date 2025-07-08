
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
    <section id="get-in-touch" className="py-12 md:py-20 relative min-h-screen bg-black/[0.99]">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll titleComponent={
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4 md:mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-base md:text-xl text-neutral-300 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
              I'm always excited to work on new projects and collaborate with talented individuals. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </div>
        }>
          <div className="flex flex-col items-center justify-center h-full p-4 md:p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-lg">
            <div className="text-center space-y-6 md:space-y-8 max-w-2xl">
              {/* Contact Information - Hidden on tablet as requested */}
              <div className="space-y-3 md:space-y-4 text-white hidden lg:block">
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-base md:text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>logeshwaran.dev@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-base md:text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 9876543210</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-base md:text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Chennai, Tamil Nadu, India</span>
                </motion.div>
              </div>
              
              <div className="pt-4 md:pt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                  Start a Conversation
                </h3>
                <p className="text-neutral-400 mb-6 md:mb-8 text-sm md:text-base">
                  Drop me a line and let's discuss your next big idea
                </p>
                
                {/* Glowing Send Message Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={scrollToContact} 
                    className="relative bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 transform group text-white border-0 overflow-hidden"
                  >
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300"></div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
