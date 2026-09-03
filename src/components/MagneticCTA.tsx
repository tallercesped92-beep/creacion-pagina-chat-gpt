import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface MagneticCTAProps {
  id?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  maxDistance?: number;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({
  id,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
  maxDistance = 4, // Max 3-5px as requested
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setCanHover(hasFinePointer && !isTouch && !shouldReduceMotion);
    }
  }, [shouldReduceMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    x.set(deltaX * maxDistance);
    y.set(deltaY * maxDistance);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Diagonal Shine Sweep Layer */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </span>
    </motion.button>
  );
};
