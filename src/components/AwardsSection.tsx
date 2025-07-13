
'use client';

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ShuffleCards } from "@/components/ui/shuffle-cards";

export function AwardsSection() {
  const awards = [
    {
      id: "award-1",
      icon: <Trophy className="w-8 h-8" />,
      title: "Best Project Award",
      description: "University level recognition for innovative web application",
      year: "2024",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" // Certificate placeholder
    },
    {
      id: "award-2",
      icon: <Award className="w-8 h-8" />,
      title: "Coding Competition Winner",
      description: "First place in inter-college programming contest",
      year: "2023",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop" // Certificate placeholder
    },
    {
      id: "award-3",
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Consistent top performer throughout college",
      year: "2020-2024",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=300&fit=crop" // Certificate placeholder
    },
    {
      id: "award-4",
      icon: <Medal className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Contributed to multiple open source projects",
      year: "2023-Present",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop" // Certificate placeholder
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

        <ShuffleCards cards={awards} className="pb-20" />
      </div>
    </section>
  );
}
