"use client"

import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import { BackgroundBeams } from "./background-beams"
import { AIPassionAnimation } from "./ai-passion-animation"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
const TypewriterEffectSmooth = dynamic(() => import("./ui/typewriter-effect").then(mod => mod.TypewriterEffectSmooth), { ssr: false });
import Switch from "@/components/Switch";
import { useTheme } from "next-themes";
const ThreeDotsBackground = dynamic(() => import("./ThreeDotsBackground"), { ssr: false })
import ColourfulText from "@/components/ui/colourful-text";
const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), { ssr: false });
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import GridBackground from "@/components/ui/grid-background";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import { AuroraTypewriterText } from "@/components/magicui/aurora-typewriter-text";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useFrame } from "@react-three/fiber";
import { TextAnimate } from "@/components/magicui/text-animate";

function AnimatedSphere({ color, gradient, gradientUrl }: { color: string, gradient?: boolean, gradientUrl?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  let texture: THREE.Texture | null = null;
  try {
    if (gradientUrl) {
      texture = useLoader(THREE.TextureLoader, gradientUrl);
    }
  } catch (e) {
    texture = null;
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Smoothly interpolate the sphere position towards mouse position
      meshRef.current.position.x += (mousePosition.x * 2 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (mousePosition.y * 2 - meshRef.current.position.y) * 0.05;
      
      // Add subtle rotation based on mouse movement
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        map={texture || undefined}
        color={texture ? undefined : color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

function LiveClock() {
  const [time, setTime] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(istTime);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Split time into parts for styling
  const [hh = "--", mm = "--", ss = "--"] = time.split(":");

  return (
    <div className="flex justify-center mb-8">
      <span className={`countdown font-mono text-2xl font-bold ${theme === "light" ? "text-blue-700" : "text-cyan-300"}`}>
        <span style={{ "--value": hh } as React.CSSProperties} aria-live="polite" aria-label={hh}>{hh}</span>:
        <span style={{ "--value": mm } as React.CSSProperties} aria-live="polite" aria-label={mm}>{mm}</span>:
        <span style={{ "--value": ss } as React.CSSProperties} aria-live="polite" aria-label={ss}>{ss}</span>
      </span>
    </div>
  );
}

const sentences = [
  {
    text: "This isn't just what I do—it's who I am.",
    className: "text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent transition-all duration-300"
  },
  {
    text: "I breathe AI, build full-stack dreams, and chase the future through robotics.",
    className: "text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent transition-all duration-300"
  }
];

export function Hero() {
  const { theme, setTheme } = useTheme();
  const mainName = "DARSHANXDEV"
  const [sentenceIndex, setSentenceIndex] = useState(0);

  // Alternate sentences every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FollowerPointerCard title="Hero">
      <div
        className={`h-screen w-full relative flex flex-col items-center justify-center overflow-hidden`}
        style={
          theme === "light"
            ? { background: "radial-gradient(circle at 50% 40%, #fff 0%, #f3f3f3 100%)" }
            : { background: "#000000" }
        }
      >
        {/* Clock at the very top of hero section */}
        <div className="relative z-50 w-full flex justify-center pt-8 mb-2">
          <LiveClock />
        </div>
        
        <div className="absolute inset-0 w-full h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
              {theme === "light" && <AnimatedSphere gradientUrl="/gradient.png" color="#18181b" gradient />}
              {theme === "dark" && <AnimatedSphere gradientUrl="/gradient-dark.png" color="#fff" gradient />}
          </Canvas>
        </div>

        <AIPassionAnimation />

        {/* Centered main name above sphere, always visible */}
        <div className="relative z-40 flex flex-col items-center justify-center w-full pt-8 mb-2">
          <h1
            className="text-6xl md:text-8xl font-extrabold mb-4 comforter"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent inline-block">
              <HyperText>DARSHANX.ai</HyperText>
            </span>
          </h1>
        </div>

        {/* Alternating TextAnimate effect for sentences */}
        <div className="relative z-30 flex items-center justify-center w-full py-2 mb-6">
          <span className={sentences[sentenceIndex].className}>
            <TextAnimate animation="blurInUp" by="character" once>
              {sentences[sentenceIndex].text}
            </TextAnimate>
          </span>
        </div>

        {/* Social Media 3D Logos at center bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex justify-center items-center gap-4 mt-1">
            <a href="https://www.linkedin.com/in/darshanxdevs" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="https://img.icons8.com/cute-clipart/64/linkedin.png" alt="LinkedIn" className="w-8 h-8 rounded-full shadow-2xl" />
            </a>
            <a href="https://x.com/futrgenX" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="Twitter X" className="w-8 h-8 rounded-full shadow-2xl" />
            </a>
            <a href="https://github.com/darshanxdev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="https://img.icons8.com/sf-black-filled/64/github.png" alt="GitHub" className="w-8 h-8 rounded-full shadow-2xl" />
            </a>
            <a href="mailto:darshanmistaridz@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="https://img.icons8.com/color/48/gmail-new.png" alt="Gmail" className="w-8 h-8 rounded-full shadow-2xl" />
            </a>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </FollowerPointerCard>
  )
}
