import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { LogIn, UserPlus, Lock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mon Compte - Esprit de Corps',
  description: 'Accédez à votre espace personnel pour gérer vos séances et votre profil.',
}

export default function MonComptePage() {
  // TODO: Implémenter l'authentification Supabase plus tard
  const isLoggedIn = false

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Mon Compte
          </h1>
          <p className="text-white text-xl md:text-2xl text-neutral-300">
            Accédez à votre espace personnel
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          {!isLoggedIn ? (
            <>
              {/* Page de connexion/inscription */}
              <div className="text-center mb-12">
                <h2 className="text-neutral-900 mb-4">
                  Connectez-vous à votre compte
                </h2>
                <p className="text-neutral-600 text-lg">
                  Gérez vos séances, consultez votre planning et suivez votre progression
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Connexion */}
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <LogIn className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Connexion
                    </h3>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email-login" className="block text-sm font-medium text-neutral-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email-login"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="password-login" className="block text-sm font-medium text-neutral-900 mb-2">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        id="password-login"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-neutral-600">Se souvenir de moi</span>
                      </label>
                      <a href="#" className="text-primary hover:underline">
                        Mot de passe oublié ?
                      </a>
                    </div>

                    <Button type="submit" className="w-full">
                      Se connecter
                    </Button>
                  </form>

                  <p className="text-center text-sm text-neutral-500 mt-6">
                    Fonctionnalité disponible prochainement
                  </p>
                </Card>

                {/* Inscription */}
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <UserPlus className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Inscription
                    </h3>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name-signup" className="block text-sm font-medium text-neutral-900 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name-signup"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-signup" className="block text-sm font-medium text-neutral-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email-signup"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="password-signup" className="block text-sm font-medium text-neutral-900 mb-2">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        id="password-signup"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" variant="secondary" className="w-full">
                      Créer mon compte
                    </Button>
                  </form>

                  <p className="text-center text-sm text-neutral-500 mt-6">
                    Fonctionnalité disponible prochainement
                  </p>
                </Card>
              </div>

              {/* Info sécurité */}
              <div className="mt-8 p-6 bg-neutral-100 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 text-neutral-600 mb-2">
                  <Lock className="h-5 w-5" />
                  <span className="font-medium">Vos données sont protégées</span>
                </div>
                <p className="text-sm text-neutral-500">
                  Nous utilisons des mesures de sécurité avancées pour protéger vos informations personnelles.
                </p>
              </div>

              {/* Alternative */}
              <div className="mt-12 text-center">
                <p className="text-neutral-600 mb-4">
                  Vous préférez nous contacter directement ?
                </p>
                <Link href="/contact">
                  <Button variant="outline">
                    Aller à la page contact
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">
                Tableau de bord utilisateur - À implémenter avec Supabase Auth
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
