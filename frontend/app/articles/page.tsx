import Card from '@/components/ui/Card'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles & Actualités - Esprit de Corps',
  description: 'Conseils, astuces et actualités du monde du coaching sportif et de la préparation physique.',
}

// Données mockées (sera remplacé par Supabase)
const mockArticles = [
  {
    id: '1',
    title: '5 exercices essentiels pour un corps tonique',
    slug: '5-exercices-essentiels-corps-tonique',
    excerpt: 'Découvrez les mouvements fondamentaux pour sculpter votre silhouette et gagner en force fonctionnelle.',
    published_at: '2024-01-15',
    featured_image: null,
  },
  {
    id: '2',
    title: 'L\'importance de la nutrition dans votre progression',
    slug: 'importance-nutrition-progression',
    excerpt: 'Comment adapter votre alimentation à vos objectifs sportifs pour maximiser vos résultats.',
    published_at: '2024-01-10',
    featured_image: null,
  },
  {
    id: '3',
    title: 'Coaching en entreprise : les bénéfices pour vos équipes',
    slug: 'coaching-entreprise-benefices-equipes',
    excerpt: 'Pourquoi investir dans le bien-être sportif de vos collaborateurs est un choix gagnant.',
    published_at: '2024-01-05',
    featured_image: null,
  },
  {
    id: '4',
    title: 'Reprendre le sport après une longue pause',
    slug: 'reprendre-sport-apres-pause',
    excerpt: 'Les clés pour revenir à l\'activité physique en douceur et sans risque de blessure.',
    published_at: '2023-12-28',
    featured_image: null,
  },
  {
    id: '5',
    title: 'Les bienfaits du sport sur la santé mentale',
    slug: 'bienfaits-sport-sante-mentale',
    excerpt: 'Comment l\'exercice physique régulier améliore votre moral et réduit le stress.',
    published_at: '2023-12-20',
    featured_image: null,
  },
  {
    id: '6',
    title: 'Préparation physique : erreurs à éviter',
    slug: 'preparation-physique-erreurs-eviter',
    excerpt: 'Les pièges courants qui peuvent ralentir votre progression et comment les éviter.',
    published_at: '2023-12-15',
    featured_image: null,
  },
]

export default function ArticlesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Articles & Conseils
          </h1>
          <p className="text-white text-xl md:text-2xl text-neutral-300">
            Actualités, astuces et conseils pour optimiser votre pratique sportive
          </p>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-neutral-200 flex items-center justify-center text-neutral-400">
                    {article.featured_image ? (
                      <img
                        src={article.featured_image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-5xl">📰</div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.published_at, { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        5 min
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-600 leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Lien */}
                    <div className="flex items-center text-primary font-medium hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <p className="text-neutral-500 text-sm">
              Plus d'articles à venir...
            </p>
          </div>
        </div>
      </section>

      {/* CTA Newsletter (optionnel) */}
      <section className="section-container bg-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-neutral-900 mb-4">
            Restez informé
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Recevez nos derniers articles et conseils directement dans votre boîte mail
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
