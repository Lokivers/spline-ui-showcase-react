
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-lg md:text-xl text-blue-400 font-medium mb-4">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                Logeshwaran.T
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl text-neutral-200 font-semibold mb-4">
                Full Stack Developer
              </h3>
              <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
                Crafting digital experiences through innovative web and mobile applications. 
                Specializing in modern technologies to bring ideas to life with clean code 
                and beautiful interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 pt-6"
            >
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a href="https://github.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:logeshwaran@example.com" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - 3D Scene */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <Card className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 relative overflow-hidden">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-neutral-400 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
}
