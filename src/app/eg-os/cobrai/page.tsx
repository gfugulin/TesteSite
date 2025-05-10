import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  User,
  CheckCircle,
  Bot,
  Smartphone,
  BarChart2,
  Mail,
  Lock,
  FileText,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen CobrAI - Cobrança Automatizada com IA',
  description: 'Transforme cobranças em um processo automático e eficiente com o Evergreen CobrAI. Recupere seus recebíveis sem constrangimento.',
}

export default function CobraiPage() {
  // Paleta da marca
  const verdeMusgo = '#09231B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';

  return (
    <main style={{ background: amareloBaunilha }} className="min-h-screen">
      {/* Hero Section */}
      <section style={{ background: verdeMusgo }} className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: amareloBaunilha }}>
              Cansado de cliente que some quando vence o boleto?
            </h1>
            <p className="text-xl mb-8" style={{ color: verdeMenta }}>
              O Evergreen CobrAI automatiza suas cobranças com inteligência artificial.<br />
              Seus clientes recebem lembretes educados no WhatsApp, SMS e e-mail — você só vê o dinheiro cair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero automatizar minha cobrança
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo de mensagem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dor Section */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
              Cobrar cliente é ruim.<br />
              Perder dinheiro por falta de cobrança é pior.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg" style={{ background: '#fff', border: `1.5px solid ${verdeMenta}22` }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#e53e3e' }}>O Problema</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-1" style={{ color: '#e53e3e' }} />
                    <span>Você manda mensagem… o cliente visualiza e ignora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-1" style={{ color: '#e53e3e' }} />
                    <span>Fica com medo de parecer chato ou insistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-1" style={{ color: '#e53e3e' }} />
                    <span>Deixa passar e nem percebe quantos não pagaram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 mt-1" style={{ color: '#e53e3e' }} />
                    <span>Fica sem grana e nem sabe por quê</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg" style={{ background: '#fff', border: `1.5px solid ${verdeMenta}22` }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: verdeMenta }}>A Solução</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Bot className="h-5 w-5 mt-1" style={{ color: verdeMenta }} />
                    <span>Envia mensagens de cobrança educadas e personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="h-5 w-5 mt-1" style={{ color: verdeMenta }} />
                    <span>Via WhatsApp, SMS ou e-mail — automático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart2 className="h-5 w-5 mt-1" style={{ color: verdeMenta }} />
                    <span>Você acompanha quem pagou, quem ignorou e quem clicou</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageCircle className="h-5 w-5 mt-1" style={{ color: verdeMenta }} />
                    <span>Mensagens com linguagem humana, sem climão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-4 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>1</div>
                <h3 className="text-xl font-semibold mb-4">Preencha a Planilha</h3>
                <p className="text-gray-600">
                  Adicione seus clientes em atraso em uma planilha simples
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-4 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>2</div>
                <h3 className="text-xl font-semibold mb-4">IA Dispara Mensagens</h3>
                <p className="text-gray-600">
                  A inteligência artificial envia as mensagens no canal ideal
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-4 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>3</div>
                <h3 className="text-xl font-semibold mb-4">Acompanhe Resultados</h3>
                <p className="text-gray-600">
                  Receba relatórios com status de abertura e conversão
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Planos CobrAI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$49/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    Até 20 cobranças/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    WhatsApp ou e-mail
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" style={{ background: verdeMenta, color: verdeMusgo, padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$89/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    Até 100 cobranças/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    WhatsApp, SMS e e-mail
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Business</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$199/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    Cobrança ilimitada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    Integração com sistema
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
                    Relatório IA
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplo de Mensagem */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Exemplo de Mensagem
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
              <div className="space-y-4 text-gray-700">
                <Mail className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                <p>"Olá [Nome], tudo bem?</p>
                <p>Seu pagamento referente ao serviço de [Produto/Serviço] venceu em [Data].</p>
                <p>Segue link pra regularizar: [Link]</p>
                <p>Qualquer dúvida, estamos à disposição.</p>
                <p>— Equipe [Sua Empresa]"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cases Reais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <BarChart2 className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">
                  "Recuperei R$ 1.200 em 2 dias só com as mensagens automáticas."
                </p>
                <p className="font-semibold text-gray-900">— Júlia, terapeuta holística</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Bot className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">
                  "Antes eu esquecia de cobrar. Agora a IA faz isso por mim, sem climão."
                </p>
                <p className="font-semibold text-gray-900">— Carlos, dono de gráfica</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">
                  "Transformei boletos vencidos em caixa rápido. Recomendo demais."
                </p>
                <p className="font-semibold text-gray-900">— Ana, loja online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Dúvidas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <MessageCircle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Preciso de sistema ou CRM?</h3>
                <p className="text-gray-600">
                  Não. Basta preencher uma planilha com os dados. A IA faz o resto.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <Smartphone className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">E se o cliente responder?</h3>
                <p className="text-gray-600">
                  Você recebe a resposta direto e pode seguir a conversa.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <BarChart2 className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Funciona com Pix e boleto?</h3>
                <p className="text-gray-600">
                  Sim. Dá pra embutir o link ou código.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <CheckCircle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Tenho poucos clientes inadimplentes. Vale a pena?</h3>
                <p className="text-gray-600">
                  Sim. Cada real recuperado com zero esforço é lucro com margem infinita.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <AlertTriangle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">E se o cliente reclamar?</h3>
                <p className="text-gray-600">
                  Você pode pausar ou ajustar a comunicação em qualquer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Segurança e Humanização
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Lock className="h-6 w-6 mb-2 mx-auto" style={{ color: verdeMenta }} />
                  <p className="text-gray-700">
                    As mensagens seguem regras de LGPD e boa prática
                  </p>
                </div>
                <div className="text-center">
                  <User className="h-6 w-6 mb-2 mx-auto" style={{ color: verdeMenta }} />
                  <p className="text-gray-700">
                    Personalizamos com seu nome, tom e serviço
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 mb-2 mx-auto" style={{ color: verdeMenta }} />
                  <p className="text-gray-700">
                    Você aprova antes de enviar (opcional)
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl text-gray-900 font-semibold">
                  Nada robótico. Nada ofensivo.<br />
                  Só cobrança profissional e educada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Soluções Completas para seu Negócio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/eg-os/flow" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-3">Evergreen Flow</h3>
                  <p className="text-gray-600">
                    Preveja o impacto do inadimplente no seu caixa
                  </p>
                </div>
              </Link>
              <Link href="/eg-os/dre" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-3">Evergreen DRE</h3>
                  <p className="text-gray-600">
                    Calcule o quanto o não pagamento afeta seu lucro
                  </p>
                </div>
              </Link>
              <Link href="/eg-os/legalbot" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-3">Evergreen LegalBot</h3>
                  <p className="text-gray-600">
                    Gere carta de cobrança e aviso de débito
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bora recuperar o dinheiro que é seu?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A IA faz a cobrança.<br />
              Você recebe o Pix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Começar agora com o CobrAI
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Ver exemplo de mensagem real
              </Link>
            </div>
            <p className="mt-8 text-green-600 font-semibold">
              🚀 Bônus de lançamento: sua primeira campanha gratuita com até 10 cobranças
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 