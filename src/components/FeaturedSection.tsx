
"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Code, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

const featuredCards = [
  {
    icon: <Code className="size-4 text-blue-300" />,
    title: "E-Commerce Platform",
    description: "Full-stack solution with React & Node.js",
    date: "2024",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Smartphone className="size-4 text-purple-300" />,
    title: "Task Management App",
    description: "React Native with real-time sync",
    date: "2024",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Database className="size-4 text-green-300" />,
    title: "AI Analytics Dashboard",
    description: "Next.js with ML insights",
    date: "2024",
    iconClassName: "text-green-500",
    titleClassName: "text-green-400",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(147, 51, 234, 0.15)"
          animation={{ scale: 60, speed: 50 }}
          noise={{ opacity: 0.3, scale: 1.2 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Showcase of my latest work in web development, mobile apps, and innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <DisplayCards cards={featuredCards} />
        </motion.div>
      </div>
    </section>
  );
}
