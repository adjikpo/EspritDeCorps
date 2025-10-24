# 🚀 Démarrage Rapide - Esprit de Corps

## Étape 1: Configuration Supabase (5 min)

1. **Créez un compte sur [supabase.com](https://supabase.com)**

2. **Créez un nouveau projet**
   - Nom: `esprit-de-corps`
   - Région: Europe (Paris) recommandé
   - Mot de passe: choisissez un mot de passe fort

3. **Exécutez le schéma SQL**
   - Allez dans `SQL Editor` (menu de gauche)
   - Click sur `+ New query`
   - Copiez tout le contenu de `supabase/schema.sql`
   - Collez et cliquez sur `Run`

4. **Créez les buckets de stockage**
   - Allez dans `Storage` (menu de gauche)
   - Créez ces 4 buckets **PUBLIC**:
     - `avatars`
     - `articles-images`
     - `prestations-images`
     - `reviews-photos`

5. **Récupérez vos clés API**
   - Allez dans `Settings` > `API`
   - Copiez:
     - `Project URL`
     - `anon public` key (pas la service_role)

## Étape 2: Configuration du projet (2 min)

```bash
# 1. Allez dans le dossier frontend
cd frontend

# 2. Créez le fichier .env.local
cp .env.local.example .env.local

# 3. Éditez .env.local et remplacez par vos vraies clés
nano .env.local
# Ou utilisez votre éditeur préféré (VS Code, Sublime, etc.)
```

Votre `.env.local` doit ressembler à:
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghij.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=http://localhost:3030
NEXT_PUBLIC_SITE_NAME=Esprit de Corps
```

## Étape 3: Lancement du site (1 min)

### Option A: Avec Docker (recommandé)

```bash
# Retournez à la racine du projet
cd ..

# Lancez le container
docker compose up frontend-dev
```

### Option B: Sans Docker (nécessite Node.js installé)

```bash
# Dans le dossier frontend
cd frontend

# Installez les dépendances
npm install

# Lancez le serveur
npm run dev
```

## Étape 4: Testez ! 🎉

Ouvrez votre navigateur sur **http://localhost:3030**

Vous devriez voir la page d'accueil avec:
- Hero section avec fond gris foncé
- Titre "Esprit de Corps"
- 3 cards (Individuel, Groupe, Entreprise)
- Section CTA
- Footer

## Étape 5: Copier les images WordPress (optionnel)

```bash
# Depuis la racine du projet
cp -r "../Esprit de corps/sport/wp-content/uploads/"* frontend/public/assets/images/
```

## 🔧 Commandes utiles

```bash
# Arrêter le container Docker
docker compose down

# Voir les logs
docker compose logs -f frontend-dev

# Rebuild après modifications
docker compose up --build frontend-dev

# Mode production
docker compose --profile production up frontend
```

## ❓ Problèmes courants

### Le port 3030 est déjà utilisé

Éditez `docker-compose.yml` et changez:
```yaml
ports:
  - "3031:3000"  # au lieu de 3030:3000
```

### Erreur Supabase "Invalid API key"

- Vérifiez que vous avez bien copié la clé `anon` (pas `service_role`)
- Vérifiez qu'il n'y a pas d'espace avant/après les valeurs
- Redémarrez le serveur après modification du `.env.local`

### Les styles ne s'appliquent pas

```bash
# Reconstruisez le container
docker compose down
docker compose up --build frontend-dev
```

## 📱 Prochaines étapes

1. ✅ Le site fonctionne en local
2. Ajoutez vos vraies données dans Supabase (articles, prestations, avis)
3. Personnalisez les composants selon vos besoins
4. Développez les pages manquantes (voir README.md)

## 🆘 Besoin d'aide ?

Consultez:
- `README.md` - Documentation complète
- `MIGRATION_GUIDE.md` - Guide détaillé de migration
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Supabase](https://supabase.com/docs)

---

**Temps total estimé: 8 minutes** ⏱️
