'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-eg-offwhite to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-eg-green/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Transforme seu Negócio com{' '}
              <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance">
              Autoridade em growth, tecnologia e IA para escalar resultados reais
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary w-full sm:w-auto">
              Agendar Diagnóstico
            </button>
            <button className="btn-secondary w-full sm:w-auto">
              Ver Cases de Sucesso
            </button>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            <motion.div variants={fadeInUp} className="glass-card p-6 animate-float" style={{ animationDelay: '0s' }}>
              <h3 className="text-4xl font-bold text-gradient">300%</h3>
              <p className="text-gray-600">Crescimento Médio</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6 animate-float" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-4xl font-bold text-gradient">50+</h3>
              <p className="text-gray-600">Clientes Atendidos</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6 animate-float" style={{ animationDelay: '1s' }}>
              <h3 className="text-4xl font-bold text-gradient">24/7</h3>
              <p className="text-gray-600">Suporte Dedicado</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6 animate-float" style={{ animationDelay: '1.5s' }}>
              <h3 className="text-4xl font-bold text-gradient">100%</h3>
              <p className="text-gray-600">Satisfação</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-eg-green rounded-full p-1">
          <div className="w-1.5 h-3 bg-eg-green rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
} 