import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Dumbbell, Users, Building2, Check } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Prestations - Esprit de Corps',
  description: 'Découvrez nos offres de coaching sportif: individuel, groupe et entreprise. Des programmes adaptés à vos objectifs.',
}

// Données mockées (sera remplacé par Supabase)
const prestations = [
  {
    id: 'individuel',
    title: 'Coaching Individuel',
    icon: Dumbbell,
    color: 'primary',
    description: 'Un accompagnement 100% personnalisé pour atteindre vos objectifs en toute confiance.',
    features: [
      'Bilan personnalisé complet',
      'Programme sur mesure',
      'Suivi nutrition inclus',
      'Séances flexibles',
      'Coaching motivation',
    ],
  },
  {
    id: 'groupe',
    title: 'Coaching Groupe',
    icon: Users,
    color: 'secondary',
    description: 'Entraînez-vous en petits groupes dans une ambiance conviviale et motivante.',
    features: [
      'Groupes de 4-8 personnes',
      'Esprit d\'\u00e9quipe',
      'Tarifs avantageux',
      'Séances dynamiques',
      'Objectifs communs',
    ],
  },
  {
    id: 'entreprise',
    title: 'Coaching Entreprise',
    icon: Building2,
    color: 'accent-blue',
    description: 'Améliorez le bien-être de vos équipes avec des programmes dédiés aux entreprises.',
    features: [
      'Team building sportif',
      'Séances sur site',
      'Programme sur mesure',
      'Amélioration cohésion',
      'Prévention santé',
    ],
  },
]

const colorClasses = {
  'primary': {
    bg: 'bg-primary/10',
    text: 'text-primary',
    button: 'primary',
  },
  'secondary': {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    button: 'secondary',
  },
  'accent-blue': {
    bg: 'bg-accent-blue/10',
    text: 'text-accent-blue',
    button: 'primary',
  },
}

export default function PrestationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Nos Prestations
          </h1>
          <p className="text-white text-xl md:text-2xl text-neutral-300">
            Des programmes adaptés à tous les profils et tous les objectifs
          </p>
        </div>
      </section>

      {/* Liste des prestations */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {prestations.map((prestation) => {
              const Icon = prestation.icon
              const colors = colorClasses[prestation.color as keyof typeof colorClasses]
              
              return (
                <Card key={prestation.id} className="flex flex-col" id={prestation.id}>
                  <div className="p-8 flex-1">
                    {/* Icône */}
                    <div className={`inline-flex p-4 rounded-full ${colors.bg} mb-6`}>
                      <Icon className={`h-10 w-10 ${colors.text}`} />
                    </div>

                    {/* Titre */}
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                      {prestation.title}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {prestation.description}
                    </p>

                    {/* Fonctionnalités */}
                    <ul className="space-y-3 mb-8">
                      {prestation.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className={`h-5 w-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-neutral-50 border-t">
                    <Link href="/contact">
                      <Button 
                        variant={colors.button as 'primary' | 'secondary'} 
                        className="w-full"
                      >
                        Nous contacter
                      </Button>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-container bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-neutral-900 mb-4">
            Tarifs personnalisés selon vos objectifs
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Chaque prestation est unique et adaptée à votre profil. Contactez-nous pour 
            établir ensemble un devis personnalisé correspondant exactement à vos besoins.
          </p>
          <Link href="/contact">
            <Button size="lg">Demander un devis gratuit</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
