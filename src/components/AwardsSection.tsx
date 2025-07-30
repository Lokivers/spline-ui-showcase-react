
'use client';

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ShuffleCards } from "@/components/ui/shuffle-cards";

export function AwardsSection() {
  const awards = [
    {
      id: "award-1",
      icon: <Trophy className="w-8 h-8" />,
      title: "Innovative Web Application",
      description: "conducted by vk web soluitons, bengaluru",
      year: "2024",
      color: "from-yellow-500 to-orange-500",
      image: "https://drive.google.com/uc?export=view&id=12JV_AIXau_RP2x1RpEQaTZahZeiZFwFU",
      link: "https://drive.google.com/file/d/12JV_AIXau_RP2x1RpEQaTZahZeiZFwFU/view?usp=drivesdk"
    },
    {
      id: "award-2",
      icon: <Award className="w-8 h-8" />,
      title: "Academic Topper",
      description: "my college",
      year: "2023",
      color: "from-blue-500 to-cyan-500",
      image: "https://drive.google.com/file/d/12lGFJLCVa6ZmXIhGY7LuiKiyGigOXYYN/view?usp=drivesdk",
      link: "https://drive.google.com/file/d/12oklYYUZGqf95mXsu64TJmZkAgGjOfuO/view?usp=drivesdk"
    },
    {
      id: "award-3",
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Consistent top performer throughout college",
      year: "2024",
      color: "from-purple-500 to-pink-500",
      image: "https://drive.google.com/file/d/12lGFJLCVa6ZmXIhGY7LuiKiyGigOXYYN/view?usp=drivesdk",
      link: "https://drive.google.com/file/d/12oklYYUZGqf95mXsu64TJmZkAgGjOfuO/view?usp=drivesdk"
    },
    {
      id: "award-4",
      icon: <Medal className="w-8 h-8" />,
      title: "workshop",
      description: "BRAINERY SPOT CUNDUCTED WORK SHOP ABOUT FULL STACK WEB DEVELOPMENT",
      year: "2024",
      color: "from-green-500 to-emerald-500",
      image: "-",
      link: "https://drive.google.com/file/d/12lGFJLCVa6ZmXIhGY7LuiKiyGigOXYYN/view?usp=drivesdk"
    },
    {
      id: "award-4",
      icon: <Medal className="w-8 h-8" />,
      title: "HACKATHON",
      description: "HACKATHON CONDUCTED BY MY COLLEGE",
      year: "2024",
      color: "from-green-500 to-emerald-500",
      image: "-",
      link: "https://drive.google.com/file/d/1veitgCOoHHsaxCmWLtVkODJYznIzt4hU/view?usp=drive_link"
    }, {
      id: "award-4",
      icon: <Medal className="w-8 h-8" />,
      title: "PYHTON COURSE COMPLETION",
      description: "PYTHON COURSE COMPLETION CERTIFICATE BY IMAGECON",
      year: "2024",
      color: "from-green-500 to-emerald-500",
      image: "-",
      link: "https://drive.google.com/file/d/1WxGJnAM5glhfwEPUjw-VrfqJSvnBt3mY/view?usp=drive_link"
    }
  ];

  return (
    <section id="awards" className="py-20 relative min-h-screen bg-background">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(255, 215, 0, 0.08)"
          animation={{ scale: 50, speed: 20 }}
          noise={{ opacity: 0.12, scale: 1.4 }}
          sizing="fill"
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for dedication, innovation, and excellence in technology and academics.
          </p>
        </motion.div>

        <ShuffleCards cards={awards} className="pb-20" />
      </div>
    </section>
  );
}
