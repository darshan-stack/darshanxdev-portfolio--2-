"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Zap, Bot, Network, Eye, Lightbulb } from "lucide-react"

const aiElements = [
  { icon: Brain, label: "Neural Networks", color: "#3b82f6", delay: 0 },
  { icon: Cpu, label: "Deep Learning", color: "#8b5cf6", delay: 0.2 },
  { icon: Zap, label: "Machine Learning", color: "#10b981", delay: 0.4 },
  { icon: Bot, label: "Robotics", color: "#f59e0b", delay: 0.6 },
  { icon: Network, label: "AI Systems", color: "#ef4444", delay: 0.8 },
  { icon: Eye, label: "Computer Vision", color: "#06b6d4", delay: 1.0 },
  { icon: Lightbulb, label: "Innovation", color: "#f97316", delay: 1.2 },
]

export function AIPassionAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {aiElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
          className="absolute flex flex-col items-center"
        >
          <div className="p-2 rounded-full mb-1" style={{ backgroundColor: element.color + "20" }}>
            <element.icon className="w-4 h-4" style={{ color: element.color }} />
          </div>
          <span className="text-xs font-medium" style={{ color: element.color }}>
            {element.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
