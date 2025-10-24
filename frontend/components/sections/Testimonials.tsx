'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: string
  client_name: string
  rating: number
  comment: string
  client_photo?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section-container bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-neutral-900 mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-center text-neutral-600 mb-12">
          Découvrez les témoignages de ceux qui nous font confiance
        </p>

        <Card className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            {/* Photo du client */}
            {current.client_photo && (
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={current.client_photo}
                  alt={current.client_name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Nom */}
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {current.client_name}
            </h3>

            {/* Étoiles */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < current.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>

            {/* Commentaire */}
            <p className="text-lg text-neutral-600 italic leading-relaxed mb-8">
              "{current.comment}"
            </p>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="h-6 w-6 text-neutral-600" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-primary w-8'
                          : 'bg-neutral-300'
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="h-6 w-6 text-neutral-600" />
                </button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
