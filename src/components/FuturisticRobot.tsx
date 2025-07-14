
'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Volume2, VolumeX, Zap, Cpu, Wifi } from "lucide-react";

export function FuturisticRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [eyeGlow, setEyeGlow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted && !isMuted) {
        const utterance = new SpeechSynthesisUtterance("Hi, I'm Blu-chi! Welcome to Logeshwaran's portfolio. I can tell you about his amazing projects, skills, and experience. Click me anytime to learn more!");
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
        setHasGreeted(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isMuted]);

  // Eye glow animation
  useEffect(() => {
    const glowTimer = setInterval(() => {
      setEyeGlow(prev => !prev);
    }, 2000);

    return () => clearInterval(glowTimer);
  }, []);

  const handleRobotClick = () => {
    if (isMuted) return;
    
    // Trigger wave animation
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
    
    const messages = [
      "Hi there! I'm Blu-chi, your friendly portfolio guide! Logeshwaran is a talented full-stack developer with expertise in modern web technologies.",
      "Want to know about his skills? He's proficient in React, Node.js, Python, JavaScript, TypeScript, and many cutting-edge frameworks and tools!",
      "Check out his amazing projects below! From web applications to mobile apps, he's built some incredible solutions that showcase his technical prowess.",
      "Logeshwaran has won multiple awards and has years of experience in software development. His work spans across different industries and technologies!",
      "Scroll down to see his timeline of achievements, awards, and professional milestones. Each project tells a story of innovation and excellence!",
      "Need to get in touch? You can find his contact information at the bottom of the page. He'd love to hear about exciting opportunities and collaborations!",
      "Explore his language proficiencies and technical skills - he's always learning and adapting to the latest technologies in the software development world!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const utterance = new SpeechSynthesisUtterance(randomMessage);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (!isMuted) {
      speechSynthesis.cancel();
    }
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
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleRobotClick}
    >
      <div className="relative">
        {/* Holographic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-2xl blur-xl scale-110 animate-pulse"></div>
        
        {/* Main robot container */}
        <div className="relative w-32 h-40 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
          
          {/* Circuit pattern background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path d="M10,10 L90,10 L90,30 L70,30 L70,50 L90,50 L90,90 L10,90 Z" 
                    stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-cyan-400"/>
              <circle cx="80" cy="40" r="2" fill="currentColor" className="text-purple-400"/>
              <circle cx="60" cy="70" r="2" fill="currentColor" className="text-cyan-400"/>
            </svg>
          </div>

          {/* Robot Head */}
          <div className="relative mt-3 mx-auto w-20 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-xl border border-cyan-400/50">
            {/* Antenna */}
            <motion.div 
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400 to-purple-400"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Eyes */}
            <div className="flex justify-center items-center pt-3 gap-3">
              <motion.div 
                className={`w-3 h-3 rounded-full ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-cyan-300'} transition-all duration-500`}
                animate={{ scale: eyeGlow ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className={`w-3 h-3 rounded-full ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-cyan-300'} transition-all duration-500`}
                animate={{ scale: eyeGlow ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Mouth/Speaker */}
            <motion.div 
              className="mx-auto mt-2 w-8 h-2 bg-purple-400/80 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Robot Body */}
          <div className="relative mt-2 mx-auto w-24 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg border border-cyan-400/50">
            {/* Chest panel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-slate-600/50 rounded border border-cyan-400/30">
              <motion.div 
                className="mt-1 mx-auto w-8 h-1 bg-cyan-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex justify-center gap-1 mt-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              </div>
            </div>

            {/* Power indicator */}
            <motion.div 
              className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Robot Arms */}
          <div className="absolute top-16 -left-2 w-4 h-8">
            <motion.div 
              className="w-3 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full border border-cyan-400/50"
              animate={isWaving ? { rotate: [0, 45, -45, 0] } : { rotate: [0, 10, -10, 0] }}
              transition={{ duration: isWaving ? 0.5 : 4, repeat: isWaving ? 2 : Infinity }}
            />
          </div>
          <div className="absolute top-16 -right-2 w-4 h-8">
            <motion.div 
              className="w-3 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full border border-cyan-400/50"
              animate={isWaving ? { rotate: [0, -45, 45, 0] } : { rotate: [0, -10, 10, 0] }}
              transition={{ duration: isWaving ? 0.5 : 4, repeat: isWaving ? 2 : Infinity, delay: 0.1 }}
            />
          </div>

          {/* Status indicators */}
          <div className="absolute bottom-2 left-2 flex gap-1">
            <Wifi className="w-2 h-2 text-cyan-400" />
            <Cpu className="w-2 h-2 text-purple-400" />
            <Zap className="w-2 h-2 text-yellow-400" />
          </div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0, 1, 0] 
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute top-8 left-4 w-1 h-1 bg-purple-400 rounded-full"
            animate={{ 
              y: [0, -8, 0],
              opacity: [0, 1, 0] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Mute/Unmute button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={handleMuteToggle}
          className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800/90 backdrop-blur-md border border-cyan-400/50 rounded-full flex items-center justify-center hover:bg-slate-700/90 transition-colors shadow-lg"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-cyan-400" />
          )}
        </motion.button>

        {/* Speech bubble */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-20 -left-32 bg-slate-800/95 backdrop-blur-sm text-cyan-100 px-4 py-3 rounded-xl text-sm font-medium shadow-xl border border-cyan-400/30 max-w-48"
          >
            Hi, I'm Blu-chi! 🤖
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800/95 transform translate-y-full"></div>
          </motion.div>
        )}

        {/* Holographic scan lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent rounded-2xl"
          animate={{ y: [-40, 40, -40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
