'use client'

import AnimatedSection from '@/components/AnimatedSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-eg-offwhite to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={200}>
            <div className="text-center">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Transforme seu Negócio com
                <span className="text-eg-green"> Growth</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Autoridade em growth, tecnologia e IA para escalar resultados reais
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Agendar Diagnóstico
                </button>
                <button className="btn-secondary">
                  Ver Cases de Sucesso
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
} 