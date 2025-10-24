import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Esprit de Corps - Coaching Sportif Professionnel',
  description: 'Coaching sportif personnalisé pour particuliers et entreprises. Programmes individuels, en groupe et en entreprise.',
  keywords: 'coaching sportif, préparation physique, sport, fitness, entreprise',
  authors: [{ name: 'Esprit de Corps' }],
  openGraph: {
    title: 'Esprit de Corps - Coaching Sportif',
    description: 'Coaching sportif personnalisé de qualité',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
