# 🚀 Guide de Lancement - Esprit de Corps

## ✅ État actuel du projet

Le site Next.js est **100% fonctionnel** en mode statique (sans Supabase) !

**Ce qui fonctionne dès maintenant :**
- ✅ Toutes les pages (Accueil, Prestations, Le Coach, Articles, Contact, Mon Compte)
- ✅ Header avec navigation responsive
- ✅ Footer complet
- ✅ Charte graphique WordPress respectée
- ✅ Design mobile-first et responsive
- ✅ Témoignages clients (données mockées)
- ✅ Formulaire de contact (UI complète)
- ✅ Composants réutilisables (Button, Card, Hero, etc.)

**Ce qui sera ajouté avec Supabase :**
- ⏳ Données dynamiques (articles, prestations, avis réels)
- ⏳ Authentification utilisateur
- ⏳ Formulaire de contact fonctionnel (envoi BDD)
- ⏳ Upload d'images
- ⏳ Admin CRUD pour gérer le contenu

---

## 🎬 Lancer le site maintenant (sans Supabase)

### Option A : Avec Docker (recommandé)

```bash
# 1. Allez à la racine du projet
cd /Users/adjikpo/Documents/Projets/Shamsi/EspritDeCorps

# 2. Lancez le container
docker compose up frontend-dev

# 3. Ouvrez votre navigateur
# http://localhost:3030
```

### Option B : Sans Docker (Node.js requis)

```bash
# 1. Allez dans le dossier frontend
cd /Users/adjikpo/Documents/Projets/Shamsi/EspritDeCorps/frontend

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur
npm run dev

# 4. Ouvrez votre navigateur
# http://localhost:3000
```

---

## 🎨 Ce que vous verrez

### Page d'Accueil (/)
- Hero section avec titre "Esprit de Corps"
- Section "Votre coach sportif dédié"
- 3 cards (Individuel, Groupe, Entreprise)
- Témoignages clients (carrousel)
- CTA "Prêt à commencer ?"

### Prestations (/prestations)
- 3 formules détaillées avec prix
- Liste des fonctionnalités
- Boutons "Nous contacter"

### Le Coach (/le-coach)
- Biographie du coach
- Expertise et certifications
- Disciplines pratiquées

### Articles (/articles)
- 6 articles de blog (mockés)
- Design type magazine
- Newsletter (UI seulement)

### Contact (/contact)
- Formulaire complet
- Coordonnées (email, téléphone, adresse)
- Horaires d'ouverture

### Mon Compte (/mon-compte)
- Formulaires de connexion/inscription (UI)
- Message "Fonctionnalité disponible prochainement"

---

## 📦 Configuration Supabase (après avoir testé le site)

### Étape 1 : Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte (gratuit)
3. Cliquez sur "New Project"
4. Remplissez :
   - **Name:** esprit-de-corps
   - **Database Password:** (choisissez un mot de passe fort)
   - **Region:** Europe (Paris)
5. Cliquez sur "Create new project" (patience, 2-3 min)

### Étape 2 : Exécuter le schéma SQL

1. Dans votre projet Supabase, cliquez sur **SQL Editor** (menu gauche)
2. Cliquez sur **+ New query**
3. Copiez tout le contenu du fichier :
   ```
   /Users/adjikpo/Documents/Projets/Shamsi/EspritDeCorps/supabase/schema.sql
   ```
4. Collez dans l'éditeur
5. Cliquez sur **Run** (en bas à droite)
6. Vérifiez le message de succès

### Étape 3 : Créer les buckets Storage

1. Cliquez sur **Storage** (menu gauche)
2. Cliquez sur **Create a new bucket**
3. Créez ces 4 buckets (tous **PUBLIC**) :
   - `avatars`
   - `articles-images`
   - `prestations-images`
   - `reviews-photos`

Pour chaque bucket :
- Name: (nom du bucket)
- **Public bucket:** ✅ ACTIVÉ
- Cliquez sur "Create bucket"

### Étape 4 : Récupérer les clés API

1. Cliquez sur **Settings** (icône ⚙️ en bas à gauche)
2. Cliquez sur **API**
3. Copiez :
   - **Project URL** (exemple : `https://abcd1234.supabase.co`)
   - **anon public** key (la clé longue commençant par `eyJ...`)

⚠️ **Attention : Prenez bien la clé `anon`, PAS la `service_role` !**

### Étape 5 : Configurer le projet Next.js

Éditez le fichier `.env.local` :

