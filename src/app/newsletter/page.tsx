'use client'

import LeadForm from '@/components/LeadForm'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const benefits = [
  {
    title: 'Insights Exclusivos',
    description: 'Receba análises aprofundadas sobre growth, marketing e tecnologia antes de todos',
    icon: '🎯',
  },
  {
    title: 'Cases Práticos',
    description: 'Aprenda com casos reais de empresas que transformaram seus resultados',
    icon: '📈',
  },
  {
    title: 'Ferramentas e Templates',
    description: 'Acesso a recursos premium para acelerar seu crescimento',
    icon: '🛠',
  },
  {
    title: 'Tendências de IA',
    description: 'Fique por dentro das últimas novidades em inteligência artificial',
    icon: '🤖',
  },
]

export default function Newsletter() {
  const handleSubmit = async (formData: any) => {
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fique por dentro das novidades
          </h1>
          <p className="text-xl text-gray-600">
            Receba insights exclusivos sobre Growth, Marketing e Tecnologia diretamente na sua caixa de entrada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <LeadForm
            title="Assine nossa Newsletter"
            subtitle="Junte-se a milhares de profissionais que já recebem nosso conteúdo exclusivo."
            buttonText="Assinar Newsletter"
            onSubmit={handleSubmit}
            variant="default"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">O que você vai receber</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Insights Estratégicos',
                description: 'Análises aprofundadas sobre tendências e estratégias de crescimento'
              },
              {
                title: 'Cases de Sucesso',
                description: 'Histórias reais de empresas que transformaram seus resultados'
              },
              {
                title: 'Dicas Práticas',
                description: 'Conteúdo acionável para implementar em seu negócio'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
} 