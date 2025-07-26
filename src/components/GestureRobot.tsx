'use client';

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Mic, MicOff } from "lucide-react";

export function GestureRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!hasGreeted && !isMuted) {
        speak("Hello! I'm Blue-chi! 🤖 I'm here to tell you all about Logeshwaran's amazing work and skills. Click me or say 'Hey Blue-chi' to learn more!");
        setHasGreeted(true);
        triggerWave();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isMuted]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const lastResult = event.results[event.results.length - 1];
        if (lastResult.isFinal) {
          const transcript = lastResult[0].transcript.toLowerCase().trim();
          console.log('Voice command received:', transcript);
          handleVoiceCommand(transcript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
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
    utterance.pitch = 1.2;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
    setCurrentMessage(text.substring(0, 80) + "...");
    
    setTimeout(() => setCurrentMessage(""), 4000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  const handleVoiceCommand = (command: string) => {
    console.log('Processing command:', command);
    triggerWave();
    
    // Check for wake word
    if (command.includes('hey blue-chi') || command.includes('blue chi') || command.includes('bluci')) {
      if (command.includes('about') || command.includes('who')) {
        if (scrollToSection('about')) {
          speak("Let me tell you about Logeshwaran! He's an incredible full-stack developer who loves creating amazing digital experiences. His passion for technology shines through every project he builds!");
        }
      } else if (command.includes('project') || command.includes('work') || command.includes('portfolio')) {
        if (scrollToSection('projects')) {
          speak("Oh, you'll love Logeshwaran's projects! He's built some truly impressive applications using React, Node.js, and modern web technologies. Each project showcases his creativity and technical expertise!");
        }
      } else if (command.includes('skill') || command.includes('language') || command.includes('tech')) {
        if (scrollToSection('languages')) {
          speak("Logeshwaran is skilled in so many technologies! He's a master of JavaScript, TypeScript, Python, React, and many cutting-edge frameworks. His technical versatility is truly impressive!");
        }
      } else if (command.includes('award') || command.includes('achievement')) {
        if (scrollToSection('awards')) {
          speak("Logeshwaran has earned some amazing recognition for his work! His dedication to excellence has been acknowledged through various awards and achievements in the tech industry!");
        }
      } else if (command.includes('journey') || command.includes('timeline') || command.includes('story')) {
        if (scrollToSection('timeline')) {
          speak("Here's Logeshwaran's inspiring journey! From his educational foundation to becoming a skilled developer, every step shows his commitment to growth and learning!");
        }
      } else if (command.includes('contact') || command.includes('reach') || command.includes('hire')) {
        if (scrollToSection('contact')) {
          speak("Want to work with Logeshwaran? Great choice! Here's how you can reach out to him for exciting opportunities and collaborations!");
        }
      } else if (command.includes('resume') || command.includes('download') || command.includes('cv')) {
        if (scrollToSection('resume')) {
          speak("You can download Logeshwaran's professional resume here! It contains all the details about his amazing skills and experience!");
        }
      } else {
        speak("Hi! I'm Blue-chi, and I love talking about Logeshwaran's work! Try saying 'Hey Blue-chi, show me projects' or 'Hey Blue-chi, tell me about skills' to explore his amazing portfolio!");
      }
    }
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
      speak("Voice chat stopped! Click me anytime to learn more about Logeshwaran's work!");
    } else {
      setIsListening(true);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
          speak("Voice chat activated! Say 'Hey Blue-chi' and ask me about Logeshwaran's projects, skills, or anything else!");
        } catch (error) {
          console.error('Failed to start recognition:', error);
          setIsListening(false);
        }
      }
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
      <div className="relative">
        {/* Soft emoji-like glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/30 to-indigo-400/40 rounded-full blur-xl scale-110 animate-pulse"></div>
        
        {/* Emoji-style robot container */}
        <div className="relative w-28 h-36 bg-gradient-to-b from-blue-100/95 to-blue-200/95 backdrop-blur-lg border-2 border-blue-300/60 rounded-3xl shadow-2xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
          
          {/* Simple emoji-style face */}
          <div className="relative mt-4 mx-auto w-20 h-20 bg-gradient-to-b from-blue-50/90 to-blue-100/90 rounded-full border-2 border-blue-300/60 shadow-lg flex flex-col items-center justify-center">
            
            {/* Simple emoji eyes */}
            <div className="flex justify-center items-center gap-3 mb-2">
              <motion.div 
                className="w-4 h-4 bg-blue-600 rounded-full"
                animate={{ 
                  scaleY: isListening ? [1, 0.3, 1] : [1, 0.9, 1],
                  scaleX: isWaving ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: isListening ? 0.5 : 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-4 h-4 bg-blue-600 rounded-full"
                animate={{ 
                  scaleY: isListening ? [1, 0.3, 1] : [1, 0.9, 1],
                  scaleX: isWaving ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: isListening ? 0.5 : 2, repeat: Infinity, delay: 0.1 }}
              />
            </div>

            {/* Simple emoji mouth */}
            <motion.div 
              className="w-8 h-4 border-b-3 border-blue-600 rounded-b-full"
              animate={{ 
                scaleX: isListening ? [1, 1.2, 1] : [1, 1.05, 1],
                borderColor: isListening ? ["rgb(37 99 235)", "rgb(59 130 246)", "rgb(37 99 235)"] : undefined
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>

          {/* Simple emoji body */}
          <div className="relative mt-2 mx-auto w-20 h-12 bg-gradient-to-b from-blue-100/90 to-blue-200/90 rounded-2xl border-2 border-blue-300/60 shadow-lg flex items-center justify-center">
            {/* Heart for personality */}
            <motion.div 
              className="text-red-500 text-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💙
            </motion.div>
          </div>

          {/* Simple emoji arms */}
          <div className="absolute top-16 -left-1 w-3 h-8">
            <motion.div 
              className="w-6 h-3 bg-blue-200/90 rounded-full border border-blue-300/60"
              animate={isWaving ? { 
                rotate: [0, 45, -30, 20, -10, 0],
                y: [0, -2, 0, -1, 0]
              } : { 
                rotate: [0, 15, -15, 0] 
              }}
              transition={{ 
                duration: isWaving ? 1.2 : 3, 
                repeat: isWaving ? 2 : Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="absolute top-16 -right-1 w-3 h-8">
            <motion.div 
              className="w-6 h-3 bg-blue-200/90 rounded-full border border-blue-300/60"
              animate={isWaving ? { 
                rotate: [0, -45, 30, -20, 10, 0],
                y: [0, -2, 0, -1, 0]
              } : { 
                rotate: [0, -15, 15, 0] 
              }}
              transition={{ 
                duration: isWaving ? 1.2 : 3, 
                repeat: isWaving ? 2 : Infinity,
                delay: 0.1,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Floating sparkles for magic */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400"
              style={{
                top: `${25 + i * 12}%`,
                left: `${15 + i * 25}%`,
                fontSize: '8px'
              }}
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2 + i * 0.3, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* Tooltip for interaction */}
        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-full text-xs shadow-lg pointer-events-none select-none border border-blue-400/30">
          {isListening ? 'Listening... Speak a section name!' : 'Click robot or mic to chat • Hold mic for voice'}
        </div>

        {/* Control buttons */}
        <div className="absolute -top-2 -right-2 flex gap-1">
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

          {!isMuted && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              onClick={handleVoiceToggle}
              className={`w-7 h-7 backdrop-blur-md border rounded-full flex items-center justify-center transition-colors shadow-lg ${
                isListening 
                  ? 'bg-green-600/90 border-green-400/60 hover:bg-green-700/90' 
                  : 'bg-blue-600/95 border-blue-400/60 hover:bg-blue-700/95'
              }`}
            >
              {isListening ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Mic className="w-3 h-3 text-white" />
                </motion.div>
              ) : (
                <MicOff className="w-3 h-3 text-white" />
              )}
            </motion.button>
          )}
        </div>

        {/* Speech bubble */}
        {(currentMessage || (isVisible && !hasGreeted)) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-20 -left-32 bg-blue-600/98 backdrop-blur-sm text-white px-4 py-3 rounded-2xl text-xs font-medium shadow-2xl border border-blue-400/40 max-w-48"
          >
            {currentMessage || "Hi! I'm Blue-chi! 🤖"}
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-3 border-r-3 border-t-3 border-l-transparent border-r-transparent border-t-blue-600/98 transform translate-y-full"></div>
          </motion.div>
        )}

        {/* Name tag */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Blue-chi 🤖
        </div>
      </div>
    </motion.div>
  );
}
