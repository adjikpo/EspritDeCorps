'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'Le Coach', href: '/le-coach' },
    { name: 'Articles', href: '/articles' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec animation hover */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative h-12 w-12"
              whileHover={{ 
                scale: 1.1,
                filter: "drop-shadow(0 0 12px rgba(221, 51, 51, 0.5))"
              }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/assets/logo-circle.png" 
                alt="Esprit de Corps" 
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="text-xl font-bold hidden sm:block">
              <span className="text-primary">Esprit</span>
              <span className="text-neutral-900"> de Corps</span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-900 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/mon-compte" className="btn-primary">
              Mon Compte
            </Link>
          </div>

          {/* Burger menu mobile */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/mon-compte"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mon Compte
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
