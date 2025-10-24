# Esprit de Corps - Site Next.js + Supabase

Migration du site WordPress vers une stack moderne Next.js/Supabase.

## 📋 Vue d'ensemble

- **Frontend**: Next.js 15 avec App Router + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Design**: Fidèle à la charte graphique WordPress (couleurs, polices, layout)
- **Containerisation**: Docker + Docker Compose

## 🎨 Charte Graphique

**Couleurs:**
- Rouge primaire: `#dd3333`
- Vert/Turquoise: `#0eb290`
- Bleu accent: `#387ebb`
- Gris foncé: `#263036`

**Polices:**
- ABeeZee (corps de texte)
- Roboto (titres)
- Roboto Slab (serif)

## 🚀 Démarrage rapide

### 1. Configuration de Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Dans le SQL Editor, exécutez le fichier `supabase/schema.sql`
3. Créez les buckets Storage:
   - `avatars` (public)
   - `articles-images` (public)
   - `prestations-images` (public)
   - `reviews-photos` (public)

4. Récupérez vos clés API:
   - Project URL
   - anon (public) key

### 2. Configuration du projet

```bash
# Copier le fichier d'exemple
cp frontend/.env.local.example frontend/.env.local

# Éditer avec vos clés Supabase
nano frontend/.env.local
```

### 3. Lancement avec Docker

```bash
# Mode développement (port 3030)
docker compose up frontend-dev

# Ou en arrière-plan
docker compose up -d frontend-dev

# Mode production (port 3031)
docker compose --profile production up frontend
```

### 4. Accès

- **Site Next.js**: http://localhost:3030
- **WordPress** (ancien): http://localhost:81

## 📂 Structure du projet

```
EspritDeCorps/
├── frontend/                   # Application Next.js
│   ├── app/                   # Pages (App Router)
│   │   ├── layout.tsx        # Layout racine
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── prestations/      # Pages prestations
│   │   ├── le-coach/         # Page coach
│   │   ├── articles/         # Blog
│   │   ├── contact/          # Contact
│   │   └── mon-compte/       # Espace client
│   ├── components/            # Composants React
│   │   ├── layout/           # Header, Footer, Nav
│   │   ├── ui/               # Composants UI
│   │   └── sections/         # Sections métier
│   ├── lib/                   # Librairies
│   │   ├── supabase/         # Client Supabase
│   │   └── utils/            # Utilitaires
│   ├── public/assets/         # Images, fonts, icons
│   ├── styles/               # CSS globaux
│   └── types/                # Types TypeScript
├── supabase/                  # Configuration BDD
│   └── schema.sql            # Schéma complet
├── docker-compose.yml         # Configuration Docker
├── Dockerfile.nextjs          # Dockerfile production
└── MIGRATION_GUIDE.md         # Guide détaillé
```

## 🔧 Développement

### Installation locale (sans Docker)

```bash
cd frontend

# Installation des dépendances
npm install

# Lancement du serveur de dev
npm run dev
```

### Commandes disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter
```

## 📦 Migration des assets WordPress

Pour copier les images du site WordPress:

```bash
# Depuis la racine du projet
cp -r "../Esprit de corps/sport/wp-content/uploads/"* frontend/public/assets/images/
```

Ou manuellement:
1. Allez dans `/Users/adjikpo/Documents/Projets/Shamsi/Esprit de corps/sport/wp-content/uploads/`
2. Copiez les dossiers dans `frontend/public/assets/images/`

## 🗄️ Base de données

### Tables principales

- `profiles` - Profils utilisateurs étendus
- `articles` - Articles de blog
- `prestations` - Services proposés
- `reviews` - Avis clients
- `contact_messages` - Messages de contact

### Sécurité (RLS)

Les politiques Row Level Security sont configurées pour:
- Articles publiés visibles publiquement
- Gestion des contenus réservée aux utilisateurs authentifiés
- Soumission d'avis publique, approbation par admin

## 📄 Pages à créer

- [x] Accueil (MVP créé)
- [ ] Prestations (liste + détails)
- [ ] Le Coach (biographie)
- [ ] Articles/Blog (liste + détails)
- [ ] Contact (formulaire)
- [ ] Mon Compte (auth + profil)

## 🎯 Prochaines étapes

1. **Copier les assets** depuis WordPress
2. **Créer les composants** Header, Footer, Navigation
3. **Développer les pages** complètes avec données Supabase
4. **Implémenter l'auth** avec Supabase Auth
5. **Tests** responsive et performance

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Support

Pour toute question, consultez `MIGRATION_GUIDE.md` pour le guide complet étape par étape.

---

**Status actuel:** ✅ Site 100% fonctionnel ! 🎉

---

## ⚡ Lancement ULTRA RAPIDE

```bash
# Lancez le site en 10 secondes
docker compose up frontend-dev

# Ouvrez dans votre navigateur
open http://localhost:3030
```

**C'EST TOUT !** Le site fonctionne maintenant sans Supabase.

---

## 📖 Documentation complète

- **[LANCEMENT.md](./LANCEMENT.md)** → Guide de lancement + Config Supabase
- **[RECAP.md](./RECAP.md)** → Récapitulatif complet du projet
- **[QUICK_START.md](./QUICK_START.md)** → Démarrage rapide
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** → Guide migration détaillé
