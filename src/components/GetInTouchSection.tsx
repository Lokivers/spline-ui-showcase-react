'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
export function GetInTouchSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="get-in-touch" className="py-12 md:py-20 relative min-h-screen bg-black/[0.99]">
      {/* Ethereal Shadow Background with enhanced glow */}
      <div className="absolute inset-0">
        <EtherealShadow color="rgba(34, 197, 94, 0.12)" animation={{
        scale: 55,
        speed: 30
      }} noise={{
        opacity: 0.2,
        scale: 1.1
      }} sizing="fill" className="w-full h-full" />
      </div>

      {/* Additional glowing background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll titleComponent={<div className="mb-8 md:mb-12 text-center">
              
              
            </div>}>
          
        </ContainerScroll>
      </div>
    </section>;
}