import { useEffect, useRef, useState } from 'react'

export const getTestWebGLContext = () => {
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

export const isWebGLAvailable = () => {
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

export const useVisibility = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { rootMargin: '150px 0px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
