
'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Volume2, VolumeX, Mic } from "lucide-react";
import { SplineScene } from "./ui/splite";

interface SectionMapping {
  [key: string]: string[];
}

export function GestureRobot() {
  const sectionMappings: SectionMapping = {
    'projects': ['project', 'portfolio', 'work', 'showcase'],
    'about': ['about', 'introduction', 'bio'],
    'get-in-touch': ['contact', 'touch', 'reach', 'connect'],
    'awards': ['award', 'achievement', 'recognition'],
    'languages': ['language', 'skill', 'technology', 'tech'],
    'timeline': ['timeline', 'experience', 'history', 'journey']
  };
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted && !isMuted) {
        // Initial greeting
        const utterance = new SpeechSynthesisUtterance("Hi, I'm Blu-chi! Welcome to Logeshwaran's portfolio. I can tell you about his amazing projects, skills, and experience. Click me anytime to learn more!");
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
        setHasGreeted(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isMuted]);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isListening, setIsListening] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const utterance = new SpeechSynthesisUtterance(`Scrolling to ${sectionId.replace('-', ' ')} section`);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceCommand = (transcript: string) => {
    const command = transcript.toLowerCase();
    if (command.includes('projects') || command.includes('portfolio')) {
      scrollToSection('projects');
    } else if (command.includes('about')) {
      scrollToSection('about');
    } else if (command.includes('contact') || command.includes('touch')) {
      scrollToSection('get-in-touch');
    } else if (command.includes('awards')) {
      scrollToSection('awards');
    } else if (command.includes('languages')) {
      scrollToSection('languages');
    } else if (command.includes('timeline')) {
      scrollToSection('timeline');
    }
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleVoiceCommand(transcript);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
      setIsListening(true);
    }
  };

  const handleMouseDown = () => {
    if (isMuted) return;
    
    setPressTimer(setTimeout(() => {
      startVoiceRecognition();
      const utterance = new SpeechSynthesisUtterance("Voice navigation activated. Tell me which section you'd like to visit.");
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      speechSynthesis.speak(utterance);
    }, 1000));
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleRobotClick = () => {
    if (isMuted || isListening) return;
    
    const messages = [
      "Hi there! I'm Blu-chi, your friendly portfolio guide! Logeshwaran is a talented full-stack developer specializing in modern web technologies and AI integration.",
      "Let me tell you about his expertise! He's mastered React, Node.js, Python, TypeScript, and AI technologies. He creates intelligent, responsive applications that push the boundaries of web development.",
      "His projects showcase innovation in AI and web development. From AI-powered assistants to real-time collaborative platforms, each project demonstrates technical excellence and creative problem-solving.",
      "Logeshwaran has received recognition for his contributions to tech innovation. His work combines cutting-edge technologies with practical business solutions!",
      "His professional journey shows continuous growth and adaptability. Each milestone represents mastery of new technologies and successful project deliveries!",
      "Want to collaborate? His contact information is below. He's always excited to discuss innovative projects and tech opportunities!",
      "Press and hold me to activate voice navigation! Just tell me which section you'd like to visit, and I'll take you there!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const utterance = new SpeechSynthesisUtterance(randomMessage);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => {
      if (!prev) {
        // Stop any current speech
        speechSynthesis.cancel();
      }
      return !prev;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        x: isVisible ? 0 : 100
      }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100 
      }}
      className="fixed bottom-8 right-8 z-50 cursor-pointer group"
      onClick={handleRobotClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Glass morphic container */}
      <div className="relative">
        {/* Spline 3D Robot Model with voice button */}
        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-blue-400/40">
          <SplineScene
            scene="https://prod.spline.design/6K8DjwQXL9XzVjsq/scene.splinecode"
            className="w-full h-full"
          />
          {/* Listening animation */}
          {isListening && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-yellow-400/80 animate-pulse pointer-events-none"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          {/* Voice button */}
          <button
            onClick={isListening ? undefined : handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg border-2 border-white/30 transition-all duration-300 ${isListening ? 'ring-4 ring-yellow-400/60' : ''}`}
            aria-label="Activate voice assistant"
          >
            <Mic className={`w-6 h-6 ${isListening ? 'text-yellow-400 animate-pulse' : 'text-white'}`} />
          </button>
        </div>
        {/* Tooltip for interaction */}
        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-full text-xs shadow-lg pointer-events-none select-none border border-blue-400/30">
          {isListening ? 'Listening... Speak a section name!' : 'Click robot or mic to chat • Hold mic for voice'}
        </div>
        {/* Mute/Unmute button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={handleMuteToggle}
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 border-2 border-white/30"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </motion.button>

        {/* Tooltip for interaction */}
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-full text-xs shadow-lg pointer-events-none select-none">
          {isListening ? 'Listening... Speak a section name!' : 'Click to chat • Hold to use voice'}
        </div>

        {/* Mute/Unmute button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={handleMuteToggle}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-3 h-3 text-white" />
          ) : (
            <Volume2 className="w-3 h-3 text-white" />
          )}
        </motion.button>

        {/* Speech bubble */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-16 -left-20 bg-white/90 backdrop-blur-sm text-black px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-white/20"
          >
            Hi, I'm Blu-chi! 👋
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/90 transform translate-y-full"></div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
