import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Dumbbell, Users, Building2 } from 'lucide-react'

// Données mockées pour les témoignages (sera remplacé par Supabase)
const mockTestimonials = [
  {
    id: '1',
    client_name: 'Sophie Martin',
    rating: 5,
    comment: "Un accompagnement exceptionnel ! J'ai atteint mes objectifs en quelques mois grâce à un programme personnalisé et un coach à l'écoute.",
  },
  {
    id: '2',
    client_name: 'Thomas Dubois',
    rating: 5,
    comment: 'Coaching de qualité avec des résultats visibles rapidement. L\'ambiance est motivante et les conseils sont précieux.',
  },
  {
    id: '3',
    client_name: 'Marie Leroy',
    rating: 5,
    comment: 'Parfait pour reprendre le sport ! Le coach s\'adapte à mon rythme et me pousse à me dépasser tout en respectant mes limites.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Esprit de Corps"
        subtitle="Coaching sportif professionnel pour atteindre vos objectifs"
        primaryCta={{
          text: 'Découvrir nos prestations',
          href: '/prestations',
        }}
        secondaryCta={{
          text: 'Nous contacter',
          href: '/contact',
        }}
      />

      {/* Section À propos */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary mb-6">Votre coach sportif dédié</h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            Chez Esprit de Corps, nous croyons que chaque personne mérite un accompagnement personnalisé
            pour atteindre ses objectifs sportifs et de bien-être. Notre approche combine expertise,
            motivation et résultats concrets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Individuel</h3>
              <p className="text-neutral-600 mb-4">Coaching personnalisé adapté à vos besoins</p>
              <Link href="/prestations#individuel">
                <Button variant="outline" size="sm">En savoir plus</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Groupe</h3>
              <p className="text-neutral-600 mb-4">Dynamique collective et motivation partagée</p>
              <Link href="/prestations#groupe">
                <Button variant="outline" size="sm">En savoir plus</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent-blue/10 p-4 rounded-full">
                  <Building2 className="h-8 w-8 text-accent-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Entreprise</h3>
              <p className="text-neutral-600 mb-4">Bien-être au travail et cohésion d'équipe</p>
              <Link href="/prestations#entreprise">
                <Button variant="outline" size="sm">En savoir plus</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <Skills />

      {/* Section Comment ça marche */}
      <HowItWorks />

      {/* Bandeau Service à la Personne */}
      <SAPBanner />

      {/* Section Témoignages */}
      <Testimonials testimonials={mockTestimonials} />

      {/* Section CTA */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-neutral-900 mb-4">Prêt à commencer ?</h2>
          <p className="text-neutral-600 text-lg mb-8">
            Contactez-nous dès aujourd'hui pour une première séance découverte
          </p>
          <Link href="/contact">
            <Button size="lg">Réserver une séance</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
