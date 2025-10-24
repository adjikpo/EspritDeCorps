'use client'

import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsDesktop } from '@/hooks/useMediaQuery'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  const isDesktop = useIsDesktop()
  
  return (
    <section
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Logo en filigrane - rotation sur desktop uniquement */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: isDesktop ? 360 : 0 }}
        transition={{
          duration: 120,
          repeat: isDesktop ? Infinity : 0,
          ease: "linear",
        }}
      >
        <motion.div 
          className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.08]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/logo-circle.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      {/* Halo lumineux subtil autour du logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent-blue blur-3xl" />
      </motion.div>

      <div className="text-center px-4 max-w-5xl mx-auto relative z-10">
        {/* Citation principale mise en valeur */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold mb-6 leading-tight">
            &ldquo;Bien dans sa tête,<br />bien dans son corps&rdquo;
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
          <p className="text-white/90 text-2xl md:text-3xl font-light tracking-wide">
            {title}
          </p>
        </div>
        
        <p className="text-white text-xl md:text-2xl mb-8 text-neutral-300 max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button size="lg">{primaryCta.text}</Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
