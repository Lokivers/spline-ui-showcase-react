
'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Server, Database } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, Express, FastAPI, REST APIs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Database & Cloud",
      description: "MongoDB, PostgreSQL, AWS, Firebase, Docker",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 relative min-h-screen bg-background">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(59, 130, 246, 0.08)"
          animation={{ scale: 60, speed: 35 }}
          noise={{ opacity: 0.2, scale: 1.3 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 md:mb-6">
            About Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            I'm a passionate full-stack developer with expertise in building scalable web and mobile applications. 
            With a strong foundation in modern technologies, I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 hover:bg-card/70 h-full">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${skill.color} p-3 md:p-4 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
