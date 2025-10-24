import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { Award, Target, Heart, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le Coach - Esprit de Corps',
  description: 'Découvrez votre coach sportif professionnel: parcours, expertise et passion du sport.',
}

const expertise = [
  {
    icon: Award,
    title: 'Certifications',
    description: 'Diplômes d\'État et formations continues en préparation physique',
  },
  {
    icon: Target,
    title: 'Approche personnalisée',
    description: 'Programmes adaptés à chaque profil et objectif',
  },
  {
    icon: Heart,
    title: 'Passion du sport',
    description: '10+ ans d\'expérience dans différentes disciplines',
  },
  {
    icon: TrendingUp,
    title: 'Résultats prouvés',
    description: 'Des dizaines de clients satisfaits et transformés',
  },
]

const sports = [
  'Musculation',
  'Fitness',
  'Crossfit',
  'Préparation physique',
  'Remise en forme',
  'Perte de poids',
  'Nutrition sportive',
  'Coaching mental',
]

export default function LeCoachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Votre Coach
          </h1>
          <p className="text-white text-xl md:text-2xl text-neutral-300">
            Expertise, passion et accompagnement personnalisé
          </p>
        </div>
      </section>

      {/* À propos */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo (placeholder) */}
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-neutral-200 rounded-card overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-neutral-400">
                  {/* Photo du coach à ajouter */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍🏫</div>
                    <p className="text-sm">Photo du coach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className="order-1 md:order-2">
              <h2 className="text-primary mb-6">
                Passionné de sport et de performance
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Avec plus de 10 ans d'expérience dans le coaching sportif, ma mission est simple : 
                  vous accompagner vers vos objectifs, qu'ils soient de remise en forme, de perte de poids, 
                  de gain musculaire ou de préparation à une compétition.
                </p>
                <p>
                  Diplômé d'État et formé aux dernières techniques de préparation physique, 
                  je mets mon expertise au service de votre réussite. Mon approche combine 
                  entraînement personnalisé, conseils nutrition et accompagnement mental.
                </p>
                <p>
                  Chaque personne est unique, c'est pourquoi je crée des programmes 100% sur mesure, 
                  adaptés à votre niveau, vos contraintes et vos ambitions.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Réserver une séance découverte</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-container bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-neutral-900 mb-4">Mon Expertise</h2>
            <p className="text-neutral-600 text-lg">
              Un accompagnement professionnel basé sur l'expérience et la formation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-neutral-900 mb-4">Disciplines & Compétences</h2>
          <p className="text-neutral-600 text-lg mb-8">
            Un large éventail de pratiques pour répondre à tous vos besoins
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-neutral-100 rounded-full text-neutral-900 font-medium hover:bg-secondary hover:text-white transition-colors cursor-default"
              >
                {sport}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-container bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-neutral-900 mb-4">
            Prêt à transformer votre vie ?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Commencez votre parcours avec une séance découverte gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contactez-moi</Button>
            </Link>
            <Link href="/prestations">
              <Button variant="outline" size="lg">Voir les prestations</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
