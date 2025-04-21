import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Evergreen MKT | Growth, Tecnologia e Resultados',
  description: 'Hub de autoridade em growth, tecnologia, IA e execução de resultados reais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-eg-offwhite text-eg-black`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 