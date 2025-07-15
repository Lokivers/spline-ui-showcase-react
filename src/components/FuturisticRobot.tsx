
'use client';

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Mic, MicOff, Navigation, Brain } from "lucide-react";

export function FuturisticRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [eyeGlow, setEyeGlow] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted && !isMuted) {
        speak("Hello! I'm your AI portfolio assistant. I can help you navigate through Logeshwaran's portfolio and answer questions about his experience, skills, and projects. Click me or say 'Hey Assistant' to get started!");
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

  // Voice recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        if (event.results[event.results.length - 1].isFinal) {
          handleVoiceCommand(transcript.toLowerCase());
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.log('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const speak = (text: string) => {
    if (isMuted) return;
    
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
    setCurrentMessage(text.substring(0, 100) + "...");
    
    setTimeout(() => setCurrentMessage(""), 5000);
  };

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command received:', command);
    
    if (command.includes('hey assistant') || command.includes('hello')) {
      triggerWave();
      speak("Yes, how can I help you navigate Logeshwaran's portfolio?");
    } else if (command.includes('about') || command.includes('introduction')) {
      scrollToSection('about');
      speak("Here's Logeshwaran's introduction and background. He's a passionate full-stack developer with expertise in modern web technologies.");
    } else if (command.includes('project') || command.includes('work')) {
      scrollToSection('projects');
      speak("Let me show you Logeshwaran's amazing projects. He has built various web applications using React, Node.js, and other cutting-edge technologies.");
    } else if (command.includes('skill') || command.includes('language')) {
      scrollToSection('languages');
      speak("Here are Logeshwaran's technical skills and programming languages. He's proficient in JavaScript, TypeScript, Python, and many modern frameworks.");
    } else if (command.includes('award') || command.includes('achievement')) {
      scrollToSection('awards');
      speak("These are Logeshwaran's awards and achievements. He has won multiple competitions and recognition for his technical excellence.");
    } else if (command.includes('timeline') || command.includes('experience')) {
      scrollToSection('timeline');
      speak("Here's Logeshwaran's educational and professional timeline, showcasing his journey from student to skilled developer.");
    } else if (command.includes('contact') || command.includes('touch')) {
      scrollToSection('get-in-touch');
      speak("Here's how you can get in touch with Logeshwaran. He's always open to discussing new opportunities and collaborations.");
    } else if (command.includes('resume') || command.includes('download')) {
      scrollToSection('resume');
      speak("You can download Logeshwaran's professional resume here. It contains all his experience, skills, and contact information.");
    } else if (command.includes('mute') || command.includes('quiet')) {
      setIsMuted(true);
      setIsListening(false);
    } else {
      speak("I can help you navigate to different sections: About, Projects, Skills, Awards, Timeline, Contact, or Resume. Just tell me where you'd like to go!");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  const handleRobotClick = () => {
    if (isMuted) return;
    
    triggerWave();
    
    const portfolioMessages = [
      "Hi! I'm your portfolio guide. Ask me about Logeshwaran's projects, skills, or experience. You can also use voice commands like 'show me projects' or 'go to contact'.",
      "Want to know about his technical stack? Logeshwaran specializes in React, Node.js, TypeScript, Python, and modern web development frameworks.",
      "Interested in his achievements? He has won multiple coding competitions and has years of hands-on development experience.",
      "Looking for his work? Check out his diverse project portfolio ranging from web applications to mobile solutions.",
      "Need his contact info? I can navigate you to the contact section where you'll find all his professional details.",
      "Want to download his resume? I can take you to the download section for his latest professional resume."
    ];
    
    const randomMessage = portfolioMessages[Math.floor(Math.random() * portfolioMessages.length)];
    speak(randomMessage);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (newMutedState) {
      speechSynthesis.cancel();
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  };

  const handleVoiceToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) return;

    if (isListening) {
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
      setIsListening(true);
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
      speak("I'm listening. You can say commands like 'show me projects', 'go to about', or 'contact information'.");
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
        {/* Enhanced holographic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-400/30 rounded-3xl blur-xl scale-110 animate-pulse"></div>
        
        {/* Main robot container */}
        <div className="relative w-36 h-44 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-lg border border-cyan-400/40 rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
          
          {/* Professional circuit pattern background */}
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M2,2 L18,2 L18,8 L12,8 L12,12 L18,12 L18,18 L2,18 Z" 
                        stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cyan-400/60"/>
                  <circle cx="5" cy="5" r="1" fill="currentColor" className="text-cyan-400/80"/>
                  <circle cx="15" cy="10" r="1" fill="currentColor" className="text-purple-400/80"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>

          {/* Professional Robot Head */}
          <div className="relative mt-4 mx-auto w-24 h-18 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-2xl border border-cyan-400/60 shadow-lg">
            {/* Advanced antenna with AI symbol */}
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1.5 h-5 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain className="w-1.5 h-1.5 text-white" />
            </motion.div>

            {/* Professional Eyes with enhanced glow */}
            <div className="flex justify-center items-center pt-4 gap-4">
              <motion.div 
                className={`w-4 h-4 rounded-full ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/70' : 'bg-cyan-300'} transition-all duration-500 border border-cyan-200/50`}
                animate={{ scale: eyeGlow ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className={`w-4 h-4 rounded-full ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/70' : 'bg-cyan-300'} transition-all duration-500 border border-cyan-200/50`}
                animate={{ scale: eyeGlow ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Professional Mouth/Speaker with sound waves */}
            <motion.div 
              className="mx-auto mt-3 w-10 h-3 bg-gradient-to-r from-purple-400/90 to-blue-400/90 rounded-full relative overflow-hidden"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-20, 40, -20] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Professional Robot Body */}
          <div className="relative mt-3 mx-auto w-28 h-20 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-xl border border-cyan-400/60 shadow-lg">
            {/* Advanced chest panel */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-slate-600/60 rounded-lg border border-cyan-400/40 backdrop-blur-sm">
              <motion.div 
                className="mt-2 mx-auto w-10 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex justify-center gap-1 mt-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              <Navigation className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
              <Brain className="w-2.5 h-2.5 text-purple-400 animate-pulse delay-300" />
            </div>

            {/* Professional power indicator */}
            <motion.div 
              className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* Professional Robot Arms with smooth animation */}
          <div className="absolute top-20 -left-3 w-5 h-10">
            <motion.div 
              className="w-4 h-10 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-full border border-cyan-400/60 shadow-md"
              animate={isWaving ? { rotate: [0, 30, -30, 15, 0] } : { rotate: [0, 8, -8, 0] }}
              transition={{ duration: isWaving ? 0.8 : 3, repeat: isWaving ? 1 : Infinity }}
            />
          </div>
          <div className="absolute top-20 -right-3 w-5 h-10">
            <motion.div 
              className="w-4 h-10 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-full border border-cyan-400/60 shadow-md"
              animate={isWaving ? { rotate: [0, -30, 30, -15, 0] } : { rotate: [0, -8, 8, 0] }}
              transition={{ duration: isWaving ? 0.8 : 3, repeat: isWaving ? 1 : Infinity, delay: 0.1 }}
            />
          </div>

          {/* Enhanced floating particles */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-purple-400'}`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{ 
                y: [0, -12, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        {/* Control buttons */}
        <div className="absolute -top-2 -right-2 flex gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={handleMuteToggle}
            className="w-8 h-8 bg-slate-800/95 backdrop-blur-md border border-cyan-400/60 rounded-full flex items-center justify-center hover:bg-slate-700/95 transition-colors shadow-lg"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            )}
          </motion.button>

          {!isMuted && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              onClick={handleVoiceToggle}
              className={`w-8 h-8 backdrop-blur-md border rounded-full flex items-center justify-center transition-colors shadow-lg ${
                isListening 
                  ? 'bg-green-600/90 border-green-400/60 hover:bg-green-700/90' 
                  : 'bg-slate-800/95 border-cyan-400/60 hover:bg-slate-700/95'
              }`}
            >
              {isListening ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Mic className="w-4 h-4 text-white" />
                </motion.div>
              ) : (
                <MicOff className="w-4 h-4 text-cyan-400" />
              )}
            </motion.button>
          )}
        </div>

        {/* Enhanced speech bubble */}
        {(currentMessage || (isVisible && !hasGreeted)) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-24 -left-40 bg-slate-800/98 backdrop-blur-sm text-cyan-100 px-5 py-4 rounded-2xl text-sm font-medium shadow-2xl border border-cyan-400/40 max-w-56"
          >
            {currentMessage || "Hi! I'm your AI portfolio assistant 🤖"}
            <div className="absolute bottom-0 right-10 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800/98 transform translate-y-full"></div>
          </motion.div>
        )}

        {/* Professional holographic scan lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent rounded-3xl pointer-events-none"
          animate={{ y: [-48, 48, -48] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
