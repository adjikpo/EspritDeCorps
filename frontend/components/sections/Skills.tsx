import Card from '@/components/ui/Card'
import { 
  Activity, 
  Dumbbell, 
  Heart, 
  Shield, 
  Zap, 
  Target,
  Apple,
  Flame
} from 'lucide-react'

const skills = [
  {
    icon: Activity,
    title: 'Remise en forme',
    description: 'Retrouvez votre vitalité',
  },
  {
    icon: Shield,
    title: 'Sport de combat',
    description: 'Techniques et maîtrise',
  },
  {
    icon: Zap,
    title: 'Circuit training',
    description: 'Intensité et efficacité',
  },
  {
    icon: Target,
    title: 'Self-défense',
    description: 'Confiance et sécurité',
  },
  {
    icon: Dumbbell,
    title: 'Musculation',
    description: 'Force et développement',
  },
  {
    icon: Activity,
    title: 'Réathlétisation',
    description: 'Retour au sport',
  },
  {
    icon: Heart,
    title: 'Cardio',
    description: 'Endurance et santé',
  },
  {
    icon: Flame,
    title: 'Pilates',
    description: 'Souplesse et gainage',
  },
  {
    icon: Apple,
    title: 'Conseils nutritionnels',
    description: 'Alimentation adaptée',
  },
]

export default function Skills() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">Mes Compétences</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Un accompagnement complet couvrant tous les aspects de votre préparation physique
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {skill.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
