'use client'

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

const RotatingBox = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame(() => {
        if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        }
    });
    
    return (
        <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="orange" />
        </Box>
    );
}

const MainScene = () => {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <RotatingBox />
            <OrbitControls />
        </Canvas>
    );
};

export default MainScene;