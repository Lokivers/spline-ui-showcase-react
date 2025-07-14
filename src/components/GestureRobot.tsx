
'use client';

import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function GestureRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted) {
        // Simulate speech
        const utterance = new SpeechSynthesisUtterance("Hi, I'm Blu-chi!");
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
        setHasGreeted(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted]);

  const handleRobotClick = () => {
    const utterance = new SpeechSynthesisUtterance("Hi there! I'm Blu-chi, your friendly assistant!");
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
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
      {/* Glass morphic container */}
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl scale-110"></div>
        
        {/* Glass morphic effect */}
        <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
          {/* Spline robot scene */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <SplineScene 
              scene="https://prod.spline.design/VJ8ZRnGl-HJ3wfhF/scene.splinecode"
              className="w-full h-full scale-150"
            />
          </div>
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 animate-pulse"></div>
        </div>

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
