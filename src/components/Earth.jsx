import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "../styles/Earth.css";
import EarthTexture from "./textures/earth.jpg";

const RotatingEarth = () => {
  const earthRef = useRef();

  // Rotate the earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.05;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(EarthTexture)}
        emissive={new THREE.Color(0)}  
        emissiveIntensity={0.3}  // Adjust for more brightness
      />
    </mesh>
  );
};

const Earth = () => {
  return (
    <div className="earth-container">
      <Canvas
        className="earth-canvas"
        gl={{ alpha: true }} // Enable transparency
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 3, 5]} intensity={1.2} />
        <RotatingEarth />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth;
