import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader"
import { isWebGLAvailable, useVisibility } from "./canvasUtils"


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // Enable shadows
        child.castShadow = true;
        child.receiveShadow = true;

        // Slightly reduce reflections for all materials
        if (child.material) {
          child.material.envMapIntensity = 0.6;
        }

        // Target the table/desk specifically
        const name = child.name.toLowerCase();

        if (
          name.includes("table") ||
          name.includes("desk") ||
          name.includes("wood")
        ) {
          child.material.envMapIntensity = 0.25;
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      }
    });
  }, [computer]);

  return (
    <>
      {/* Soft overall light */}
      <ambientLight intensity={1.2} />

      {/* Natural fill light */}
      <hemisphereLight
        intensity={0.8}
        groundColor="black"
      />

      {/* Main light */}
      <pointLight
        position={[10, 10, 10]}
        intensity={1.5}
      />

      {/* Shadow light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [hasWebGL, setHasWebGL] = useState(null)
  const [ref, visible] = useVisibility()

  useEffect(() => {
    setHasWebGL(isWebGLAvailable())
  }, [])

  useEffect(() => {
    if (hasWebGL) {
      useGLTF.preload("./desktop_pc/scene.gltf")
    }
  }, [hasWebGL])

  if (!visible || hasWebGL === false) {
    return <div ref={ref} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
  }

  if (hasWebGL === null) {
    return <div ref={ref} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
  }

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default ComputersCanvas;