'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function SobrePage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-eg-offwhite to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-gradient">Evergreen MKT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Somos uma agência especializada em growth, tecnologia e IA, focada em entregar resultados reais e mensuráveis para nossos clientes.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Transformar negócios através de estratégias inovadoras e tecnologia de ponta, garantindo crescimento sustentável e resultados excepcionais.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência global em soluções de growth e transformação digital, impactando positivamente o sucesso de nossos clientes.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Inovação',
                  description: 'Buscamos constantemente novas soluções e tecnologias',
                },
                {
                  title: 'Resultados',
                  description: 'Focamos em métricas e crescimento real',
                },
                {
                  title: 'Transparência',
                  description: 'Comunicação clara e objetiva em todos os processos',
                },
              ].map((valor, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">{valor.title}</h3>
                  <p className="text-gray-600">{valor.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 