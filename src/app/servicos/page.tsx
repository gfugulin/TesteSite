'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/utils/animations'
import Image from 'next/image'
import { RocketLaunchIcon, ChartBarIcon, CpuChipIcon, WrenchScrewdriverIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline'

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
    icon: <RocketLaunchIcon className="h-8 w-8 text-emerald-600" />,
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
    icon: <ChartBarIcon className="h-8 w-8 text-purple-600" />,
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
    icon: <CpuChipIcon className="h-8 w-8 text-blue-600" />,
  },
]

const produtosDigitais = [
  { title: 'Cursos e templates', icon: <WrenchScrewdriverIcon className="h-8 w-8 text-emerald-600 mx-auto mb-2" /> },
  { title: 'Clubes de assinatura', icon: <UsersIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" /> },
  { title: 'Ferramentas de ROI', icon: <ChartBarIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" /> },
  { title: 'Mentorias para CEOs', icon: <AcademicCapIcon className="h-8 w-8 text-emerald-600 mx-auto mb-2" /> },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-eg-offwhite to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Nossos <span className="text-gradient">Sistemas</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Na Evergreen, você não contrata serviços.<br />
                Você ativa <span className="font-semibold">sistemas integrados de crescimento, tecnologia e execução</span> — feitos sob medida para destravar o próximo nível da sua empresa.
              </p>
              <blockquote className="text-2xl italic text-gray-700 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-emerald-100 max-w-3xl mx-auto mb-12">
                "Nós não empilhamos tarefas. Nós construímos motores de receita."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contato" className="btn-primary">
                  Agendar Diagnóstico
                </a>
                <a href="/cases" className="inline-flex items-center px-6 py-3 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-emerald-200/50 hover:text-emerald-600 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out transform">
                  Ver Casos Aplicados
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sistemas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {/* Sistema 1: Máquina de Vendas */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                  {services[0].icon}
                  <span className="font-medium">Sistema #1</span>
                </div>
                <h2 className="text-4xl font-bold">Máquina de Vendas Evergreen</h2>
                <p className="text-xl text-gray-600">
                  Transformamos caos comercial em previsibilidade de receita.
                </p>
                <ul className="space-y-4">
                  {[
                    'Consultoria em construção de máquina de vendas',
                    'Definição de ICP e jornada',
                    'Criação de scripts, CRM e automações',
                    'Treinamento e terceirização de time comercial (BDR/SDR)',
                    'Prospecção ativa com tecnologia e cold outreach',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-600">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contato" className="inline-flex items-center px-6 py-3 text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors">
                  Ver como funciona
                </a>
              </div>
              <div className="glass-card p-8 aspect-square">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
                  <Image 
                    src="/images/maquinadeVendas.jpg"
                    alt="Máquina de Vendas Evergreen"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Sistema 2: Growth Engine */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8 aspect-square order-2 md:order-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center">
                  <Image 
                    src="/images/growthEngine.jpg"
                    alt="Growth Engine"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <div className="inline-flex items-center space-x-3 text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                  {services[1].icon}
                  <span className="font-medium">Sistema #2</span>
                </div>
                <h2 className="text-4xl font-bold">Growth Engine</h2>
                <p className="text-xl text-gray-600">
                  De zero a tração com estratégias de aquisição full-stack.
                </p>
                <ul className="space-y-4">
                  {[
                    'Tráfego pago, SEO e growth hacking',
                    'Copywriting e CRO (conversão)',
                    'Ghostwriting e autoridade em LinkedIn',
                    'Produção de conteúdo, webinars e UGC',
                    'Social media + campanhas de engajamento',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contato" className="inline-flex items-center px-6 py-3 text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors">
                  Quero atrair leads agora
                </a>
              </div>
            </motion.div>

            {/* Sistema 3: EG.Tech */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                  {services[2].icon}
                  <span className="font-medium">Sistema #3</span>
                </div>
                <h2 className="text-4xl font-bold">EG.Tech</h2>
                <p className="text-xl text-gray-600">
                  IA, automações e tecnologia para escalar o que você já faz.
                </p>
                <ul className="space-y-4">
                  {[
                    'Desenvolvimento de automações e bots',
                    'Projetos de análise de dados e BI',
                    'Construção de clones AI e avatares digitais',
                    'Machine learning, IOT e soluções sob demanda',
                    'Suporte técnico e treinamento personalizado',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contato" className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
                  Ver soluções em Tech
                </a>
              </div>
              <div className="glass-card p-8 aspect-square">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                  <Image 
                    src="/images/tech.jpg"
                    alt="EG.Tech"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Produtos Digitais Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Produtos Digitais e Infoprodutos
              </h2>
              <p className="text-xl text-gray-600">
                Para quem quer aplicar o método EG com autonomia.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {produtosDigitais.map((produto, i) => (
                <div key={i} className="glass-card p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                  {produto.icon}
                  <h3 className="font-bold text-lg">{produto.title}</h3>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <a href="/produtos" className="inline-flex items-center px-6 py-3 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:border-emerald-200/50 hover:text-emerald-600 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out transform">
                Conheça os Produtos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="glass-card p-12 text-center bg-gradient-to-br from-emerald-500/5 to-blue-500/5"
            >
              <h2 className="text-4xl font-bold mb-6">
                Vamos montar seu sistema sob medida?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Empresas em estágios diferentes precisam de sistemas diferentes.<br />
                Converse com a gente, e montamos seu roadmap de crescimento e tech — 100% personalizado.
              </p>
              <a 
                href="/contato" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Agendar Diagnóstico Gratuito
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="/contato"
          className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Escolher meu sistema
        </a>
      </div>
    </div>
  )
} 