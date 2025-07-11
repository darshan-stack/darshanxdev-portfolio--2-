"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import GlobeDemo from "@/components/ui/globe-demo";

function FloatingElements() {
  return (
    <>
      <Box position={[2, 1, 0]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Sphere position={[-2, -1, 0]} args={[0.3]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
      <Box position={[0, 2, -1]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
    </>
  )
}

export function About() {
  return (
    <FollowerPointerCard title="About">
      <div className="min-h-screen bg-background text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-base text-black dark:text-white">
              <p>
                I'm Darshan Mistari, also known as <span className="text-blue-400 font-semibold">DARSHANXDEV</span> in the tech community, based in Pune, India. My journey is fueled by a deep curiosity for artificial intelligence, machine learning, and robotics, with hands-on experience in national and global hackathons, and a passion for building impactful solutions.
              </p>
              <p>
                As a full-stack developer and AI enthusiast, I specialize in bridging the gap between advanced AI research and real-world web applications. My expertise spans across AI, robotics, cloud, and modern web technologies, with a proven track record in national-level competitions and innovative projects.
              </p>
              <p>
                My mission is to create intelligent systems that learn, adapt, and solve real problems. From neural networks to autonomous robots, I thrive on exploring new frontiers and collaborating with forward-thinking teams to push the boundaries of technology.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-base font-medium text-blue-400 mb-2">Focus Areas</h3>
                <ul className="text-sm text-white space-y-1">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Robotics & Automation</li>
                  <li>• Full-Stack & Cloud Development</li>
                  <li>• Hackathons & Innovation</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-base font-medium text-blue-400 mb-2">Location</h3>
                <ul className="text-sm text-white space-y-1">
                  <li>• Pune, India</li>
                </ul>
                <h3 className="text-base font-medium text-blue-400 mb-2 mt-4">Official Logo</h3>
                <img src="/logo.png" alt="DarshanXDev Logo" className="w-16 h-16 rounded-full mt-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 flex items-center justify-center"
          >
            <GlobeDemo />
          </motion.div>
        </div>
      </div>
    </div>
    </FollowerPointerCard>
  )
}
