'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * LogoLoader - Animation de chargement avec le logo circulaire
 * 
 * Affiche le logo au centre avec une animation zoom-in + rotation
 * Disparaît automatiquement après 2 secondes
 */
export default function LogoLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Masquer le loader après 2 secondes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-blue/10 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo avec animation zoom-in + rotation */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1], // easeOutBack
        }}
      >
        {/* Halo lumineux autour du logo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-blue blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Logo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/assets/logo-circle.png"
            alt="Esprit de Corps"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Texte de chargement */}
      <motion.p
        className="absolute bottom-1/3 text-neutral-600 font-medium text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Esprit de Corps
      </motion.p>
    </motion.div>
  )
}
