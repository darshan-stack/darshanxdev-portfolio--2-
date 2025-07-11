"use client"

import { useEffect, useRef } from "react"

export const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const beams: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(beam.x + beam.length, beam.y + beam.length)
        ctx.strokeStyle = `rgba(59, 130, 246, ${beam.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        beam.x += beam.speed
        beam.y += beam.speed

        if (beam.x > canvas.width + beam.length) {
          beam.x = -beam.length
          beam.y = Math.random() * canvas.height
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
}
