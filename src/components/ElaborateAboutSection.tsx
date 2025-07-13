
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Rocket, 
  Heart, 
  Coffee, 
  Lightbulb, 
  Target,
  BookOpen,
  Users,
  Award,
  Zap
} from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function ElaborateAboutSection() {
  const personalityTraits = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Problem Solver",
      description: "I love breaking down complex problems into elegant solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies and methodologies",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "User-Focused",
      description: "Creating experiences that users genuinely love and enjoy",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Continuous Learner",
      description: "Constantly updating skills and staying current with tech trends",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const achievements = [
    { label: "Projects Completed", value: "50+", icon: <Target className="w-4 h-4" /> },
    { label: "Years of Experience", value: "5+", icon: <Award className="w-4 h-4" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Zap className="w-4 h-4" /> },
    { label: "Happy Clients", value: "30+", icon: <Users className="w-4 h-4" /> }
  ];

  const interests = [
    "Full-Stack Development", "Mobile App Development", "Cloud Architecture",
    "DevOps & Automation", "AI/ML Integration", "Open Source Contributing",
    "Tech Writing", "Mentoring", "UI/UX Design", "System Architecture"
  ];

  return (
    <section className="py-16 md:py-24 relative bg-black/[0.96]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(59, 130, 246, 0.1)"
          animation={{ scale: 80, speed: 15 }}
          noise={{ opacity: 0.08, scale: 1.8 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Get to Know Me</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            More About Me
          </motion.h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-blue-500/50 transition-all duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    Hi! I'm <span className="text-blue-400 font-semibold">Logeshwaran</span>, a passionate full-stack developer 
                    with over 5 years of experience crafting digital solutions that make a difference. My journey began with 
                    curiosity about how websites work, and it has evolved into a deep love for creating innovative applications.
                  </p>
                  <p>
                    I specialize in building scalable web and mobile applications using modern technologies like React, 
                    Node.js, and Python. What drives me is the opportunity to solve real-world problems through code and 
                    create experiences that users genuinely love.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in continuous learning and staying ahead 
                    of the technology curve.
                  </p>
                </div>
              </motion.div>
            </Card>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="p-4 bg-neutral-800/50 border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                          <div className="text-white">
                            {achievement.icon}
                          </div>
                        </div>
                      </motion.div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {achievement.label}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Traits & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personality Traits */}
            <Card className="p-8 bg-black/40 backdrop-blur-sm border-neutral-800/50 hover:border-purple-500/50 transition-all duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  What Drives Me
                </h3>
                
                <div className="space-y-4">
                  {personalityTraits.map((trait, index) => (
                    <motion.div
                      key={trait.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-all duration-300 group"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${trait.color} p-2 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-white">
                          {trait.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{trait.title}</h4>
                        <p className="text-sm text-neutral-400">{trait.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>

            {/* Interests & Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1 bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-300 border border-neutral-600 hover:border-purple-500/50 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-300 cursor-default"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
