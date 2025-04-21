'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function ContatoPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-eg-offwhite to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fale com a <span className="text-gradient">Evergreen</span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos prontos para impulsionar o crescimento do seu negócio
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-eg-green/10 flex items-center justify-center text-eg-green">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000<br />São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-eg-green/10 flex items-center justify-center text-eg-green">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-eg-green/10 flex items-center justify-center text-eg-green">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contato@evergreenmkt.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 