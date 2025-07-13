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
import AboutFooter from "@/components/AboutFooter";

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

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 15 15" fill="none">
      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
}

export function Hero() {
  const { theme } = useTheme();
  const altTexts = ["0", "1", "2", "3", "4", "5", "Infinity"];
  const [altIndex, setAltIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAltIndex((prev) => (prev + 1) % altTexts.length);
    }, 1000); // slowed down to 1 second
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
        <div className="relative z-40 flex flex-col items-center justify-center w-full pt-16 mb-2">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 comforter flex flex-col items-center" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            <span className="inline-block flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent">DARSHANX.me</span>
              <span className="inline-block mx-2 animate-[bounce-x_1.2s_infinite]">
                <ArrowIcon />
              </span>
              <span className="font-black text-black dark:text-white ml-2">{altTexts[altIndex]}</span>
            </span>
          </h1>
          <div className="border-b-4 border-black dark:border-white w-3/4 my-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Built different. Powered by code, curiosity, and chaos.</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center mt-2">
            Hey, I'm Darshan — a full-stack developer blending code with creativity. From scalable systems to AI, ML, and robotics, I bring ideas to life with purpose and precision. I think deeply, build smart, and stay grounded — loud music fuels me, nature resets me. I bring a 1% mindset to deliver more than just growth — I deliver breakthroughs.
          </p>
          <div className="flex justify-center w-full mt-2">
            <AboutFooter />
          </div>
        </div>
      </div>
    </FollowerPointerCard>
  );
}
