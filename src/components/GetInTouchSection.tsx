
'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with talented individuals. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Details - Hidden on tablet view */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="p-6 bg-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-green-500/50 transition-all duration-300 group">
              <Mail className="w-8 h-8 text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-neutral-300 text-sm">logeshwaran.dev@gmail.com</p>
            </Card>
            
            <Card className="p-6 bg-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-blue-500/50 transition-all duration-300 group">
              <Phone className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-neutral-300 text-sm">+91 9876543210</p>
            </Card>
            
            <Card className="p-6 bg-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-purple-500/50 transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-neutral-300 text-sm">Chennai, Tamil Nadu, India</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Start a Conversation
            </h3>
            <p className="text-neutral-400 mb-8">
              Drop me a line and let's discuss your next big idea
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              Send Message
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
