
'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface ShuffleCard {
  id: string;
  title: string;
  description: string;
  year: string;
  color: string;
  icon: React.ReactNode;
  image?: string;
  link?: string;
}

interface ShuffleCardsProps {
  cards: ShuffleCard[];
  className?: string;
}

export function ShuffleCards({ cards, className = "" }: ShuffleCardsProps) {
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffleArray = (array: ShuffleCard[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShuffledCards(shuffleArray(shuffledCards));
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleShuffle();
      }
    }, 5000); // Auto shuffle every 5 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={shuffledCards.map(card => card.id).join('-')}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {shuffledCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ 
                opacity: 0, 
                y: 20,
                rotateY: -90,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => card.link && window.open(card.link, '_blank')}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-yellow-500/50 transition-all duration-300 group hover:bg-card/70 h-full relative overflow-hidden">
                {/* Certificate Image Background */}
                {card.image && (
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Glowing overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${card.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>
                  <div className="text-right mb-2">
                    <span className="text-xs text-yellow-400 font-semibold bg-yellow-400/10 px-2 py-1 rounded-full">
                      {card.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                  {card.link && (
                    <button
                      onClick={e => { e.stopPropagation(); window.open(card.link, '_blank'); }}
                      className="mt-4 px-3 py-1 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold text-xs shadow hover:from-yellow-600 hover:to-orange-600 transition-colors"
                    >
                      Download Certificate
                    </button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Manual shuffle button */}
      <motion.button
        onClick={handleShuffle}
        disabled={isAnimating}
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAnimating ? "Shuffling..." : "Shuffle Cards"}
      </motion.button>
    </div>
  );
}
