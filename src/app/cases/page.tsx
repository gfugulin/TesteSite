'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations'
import { ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface Metrics {
  agendamentos?: string
  tempo_resposta?: string
  taxa_qualificacao?: string
  leads?: string
  cac?: string
  vagas?: string
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
    client: 'Grupo Casa Fatilli + Casa & Conforto',
    industry: 'Móveis Planejados (B2C, multimarcas)',
    challenge: 'Time comercial sobrecarregado, resposta lenta e baixa conversão no WhatsApp.',
    solution: 'Desenvolvimento de sistema de SDR automatizado com IA generativa + integração ao CRM. Criação de fluxo de nutrição com pré-qualificação automática de leads por canal.',
    results: [
      'Redução de 70% no tempo de resposta',
      'Aumento de 5x na taxa de agendamento',
      'Padronização do atendimento comercial com IA'
    ],
    metrics: {
      before: {
        agendamentos: '10/semana',
        tempo_resposta: '18h',
        taxa_qualificacao: '25%'
      },
      after: {
        agendamentos: '55/semana',
        tempo_resposta: '2h',
        taxa_qualificacao: '60%'
      }
    }
  },
  {
    client: 'IW Tour – Viagens Iniciáticas',
    industry: 'Turismo transformacional (B2C nichado)',
    challenge: 'Falta de previsibilidade em geração de leads, dependência de indicações e mídia orgânica fraca.',
    solution: 'Criação de campanhas de aquisição com tráfego pago, landing pages com CRO, segmentação por arquétipos e automação de nutrição com storytelling emocional.',
    results: [
      '+350% em geração de leads qualificados',
      'ROI positivo na 2ª campanha',
      'Primeira fila de lançamento esgotada em 48h'
    ],
    metrics: {
      before: {
        leads: '60/mês',
        cac: 'R$ 200',
        vagas: '8 preenchidas'
      },
      after: {
        leads: '270/mês',
        cac: 'R$ 92',
        vagas: '20 preenchidas'
      }
    }
  }
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
                      <ChartBarIcon className="h-8 w-8 text-emerald-600" />
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
                            <CheckCircleIcon className="h-5 w-5 text-eg-green" />
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