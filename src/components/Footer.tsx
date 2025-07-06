
'use client'

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Logeshwaran.T
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through innovative web and mobile applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-neutral-400 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-neutral-400 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-neutral-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:logeshwaran.t@example.com" 
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Logeshwaran.T © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
