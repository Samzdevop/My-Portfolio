import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

// Augment JSX.IntrinsicElements to recognize React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      dodecahedronGeometry: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
    }
  }
  // Fallback for newer React/TS versions where JSX is under React namespace
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        group: any;
        mesh: any;
        dodecahedronGeometry: any;
        icosahedronGeometry: any;
        meshStandardMaterial: any;
      }
    }
  }
}

const AbstractShape = ({ position, color, scale, speed }: { position: [number, number, number], color: string, scale: number, speed: number }) => {
    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <mesh position={position} scale={scale}>
                <dodecahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial color={color} speed={2} distort={0.4} radius={1} transparent opacity={0.8} wireframe />
            </mesh>
        </Float>
    )
}

const CodeBlock = ({ position, text }: { position: [number, number, number], text: string }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <Text
                    color="#ffffff"
                    fontSize={0.3}
                    maxWidth={200}
                    lineHeight={1}
                    letterSpacing={0.02}
                    textAlign="center"
                    font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    {text}
                </Text>
            </group>
        </Float>
    )
}

export const FloatingTech: React.FC = () => {
  const mainRef = useRef<THREE.Group>(null);

  useFrame((state) => {
     if(mainRef.current) {
         mainRef.current.rotation.y += 0.002;
     }
  });

  return (
    <group ref={mainRef}>
      {/* Central Abstract Core */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial color="#3b82f6" speed={1.5} distort={0.6} wireframe={false} roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Outer Wireframe Shell */}
      <mesh position={[0, 0, 0]} scale={1.2}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Floating "Satellites" */}
      <AbstractShape position={[3, 2, -2]} color="#ec4899" scale={0.5} speed={2} />
      <AbstractShape position={[-3, -1, 1]} color="#06b6d4" scale={0.6} speed={3} />
      <AbstractShape position={[2, -3, -2]} color="#10b981" scale={0.4} speed={2.5} />

      {/* Floating Code Text */}
      <CodeBlock position={[2.5, 0.5, 2]} text="<React />" />
      <CodeBlock position={[-2.5, 1.5, 2]} text="const dev = true;" />
      <CodeBlock position={[0, -2.5, 2]} text="{ mobile: 'Native' }" />
    </group>
  );
};