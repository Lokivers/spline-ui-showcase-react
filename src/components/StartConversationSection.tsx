
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Send, Sparkles, Heart } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function StartConversationSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "logeshwaran.dev@gmail.com",
      href: "mailto:logeshwaran.dev@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative bg-black/[0.95]">
      {/* Glowing Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <EtherealShadow
          color="rgba(139, 92, 246, 0.15)"
          animation={{ scale: 70, speed: 20 }}
          noise={{ opacity: 0.1, scale: 1.5 }}
          sizing="fill"
          className="w-full h-full"
        />
        {/* Additional glowing orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Let's Connect</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start a Conversation
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Drop me a line and let's discuss your next big idea. I'm always excited to collaborate on innovative projects.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-black/40 backdrop-blur-xl border-2 border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-800/30 hover:bg-neutral-800/50 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group/item"
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} p-3 mb-3 group-hover/item:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </motion.div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                        {info.label}
                      </h3>
                      <p className="text-white font-medium text-sm md:text-base">
                        {info.value}
                      </p>
                    </motion.a>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/btn relative overflow-hidden"
                    >
                      {/* Glowing effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-xl"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="relative flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="text-lg">Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </Button>
                  </motion.div>
                  
                  <motion.p 
                    className="text-neutral-500 text-sm mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    I typically respond within 24 hours
                  </motion.p>
                </motion.div>

                {/* Made with Love Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-8 pt-6 border-t border-neutral-700/50"
                >
                  <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm">
                    <span>Made with</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </motion.div>
                    <span>and code</span>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
