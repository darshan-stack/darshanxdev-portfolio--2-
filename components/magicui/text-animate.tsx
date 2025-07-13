"use client";
import { motion } from "framer-motion";
import React from "react";

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  once = false,
}: {
  children: string;
  animation?: "blurInUp";
  by?: "character" | "word";
  once?: boolean;
}) {
  const text = typeof children === "string" ? children : String(children);
  const items = by === "word" ? text.split(" ") : text.split("");
  return (
    <span style={{ display: "inline-block", whiteSpace: "pre-wrap" }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: i * 0.08, duration: 1 }}
          viewport={{ once }}
          style={{ display: "inline-block" }}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </span>
  );
} 