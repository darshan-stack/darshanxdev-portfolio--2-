"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function Dots({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 16
      );
    }
    setPositions(new Float32Array(arr));
  }, [count]);

  if (!positions) return null;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color={"white"} size={0.18} />
    </points>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { camera, mouse } = state;
    if (!camera || !mouse) return;
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 1.2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeDotsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <Dots count={220} />
        <CameraRig />
      </Canvas>
    </div>
  );
} 