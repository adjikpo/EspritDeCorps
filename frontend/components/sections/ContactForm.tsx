'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Remplacer par l'appel API Supabase plus tard
    setTimeout(() => {
      console.log('Formulaire soumis:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">Contactez-nous</h2>
          <p className="text-neutral-600 text-lg">
            Une question ? Un projet ? N'hésitez pas à nous écrire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Nos coordonnées
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                  <a
                    href="mailto:contact@espritdecorps.com"
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    contact@espritdecorps.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Téléphone</h4>
                  <a
                    href="tel:+33123456789"
                    className="text-neutral-600 hover:text-secondary transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-blue/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Localisation</h4>
                  <p className="text-neutral-600">
                    Paris, Île-de-France<br />
                    France
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Horaires d'ouverture
              </h4>
              <p className="text-neutral-600 text-sm">
                Lundi - Vendredi: 7h00 - 21h00<br />
                Samedi: 8h00 - 18h00<br />
                Dimanche: Sur rendez-vous
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-900 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Demande de renseignements"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 inline" />
                    Envoyer le message
                  </>
                )}
              </Button>

              {status === 'success' && (
                <div className="p-4 bg-secondary/10 border border-secondary rounded-lg text-secondary text-center">
                  Message envoyé avec succès ! Nous vous répondrons rapidement.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
