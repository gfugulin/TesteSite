'use client'

import AnimatedSection from './AnimatedSection'
import GradientBackground from './interactive/GradientBackground'
import InteractiveButton from './interactive/InteractiveButton'
import ParticlesBackground from './interactive/ParticlesBackground'

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <GradientBackground className="rounded-3xl overflow-hidden">
          <ParticlesBackground className="backdrop-blur-sm" particleCount={30}>
            <div className="px-8 py-16 md:py-24 text-center">
              <AnimatedSection delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Pronto para <span className="text-eg-green">transformar</span> seu negócio?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa a alcançar resultados extraordinários.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <InteractiveButton variant="primary">
                    Agendar Diagnóstico Gratuito
                  </InteractiveButton>
                  <InteractiveButton variant="outline">
                    Ver Cases de Sucesso
                  </InteractiveButton>
                </div>
              </AnimatedSection>
            </div>
          </ParticlesBackground>
        </GradientBackground>
      </div>
    </section>
  )
} 