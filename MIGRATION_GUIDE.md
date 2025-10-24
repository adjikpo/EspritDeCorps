# Guide de Migration WordPress → Next.js/Supabase
## Esprit de Corps

## 📊 Analyse du site WordPress existant

### Charte Graphique Identifiée
**Couleurs principales :**
- Rouge primaire : `#dd3333` (CTA, liens, accents)
- Vert/Turquoise : `#0eb290`, `#0a997b`, `#35ccac` (hover, secondaire)
- Bleu : `#387ebb`, `#066aab` (boutons WPForms)
- Gris foncé : `#263036`, `#2e3b42` (textes, footer)
- Gris clair : `#708e9f`, `#f6f6f6` (backgrounds, textes secondaires)

**Typographies :**
- Police principale : `ABeeZee` (body)
- Polices secondaires : `Roboto`, `Roboto Slab`
- Polices système : `Inter`, `Cardo`

**Pages identifiées :**
- Accueil (`/accueil`)
- Prestations (`/prestations`)
- Le Coach (`/le-coach`)
- Mon Compte (`/mon-compte`)
- Panier/Commander (WooCommerce - à adapter)

**Technologies actuelles :**
- WordPress 6.6.2
- Thème : OceanWP 4.0.1
- Builder : Elementor 3.25.10
- WooCommerce 9.4.3

---

## 🎯 Plan de Migration - 15 Étapes

### Phase 1 : Analyse & Préparation (Étapes 1-2)

#### ✅ Étape 1 : Extraction de la charte graphique
- [x] Couleurs extraites
- [x] Polices identifiées
- [ ] Export des images/assets
- [ ] Documentation du layout

#### Étape 2 : Setup Docker & Projet
**Actions :**
1. Créer la structure de dossiers
2. Configurer Docker pour Next.js
3. Initialiser le projet Next.js avec Tailwind

---

### Phase 2 : Infrastructure (Étapes 3-5)

#### Étape 3 : Configuration Supabase
**Tables à créer :**

```sql
-- Users (géré par Supabase Auth)
-- Profil étendu
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Articles/Blog
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Prestations/Services
CREATE TABLE prestations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('individuel', 'groupe', 'entreprise')),
  price DECIMAL(10,2),
  duration TEXT,
  image_url TEXT,
  features JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Avis clients
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  client_photo TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  prestation_id UUID REFERENCES prestations,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages de contact
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Storage Buckets :**
- `avatars` (public)
- `articles-images` (public)
- `prestations-images` (public)
- `reviews-photos` (public)

#### Étape 4 : Migration des assets
**Commande pour copier les images :**
```bash
# Depuis le dossier du projet
cp -r "/Users/adjikpo/Documents/Projets/Shamsi/Esprit de corps/sport/wp-content/uploads/"* ./frontend/public/assets/images/
```

#### Étape 5 : Configuration du thème Tailwind
Voir `tailwind.config.js` et `theme.config.js` générés

---

### Phase 3 : Frontend - Design System (Étapes 6-7)

#### Étape 6 : Composants de base
- Layout (Header, Footer)
- Navigation
- Boutons (CTA, secondaires)
- Cards
- Forms

#### Étape 7 : Composants métier
- Hero section
- Services cards
- Testimonials slider
- Blog post card
- Contact form

---

### Phase 4 : Pages & Fonctionnalités (Étapes 8-13)

#### Étape 8 : Page Accueil
- Hero avec slogan
- Section "À propos"
- Prestations (aperçu)
- Témoignages
- CTA Contact

#### Étape 9 : Page Prestations
- Liste des services (filtrable par type)
- Cards avec détails
- Modal/page détail
- CTA Réservation

#### Étape 10 : Page Le Coach
- Biographie
- Compétences
- Sports pratiqués
- Galerie photos

#### Étape 11 : Blog/Articles
- Liste des articles (pagination)
- Page détail article
- Sidebar (catégories, articles récents)
- Admin CRUD

#### Étape 12 : Page Contact
- Formulaire (validation)
- Coordonnées
- Map (optionnel)
- Envoi vers Supabase

#### Étape 13 : Espace Mon Compte
- Connexion/Inscription
- Profil utilisateur
- Historique (si prestations réservables)
- Avis laissés

---

### Phase 5 : Intégrations Backend (Étapes 14-15)

#### Étape 14 : API Supabase
- Hooks personnalisés
- CRUD operations
- Upload images
- Auth flows

#### Étape 15 : Tests & Optimisations
- Tests responsive
- Performance (Lighthouse)
- SEO (metadata, sitemap)
- Accessibilité

---

## 📂 Structure du Projet

```
EspritDeCorps/
├── docker-compose.yml          # WordPress existant + nouveau service Next.js
├── Dockerfile.nextjs
├── frontend/                   # Projet Next.js
│   ├── public/
│   │   ├── assets/
│   │   │   ├── images/        # Images migrées depuis WP
│   │   │   ├── fonts/         # ABeeZee, Roboto
│   │   │   └── icons/
│   │   ├── favicon.ico
│   │   └── logo.svg
│   ├── src/
│   │   ├── app/               # App Router Next.js 14+
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx       # Accueil
│   │   │   ├── prestations/
│   │   │   ├── le-coach/
│   │   │   ├── articles/
│   │   │   ├── contact/
│   │   │   └── mon-compte/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── ui/            # Composants génériques
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Input.tsx
│   │   │   └── sections/      # Sections métier
│   │   │       ├── Hero.tsx
│   │   │       ├── Testimonials.tsx
│   │   │       └── ContactForm.tsx
│   │   ├── lib/
│   │   │   ├── supabase/
│   │   │   │   ├── client.ts
│   │   │   │   ├── server.ts
│   │   │   │   └── hooks/
│   │   │   └── utils.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── config/
│   │       └── theme.ts
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
├── supabase/                   # Configuration Supabase
│   ├── migrations/
│   └── seed.sql
└── MIGRATION_GUIDE.md          # Ce fichier
```

---

## 🚀 Commandes de démarrage

### 1. WordPress existant (déjà configuré)
```bash
cd "/Users/adjikpo/Documents/Projets/Shamsi/Esprit de corps"
docker compose up -d
# Accessible sur http://localhost:81
```

### 2. Nouveau projet Next.js (à créer)
```bash
cd /Users/adjikpo/Documents/Projets/Shamsi/EspritDeCorps/frontend
docker compose up frontend
# Accessible sur http://localhost:3030
```

---

## 📝 Prochaines actions immédiates

1. **Créer la structure Docker Next.js**
2. **Initialiser le projet Next.js avec Tailwind**
3. **Configurer le thème selon la charte graphique**
4. **Créer le schéma Supabase**
5. **Migrer les assets (images)**

Prêt à commencer ? 🎨
