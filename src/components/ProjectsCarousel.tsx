
'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";

export function ProjectsCarousel() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      type: "web"
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time collaboration, drag-and-drop functionality, and team workspace features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      type: "web"
    },
    {
      title: "Fitness Tracker Mobile App",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
      type: "mobile"
    },
    {
      title: "AI Chat Interface",
      description: "Intelligent chat interface with AI integration, real-time messaging, and smart response suggestions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "FastAPI", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      type: "web"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      tech: ["Angular", "Express", "MongoDB", "Charts.js"],
      liveUrl: "#",
      githubUrl: "#",
      type: "web"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 relative min-h-screen bg-black/[0.97]">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(168, 85, 247, 0.08)"
          animation={{ scale: 65, speed: 25 }}
          noise={{ opacity: 0.18, scale: 1.2 }}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed px-4">
            A showcase of my recent work, demonstrating expertise in modern web and mobile technologies.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full bg-gradient-to-br from-black via-gray-900 to-black border-2 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden relative">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-black via-gray-900 to-black rounded-lg"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Project Image */}
                        <div className="relative h-48 md:h-52 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          
                          {/* Project Type Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="inline-flex items-center px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
                              {project.type === 'mobile' ? <Smartphone className="w-3 h-3 mr-1" /> : <Globe className="w-3 h-3 mr-1" />}
                              {project.type}
                            </span>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-4 md:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2 md:mb-3 group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-1">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-md border border-gray-600 group-hover:border-purple-500/30 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 mt-auto">
                            <motion.a
                              href={project.liveUrl}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span className="hidden sm:inline">Live Demo</span>
                              <span className="sm:hidden">Demo</span>
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-2 text-sm font-medium border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                            >
                              <Github className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-black/60 border-gray-700 hover:bg-black/80 hover:border-purple-500/50" />
              <CarouselNext className="right-2 bg-black/60 border-gray-700 hover:bg-black/80 hover:border-purple-500/50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
