"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Text, Box } from "@react-three/drei"
import { CardSpotlight } from "./ui/card-spotlight";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent conversational AI using natural language processing and machine learning",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    category: "AI/ML",
    color: "#3b82f6",
  },
  {
    title: "Autonomous Robot Navigation",
    description: "Self-navigating robot with computer vision and path planning algorithms",
    tech: ["Python", "OpenCV", "ROS", "Arduino"],
    category: "Robotics",
    color: "#ef4444",
  },
  {
    title: "Smart IoT Dashboard",
    description: "Real-time monitoring system for IoT devices with predictive analytics",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full-Stack",
    color: "#10b981",
  },
  {
    title: "Computer Vision App",
    description: "Object detection and recognition system using deep learning models",
    tech: ["Python", "PyTorch", "OpenCV", "Flask"],
    category: "AI/ML",
    color: "#f59e0b",
  },
  {
    title: "Robotic Arm Controller",
    description: "Precision control system for industrial robotic arm with inverse kinematics",
    tech: ["C++", "ROS", "Python", "Gazebo"],
    category: "Robotics",
    color: "#8b5cf6",
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online marketplace with AI-powered recommendations",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Full-Stack",
    color: "#06b6d4",
  },
]

const projectCards = projects.map((project) => ({
  quote: project.description,
  name: project.title,
  title: project.category,
  techStack: project.tech,
}));

function ProjectCube({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Box position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} />
    </Box>
  )
}

export function Projects() {
  return (
    <FollowerPointerCard title="Projects">
      <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 mt-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            Innovative solutions at the intersection of AI, robotics, and web development
          </p>
        </motion.div>
          <div className="mb-12">
            <InfiniteMovingCards
              items={projectCards}
              direction="right"
              speed="slow"
            />
              </div>
        </div>
      </div>
    </FollowerPointerCard>
  )
}
