import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import { FloatingTech } from './FloatingTech';
import * as THREE from 'three';

// Augment JSX.IntrinsicElements to recognize React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      color: any;
      fog: any;
    }
  }
  // Fallback for newer React/TS versions where JSX is under React namespace
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        group: any;
        ambientLight: any;
        pointLight: any;
        spotLight: any;
        color: any;
        fog: any;
      }
    }
  }
}

interface SceneProps {
  scrollProgress: number;
}

export const Scene: React.FC<SceneProps> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
        // Rotate the entire scene slowly based on time
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        
        // Tilt based on scroll to create a parallax-like transition
        // As user scrolls down, the camera angle feels like it's diving
        const targetRotationX = scrollProgress * Math.PI * 0.2;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#050505']} />
      
      {/* Atmospheric Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
      <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={1} />

      <group ref={groupRef}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingTech />
      </group>
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#050505', 5, 20]} />
    </>
  );
};