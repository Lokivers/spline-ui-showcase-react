import React from 'react';
'use client';

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Spline from '@splinetool/react-spline';

export function GestureRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  // Spline robot ref for triggering animations
  const splineRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted && !isMuted) {
        speak("Hello! I'm Blue-chi! 🤖 I'm here to tell you all about Logeshwaran's amazing work and skills. Click me to learn more!");
        setHasGreeted(true);
        triggerWave();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isMuted]);

  const speak = (text: string) => {
    if (isMuted) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
    setCurrentMessage(text.substring(0, 80) + "...");
    setTimeout(() => setCurrentMessage(""), 4000);
  };

  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1200);
  };

  const handleRobotClick = () => {
    if (isMuted) return;
    triggerWave();
    const workMessages = [
      "Hi! I'm Blue-chi! 🤖 I'm so excited to tell you about Logeshwaran's incredible work! He's a talented full-stack developer who creates amazing digital experiences!",
      "Want to see something cool? Logeshwaran has built some fantastic projects using React, Node.js, and modern web technologies. Each one shows his creativity and skill!",
      "Did you know Logeshwaran is skilled in JavaScript, TypeScript, Python, and so many other technologies? His technical expertise is truly impressive!",
      "Logeshwaran has won awards and recognition for his excellent work in development! His dedication to quality really shows in everything he creates!",
      "Looking to hire a skilled developer? Logeshwaran would be perfect for your next project! His passion for technology and problem-solving is amazing!",
      "I love talking about Logeshwaran's journey from student to skilled developer! His growth and learning mindset make him such a valuable team member!"
    ];
    const randomMessage = workMessages[Math.floor(Math.random() * workMessages.length)];
    speak(randomMessage);
  };
  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (newMutedState) {
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
      className="fixed bottom-8 right-8 z-50 cursor-pointer group"
      onClick={handleRobotClick}
    >
      <div className="relative flex flex-col items-center">
        {/* Spline 3D Robot - improved background and border */}
        <div className="w-40 h-40 bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-full overflow-hidden flex items-center justify-center border-4 border-blue-300 shadow-2xl relative">
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            onLoad={spline => { splineRef.current = spline; }}
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          />
          {/* Robot emoji overlay */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl pointer-events-none select-none drop-shadow-lg">🤖</span>
        </div>
        {/* Tooltip for interaction */}
        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-full text-xs shadow-lg pointer-events-none select-none border border-blue-400/30">
          Click robot to chat about Logeshwaran!
        </div>
        {/* Control buttons - only mute now */}
        <div className="absolute top-2 right-2 flex gap-1">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={handleMuteToggle}
            className="w-7 h-7 bg-blue-600/95 backdrop-blur-md border border-blue-400/60 rounded-full flex items-center justify-center hover:bg-blue-700/95 transition-colors shadow-lg"
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-white" />
            ) : (
              <Volume2 className="w-3 h-3 text-white" />
            )}
          </motion.button>
        </div>
        {/* Speech bubble */}
        {(currentMessage || (isVisible && !hasGreeted)) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -30, y: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed top-8 left-8 bg-blue-600/98 backdrop-blur-sm text-white px-7 py-5 rounded-2xl text-base font-medium shadow-2xl border border-blue-400/40 max-w-xs sm:max-w-md min-w-[200px] flex items-center justify-center text-center z-[1000]"
          >
            {currentMessage || "Hi! I'm Blue-chi! 🤖"}
          </motion.div>
        )}
        {/* Name tag */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Blue-chi 
        </div>
      </div>
    </motion.div>
  );
}
