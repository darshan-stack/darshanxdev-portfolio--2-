"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AuroraTypewriterTextProps {
  text: string;
  highlight?: string;
  className?: string;
}

const auroraColors = [
  "#60a5fa", // blue-400
  "#a78bfa", // purple-400
  "#f472b6", // pink-400
  "#facc15", // yellow-400
  "#34d399", // green-400
  "#38bdf8", // sky-400
  "#f87171", // red-400
];
const highlightColors = [
  "#f472b6", // pink-400
  "#facc15", // yellow-400
  "#38bdf8", // sky-400
  "#a78bfa", // purple-400
  "#f87171", // red-400
];

export function AuroraTypewriterText({ text, highlight, className }: AuroraTypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const highlightStart = highlight ? text.indexOf(highlight) : -1;
  const highlightEnd = highlightStart !== -1 ? highlightStart + highlight.length : -1;

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
        // Highlighted part
        if (highlight && i >= highlightStart && i < highlightEnd) {
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              style={{
                display: "inline-block",
                background: `linear-gradient(90deg, ${highlightColors.join(",")})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              {char}
            </motion.span>
          );
        }
        // Aurora/gradient part
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            style={{
              display: "inline-block",
              background: `linear-gradient(90deg, ${auroraColors.join(",")})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
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
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
} 