```bash
nano /Users/adjikpo/Documents/Projets/Shamsi/EspritDeCorps/frontend/.env.local
```

Remplacez par vos vraies valeurs :

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3030
NEXT_PUBLIC_SITE_NAME=Esprit de Corps
```

### Étape 6 : Redémarrer le serveur

```bash
# Si Docker
docker compose down
docker compose up --build frontend-dev

# Si Node.js local
# Ctrl+C pour arrêter
npm run dev
```

### Étape 7 : Ajouter des données de test

1. Dans Supabase, cliquez sur **Table Editor**
2. Ajoutez des données dans les tables :

**Table `prestations` :**
```sql
INSERT INTO prestations (title, slug, description, type, price, duration, active) VALUES
('Coaching Individuel', 'coaching-individuel', 'Programme 100% personnalisé', 'individuel', 60.00, '1h', true),
('Coaching Groupe', 'coaching-groupe', 'Entraînement en petits groupes', 'groupe', 25.00, '1h', true),
('Coaching Entreprise', 'coaching-entreprise', 'Bien-être en entreprise', 'entreprise', NULL, 'Sur devis', true);
```

**Table `reviews` :**
```sql
INSERT INTO reviews (client_name, rating, comment, approved) VALUES
('Sophie Martin', 5, 'Excellent accompagnement, des résultats visibles rapidement !', true),
('Thomas Dubois', 5, 'Je recommande à 100%. Le coach est à l\'écoute et professionnel.', true),
('Marie Leroy', 5, 'Parfait pour reprendre le sport en douceur.', true);
```

**Table `articles` :**
```sql
INSERT INTO articles (title, slug, excerpt, content, published, published_at) VALUES
('5 exercices essentiels', '5-exercices-essentiels', 'Les mouvements de base...', 'Contenu complet de l\'article...', true, NOW()),
('Nutrition et sport', 'nutrition-et-sport', 'Comment bien s\'alimenter...', 'Contenu complet...', true, NOW());
```

---

## 🎯 Prochaines étapes (développement avancé)

1. **Connecter les pages aux données Supabase**
   - Modifier `app/articles/page.tsx` pour fetcher les vrais articles
   - Modifier `app/prestations/page.tsx` pour les vraies prestations
   - Modifier la section Testimonials pour les vrais avis

2. **Implémenter l'authentification**
   - Activer l'auth dans `app/mon-compte/page.tsx`
   - Créer un middleware de protection des routes
   - Ajouter un tableau de bord utilisateur

3. **Rendre le formulaire de contact fonctionnel**
   - Connecter à la table `contact_messages`
   - Ajouter des notifications email (optionnel)

4. **Créer un espace admin**
   - CRUD pour articles
   - CRUD pour prestations
   - Validation des avis clients
   - Upload d'images

5. **Optimisations finales**
   - Images optimisées (Next Image)
   - Cache et performance
   - SEO avancé (sitemap, robots.txt)
   - Analytics

---

## 📋 Checklist de lancement

- [ ] ✅ Le site s'affiche correctement sur http://localhost:3030
- [ ] ✅ Toutes les pages sont accessibles
- [ ] ✅ La navigation fonctionne (header/footer)
- [ ] ✅ Le design est conforme à la charte graphique
- [ ] ✅ Le site est responsive (mobile, tablette, desktop)
- [ ] Supabase configuré
- [ ] Données de test ajoutées dans Supabase
- [ ] Pages connectées aux données réelles
- [ ] Authentification fonctionnelle
- [ ] Formulaire de contact connecté

---

## 🆘 Problèmes courants

### Le site ne démarre pas

```bash
# Vérifiez que le port 3030 n'est pas utilisé
lsof -i :3030

# Si oui, tuez le processus
kill -9 <PID>

# Ou changez le port dans docker-compose.yml
```

### Erreur "Cannot find module"

```bash
# Réinstallez les dépendances
cd frontend
rm -rf node_modules
npm install
```

### Styles Tailwind ne s'appliquent pas

```bash
# Rebuild le container Docker
docker compose down
docker compose up --build frontend-dev
```

---

## 🎉 Résultat

Vous avez maintenant :
- ✅ Un site Next.js moderne et performant
- ✅ Design fidèle au WordPress original
- ✅ Toutes les pages fonctionnelles
- ✅ Infrastructure Supabase prête
- ✅ Base solide pour ajouter des fonctionnalités

**Le site fonctionne dès maintenant sans Supabase !**
Configurez Supabase quand vous êtes prêt pour les données dynamiques.

Bon lancement ! 🚀
