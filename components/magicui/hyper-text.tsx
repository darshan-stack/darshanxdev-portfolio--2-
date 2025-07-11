"use client";
import React from "react";
import { motion } from "framer-motion";

export function HyperText({ children }: { children: React.ReactNode }) {
  // Split text into characters for animation
  const text = typeof children === "string" ? children : String(children);
  return (
    <span style={{ display: "inline-block", whiteSpace: "pre" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.4 }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
} 