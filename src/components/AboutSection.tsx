
'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Server, Database } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, Express, FastAPI, REST APIs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      description: "MongoDB, PostgreSQL, AWS, Firebase, Docker",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative min-h-screen">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(59, 130, 246, 0.15)"
          animation={{ scale: 80, speed: 40 }}
          noise={{ opacity: 0.4, scale: 1.5 }}
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            About Me
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in building scalable web and mobile applications. 
            With a strong foundation in modern technologies, I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-black/20 backdrop-blur-sm border-neutral-700/50 hover:border-neutral-600 transition-all duration-300 group hover:scale-105 hover:bg-black/30">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${skill.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
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
