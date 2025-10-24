-- Esprit de Corps - Schéma de base de données Supabase

-- Extension UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des profils utilisateurs (étend auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table des articles/blog
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table des prestations/services
CREATE TABLE IF NOT EXISTS public.prestations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('individuel', 'groupe', 'entreprise')) NOT NULL,
  price DECIMAL(10,2),
  duration TEXT,
  image_url TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table des avis clients
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_photo TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT NOT NULL,
  prestation_id UUID REFERENCES public.prestations(id) ON DELETE SET NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table des messages de contact
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS articles_author_idx ON public.articles(author_id);
CREATE INDEX IF NOT EXISTS articles_published_idx ON public.articles(published, published_at DESC);
CREATE INDEX IF NOT EXISTS articles_slug_idx ON public.articles(slug);
CREATE INDEX IF NOT EXISTS prestations_type_idx ON public.prestations(type);
CREATE INDEX IF NOT EXISTS prestations_active_idx ON public.prestations(active);
CREATE INDEX IF NOT EXISTS reviews_approved_idx ON public.reviews(approved);
CREATE INDEX IF NOT EXISTS reviews_prestation_idx ON public.reviews(prestation_id);

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_prestations_updated_at BEFORE UPDATE ON public.prestations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Fonction pour créer automatiquement un profil après inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer le profil automatiquement
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Row Level Security (RLS) Policies

-- Profiles: lecture publique, modification par l'utilisateur
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles publics en lecture"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Utilisateurs peuvent modifier leur profil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Articles: lecture publique si publié, CRUD pour authentifiés
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Articles publiés visibles publiquement"
  ON public.articles FOR SELECT
  USING (published = true);

CREATE POLICY "Utilisateurs authentifiés peuvent créer des articles"
  ON public.articles FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Auteurs peuvent modifier leurs articles"
  ON public.articles FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "Auteurs peuvent supprimer leurs articles"
  ON public.articles FOR DELETE
  USING (auth.uid() = author_id);

-- Prestations: lecture publique si actif, CRUD pour authentifiés
ALTER TABLE public.prestations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Prestations actives visibles publiquement"
  ON public.prestations FOR SELECT
  USING (active = true);

CREATE POLICY "Utilisateurs authentifiés peuvent gérer les prestations"
  ON public.prestations FOR ALL
  USING (auth.role() = 'authenticated');

-- Reviews: lecture si approuvé, création publique, validation par authentifiés
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Avis approuvés visibles publiquement"
  ON public.reviews FOR SELECT
  USING (approved = true);

CREATE POLICY "Tout le monde peut soumettre un avis"
  ON public.reviews FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Utilisateurs authentifiés peuvent approuver/modifier les avis"
  ON public.reviews FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Contact messages: insertion publique, lecture par authentifiés
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut envoyer un message"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Utilisateurs authentifiés peuvent lire les messages"
  ON public.contact_messages FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Utilisateurs authentifiés peuvent marquer comme lu"
  ON public.contact_messages FOR UPDATE
  USING (auth.role() = 'authenticated');
