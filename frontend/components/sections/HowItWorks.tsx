import { MessageCircle, ClipboardCheck, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Prise de contact',
    description: 'Contactez-nous via le formulaire ou par téléphone pour exposer vos objectifs et disponibilités.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Entretien initial',
    description: 'Premier rendez-vous pour faire connaissance, évaluer votre niveau et définir ensemble vos attentes.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Programme personnalisé',
    description: 'Mise en place d\'un programme sur-mesure adapté à vos objectifs, votre rythme et vos contraintes.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-container bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4">Comment ça marche ?</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Un processus simple et structuré pour démarrer votre transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Ligne de timeline (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent-blue opacity-20" style={{ top: '6rem', left: '20%', right: '20%' }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon
            const bgColors = ['bg-primary', 'bg-secondary', 'bg-accent-blue']
            const borderColors = ['border-primary/20', 'border-secondary/20', 'border-accent-blue/20']
            
            return (
              <div key={index} className="relative">
                <div className={`relative z-10 bg-white rounded-2xl p-8 shadow-lg border-2 ${borderColors[index]} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  {/* Numéro badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icône avec animation */}
                  <div className="flex justify-center mb-6">
                    <div className={`${bgColors[index]} p-5 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
