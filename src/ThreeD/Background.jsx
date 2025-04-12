import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";
import "../styles/Background.css"

const Particles = () => {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008; // Slow rotation effect
    }
  });

  // Mobile check
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 2000 : 5000;

  // Generate particles using `particleCount`
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 2); // Each point has x, y, z
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [particleCount]);
  return (
    <Points ref={pointsRef} positions={particles} frustumCulled={false}>
      <PointMaterial color="white" size={0.02} transparent opacity={0.7} depthWrite={false} />
    </Points>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}  style={{ background: "black" }}>
        <ambientLight intensity={0.3} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
