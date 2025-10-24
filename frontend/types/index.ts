// Types pour les données de l'application

export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image?: string
  author_id: string
  author?: User
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export type PrestationType = 'individuel' | 'groupe' | 'entreprise'

export interface Prestation {
  id: string
  title: string
  slug: string
  description: string
  type: PrestationType
  price?: number
  duration?: string
  image_url?: string
  features?: string[]
  active: boolean
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  client_name: string
  client_photo?: string
  rating: number
  comment: string
  prestation_id?: string
  prestation?: Prestation
  approved: boolean
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  read: boolean
  created_at: string
}

// Types pour les formulaires
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData extends LoginFormData {
  full_name: string
  confirmPassword: string
}
