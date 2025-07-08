
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { motion } from "framer-motion";

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-semibold text-white mb-4"
            >
              Ready to work together? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300 max-w-3xl mx-auto mt-4"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </motion.p>
          </>
        }
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full p-4 md:p-8 relative min-h-[90vh]"
        >
          {/* Enhanced Globe Background */}
          <div className="absolute inset-0 opacity-20">
            <Globe 
              className="top-0" 
              config={{
                width: 1000,
                height: 1000,
                onRender: () => {},
                devicePixelRatio: 2,
                phi: 0,
                theta: 0.3,
                dark: 0.3,
                diffuse: 0.8,
                mapSamples: 16000,
                mapBrightness: 2,
                baseColor: [59/255, 130/255, 246/255],
                markerColor: [147/255, 51/255, 234/255],
                glowColor: [59/255, 130/255, 246/255],
                markers: [
                  { location: [13.0827, 80.2707], size: 0.1 }, // Chennai
                  { location: [40.7128, -74.006], size: 0.08 },
                  { location: [51.5074, -0.1278], size: 0.08 },
                  { location: [35.6762, 139.6503], size: 0.08 },
                  { location: [-33.8688, 151.2093], size: 0.08 },
                ],
              }}
            />
          </div>
          
          {/* Animated Gradient Overlays */}
          <motion.div 
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3), transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.3), transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.3), transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(147,51,234,0.3), transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          
          <Card className="h-full bg-gradient-to-br from-neutral-900/70 to-neutral-800/70 backdrop-blur-2xl border-neutral-600/30 relative z-10 min-h-[80vh]">
            <CardContent className="p-6 md:p-12 h-full flex flex-col justify-center">
              <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                {/* Left side - Contact Info */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8 relative z-20"
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Let's Create Something Amazing
                    </h3>
                    <p className="text-neutral-200 text-xl leading-relaxed mb-8">
                      I'm always excited to work on new projects and collaborate with talented individuals. 
                      Whether you have a project in mind or just want to connect, I'd love to hear from you.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, text: "logeshwaran.dev@gmail.com", href: "mailto:logeshwaran.dev@gmail.com" },
                      { icon: Phone, text: "+91 9876543210", href: "tel:+919876543210" },
                      { icon: MapPin, text: "Chennai, Tamil Nadu, India", href: "#" }
                    ].map(({ icon: Icon, text, href }, index) => (
                      <motion.a
                        key={text}
                        href={href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-lg group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <Icon className="text-blue-400" size={24} />
                        </div>
                        <span className="text-neutral-200 group-hover:text-white transition-colors">{text}</span>
                      </motion.a>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-6 pt-8"
                  >
                    {[
                      { icon: Github, href: "https://github.com" },
                      { icon: Linkedin, href: "https://linkedin.com" },
                      { icon: Twitter, href: "https://twitter.com" }
                    ].map(({ icon: Icon, href }) => (
                      <motion.a
                        key={href}
                        href={href}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        <Icon size={28} />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right side - CTA */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-center items-center text-center space-y-8 relative z-20"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/50"
                  >
                    <Mail className="text-white" size={60} />
                  </motion.div>
                  
                  <div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Start a Conversation
                    </h4>
                    <p className="text-neutral-200 text-lg mb-8 max-w-md">
                      Drop me a line and let's discuss your next big idea
                    </p>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      onClick={scrollToContact}
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg shadow-2xl shadow-blue-500/30 border-0"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </ContainerScroll>
    </section>
  );
}
