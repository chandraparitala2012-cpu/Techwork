"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
