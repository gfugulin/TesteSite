'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { wordpressService, type Post } from '@/services/wordpress'

// Categorias do blog
const CATEGORIAS = [
  { id: 'todos', nome: 'Todos', icon: '🎯' },
  { id: 'growth', nome: 'Growth & Aquisição', icon: '🚀' },
  { id: 'ia', nome: 'IA Aplicada', icon: '🤖' },
  { id: 'bastidores', nome: 'Bastidores EG', icon: '🧱' },
  { id: 'comercial', nome: 'Estratégia Comercial', icon: '💼' },
  { id: 'ferramentas', nome: 'Ferramentas & Templates', icon: '🛠' },
  { id: 'funis', nome: 'Funis & Conversão', icon: '📊' },
  { id: 'educacao', nome: 'Educação & Mercado', icon: '🎓' }
]

// Tipos de conteúdo
const TIPOS_CONTEUDO = [
  { id: 'framework', nome: 'Framework', icon: '📘' },
  { id: 'video', nome: 'Vídeo', icon: '🎥' },
  { id: 'ferramenta', nome: 'Ferramenta', icon: '🧰' },
  { id: 'download', nome: 'Download', icon: '📥' },
  { id: 'bastidores', nome: 'Bastidores', icon: '🎙' }
]

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [ordenacao, setOrdenacao] = useState<'recentes' | 'populares' | 'favoritos'>('recentes')
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const data = await wordpressService.getPosts(1, 12)
        setPosts(data)
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

  // Monitora o scroll para exibir o popup da newsletter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollPosition > pageHeight * 0.5 && !showNewsletter) {
        setShowNewsletter(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showNewsletter])

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[1, 2, 3, 4, 5, 6].map((n) => (
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
            Evergreen Brain
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-gray-700"
          >
            Conteúdo que gera crescimento real.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Aqui você encontra frameworks, bastidores, guias e provocações que usamos todos os dias 
            pra crescer empresas com tecnologia, IA e estratégia.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl italic text-gray-700 mb-8"
          >
            "Não escrevemos pra parecer inteligentes. Escrevemos pra fazer você crescer."
          </motion.blockquote>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setShowNewsletter(true)}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              Assinar Newsletter
            </button>
            <button 
              onClick={() => {
                setOrdenacao('populares');
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Ver Artigos Mais Lidos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Categorias */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                  categoriaAtiva === categoria.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{categoria.icon}</span>
                <span>{categoria.nome}</span>
              </button>
            ))}
          </div>
          
          {/* Ordenação */}
          <div className="flex justify-center gap-4">
            {[
              { id: 'recentes', nome: 'Mais Recentes' },
              { id: 'populares', nome: 'Mais Lidos' },
              { id: 'favoritos', nome: 'Favoritos da Equipe' }
            ].map((tipo) => (
              <button
                key={tipo.id}
                onClick={() => setOrdenacao(tipo.id as any)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  ordenacao === tipo.id
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tipo.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Link href={`/blog/${post.id}`}>
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
                    {/* Tag de tipo de conteúdo */}
                    <div className="flex gap-2 mb-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        📘 Framework
                      </span>
                    </div>
                    
                    <h2 
                      className="text-xl font-bold mb-2 text-gray-800"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-gray-600 line-clamp-2 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-green-500 font-medium">Ler Agora →</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Popup */}
      {showNewsletter && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-white p-6 rounded-xl shadow-2xl max-w-md z-50"
        >
          <button 
            onClick={() => setShowNewsletter(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          <h3 className="text-xl font-bold mb-4">🎁 Receba conteúdos inéditos antes de todo mundo</h3>
          <p className="text-gray-600 mb-4">
            Assine a Evergreen Weekly e receba insights táticos direto da nossa mesa de operação.
            Sem enrolação. Só coisa aplicável.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              Quero Receber
            </button>
          </form>
        </motion.div>
      )}

      {/* CTA Final */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🚀 Pronto pra aplicar o que aprendeu?</h2>
          <p className="text-lg mb-8">
            Transforme ideias em execução com os sistemas da Evergreen.<br />
            Descubra como levamos o conteúdo à prática — com crescimento real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/cases"
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Ver Casos de Sucesso
            </Link>
            <Link 
              href="/contato"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              Agendar Diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 