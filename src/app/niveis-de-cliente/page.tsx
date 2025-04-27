'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { SparklesIcon, GlobeAltIcon, AcademicCapIcon, CheckCircleIcon, StarIcon, BuildingLibraryIcon, LockOpenIcon, GiftIcon } from '@heroicons/react/24/outline'

export default function NiveisDeCliente() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, -300, -600, -900, -1200])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Evergreen Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Crescimento é jornada. E cada jornada tem níveis.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 mb-12"
          >
            Na Evergreen, acreditamos que cada cliente é único — mas todos percorrem um caminho em comum: a jornada de evolução.
            Quanto mais você avança, mais ferramentas, suporte e poder de execução você desbloqueia.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl italic text-emerald-600 mb-12"
          >
            "Não se trata de onde você começa. Se trata de até onde está disposto a crescer."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Quero começar minha jornada
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Como funciona
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <div className="mb-4 flex justify-center"><SparklesIcon className="h-8 w-8 text-emerald-500" /></div>
              <h3 className="text-xl font-semibold mb-2">Semente</h3>
              <p className="text-gray-600">Implantando os primeiros sistemas de crescimento e tecnologia.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <div className="mb-4 flex justify-center"><GlobeAltIcon className="h-8 w-8 text-emerald-500" /></div>
              <h3 className="text-xl font-semibold mb-2">Floresta Jovem</h3>
              <p className="text-gray-600">Processos maduros, receita previsível e execução alinhada.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <div className="mb-4 flex justify-center"><AcademicCapIcon className="h-8 w-8 text-emerald-500" /></div>
              <h3 className="text-xl font-semibold mb-2">Floresta Milenar</h3>
              <p className="text-gray-600">Dominando aquisição, retenção e expansão com inteligência e escala.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Níveis Detalhados */}
      <section 
        ref={containerRef} 
        className="h-[400vh] relative"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              A Jornada EG
            </motion.h2>

            {/* Container de Scroll Horizontal */}
            <div className="relative">
              {/* Scroll Container */}
              <motion.div 
                style={{ x }}
                className="flex gap-16 pb-8"
              >
                {/* Nível 1 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full card-gradient transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <SparklesIcon className="h-8 w-8 text-emerald-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Cliente Semente</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-4">Entrada no ecossistema EG</h4>
                    <p className="text-gray-600 mb-4">Começou com um infoproduto, newsletter ou primeiro contato.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🔓 Gatilho</h5>
                      <p className="text-gray-600">Compra ou inscrição</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Canal fechado no Discord
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Cupons exclusivos
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Acesso à newsletter
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full card-gradient transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircleIcon className="h-8 w-8 text-emerald-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Cliente Raiz</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-4">Começou a aplicar</h4>
                    <p className="text-gray-600 mb-4">Comprou consultoria ou diagnóstico, deu feedback, participou ativamente.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🔓 Gatilho</h5>
                      <p className="text-gray-600">Feedback, aplicação, envio de case</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Diagnóstico gratuito
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Convite a eventos
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Bônus secretos
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 3 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full card-gradient transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GlobeAltIcon className="h-8 w-8 text-emerald-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Cliente Crescente</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-4">Projeto ativo em execução</h4>
                    <p className="text-gray-600 mb-4">Contratou serviços recorrentes de growth, tech ou vendas.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🔓 Gatilho</h5>
                      <p className="text-gray-600">Fechamento de contrato</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Relatórios especiais
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Suporte exclusivo
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                          Acesso antecipado a produtos
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 4 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full card-gradient transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <StarIcon className="h-8 w-8 text-yellow-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Cliente Estratégico</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-4">Virou promotor da marca</h4>
                    <p className="text-gray-600 mb-4">Indicou, deu depoimento, participou de case oficial.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🔓 Gatilho</h5>
                      <p className="text-gray-600">Indicação, NPS alto, depoimento</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Mastermind fechado
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Badge oficial
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Destaque no site
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 5 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full card-gradient transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <BuildingLibraryIcon className="h-8 w-8 text-emerald-700" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Cliente Legacy</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-4">Faz parte do jogo de longo prazo</h4>
                    <p className="text-gray-600 mb-4">Tem contrato de equity ou participa de co-criação com a EG.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🔓 Gatilho</h5>
                      <p className="text-gray-600">Contrato de longo prazo ou equity</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Acesso vitalício a produtos
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Posição como insider
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Co-criação
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Indicador de Progresso */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-emerald-500"
                  style={{ 
                    scaleX: scrollYProgress,
                    transformOrigin: "left"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Benefícios de Subir de Nível
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <h3 className="text-xl font-semibold mb-4">Prioridade em Novos Projetos</h3>
              <p className="text-gray-600">Acesso antecipado a novas soluções e frameworks exclusivos da Evergreen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <h3 className="text-xl font-semibold mb-4">Eventos Exclusivos</h3>
              <p className="text-gray-600">Convites para workshops, eventos e masterminds fechados com a equipe EG.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <h3 className="text-xl font-semibold mb-4">Consultoria Estratégica</h3>
              <p className="text-gray-600">Acesso direto à consultoria estratégica com os founders da Evergreen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-emerald-50"
            >
              <h3 className="text-xl font-semibold mb-4">Comunidade Premium</h3>
              <p className="text-gray-600">Acesso a uma rede exclusiva de clientes avançados para troca de experiências.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Vamos plantar sua semente?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12"
          >
            Cada cliente começa pequeno. O que importa é o quanto está disposto a crescer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Agendar Diagnóstico
            </Link>
            <Link 
              href="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              Ver Serviços
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 