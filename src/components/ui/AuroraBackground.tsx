"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
import * as THREE from "three";

function ParticleField(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    // Generate random points in a sphere
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * 1.5;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-20 h-[100vh] w-[100vw] bg-bg-darker pointer-events-none">
      <div className="absolute inset-0 bg-gradient-aurora opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-bg-darker/60 backdrop-blur-[50px]" />
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>
    </div>
  );
}
