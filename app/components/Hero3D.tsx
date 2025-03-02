'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef(null);

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        rotation={[0, THREE.MathUtils.degToRad(45), 0]}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#FF6B6B"
          wireframe
          wireframeLinewidth={2}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedShape />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D; 