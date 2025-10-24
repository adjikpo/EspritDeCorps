import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1: À propos */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/assets/logo-circle.png" 
                alt="Esprit de Corps" 
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <h3 className="text-xl font-bold">
                <span className="text-primary">Esprit</span> de Corps
              </h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Coaching sportif professionnel pour particuliers et entreprises. 
              Atteignez vos objectifs avec un accompagnement personnalisé.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-neutral-400 hover:text-primary transition-colors">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="/le-coach" className="text-neutral-400 hover:text-primary transition-colors">
                  Le Coach
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-neutral-400 hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Prestations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/prestations#individuel" className="text-neutral-400 hover:text-secondary transition-colors">
                  Coaching Individuel
                </Link>
              </li>
              <li>
                <Link href="/prestations#groupe" className="text-neutral-400 hover:text-secondary transition-colors">
                  Coaching Groupe
                </Link>
              </li>
              <li>
                <Link href="/prestations#entreprise" className="text-neutral-400 hover:text-secondary transition-colors">
                  Coaching Entreprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:contact@espritdecorps.com" className="text-neutral-400 hover:text-primary transition-colors">
                  contact@espritdecorps.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a href="tel:+33123456789" className="text-neutral-400 hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-neutral-400">
                  Paris, France
                </span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} Esprit de Corps. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
