// src/components/ThreeDAvatar.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const AvatarModel = () => {
  const { scene } = useGLTF("/Adventurer.glb"); // Ensure this path is correct
  return <primitive object={scene} scale={2} />;
};

const ThreeDAvatar = () => {
  return (
    <Canvas className="avatarcan" style={{ width: "350px", height: "550px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[1,2,2]} />
      <OrbitControls />
      <AvatarModel />
    </Canvas>
  );
};

export default ThreeDAvatar;
