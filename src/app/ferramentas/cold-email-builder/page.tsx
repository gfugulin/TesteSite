'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCopy, FiRefreshCw } from 'react-icons/fi'

interface EmailForm {
  produto: string
  beneficio: string
  perfilCliente: string
  cta: string
  estilo: 'dor' | 'curiosidade' | 'desafio'
  resultadoNegativo?: string
  resultadoPositivo?: string
  tempoImplementacao?: string
}

const estilosEmail = [
  {
    id: 'dor',
    nome: 'Dor Direta',
    descricao: 'Ideal para leads que já sentem o problema e precisam de solução',
    icone: '🚑'
  },
  {
    id: 'curiosidade',
    nome: 'Curiosidade',
    descricao: 'Para leads mais frios que precisam ser atraídos',
    icone: '👀'
  },
  {
    id: 'desafio',
    nome: 'Desafio/Audácia',
    descricao: 'Para leads competitivos e ambiciosos',
    icone: '⚡'
  }
]

export default function ColdEmailBuilderPage() {
  const [formData, setFormData] = useState<EmailForm>({
    produto: '',
    beneficio: '',
    perfilCliente: '',
    cta: '',
    estilo: 'dor',
    resultadoNegativo: '',
    resultadoPositivo: '',
    tempoImplementacao: ''
  })
  const [generatedEmail, setGeneratedEmail] = useState<string>('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateEmail()
  }

  const generateEmail = () => {
    let assunto = ''
    let corpo = ''

    switch (formData.estilo) {
      case 'dor':
        assunto = `🚑 ${formData.beneficio} está te custando ${formData.resultadoNegativo}?`
        corpo = `Olá [Nome do Lead],

Sei que muitas empresas ${formData.perfilCliente} acabam sofrendo com problemas para alcançar ${formData.beneficio} — e isso impacta diretamente ${formData.resultadoNegativo}.

Nós desenvolvemos o ${formData.produto} justamente pra resolver esse gargalo: ${formData.beneficio}.

Se quiser, posso te mostrar em ${formData.cta} como podemos mudar esse cenário.

Que tal agendarmos uma conversa rápida?

Abraço,
[Seu Nome]
[Empresa]`
        break

      case 'curiosidade':
        assunto = `👀 Você já viu como empresas ${formData.perfilCliente} estão ${formData.resultadoPositivo}?`
        corpo = `Olá [Nome do Lead],

Descobrimos uma forma simples de ${formData.beneficio} para empresas ${formData.perfilCliente}, usando ${formData.produto} de maneira inteligente.

Sem promessas milagrosas — só uma aplicação prática que tem feito diferença real.

Se quiser, te mostro como funciona em ${formData.cta}.

Topa?

Abraço,
[Seu Nome]
[Empresa]`
        break

      case 'desafio':
        assunto = `⚡ A próxima empresa a ${formData.beneficio} pode ser a sua.`
        corpo = `Olá [Nome do Lead],

Empresas como ${formData.perfilCliente} que agem rápido conseguem ${formData.resultadoPositivo} antes dos concorrentes perceberem.

Com o ${formData.produto}, aceleramos ${formData.beneficio} em projetos que saíram do papel em menos de ${formData.tempoImplementacao}.

Quer ver como aplicar isso no seu negócio ainda este mês?

Só responder aqui. Vamos construir algo grande.

Abraço,
[Seu Nome]
[Empresa]`
        break
    }

    setGeneratedEmail(`${assunto}\n\n${corpo}`)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cold Email Builder EG
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gere emails personalizados de alta conversão em segundos.<br />
              Escolha o estilo que mais combina com seu lead.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Estilo do Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {estilosEmail.map((estilo) => (
                  <div
                    key={estilo.id}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.estilo === estilo.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, estilo: estilo.id as EmailForm['estilo'] }))}
                  >
                    <div className="text-2xl mb-2">{estilo.icone}</div>
                    <h3 className="font-bold mb-1">{estilo.nome}</h3>
                    <p className="text-sm text-gray-600">{estilo.descricao}</p>
                  </div>
                ))}
              </div>

              {/* Campos base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Produto ou serviço
                  </label>
                  <input
                    type="text"
                    name="produto"
                    value={formData.produto}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: Software de automação"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Benefício principal
                  </label>
                  <input
                    type="text"
                    name="beneficio"
                    value={formData.beneficio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: aumentar vendas em 3x"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Perfil do cliente ideal
                  </label>
                  <input
                    type="text"
                    name="perfilCliente"
                    value={formData.perfilCliente}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: empresas B2B de tecnologia"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Call to Action (CTA)
                  </label>
                  <input
                    type="text"
                    name="cta"
                    value={formData.cta}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: uma demonstração de 30 minutos"
                    required
                  />
                </div>

                {/* Campos condicionais baseados no estilo */}
                {formData.estilo === 'dor' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resultado negativo
                    </label>
                    <input
                      type="text"
                      name="resultadoNegativo"
                      value={formData.resultadoNegativo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: perda de vendas, tempo desperdiçado"
                      required
                    />
                  </div>
                )}

                {(formData.estilo === 'curiosidade' || formData.estilo === 'desafio') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resultado positivo
                    </label>
                    <input
                      type="text"
                      name="resultadoPositivo"
                      value={formData.resultadoPositivo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: dobrando seu faturamento"
                      required
                    />
                  </div>
                )}

                {formData.estilo === 'desafio' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tempo de implementação
                    </label>
                    <input
                      type="text"
                      name="tempoImplementacao"
                      value={formData.tempoImplementacao}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: 30 dias"
                      required
                    />
                  </div>
                )}
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Gerar Email
                </button>
              </div>
            </form>
          </div>

          {/* Generated Email Section */}
          {generatedEmail && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Seu Cold Email EG</h2>
              <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm whitespace-pre-wrap mb-6">
                {generatedEmail}
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <FiCopy />
                  {copied ? 'Copiado!' : 'Copiar Email'}
                </button>
                <button
                  onClick={() => setGeneratedEmail('')}
                  className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  <FiRefreshCw />
                  Gerar Novo
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
