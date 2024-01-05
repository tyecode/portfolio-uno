'use client'

import React, { useEffect, useRef } from 'react'

const MatrixBackground: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const timeout = 50

  useEffect(() => {
    const context = canvas.current?.getContext('2d')

    if (!context) return

    const width = 1920
    const height = 1080

    if (canvas.current) {
      canvas.current.width = width
      canvas.current.height = height
    }

    context.fillStyle = '#000'
    context.fillRect(0, 0, width, height)

    // calculate how many 'lines' to show and animate
    const columns = Math.floor(width / 20) + 1
    const yPositions: number[] = Array.from({ length: columns }, () => 0)

    const matrix = () => {
      if (!canvas.current) return

      const ctx = canvas.current.getContext('2d')

      if (!ctx) return

      ctx.fillStyle = '#0001'
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = '	#9455d3'
      ctx.font = '16pt monospace'

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = index * 20

        ctx.fillText(text, x, y)

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0
        } else {
          yPositions[index] = y + 20
        }
      })
    }

    const interval = setInterval(matrix, timeout)

    return () => {
      clearInterval(interval)
    }
  }, [canvas, timeout])

  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden bg-transparent duration-200">
      <canvas ref={canvas} />
    </div>
  )
}

export default MatrixBackground
