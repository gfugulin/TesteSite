'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ParticlesBackgroundProps {
  className?: string
  particleCount?: number
  children?: React.ReactNode
  variant?: 'green' | 'dark' | 'light'
}

export default function ParticlesBackground({
  className = "",
  particleCount = 12,
  variant = 'green',
  children
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    size: number,
    color: string,
    speed: number,
    opacity: number,
    blur: number,
    glow: string
  }>>([])

  // Paletas de cores baseadas na variante
  const colorSchemes = {
    green: {
      particles: [
        'rgba(0, 168, 107, 0.15)',  // Verde EG principal
        'rgba(34, 197, 94, 0.12)',  // Verde secundário
        'rgba(16, 185, 129, 0.10)', // Verde terciário
      ],
      glow: [
        '0 0 40px rgba(0, 168, 107, 0.2)',
        '0 0 50px rgba(34, 197, 94, 0.15)',
        '0 0 60px rgba(16, 185, 129, 0.1)'
      ],
      background: 'bg-gradient-to-br from-emerald-950/40 via-green-900/30 to-teal-950/50'
    },
    dark: {
      particles: [
        'rgba(30, 41, 59, 0.15)',   // Slate escuro
        'rgba(15, 23, 42, 0.12)',   // Slate mais escuro
        'rgba(51, 65, 85, 0.10)',   // Slate médio
      ],
      glow: [
        '0 0 40px rgba(30, 41, 59, 0.2)',
        '0 0 50px rgba(15, 23, 42, 0.15)',
        '0 0 60px rgba(51, 65, 85, 0.1)'
      ],
      background: 'bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-slate-800/50'
    },
    light: {
      particles: [
        'rgba(255, 255, 255, 0.15)',
        'rgba(241, 245, 249, 0.12)',
        'rgba(226, 232, 240, 0.10)',
      ],
      glow: [
        '0 0 40px rgba(255, 255, 255, 0.2)',
        '0 0 50px rgba(241, 245, 249, 0.15)',
        '0 0 60px rgba(226, 232, 240, 0.1)'
      ],
      background: 'bg-gradient-to-br from-white/40 via-slate-50/30 to-slate-100/50'
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const scheme = colorSchemes[variant]
    
    const newParticles = Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 250 + 150, // Partículas maiores
      color: scheme.particles[Math.floor(Math.random() * scheme.particles.length)],
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.2 + 0.1,
      blur: Math.random() * 60 + 40,
      glow: scheme.glow[Math.floor(Math.random() * scheme.glow.length)]
    }))

    setParticles(newParticles)
  }, [particleCount, variant])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className} ${colorSchemes[variant].background}`}
      onMouseMove={handleMouseMove}
    >
      {/* Gradiente de fundo com efeito de vidro */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
      
      {/* Camada de partículas */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
            boxShadow: particle.glow,
          }}
          animate={{
            x: [
              particle.x + (mousePosition.x - 0.5) * 100 - 50,
              particle.x + (mousePosition.x - 0.5) * 100 + 50
            ],
            y: [
              particle.y + (mousePosition.y - 0.5) * 100 - 50,
              particle.y + (mousePosition.y - 0.5) * 100 + 50
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 5 / particle.speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradiente de sobreposição para suavizar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      
      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  )
} 