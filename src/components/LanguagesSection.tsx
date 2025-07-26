
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function LanguagesSection() {
  const languages = [
    {
      name: "JavaScript",
      level: 95,
      color: "from-yellow-400 to-yellow-600",
      icon: "🟨",
      logo: "JS",
      glow: "shadow-yellow-500/30"
    },
    {
      name: "TypeScript",
      level: 90,
      color: "from-blue-400 to-blue-600",
      icon: "🔷",
      logo: "TS",
      glow: "shadow-blue-500/30"
    },
    {
      name: "Python",
      level: 85,
      color: "from-green-400 to-green-600",
      icon: "🐍",
      logo: "PY",
      glow: "shadow-green-500/30"
    },
    {
      name: "React",
      level: 92,
      color: "from-cyan-400 to-cyan-600",
      icon: "⚛️",
      logo: "React",
      glow: "shadow-cyan-500/30"
    },
    {
      name: "Node.js",
      level: 88,
      color: "from-emerald-400 to-emerald-600",
      icon: "🟢",
      logo: "Node",
      glow: "shadow-emerald-500/30"
    },
    {
      name: "Next.js",
      level: 87,
      color: "from-gray-400 to-gray-600",
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#fff"/>
          <path d="M16.002 6.5c-5.236 0-9.5 4.264-9.5 9.5 0 5.236 4.264 9.5 9.5 9.5 5.236 0 9.5-4.264 9.5-9.5 0-5.236-4.264-9.5-9.5-9.5zm0 1.5c4.419 0 8 3.581 8 8 0 1.7-.537 3.277-1.453 4.563l-7.11-11.01A7.97 7.97 0 0 1 16.002 8zm-7.5 8c0-1.7.537-3.277 1.453-4.563l7.11 11.01A7.97 7.97 0 0 1 16.002 24c-4.419 0-8-3.581-8-8zm8.5 7.5c-1.7 0-3.277-.537-4.563-1.453l11.01-7.11A7.97 7.97 0 0 1 24.002 16c0 4.419-3.581 8-8 8z" fill="#000"/>
        </svg>
      ),
      logo: "Next.js",
      glow: "shadow-gray-500/30"
    },
    {
      name: "Flutter",
      level: 75,
      color: "from-blue-300 to-blue-500",
      icon: "💙",
      logo: "Flutter",
      glow: "shadow-blue-400/30"
    }
  ];

  return (
    <section id="languages" className="py-20 relative min-h-screen bg-black/[0.98]">
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
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Technologies & Languages
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Proficient in modern technologies with hands-on experience in building scalable applications.
          </motion.p>
        </motion.div>

        {/* Mobile and Tablet - Scrollable Two Column View */}
        <div className="block lg:hidden">
          <ScrollArea className="h-[600px] w-full">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-4 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-green-500/50 transition-all duration-300 group hover:bg-black/60 hover:shadow-lg h-full">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="flex items-center justify-center">
                        {lang.name === "JavaScript" ? (
                          <motion.div 
                            className="w-12 h-12 bg-yellow-400 text-black rounded-lg font-bold text-lg flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            JS
                          </motion.div>
                        ) : lang.name === "TypeScript" ? (
                          <motion.div 
                            className="w-12 h-12 bg-blue-500 text-white rounded-lg font-bold text-lg flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            TS
                          </motion.div>
                        ) : (
                          <motion.span 
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {lang.icon}
                          </motion.span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white">
                        {lang.name}
                      </h3>
                      
                      <motion.span 
                        className="text-green-400 font-semibold text-lg bg-green-400/10 px-3 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        {lang.level}%
                      </motion.span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </ScrollArea>
        </div>

        {/* Desktop - Two Row Grid View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* First Row - 4 items */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {languages.slice(0, 4).map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-green-500/50 transition-all duration-300 group hover:bg-black/60 hover:shadow-2xl h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center justify-center">
                      {lang.name === "JavaScript" ? (
                        <motion.div 
                          className="w-14 h-14 bg-yellow-400 text-black rounded-lg font-bold text-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          JS
                        </motion.div>
                      ) : lang.name === "TypeScript" ? (
                        <motion.div 
                          className="w-14 h-14 bg-blue-500 text-white rounded-lg font-bold text-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          TS
                        </motion.div>
                      ) : (
                        <motion.span 
                          className="text-4xl"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {lang.icon}
                        </motion.span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white">
                      {lang.name}
                    </h3>
                    
                    <motion.span 
                      className="text-green-400 font-semibold text-lg bg-green-400/10 px-3 py-1 rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      {lang.level}%
                    </motion.span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Second Row - 3 items centered */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {languages.slice(4).map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 4) * 0.1, duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-green-500/50 transition-all duration-300 group hover:bg-black/60 hover:shadow-2xl h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center justify-center">
                      <motion.span 
                        className="text-4xl"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {lang.icon}
                      </motion.span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white">
                      {lang.name}
                    </h3>
                    
                    <motion.span 
                      className="text-green-400 font-semibold text-lg bg-green-400/10 px-3 py-1 rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: (index + 4) * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      {lang.level}%
                    </motion.span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
