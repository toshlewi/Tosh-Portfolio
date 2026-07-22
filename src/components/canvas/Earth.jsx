import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import { isWebGLAvailable, useVisibility } from './canvasUtils'


const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf')
  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  )
}

const EarthCanvas = () => {
  const [hasWebGL, setHasWebGL] = useState(null)
  const [ref, visible] = useVisibility()

  useEffect(() => {
    setHasWebGL(isWebGLAvailable())
  }, [])

  useEffect(() => {
    if (hasWebGL) {
      useGLTF.preload('/planet/scene.gltf')
    }
  }, [hasWebGL])

  if (!visible || hasWebGL === false) {
    return <div ref={ref} className="h-full w-full" aria-hidden="true" />
  }

  if (hasWebGL === null) {
    return <div ref={ref} className="h-full w-full" aria-hidden="true" />
  }

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.05}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default EarthCanvas
