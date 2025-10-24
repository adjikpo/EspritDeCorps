import ContactForm from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Esprit de Corps',
  description: 'Contactez-nous pour toute question ou pour réserver une séance découverte gratuite.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-white text-xl md:text-2xl text-neutral-300">
            Une question ? Un projet ? Nous sommes là pour vous répondre
          </p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <ContactForm />
    </>
  )
}
