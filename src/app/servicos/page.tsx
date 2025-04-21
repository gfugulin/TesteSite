'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/utils/animations'

const services = [
  {
    title: 'Máquina de Vendas Evergreen',
    description: 'Sistema completo de vendas automatizadas que combina estratégia, tecnologia e processos para maximizar suas conversões.',
    features: [
      'Automação de funil de vendas',
      'Qualificação de leads via IA',
      'Dashboard de métricas em tempo real',
      'Integração com CRM',
    ],
    icon: '🎯',
  },
  {
    title: 'Growth Engine',
    description: 'Motor de crescimento escalável que utiliza data science e growth hacking para impulsionar seu negócio.',
    features: [
      'Análise preditiva de mercado',
      'Otimização de CAC e LTV',
      'Estratégias de growth hacking',
      'Automação de marketing',
    ],
    icon: '📈',
  },
  {
    title: 'EG.Tech',
    description: 'Soluções tecnológicas sob medida para automatizar e escalar operações com IA e machine learning.',
    features: [
      'Desenvolvimento de software customizado',
      'Implementação de IA e ML',
      'Automação de processos',
      'Análise de dados avançada',
    ],
    icon: '🤖',
  },
]

export default function ServicosPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-eg-offwhite to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-gradient">Sistemas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções integradas que combinam estratégia, tecnologia e execução para
              transformar seu negócio e gerar resultados exponenciais.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-eg-green/10 flex items-center justify-center text-3xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full bg-eg-green/10 flex items-center justify-center text-eg-green">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary">
                    Conhecer {service.title}
                  </button>
                </div>
                <div className={`glass-card aspect-square p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-eg-green/10 to-blue-500/10 flex items-center justify-center">
                    <span className="text-8xl">{service.icon}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-24 text-center">
            <div className="glass-card p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-gray-600 mb-8">
                Agende uma consultoria gratuita e descubra como nossos sistemas podem
                impulsionar seus resultados.
              </p>
              <button className="btn-primary">
                Agendar Consultoria Gratuita
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 