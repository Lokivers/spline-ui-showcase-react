
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Smartphone, Database } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack solution with React & Node.js featuring user authentication, payment processing, and admin dashboard",
    icon: <Code className="size-6 text-blue-400" />,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React Native with real-time sync and collaborative features for team productivity",
    icon: <Smartphone className="size-6 text-purple-400" />,
    technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    description: "Next.js with ML insights and predictive analytics for business intelligence",
    icon: <Database className="size-6 text-green-400" />,
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Full-stack social platform with real-time messaging and content sharing",
    icon: <Code className="size-6 text-orange-400" />,
    technologies: ["Vue.js", "Express", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

export function ProjectsCarousel() {
  return (
    <section className="py-20 relative min-h-screen bg-black/[0.98]">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(147, 51, 234, 0.12)"
          animation={{ scale: 70, speed: 45 }}
          noise={{ opacity: 0.25, scale: 1.4 }}
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
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
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-neutral-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute top-4 left-4">
                        <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-neutral-700/50">
                          {project.icon}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="text-xs bg-neutral-800/50 text-neutral-300 border-neutral-700/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors text-sm"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/50 border-neutral-700/50 hover:bg-black/70 text-white" />
            <CarouselNext className="bg-black/50 border-neutral-700/50 hover:bg-black/70 text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
