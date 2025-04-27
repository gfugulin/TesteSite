'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChartBarIcon, PresentationChartLineIcon, MagnifyingGlassIcon, EnvelopeIcon, ClockIcon, SparklesIcon, LightBulbIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function FerramentasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ferramentas EG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Caixa de ferramentas pronta para uso. Resultados em menos de 10 minutos.
          </motion.p>
        </div>
      </section>

      {/* Grid de Ferramentas */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calculadora de ROI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <ChartBarIcon className="h-7 w-7 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Calculadora de ROI</h3>
                  <p className="text-gray-600">
                    Calcule o retorno sobre investimento das suas campanhas de marketing digital.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Tempo: 3 minutos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <SparklesIcon className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Resultados instantâneos</span>
                </div>
              </div>
              <Link 
                href="/ferramentas/calculadora-roi"
                className="mt-6 inline-block w-full text-center bg-purple-500 text-white py-3 px-6 rounded-xl hover:bg-purple-600 transition-colors"
              >
                Calcular ROI
              </Link>
            </motion.div>

            {/* Diagnóstico de Maturidade Digital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <PresentationChartLineIcon className="h-7 w-7 text-orange-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Maturidade Digital</h3>
                  <p className="text-gray-600">
                    Avalie o nível de maturidade digital do seu negócio em minutos.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Tempo: 5 minutos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <LightBulbIcon className="h-5 w-5 text-orange-400 mr-2" />
                  <span>Diagnóstico personalizado</span>
                </div>
              </div>
              <Link 
                href="/ferramentas/maturidade-digital"
                className="mt-6 inline-block w-full text-center bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Avaliar Maturidade
              </Link>
            </motion.div>

            {/* Scanner de Funil EG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MagnifyingGlassIcon className="h-7 w-7 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Scanner de Funil EG</h3>
                  <p className="text-gray-600">
                    Identifique em minutos os principais gargalos do seu processo de vendas.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Tempo: 5 minutos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ChartBarIcon className="h-5 w-5 text-green-400 mr-2" />
                  <span>Diagnóstico instantâneo</span>
                </div>
              </div>
              <Link 
                href="/ferramentas/scanner-funil"
                className="mt-6 inline-block w-full text-center bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition-colors"
              >
                Fazer Diagnóstico
              </Link>
            </motion.div>

            {/* Cold Email Builder EG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <EnvelopeIcon className="h-7 w-7 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Cold Email Builder EG</h3>
                  <p className="text-gray-600">
                    Gere scripts matadores de cold email para fechar mais negócios B2B.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Tempo: 2 minutos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Scripts validados pela EG</span>
                </div>
              </div>
              <Link 
                href="/ferramentas/cold-email-builder"
                className="mt-6 inline-block w-full text-center bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Gerar Meu Email
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-8 bg-gray-900 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Quer mais ferramentas exclusivas?</h2>
          <p className="text-lg mb-8">
            Agende um diagnóstico gratuito e tenha acesso ao arsenal completo da Evergreen.
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            Agendar Diagnóstico Gratuito
          </Link>
        </div>
      </section>
    </main>
  )
} 