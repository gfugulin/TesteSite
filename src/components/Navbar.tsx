'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

interface MenuItem {
  name: string
  href: string
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuItems: MenuItem[] = [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold text-eg-green">
            Evergreen MKT
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-eg-green transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-eg-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 