
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function AwardsSection() {
  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Best Project Award",
      description: "University level recognition for innovative web application",
      year: "2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Coding Competition Winner",
      description: "First place in inter-college programming contest",
      year: "2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Consistent top performer throughout college",
      year: "2020-2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Contributed to multiple open source projects",
      year: "2023-Present",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="awards" className="py-20 relative min-h-screen bg-black/[0.97]">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(255, 215, 0, 0.08)"
          animation={{ scale: 50, speed: 20 }}
          noise={{ opacity: 0.12, scale: 1.4 }}
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Recognition for dedication, innovation, and excellence in technology and academics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-yellow-500/50 transition-all duration-300 group hover:scale-105 hover:bg-black/60 h-full">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${award.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {award.icon}
                  </div>
                </div>
                <div className="text-right mb-2">
                  <span className="text-xs text-yellow-400 font-semibold bg-yellow-400/10 px-2 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {award.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {award.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
