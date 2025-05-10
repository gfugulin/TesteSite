import { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart2,
  LineChart,
  PieChart,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Zap,
  Clock,
  Users,
  User,
  DollarSign,
  Target,
  Brain,
  Shield,
  HelpCircle,
  Star,
  ArrowRight,
  FileText,
  Settings,
  RefreshCw,
  Video,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen BI Starter - Inteligência de Negócio Simples e Eficiente',
  description: 'Transforme seus dados em decisões estratégicas com dashboards visuais e intuitivos. Sem fórmulas. Sem Excel. Sem mistério.',
};

export default function BIStarterPage() {
  const verdeMusgo = '#09231B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';

  return (
    <main style={{ background: amareloBaunilha }} className="min-h-screen">
      {/* HERO */}
      <section style={{ background: verdeMusgo }} className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: amareloBaunilha }}>
              Você sabe quais números realmente importam no seu negócio?
            </h1>
            <p className="text-xl mb-8 mt-4" style={{ color: verdeMenta }}>
              <BarChart2 className="inline h-6 w-6 mr-2 align-middle" style={{ color: verdeMenta }} />
              O Evergreen BI Starter cria um painel visual com seus dados mais importantes
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <DollarSign className="h-5 w-5" style={{ color: verdeMenta }} /> Vendas
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <LineChart className="h-5 w-5" style={{ color: verdeMenta }} /> Gastos
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <Users className="h-5 w-5" style={{ color: verdeMenta }} /> Clientes
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <Target className="h-5 w-5" style={{ color: verdeMenta }} /> Conversão
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <PieChart className="h-5 w-5" style={{ color: verdeMenta }} /> Margem
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <TrendingUp className="h-5 w-5" style={{ color: verdeMenta }} /> Receita
              </div>
            </div>
            <p className="text-lg mb-8" style={{ color: '#fff', opacity: 0.85 }}>
              Sem fórmulas. Sem Excel. Sem mistério.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero meu dashboard agora
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo de painel real
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              A maioria dos donos de negócio toma decisão no escuro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Sem visão do lucro</h3>
                  <p className="text-gray-700">Não sabe se está no lucro ou no prejuízo real do negócio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Sem métricas</h3>
                  <p className="text-gray-700">Não mede conversão de venda e outros indicadores importantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Crescimento cego</h3>
                  <p className="text-gray-700">Acha que está crescendo, mas não tem base para provar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              Com o Evergreen BI Starter você:
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <BarChart2 className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Organização Visual</h3>
                <p className="text-gray-300">Organiza seus principais dados num painel simples e visual.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <RefreshCw className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Tempo Real</h3>
                <p className="text-gray-300">Acompanha tudo em tempo real via link compartilhável.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <LineChart className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Gráficos Claros</h3>
                <p className="text-gray-300">Ganha gráficos que mostram exatamente o que melhorar.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Video className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Tutorial em Vídeo</h3>
                <p className="text-gray-300">Recebe um vídeo explicando como usar (sem tecnês).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Como Funciona
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Preenchimento do Formulário</h3>
                  <p className="text-gray-700">Você preenche um formulário com seus dados ou compartilha sua planilha.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Montagem do Painel</h3>
                  <p className="text-gray-700">Montamos seu painel no Google Data Studio ou Notion.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Atualização Automática</h3>
                  <p className="text-gray-700">Os dados podem ser atualizados automaticamente via Google Sheets.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Entrega e Treinamento</h3>
                  <p className="text-gray-700">Você recebe o link + vídeo de como usar e interpretar.</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-lg font-semibold" style={{ color: verdeMusgo }}>
              <Clock className="inline h-5 w-5 mr-2" style={{ color: verdeMenta }} />
              Em até 72h você já tem sua inteligência pronta.
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLO DE PAINEL */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              Exemplo Real de Painel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">Receita total (mês a mês)</p>
                </div>
                <div className="flex items-center gap-3">
                  <LineChart className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">Gasto fixo e variável</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">Número de clientes</p>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">Taxa de conversão</p>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">CAC (Custo por Aquisição)</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" style={{ color: verdeMenta }} />
                  <p className="text-gray-300">LTV (Valor do Cliente)</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <AlertTriangle className="inline h-5 w-5 mr-2" style={{ color: verdeMusgo }} />
                  Exemplo de insight:
                </p>
                <blockquote className="border-l-4 pl-4" style={{ borderColor: verdeMenta }}>
                  <p className="text-gray-700 italic">
                    "Seu CAC subiu 30% esse mês — vale revisar o canal de aquisição."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZAÇÃO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Seu painel, no seu nível de maturidade
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border-2" style={{ borderColor: verdeMusgo }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: verdeMusgo }}>MEI / Solo</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Receita</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Recebimento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Gastos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Lucro simples</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border-2" style={{ borderColor: verdeMusgo }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: verdeMusgo }}>PME</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Vendas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">CAC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Conversão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Margem</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border-2" style={{ borderColor: verdeMusgo }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: verdeMusgo }}>Média Empresa</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">LTV</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Churn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Lifetime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Produtos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-700">Canais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              O que nossos clientes dizem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300 mb-4">"Em 3 dias eu tinha um painel melhor que o do meu contador."</p>
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8" style={{ color: verdeMenta }} />
                  <div>
                    <p className="font-semibold" style={{ color: amareloBaunilha }}>Fábio</p>
                    <p className="text-sm text-gray-400">Lojista</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300 mb-4">"Agora eu sei por que tô vendendo mais, mas sobrando menos."</p>
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8" style={{ color: verdeMenta }} />
                  <div>
                    <p className="font-semibold" style={{ color: amareloBaunilha }}>Cíntia</p>
                    <p className="text-sm text-gray-400">Consultora</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300 mb-4">"Só o gráfico de CAC já salvou minha grana em tráfego esse mês."</p>
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8" style={{ color: verdeMenta }} />
                  <div>
                    <p className="font-semibold" style={{ color: amareloBaunilha }}>Bruno</p>
                    <p className="text-sm text-gray-400">Agência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Preciso entender de BI pra usar?</h3>
                <p className="text-gray-700">Não. É 100% visual, com tutorial em vídeo e explicação passo a passo.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Posso atualizar os dados sozinho?</h3>
                <p className="text-gray-700">Sim. Você atualiza via planilha ou conecta com Google Sheets automático.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>É seguro?</h3>
                <p className="text-gray-700">Sim. Os dados são privados e acessados só por você.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Posso pedir novas métricas depois?</h3>
                <p className="text-gray-700">Sim! Você pode customizar com novos indicadores sob demanda.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Funciona com o que eu já uso?</h3>
                <p className="text-gray-700">Na maioria dos casos sim. Se não, a gente adapta para seu sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              Planos & Oferta
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: amareloBaunilha }}>BI Starter Solo</h3>
                <p className="text-3xl font-bold mb-6" style={{ color: verdeMenta }}>R$197</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Painel básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Até 6 indicadores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Tutorial em vídeo</span>
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold"
                  style={{ background: verdeMenta, color: verdeMusgo }}
                >
                  Começar agora
                </Link>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: amareloBaunilha }}>BI PME Pro</h3>
                <p className="text-3xl font-bold mb-6" style={{ color: verdeMenta }}>R$297</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Painel completo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Atualização automática</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Comparativos</span>
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold"
                  style={{ background: verdeMenta, color: verdeMusgo }}
                >
                  Começar agora
                </Link>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: amareloBaunilha }}>BI Corporate</h3>
                <p className="text-3xl font-bold mb-6" style={{ color: verdeMenta }}>R$497</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Customizado por time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">LTV e churn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                    <span className="text-gray-300">Treinamento incluído</span>
                  </li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold"
                  style={{ background: verdeMenta, color: verdeMusgo }}
                >
                  Começar agora
                </Link>
              </div>
            </div>
            <p className="text-center mt-8" style={{ color: amareloBaunilha }}>
              Combo: Integre com DRE, Flow e WhatsBot com 15% OFF
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: verdeMusgo }}>
              Pronto pra parar de chutar e começar a decidir com dados?
            </h2>
            <p className="text-xl mb-8" style={{ color: verdeMusgo }}>
              O Evergreen BI Starter coloca seu negócio sob controle — em até 3 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero meu dashboard agora
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo completo
              </Link>
            </div>
            <p className="mt-8 text-lg font-semibold" style={{ color: verdeMusgo }}>
              <Zap className="inline h-5 w-5 mr-2" style={{ color: verdeMenta }} />
              Bônus de lançamento: vídeo-análise estratégica do seu painel nos primeiros 10 pedidos!
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              Integre com outros produtos Evergreen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/eg-os/dre" className="p-6 rounded-lg group" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: amareloBaunilha }}>DRE</h3>
                  <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300">Para abastecer o BI com dados mensais</p>
              </Link>
              <Link href="/eg-os/flow" className="p-6 rounded-lg group" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: amareloBaunilha }}>Flow</h3>
                  <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300">Para automatizar processos e coletar dados</p>
              </Link>
              <Link href="/eg-os/whatsbot" className="p-6 rounded-lg group" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: amareloBaunilha }}>WhatsBot</h3>
                  <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300">Para acompanhar performance de leads no funil</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 