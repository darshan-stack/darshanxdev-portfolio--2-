"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const auroraColors = [
  "#60a5fa", "#a78bfa", "#f472b6", "#facc15", "#34d399", "#38bdf8", "#f87171"
];

export function AuroraTypewriterText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < text.length) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 40);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, text.length]);

  return (
    <span className={className} style={{ display: "inline-block", whiteSpace: "pre-line" }}>
      {text.split("").map((char, i) => {
        if (i >= visibleCount) return <span key={i}>&nbsp;</span>;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10, backgroundPosition: "0% 50%" }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              opacity: { delay: i * 0.08, duration: 0.8 },
              y: { delay: i * 0.08, duration: 0.8 },
              backgroundPosition: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.08,
              },
            }}
            style={{
              display: "inline-block",
              background: `linear-gradient(90deg, ${auroraColors.join(",")})`,
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            {char}
          </motion.span>
        );
      })}
      {/* Blinking cursor */}
      {visibleCount < text.length && (
        <motion.span
          className="inline-block w-[2px] h-6 align-middle bg-gradient-to-b from-blue-400 to-purple-400 ml-0.5 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
} 