"use client";
import React from "react";
import { motion } from "framer-motion";

const auroraColors = [
  "#60a5fa", // blue-400
  "#a78bfa", // purple-400
  "#f472b6", // pink-400
  "#facc15", // yellow-400
  "#34d399", // green-400
  "#38bdf8", // sky-400
  "#f87171", // red-400
];

export function AuroraText({ children, className }: { children: React.ReactNode; className?: string }) {
  // Animate gradient background position for aurora effect
  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        background: `linear-gradient(90deg, ${auroraColors.join(",")})`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 700,
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
} 