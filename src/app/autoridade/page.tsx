'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wordpressService, type AutoridadePost } from '@/services/wordpress'
import { motion } from 'framer-motion'

// Categorias para filtro
const CATEGORIAS = ['Todos', 'IA', 'Growth', 'Vendas', 'Técnica']

export default function AutoridadePage() {
  const [posts, setPosts] = useState<AutoridadePost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const data = await wordpressService.getAutoridadePosts()
        // Ordenar por data mais recente
        const sortedData = data.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setPosts(sortedData)
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar posts:', err)
        setError('Falha ao carregar os posts. Por favor, tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Erro</h1>
        <p>{error}</p>
      </div>
    )
  }

  const filteredPosts = categoriaAtiva === 'Todos' 
    ? posts 
    : posts.filter(post => {
        const categories = post._embedded?.['wp:term']?.[0] || []
        return categories.some(cat => cat.name === categoriaAtiva)
      })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-800"
          >
            Evergreen Authority
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-gray-700"
          >
            Confiança não se compra. Se constrói.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Aqui estão as certificações, reconhecimentos e selos que validam nossa visão, técnica e execução.
            Cada um desses troféus representa compromisso com excelência e obsessão por resultados reais.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl italic text-gray-700"
          >
            "A gente não coleciona PDFs. A gente constrói reputação."
          </motion.blockquote>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  categoriaAtiva === categoria
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Certificações */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Link href={`/autoridade/${post.slug}`}>
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold mb-2 text-gray-800"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-gray-600 line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ 
                        __html: post.yoast_head_json?.description || post.content.rendered 
                      }}
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      {post._embedded?.['wp:term']?.[0] && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {post._embedded['wp:term'][0][0]?.name}
                        </span>
                )}
              </div>
            </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selos Exclusivos */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Selos Exclusivos EG</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              { 
                title: 'EG Growth Expert', 
                image: '/images/seloGrowth.png',
                alt: 'Selo EG Growth Expert',
                width: 300,
                height: 300
              },
              { 
                title: 'EG IA Architect', 
                image: '/images/seloArchiet.png',
                alt: 'Selo EG IA Architect',
                width: 300,
                height: 300
              },
              { 
                title: 'Sistema Evergreen Certificado', 
                image: '/images/seloCertificado.png',
                alt: 'Selo Sistema Evergreen Certificado',
                width: 300,
                height: 300
              }
            ].map((selo) => (
              <motion.div
                key={selo.title}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform"
              >
                <div className="relative w-full flex justify-center items-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                      src={selo.image}
                      alt={selo.alt}
                      width={selo.width}
                      height={selo.height}
                      className="object-contain relative transform transition duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">{selo.title}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 italic">
            Criamos selos próprios baseados em frameworks internos validados com clientes e projetos reais.
          </p>
        </div>
      </section>

      {/* Bloco de Aplicação */}
      <section className="py-16 px-8 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Autoridade que gera resultado</h2>
          <p className="text-lg text-gray-700 mb-8">
            Certificação sem aplicação não vale nada.<br />
            Por isso, cada aprendizado nosso vira um framework, uma automação, um sistema — e vai direto pro campo.
          </p>
          <Link 
            href="/cases"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            Veja como aplicamos isso na prática
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Quer aprender com quem aplica?</h2>
          <p className="text-lg mb-8">
            A gente compartilha frameworks, guias e ferramentas com quem quer subir de nível.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/newsletter"
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Assinar a Evergreen Weekly
            </Link>
            <Link 
              href="/ferramentas"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              Ver Materiais Exclusivos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 