import { useState, useEffect } from 'react'

function getWindowDimensions() {
  let height
  let width
  if (typeof window !== 'undefined') {
    height = window.innerHeight
    width = window.innerWidth
  }
  return {
    width,
    height
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}