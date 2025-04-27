'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import ContactForm from '@/components/ContactForm'
import { CheckCircleIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContatoPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-eg-offwhite to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vamos conversar sobre <span className="text-gradient">crescimento?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Na Evergreen, cada conversa começa com um diagnóstico real — e termina com um plano de ação.<br />
              Nosso foco é simples: encontrar o maior gargalo do seu funil e destravá-lo com IA, automação ou estratégia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                '✅ Diagnóstico gratuito focado em crescimento B2B',
                '✅ Resposta em até 24h úteis',
                '✅ Time técnico + estratégico no primeiro contato'
              ].map((item, i) => (
                <div key={i} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-emerald-100">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <blockquote className="text-xl italic text-gray-700 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-emerald-100 max-w-2xl mx-auto mb-12">
              "Em 15 minutos, te mostramos onde está o seu maior ponto de alavancagem."
            </blockquote>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 order-2 md:order-1">
              <div className="mb-8 text-center">
                <p className="text-gray-600 italic">
                  Mais de 10 empresas B2B já confiaram na EG para transformar estratégia em execução real.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-8">Prefere um canal mais rápido?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-3">Resposta em minutos no horário comercial</p>
                    <a 
                      href="https://wa.me/5511959780701" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors duration-300"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
                {/*
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CalendarDaysIcon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Agendar Call</h3>
                    <p className="text-gray-600 mb-3">Diagnóstico de 15 minutos com nosso time</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center px-6 py-3 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors duration-300"
                    >
                      Ver horários disponíveis
                    </a>
                  </div>
                </div>
                */} 
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <EnvelopeIcon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-600">contato@evergreenmkt.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 