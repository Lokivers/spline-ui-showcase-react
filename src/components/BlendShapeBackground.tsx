
'use client';

import { motion } from "framer-motion";

export function BlendShapeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated blend shapes */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(239, 68, 68, 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/2 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(34, 197, 94, 0.08) 50%, transparent 70%)",
          filter: "blur(45px)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Additional smaller blend shapes for depth */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(147, 51, 234, 0.06) 50%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
