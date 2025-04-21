'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'

const tools = [
  {
    id: 'roi-calculator',
    title: 'Calculadora de ROI',
    description: 'Calcule o retorno sobre investimento das suas campanhas de marketing digital',
    icon: '📊',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '/ferramentas/calculadora-roi'
  },
  {
    id: 'digital-maturity',
    title: 'Teste de Maturidade Digital',
    description: 'Descubra o nível de maturidade digital da sua empresa e receba recomendações personalizadas',
    icon: '📈',
    color: 'from-purple-500/20 to-pink-500/20',
    link: '/ferramentas/maturidade-digital'
  },
  {
    id: 'ai-challenge',
    title: 'Desafio 7 Dias de IA',
    description: 'Um programa intensivo para dominar as principais ferramentas de IA do mercado',
    icon: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    link: '/ferramentas/desafio-ia'
  },
  {
    id: 'notion-templates',
    title: 'Templates Notion de IA',
    description: 'Collection dos melhores templates de IA para otimizar seu workflow',
    icon: '📑',
    color: 'from-orange-500/20 to-yellow-500/20',
    link: '/ferramentas/templates-notion'
  }
]

export default function FerramentasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ferramentas <span className="text-gradient">Gratuitas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos exclusivos para impulsionar seu crescimento e produtividade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                variants={fadeInUp}
                custom={index}
                className="group"
              >
                <Link href={tool.link}>
                  <div className="glass-card p-8 h-full transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{tool.title}</h2>
                    <p className="text-gray-600">{tool.description}</p>
                    <div className="mt-6 flex items-center text-eg-green font-medium">
                      <span>Acessar Ferramenta</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 