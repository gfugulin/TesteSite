import FeatureCard from '@/components/FeatureCard';
import { FiActivity, FiAward, FiBarChart2, FiBox, FiCpu, FiDatabase } from 'react-icons/fi';

export default function FeaturesPage() {
  const features = [
    {
      title: 'Análise em Tempo Real',
      description: 'Monitore suas métricas importantes em tempo real com atualizações instantâneas.',
      icon: <FiActivity />,
      status: 'active' as const
    },
    {
      title: 'Relatórios Avançados',
      description: 'Gere relatórios detalhados e personalizáveis para suas necessidades específicas.',
      icon: <FiBarChart2 />,
      status: 'active' as const
    },
    {
      title: 'Integração com APIs',
      description: 'Conecte-se facilmente com outras ferramentas através de nossa API robusta.',
      icon: <FiDatabase />,
      status: 'active' as const
    },
    {
      title: 'Machine Learning',
      description: 'Previsões inteligentes baseadas em seus dados históricos.',
      icon: <FiCpu />,
      status: 'planned' as const
    },
    {
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas e aumente sua produtividade.',
      icon: <FiBox />,
      status: 'planned' as const
    },
    {
      title: 'Certificações',
      description: 'Obtenha certificações e reconhecimento por suas conquistas.',
      icon: <FiAward />,
      status: 'planned' as const
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossos Recursos</h1>
        <p className="text-xl text-gray-600">
          Descubra todas as ferramentas poderosas que oferecemos para impulsionar seu sucesso
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            status={feature.status}
          />
        ))}
      </div>
    </main>
  );
} 