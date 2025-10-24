'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * ScrollToTop - Bouton flottant avec logo pour remonter en haut
 * 
 * Apparaît après scroll de 300px
 * Animation rotation au clic
 * Responsive: masqué sur mobile par défaut
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Afficher le bouton après scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Remonter en haut avec animation
  const scrollToTop = () => {
    setIsClicked(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Réinitialiser l'état après l'animation
    setTimeout(() => setIsClicked(false), 600)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-white rounded-full shadow-lg hover:shadow-2xl p-3 md:p-4 group hidden sm:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          aria-label="Retour en haut"
        >
          {/* Logo avec rotation au clic */}
          <motion.div
            className="relative w-10 h-10 md:w-12 md:h-12"
            animate={{
              rotate: isClicked ? 360 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="/assets/logo-circle.png"
              alt="Retour en haut"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Effet lumineux au hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-blue opacity-0 group-hover:opacity-20 blur-xl"
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
