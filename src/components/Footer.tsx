
'use client'

import { Github, Linkedin, Mail} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Logeshwaran.T
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through innovative web and mobile applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-blue-500 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tlogeshwaran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-blue-500 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:logeshvanitha96@gmail.com" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-blue-500 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by Logeshwaran.T © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
