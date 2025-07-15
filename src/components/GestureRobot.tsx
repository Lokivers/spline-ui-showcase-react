
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
        speak("Hello! I'm your AI assistant. Say 'Hey robot' followed by commands like 'show projects', 'go to about', or 'contact' to navigate!");
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
        if (event.error === 'no-speech') {
          speak("I didn't hear anything. Please try again.");
        }
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
    utterance.pitch = 1.1;
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
    if (command.includes('hey robot') || command.includes('robot')) {
      if (command.includes('about') || command.includes('introduction')) {
        if (scrollToSection('about')) {
          speak("Here's information about Logeshwaran. He's a skilled full-stack developer with expertise in modern web technologies.");
        }
      } else if (command.includes('project') || command.includes('work') || command.includes('portfolio')) {
        if (scrollToSection('projects')) {
          speak("Here are Logeshwaran's amazing projects showcasing his development skills and creativity.");
        }
      } else if (command.includes('skill') || command.includes('language') || command.includes('tech')) {
        if (scrollToSection('languages')) {
          speak("These are Logeshwaran's technical skills and programming languages he's mastered.");
        }
      } else if (command.includes('award') || command.includes('achievement')) {
        if (scrollToSection('awards')) {
          speak("Here are Logeshwaran's awards and achievements in technology and development.");
        }
      } else if (command.includes('timeline') || command.includes('experience') || command.includes('education')) {
        if (scrollToSection('timeline')) {
          speak("This shows Logeshwaran's educational and professional journey through the years.");
        }
      } else if (command.includes('contact') || command.includes('reach') || command.includes('email')) {
        if (scrollToSection('contact')) {
          speak("Here's how you can get in touch with Logeshwaran for collaborations and opportunities.");
        }
      } else if (command.includes('resume') || command.includes('download') || command.includes('cv')) {
        if (scrollToSection('resume')) {
          speak("You can download Logeshwaran's professional resume from this section.");
        }
      } else if (command.includes('top') || command.includes('home') || command.includes('start')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        speak("Going back to the top of the page.");
      } else {
        speak("Hi! I can help you navigate. Try saying 'Hey robot, show projects' or 'Hey robot, go to about' to explore different sections.");
      }
    } else if (command.includes('stop') || command.includes('quiet') || command.includes('mute')) {
      setIsMuted(true);
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
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
    
    const messages = [
      "Hi! I'm your voice-controlled navigation assistant. Say 'Hey robot' followed by section names to navigate around the portfolio.",
      "Want to explore Logeshwaran's work? Say 'Hey robot, show projects' to see his amazing development projects.",
      "Curious about his skills? Try 'Hey robot, show skills' to learn about his technical expertise.",
      "Need contact info? Just say 'Hey robot, contact' and I'll take you there instantly.",
      "Say 'Hey robot, timeline' to see his educational and professional journey.",
      "You can also say 'Hey robot, awards' to view his achievements and recognition."
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
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
      speak("Voice navigation stopped.");
    } else {
      setIsListening(true);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
          speak("Voice navigation activated! Say 'Hey robot' followed by commands like 'show projects' or 'go to about'.");
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
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleRobotClick}
    >
      <div className="relative">
        {/* Enhanced holographic glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-teal-400/30 rounded-3xl blur-xl scale-110 animate-pulse"></div>
        
        {/* Robot container with gesture-based design */}
        <div className="relative w-32 h-40 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-lg border border-cyan-400/50 rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
          
          {/* Circuit pattern background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 left-2 w-6 h-6 border border-cyan-400/40 rounded-full"></div>
            <div className="absolute top-4 right-3 w-4 h-4 border border-blue-400/40 rounded-sm"></div>
            <div className="absolute bottom-6 left-3 w-5 h-5 border border-teal-400/40 rounded-full"></div>
          </div>

          {/* Robot head with cute design */}
          <div className="relative mt-3 mx-auto w-20 h-16 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-2xl border border-cyan-400/60 shadow-lg">
            {/* Antenna */}
            <motion.div 
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Eyes with emotion */}
            <div className="flex justify-center items-center pt-3 gap-3">
              <motion.div 
                className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{ 
                  scaleY: isListening ? [1, 0.3, 1] : [1, 0.8, 1],
                  scaleX: isWaving ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: isListening ? 0.5 : 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{ 
                  scaleY: isListening ? [1, 0.3, 1] : [1, 0.8, 1],
                  scaleX: isWaving ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: isListening ? 0.5 : 2, repeat: Infinity, delay: 0.1 }}
              />
            </div>

            {/* Mouth/Speaker */}
            <motion.div 
              className="mx-auto mt-2 w-8 h-2 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 rounded-full relative overflow-hidden"
              animate={{ 
                scaleX: isListening ? [1, 1.3, 1] : [1, 1.1, 1],
                backgroundColor: isListening ? ["rgb(34 211 238 / 0.9)", "rgb(59 130 246 / 0.9)", "rgb(34 211 238 / 0.9)"] : undefined
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: [-16, 32, -16] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Robot body */}
          <div className="relative mt-2 mx-auto w-24 h-16 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-xl border border-cyan-400/60 shadow-lg">
            {/* Chest panel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-8 bg-slate-600/60 rounded-lg border border-cyan-400/40">
              <motion.div 
                className="mt-1 mx-auto w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="flex justify-center gap-1 mt-1">
                <motion.div 
                  className="w-1 h-1 bg-cyan-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div 
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-1 h-1 bg-teal-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                />
              </div>
            </div>
          </div>

          {/* Animated arms with gesture support */}
          <div className="absolute top-16 -left-2 w-4 h-8">
            <motion.div 
              className="w-3 h-8 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-full border border-cyan-400/60"
              animate={isWaving ? { 
                rotate: [0, 45, -30, 20, -10, 0],
                y: [0, -2, 0, -1, 0]
              } : { 
                rotate: [0, 10, -10, 0] 
              }}
              transition={{ 
                duration: isWaving ? 1.2 : 3, 
                repeat: isWaving ? 2 : Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="absolute top-16 -right-2 w-4 h-8">
            <motion.div 
              className="w-3 h-8 bg-gradient-to-b from-slate-700/90 to-slate-800/90 rounded-full border border-cyan-400/60"
              animate={isWaving ? { 
                rotate: [0, -45, 30, -20, 10, 0],
                y: [0, -2, 0, -1, 0]
              } : { 
                rotate: [0, -10, 10, 0] 
              }}
              transition={{ 
                duration: isWaving ? 1.2 : 3, 
                repeat: isWaving ? 2 : Infinity,
                delay: 0.1,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Floating particles for magical effect */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-400'}`}
              style={{
                top: `${25 + i * 12}%`,
                left: `${15 + i * 25}%`,
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
            />
          ))}
        </div>

        {/* Control buttons */}
        <div className="absolute -top-2 -right-2 flex gap-1">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={handleMuteToggle}
            className="w-7 h-7 bg-slate-800/95 backdrop-blur-md border border-cyan-400/60 rounded-full flex items-center justify-center hover:bg-slate-700/95 transition-colors shadow-lg"
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-red-400" />
            ) : (
              <Volume2 className="w-3 h-3 text-cyan-400" />
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
                  : 'bg-slate-800/95 border-cyan-400/60 hover:bg-slate-700/95'
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
                <MicOff className="w-3 h-3 text-cyan-400" />
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
            className="absolute -top-20 -left-32 bg-slate-800/98 backdrop-blur-sm text-cyan-100 px-4 py-3 rounded-2xl text-xs font-medium shadow-2xl border border-cyan-400/40 max-w-48"
          >
            {currentMessage || "Hi! I'm your voice assistant 🤖"}
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-3 border-r-3 border-t-3 border-l-transparent border-r-transparent border-t-slate-800/98 transform translate-y-full"></div>
          </motion.div>
        )}

        {/* Interactive tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-full text-xs shadow-lg pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity">
          {isListening ? 'Listening... Say "Hey robot"!' : 'Click me or use voice commands!'}
        </div>
      </div>
    </motion.div>
  );
}
