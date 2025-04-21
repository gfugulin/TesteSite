'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const posts = [
  {
    title: 'Como o Growth Hacking está revolucionando o marketing digital',
    excerpt: 'Descubra as principais estratégias de growth hacking que estão transformando o cenário do marketing digital em 2024.',
    date: '20 Mar 2024',
    category: 'Growth',
  },
  {
    title: 'Inteligência Artificial no Marketing: Um Guia Completo',
    excerpt: 'Aprenda como utilizar IA para otimizar suas campanhas de marketing e alcançar melhores resultados.',
    date: '18 Mar 2024',
    category: 'IA',
  },
  {
    title: 'As Tendências de Marketing Digital para 2024',
    excerpt: 'Conheça as principais tendências que irão moldar o marketing digital no próximo ano.',
    date: '15 Mar 2024',
    category: 'Marketing',
  },
  {
    title: 'Case Study: Como aumentamos as conversões em 300%',
    excerpt: 'Um estudo detalhado sobre como aplicamos técnicas de growth para triplicar as conversões de um e-commerce.',
    date: '12 Mar 2024',
    category: 'Cases',
  },
]

export default function BlogPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog <span className="text-gradient">Evergreen</span>
            </h1>
            <p className="text-xl text-gray-600">
              Insights, estratégias e novidades sobre Growth, Marketing e Tecnologia
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="glass-card p-6 hover-lift cursor-pointer">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-eg-green/10 text-eg-green mb-4">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold mb-3 hover:text-eg-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-eg-green hover:underline">Ler mais →</button>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <button className="btn-primary">
              Carregar mais posts
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 