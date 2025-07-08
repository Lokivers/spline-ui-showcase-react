
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function LanguagesSection() {
  const languages = [
    {
      name: "JavaScript",
      level: 95,
      color: "from-yellow-400 to-yellow-600",
      icon: "🟨"
    },
    {
      name: "TypeScript",
      level: 90,
      color: "from-blue-400 to-blue-600",
      icon: "🔷"
    },
    {
      name: "Python",
      level: 85,
      color: "from-green-400 to-green-600",
      icon: "🐍"
    },
    {
      name: "React",
      level: 92,
      color: "from-cyan-400 to-cyan-600",
      icon: "⚛️"
    },
    {
      name: "Node.js",
      level: 88,
      color: "from-emerald-400 to-emerald-600",
      icon: "🟢"
    },
    {
      name: "Next.js",
      level: 87,
      color: "from-gray-400 to-gray-600",
      icon: "▲"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Technologies & Languages
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern technologies with hands-on experience in building scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-green-500/50 transition-all duration-300 group hover:scale-105 hover:bg-black/60">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{lang.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {lang.name}
                  </h3>
                  <span className="ml-auto text-green-400 font-semibold">
                    {lang.level}%
                  </span>
                </div>
                
                <div className="w-full bg-neutral-800 rounded-full h-3 mb-4">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${lang.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
