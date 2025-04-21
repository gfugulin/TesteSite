'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations'

interface Metrics {
  conversions?: string
  cac?: string
  mrr?: string
  revenue?: string
  processes?: string
  markets?: string
}

interface CaseStudy {
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    before: Metrics
    after: Metrics
  }
}

const cases: CaseStudy[] = [
  {
    client: 'TechCorp',
    industry: 'SaaS',
    challenge: 'Baixa taxa de conversão e CAC alto',
    solution: 'Implementação da Máquina de Vendas Evergreen',
    results: [
      'Aumento de 300% nas conversões',
      'Redução de 40% no CAC',
      'ROI positivo em 3 meses',
    ],
    metrics: {
      before: {
        conversions: '2%',
        cac: 'R$ 1.500',
        mrr: 'R$ 50k',
      },
      after: {
        conversions: '8%',
        cac: 'R$ 900',
        mrr: 'R$ 200k',
      },
    },
  },
  {
    client: 'GrowthCo',
    industry: 'E-commerce',
    challenge: 'Escalabilidade limitada e processos manuais',
    solution: 'Integração do Growth Engine + EG.Tech',
    results: [
      'Crescimento de 500% em vendas',
      'Automação de 80% dos processos',
      'Expansão para 3 novos mercados',
    ],
    metrics: {
      before: {
        revenue: 'R$ 100k/mês',
        processes: '20% automação',
        markets: '1 mercado',
      },
      after: {
        revenue: 'R$ 600k/mês',
        processes: '80% automação',
        markets: '4 mercados',
      },
    },
  },
]

export default function CasesPage() {
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
              Cases de <span className="text-gradient">Sucesso</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais e mensuráveis que transformaram o crescimento de nossos clientes
            </p>
          </motion.div>

          <div className="space-y-24">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">💼</span>
                      <div>
                        <h2 className="text-2xl font-bold">{case_.client}</h2>
                        <p className="text-gray-600">{case_.industry}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Desafio:</h3>
                      <p className="text-gray-600">{case_.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Solução:</h3>
                      <p className="text-gray-600">{case_.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Resultados:</h3>
                      <ul className="space-y-2">
                        {case_.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-center space-x-3">
                            <span className="text-eg-green">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <h3 className="text-xl font-bold mb-6">Métricas</h3>
                    <div className="space-y-6">
                      {Object.keys(case_.metrics.before).map((key) => (
                        <div key={key} className="grid grid-cols-3 gap-4 items-center">
                          <div className="font-medium capitalize">{key}</div>
                          <div className="text-center text-red-500">{case_.metrics.before[key as keyof Metrics]}</div>
                          <div className="text-center text-eg-green">{case_.metrics.after[key as keyof Metrics]}</div>
                        </div>
                      ))}
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 border-t pt-4">
                        <div>Métrica</div>
                        <div className="text-center">Antes</div>
                        <div className="text-center">Depois</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-24 text-center">
            <div className="glass-card p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Quer Ser Nosso Próximo Case de Sucesso?
              </h2>
              <p className="text-gray-600 mb-8">
                Agende uma consultoria gratuita e descubra como podemos transformar seu negócio.
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