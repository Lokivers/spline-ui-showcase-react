
"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
export const ContainerScroll = ({
  titleComponent,
  children
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef
  });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return <div className="h-auto flex items-center justify-center relative" ref={containerRef}>
      {titleComponent}
      {children}
    </div>;
};
export const Header = ({
  translate,
  titleComponent
}: any) => {
  return <motion.div style={{
    translateY: translate
  }} className="max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>;
};
export const Card = ({
  rotate,
  scale,
  children
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return;
};
