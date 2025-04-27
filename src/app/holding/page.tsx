'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SparklesIcon, CpuChipIcon, BeakerIcon, BanknotesIcon, RocketLaunchIcon, UserGroupIcon, HeartIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HoldingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600"
            >
              Evergreen Group
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-800"
            >
              Um ecossistema de soluções para empresas que querem crescer com inteligência.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto space-y-4"
            >
              <p>
                A Evergreen nasceu como uma agência de crescimento.
                Mas desde o primeiro dia, carregamos uma visão maior:
                construir um grupo de empresas conectadas por um mesmo propósito —
                <span className="font-semibold"> escala com inteligência, tecnologia e execução.</span>
              </p>
            </motion.div>
            <motion.blockquote 
              variants={fadeIn}
              className="text-xl md:text-2xl italic text-emerald-600 mb-12"
            >
              "A EG.MKT é só o começo. O grupo é a floresta."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Arquitetura do Grupo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
            >
              A Arquitetura do Grupo
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
            >
              Hoje, operamos com uma vertical ativa — a EG.MKT.
              Mas nossa estrutura foi pensada para comportar múltiplas unidades que resolvem,
              em profundidade, os maiores gargalos de crescimento.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* EG.MKT */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-emerald-500"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><SparklesIcon className="h-8 w-8 text-emerald-500" /></span>
                  <h3 className="text-2xl font-bold">EG.MKT</h3>
                </div>
                <p className="text-gray-600">Estratégia, aquisição e revenue</p>
                <span className="inline-block mt-4 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                  Ativo
                </span>
              </motion.div>

              {/* EG.Tech */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><CpuChipIcon className="h-8 w-8 text-blue-400" /></span>
                  <h3 className="text-2xl font-bold">EG.Tech</h3>
                </div>
                <p className="text-gray-600">Infraestrutura de IA, automações e inovação aplicada</p>
                <span className="inline-block mt-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Em desenvolvimento
                </span>
              </motion.div>

              {/* EG.Lab */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><BeakerIcon className="h-8 w-8 text-purple-400" /></span>
                  <h3 className="text-2xl font-bold">EG.Lab</h3>
                </div>
                <p className="text-gray-600">Produtos digitais, educação e comunidade</p>
                <span className="inline-block mt-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Em planejamento
                </span>
              </motion.div>

              {/* EG.Capital */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><BanknotesIcon className="h-8 w-8 text-gray-400" /></span>
                  <h3 className="text-2xl font-bold">EG.Capital</h3>
                </div>
                <p className="text-gray-600">Investimentos e parcerias estratégicas</p>
                <span className="inline-block mt-4 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Futuro
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tese Corporativa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            >
              Como pensamos como grupo
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                variants={fadeIn}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Frameworks Validados</h3>
                <p className="text-gray-600">
                  Criamos negócios baseados em frameworks validados na trincheira
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Integração Total</h3>
                <p className="text-gray-600">
                  Integrados desde o início (dados, time, produto, cultura)
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Tech-First</h3>
                <p className="text-gray-600">
                  Alta capacidade de execução com time lean e tech-first
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Cultura de Equity</h3>
                <p className="text-gray-600">
                  Cultura de equity, não de serviço por hora
                </p>
              </motion.div>
            </div>

            <motion.blockquote 
              variants={fadeIn}
              className="text-xl italic text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Nosso objetivo não é ser uma agência gigante.
              É ser um <span className="font-semibold">grupo enxuto, letal e escalável</span>,
              capaz de crescer por rede, não por volume.
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Cultura & Governança */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Cultura do Grupo
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <motion.div 
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl mb-4"><ArrowTrendingUpIcon className="h-8 w-8 text-emerald-500 mx-auto mb-4" /></div>
                <h3 className="text-xl font-bold mb-2">Estratégia first</h3>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl mb-4"><HeartIcon className="h-8 w-8 text-rose-400 mx-auto mb-4" /></div>
                <h3 className="text-xl font-bold mb-2">Produto com alma</h3>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl mb-4"><RocketLaunchIcon className="h-8 w-8 text-blue-400 mx-auto mb-4" /></div>
                <h3 className="text-xl font-bold mb-2">Execução com fome</h3>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl mb-4"><UserGroupIcon className="h-8 w-8 text-emerald-400 mx-auto mb-4" /></div>
                <h3 className="text-xl font-bold mb-2">Parcerias alinhadas</h3>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeIn}
              className="bg-emerald-50 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Governança</h3>
              <p className="text-gray-600 mb-6">
                Operamos com visão de crescimento horizontal.
                Cada unidade tem autonomia operacional, mas compartilha dados, cultura e frameworks.
              </p>
              <p className="text-lg font-semibold text-emerald-600">
                Todas seguem a mesma regra: crescimento sustentável com inteligência.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Co-criadores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
              Quer criar uma vertical com a gente?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Estamos abertos a sócios operadores, especialistas e fundadores com vontade
              de co-criar novas frentes dentro do grupo.
              <br /><br />
              Se você tem uma ideia, uma skill ou uma solução que pode se encaixar no
              ecossistema EG, vamos conversar.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                href="/contato"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
              >
                Fale com a Holding
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
              Estamos só começando.
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 mb-12"
            >
              Hoje temos uma empresa.
              <br />
              Amanhã, um grupo que muda o jogo do crescimento inteligente na América Latina.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                href="/servicos"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
              >
                Conhecer a EG.MKT
              </Link>
              <Link 
                href="/contato"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Falar com a Holding
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 