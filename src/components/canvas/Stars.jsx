import { useMemo, useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

const getTestWebGLContext = () => {
  try {
    const canvas = document.createElement('canvas')
    return (
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    )
  } catch (e) {
    return null
  }
}

const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false
  if (window.__webglAvailable !== undefined) return window.__webglAvailable

  const gl = getTestWebGLContext()
  const available = !!gl

  if (gl) {
    const loseContext =
      gl.getExtension('WEBGL_lose_context') ||
      gl.getExtension('WEBKIT_WEBGL_lose_context') ||
      gl.getExtension('MOZ_WEBGL_lose_context')

    loseContext?.loseContext()
  }

  window.__webglAvailable = available
  return available
}

const useVisibility = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { rootMargin: '200px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

const Stars = (props) => {
  const ref = useRef(null)

  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3)

    for (let i = 0; i < 5000; i += 1) {
      const radius = Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  const [ref, visible] = useVisibility()
  const [hasWebGL, setHasWebGL] = useState(null)

  useEffect(() => {
    setHasWebGL(isWebGLAvailable())
  }, [])

  if (!visible || hasWebGL === false) {
    return <div ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
  }

  if (hasWebGL === null) {
    return <div ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
  }

  return (
    <div ref={ref} className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop="always"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas;