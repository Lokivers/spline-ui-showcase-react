
'use client';

import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function GestureRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [sceneError, setSceneError] = useState(false);
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

  const handleRobotClick = () => {
    if (isMuted) return;
    
    const messages = [
      "Hi there! I'm Blu-chi, your friendly portfolio guide! Logeshwaran is a talented full-stack developer.",
      "Want to know about his skills? He's proficient in React, Node.js, Python, and many modern technologies!",
      "Check out his amazing projects below! From web applications to mobile apps, he's built some incredible things.",
      "Logeshwaran has won multiple awards and has years of experience in software development. Scroll down to see more!",
      "Need to get in touch? You can find his contact information at the bottom of the page. He'd love to hear from you!"
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
      // Stop any current speech
      speechSynthesis.cancel();
    }
  };

  const handleSceneError = () => {
    console.log("Spline scene failed to load, falling back to emoji");
    setSceneError(true);
  };

  // Force fallback to emoji for now to avoid the loading error
  useEffect(() => {
    // Set a timeout to fallback if the scene doesn't load quickly
    const fallbackTimer = setTimeout(() => {
      setSceneError(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

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
          {/* Spline robot scene or fallback */}
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            {!sceneError ? (
              <div className="w-full h-full">
                <SplineScene 
                  scene="https://prod.spline.design/llK92eHtKBtg4gch/scene.splinecode"
                  className="w-full h-full scale-125"
                  onError={handleSceneError}
                />
              </div>
            ) : (
              // Fallback animated robot emoji
              <div className="text-4xl animate-bounce hover:animate-pulse transition-all duration-300">
                🤖
              </div>
            )}
          </div>
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 animate-pulse"></div>
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
