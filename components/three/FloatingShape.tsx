'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
    meshRef.current.rotation.z = t * 0.06;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.3}
      floatIntensity={0.6}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1, 0.3, 200, 32, 2, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          roughness={0.05}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropicBlur={0.1}
          toneMapped={false}
          color="#C9A84C"
          attenuationColor="#C9A84C"
          attenuationDistance={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShape() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F5F0E8" />
        <directionalLight position={[-5, -5, -3]} intensity={0.5} color="#C9A84C" />
        <pointLight position={[0, 2, 3]} intensity={1.5} color="#E8C97A" />
        <Environment preset="city" />
        <TorusKnot />
      </Canvas>
    </div>
  );
}
