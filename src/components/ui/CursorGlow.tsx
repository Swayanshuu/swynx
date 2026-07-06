"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 h-64 w-64 rounded-full bg-primary-1/10 blur-[100px] hidden md:block"
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
}
