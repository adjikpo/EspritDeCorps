import { BadgeCheck, TrendingDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function SAPBanner() {
  return (
    <section className="section-container bg-gradient-to-r from-secondary/10 via-secondary/5 to-accent-blue/10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contenu */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="h-8 w-8 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Agrément Service à la Personne
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-neutral-900">
                  Bénéficiez de 
                </h3>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-bold text-2xl rounded-lg shadow-lg animate-pulse">
                  -50%
                </span>
              </div>
              <p className="text-lg text-neutral-700 font-medium mb-4">
                de réduction fiscale
              </p>
              
              <p className="text-neutral-600 leading-relaxed mb-6">
                En tant que coach agréé <strong>Service à la Personne (SAP)</strong>, 
                vos séances de coaching à domicile vous permettent de profiter d'une 
                <strong className="text-primary"> réduction d'impôt de 50%</strong> sur 
                les sommes versées.
              </p>

              <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-neutral-700">
                      <strong>Exemple :</strong> Une séance à 60€ ne vous coûte réellement 
                      que <strong className="text-primary">30€</strong> après déduction fiscale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button>
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/prestations">
                  <Button variant="outline">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visuel */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="relative">
                {/* Badge circulaire */}
                <div className="w-64 h-64 bg-gradient-to-br from-secondary to-accent-blue rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">-50%</div>
                    <div className="text-lg font-semibold">Crédit d'impôt</div>
                    <div className="text-sm opacity-90 mt-2">Agrément SAP</div>
                  </div>
                </div>
                
                {/* Badges de sécurité */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <BadgeCheck className="h-12 w-12 text-secondary" />
                </div>
              </div>

              <p className="text-center text-sm text-neutral-500 mt-6">
                Sécurité · Qualité · Confiance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
