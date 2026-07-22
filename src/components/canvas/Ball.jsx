import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { isWebGLAvailable, useVisibility } from "./canvasUtils";


const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[2, 2, 2]}
        intensity={1.4}
      />

      <mesh
        castShadow
        receiveShadow
        scale={2.5}
      >
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#ffffff"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
        />

        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [hasWebGL, setHasWebGL] = useState(null);
  const [ref, visible] = useVisibility();

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!visible || hasWebGL === false) {
    return <div ref={ref} style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
  }

  if (hasWebGL === null) {
    return <div ref={ref} style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
  }

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.05}
        />

        <Ball imgUrl={icon} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;