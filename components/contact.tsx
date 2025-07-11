"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"
import { FollowerPointerCard } from "@/components/ui/following-pointer";

function ContactSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.2} speed={2} roughness={0} />
    </Sphere>
  )
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "darshan@darshanxdev.com",
    href: "mailto:darshan@darshanxdev.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/darshanxdev",
    color: "#333",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/darshanxdev",
    color: "#0077b5",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/darshanxdev",
    color: "#1da1f2",
  },
]

export function Contact() {
  return (
    <FollowerPointerCard title="Contact">
      <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss how we can build the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white group-hover:text-blue-400 transition-colors">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
                      style={{ "--hover-color": social.color } as React.CSSProperties}
                    >
                      <social.icon className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <ContactSphere />
            </Canvas>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 DARSHANXDEV. Built with passion for innovation and technology.</p>
          </div>
        </motion.div>
      </div>
    </div>
    </FollowerPointerCard>
  )
}
