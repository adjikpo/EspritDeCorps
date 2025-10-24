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
    <section className="section-container bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">Comment ça marche ?</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Un processus simple et structuré pour démarrer votre transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Ligne de connexion (desktop seulement) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Numéro */}
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icône */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary p-6 rounded-full shadow-lg">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
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
