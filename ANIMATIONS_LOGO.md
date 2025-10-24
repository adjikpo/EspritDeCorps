# Documentation des Animations du Logo 🎨

## Vue d'ensemble

Toutes les animations utilisent **framer-motion** pour garantir fluidité et performance. Le logo circulaire est intégré dans 6 zones stratégiques avec des animations différentes.

---

## 1. 🔄 Loader de chargement (LogoLoader)

**Emplacement** : Au lancement du site (overlay fullscreen)

**Animation** :
- Zoom-in + rotation -180° → 0°
- Halo lumineux pulsant (gradient tricolore)
- Durée : 2 secondes
- Disparition automatique avec fade-out

**Fichier** : `components/animations/LogoLoader.tsx`

```tsx
// Animation principale
initial={{ scale: 0, rotate: -180, opacity: 0 }}
animate={{ scale: 1, rotate: 0, opacity: 1 }}
transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} // easeOutBack
```

**Performance** :
- Fixed position avec z-index 50
- Backdrop blur léger
- Auto-nettoyage avec useEffect

---

## 2. 🌟 Hero Section - Logo en filigrane

**Emplacement** : Background de la page d'accueil (Hero)

**Animation** :
- Rotation 360° très lente (120 secondes)
- Opacité fixe : 8%
- Halo lumineux pulsant (scale 1 → 1.1)
- **Responsive** : rotation uniquement sur desktop (> 1025px)

**Fichier** : `components/sections/Hero.tsx`

```tsx
// Rotation desktop
animate={{ rotate: isDesktop ? 360 : 0 }}
transition={{ duration: 120, repeat: Infinity, ease: "linear" }}

// Halo pulsant
animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
transition={{ duration: 8, repeat: Infinity }}
```

**Performance** :
- Position absolute, pointer-events: none
- Mobile : fade-in uniquement (pas de rotation)
- Taille adaptative : 600px mobile, 800px desktop

---

## 3. 💫 Header - Animation hover

**Emplacement** : Logo dans la navbar (top-left)

**Animation** :
- Scale 1 → 1.1 au survol
- Drop shadow (glow rouge primaire)
- Transition rapide : 200ms

**Fichier** : `components/layout/Header.tsx`

```tsx
<motion.div
  whileHover={{ 
    scale: 1.1,
    filter: "drop-shadow(0 0 12px rgba(221, 51, 51, 0.5))"
  }}
  transition={{ duration: 0.2 }}
>
```

**Performance** :
- Motion.div uniquement sur le conteneur logo
- GPU-accelerated (transform + filter)

---

## 4. ⬆️ Scroll to Top - Bouton flottant

**Emplacement** : Bottom-right (apparaît après 300px de scroll)

**Animation** :
- Apparition : scale 0 → 1, translate Y
- Hover : scale 1.1
- Clic : rotation 360°
- Glow animé au hover (gradient tricolore)

**Fichier** : `components/animations/ScrollToTop.tsx`

```tsx
// Apparition
initial={{ opacity: 0, scale: 0, y: 100 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0, y: 100 }}

// Rotation au clic
animate={{ rotate: isClicked ? 360 : 0 }}
transition={{ duration: 0.6, ease: "easeInOut" }}
```

**Performance** :
- AnimatePresence pour mount/unmount smooth
- useEffect avec scroll listener optimisé
- Masqué sur mobile (< 640px) via `hidden sm:flex`

---

## 5. ✨ Footer - Animation à l'arrivée

**Emplacement** : Logo dans le footer (colonne À propos)

**Animation** :
- Fade-in + scale 0.8 → 1 (à l'arrivée dans viewport)
- Box-shadow pulsant (glow rouge)
- Déclenchement : useInView avec margin -100px

**Fichier** : `components/layout/Footer.tsx`

```tsx
const isInView = useInView(ref, { once: true, margin: "-100px" })

// Animation initiale
initial={{ opacity: 0, scale: 0.8 }}
animate={isInView ? { opacity: 1, scale: 1 } : {}}
transition={{ duration: 0.6, ease: "easeOut" }}

// Halo pulsant
animate={isInView ? {
  boxShadow: [
    "0 0 0px rgba(221, 51, 51, 0)",
    "0 0 20px rgba(221, 51, 51, 0.4)",
    "0 0 0px rgba(221, 51, 51, 0)"
  ]
} : {}}
transition={{ duration: 2, repeat: Infinity }}
```

**Performance** :
- Trigger only once (once: true)
- useRef + useInView pour détecter visibilité

---

## 6. 📱 Responsive - Optimisations Mobile

**Hook personnalisé** : `hooks/useMediaQuery.ts`

```tsx
export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)')
```

**Stratégie d'optimisation** :

| Animation | Desktop | Mobile |
|-----------|---------|--------|
| Loader rotation | ✅ Full | ✅ Full (courte durée) |
| Hero rotation | ✅ 360° infini | ❌ Fade-in statique |
| Header hover | ✅ Scale + glow | ✅ Scale + glow |
| Scroll to top | ✅ Visible | ❌ Masqué |
| Footer glow | ✅ Pulse | ✅ Pulse |

**Breakpoints** :
- Mobile : < 768px
- Tablet : 769px - 1024px
- Desktop : > 1025px

---

## 🎯 Intégration dans le Layout

**Fichier** : `app/layout.tsx`

```tsx
import LogoLoader from '@/components/animations/LogoLoader'
import ScrollToTop from '@/components/animations/ScrollToTop'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LogoLoader />        {/* Loader au chargement */}
        <Header />            {/* Logo animé dans navbar */}
        <main>{children}</main>
        <Footer />            {/* Logo animé dans footer */}
        <ScrollToTop />       {/* Bouton flottant */}
      </body>
    </html>
  )
}
```

---

## 📦 Dépendances

**Package installé** :
```json
{
  "framer-motion": "^11.15.0"
}
```

**Compatibilité** :
- Next.js 15
- React 19
- TypeScript 5.7

---

## ⚡ Performance & Best Practices

### GPU Acceleration
Toutes les animations utilisent des propriétés optimisées :
- `transform` (scale, rotate, translate)
- `opacity`
- `filter` (drop-shadow, blur)

### Gestion mémoire
- Cleanup des event listeners (scroll, resize)
- AnimatePresence pour unmount propre
- useInView avec `once: true` pour animations one-shot

### Responsive
- Hook useMediaQuery centralisé
- Animations simplifiées sur mobile
- Masquage des éléments non essentiels (ScrollToTop)

### Accessibilité
- `aria-label` sur boutons
- `aria-hidden="true"` sur logos décoratifs
- Focus visible maintenu sur éléments interactifs

---

## 🧪 Tests Recommandés

### Desktop
1. Vérifier rotation lente du logo Hero (120s)
2. Tester hover sur logo Header
3. Scroller pour voir apparition ScrollToTop
4. Cliquer sur ScrollToTop → rotation
5. Scroller jusqu'au Footer → fade-in + glow

### Mobile
1. Vérifier loader au chargement
2. Hero : logo statique (pas de rotation)
3. ScrollToTop : masqué
4. Footer : animation glow fonctionnelle

### Performance
```bash
# Lighthouse audit
npm run build
npm start
# Ouvrir DevTools > Lighthouse > Performance

# Cibles :
# - FCP < 1.8s
# - LCP < 2.5s
# - CLS < 0.1
```

---

## 🎨 Palette Couleurs pour Glows

```css
/* Primary Red */
rgba(221, 51, 51, 0.5)   /* #dd3333 à 50% */

/* Secondary Green */
rgba(14, 178, 144, 0.4)  /* #0eb290 à 40% */

/* Accent Blue */
rgba(56, 126, 187, 0.4)  /* #387ebb à 40% */

/* Gradient tricolore */
from-primary via-secondary to-accent-blue
```

---

## 🚀 Lancement du Projet

```bash
# Rebuild avec framer-motion
docker compose down
docker compose build frontend-dev
docker compose up frontend-dev

# Accès
http://localhost:3030
```

---

## 📝 Fichiers Créés/Modifiés

### Nouveaux composants
- `components/animations/LogoLoader.tsx` (83 lignes)
- `components/animations/ScrollToTop.tsx` (82 lignes)
- `hooks/useMediaQuery.ts` (32 lignes)

### Composants modifiés
- `components/sections/Hero.tsx` (ajout filigrane + rotation)
- `components/layout/Header.tsx` (hover animation)
- `components/layout/Footer.tsx` (fade-in + glow)
- `app/layout.tsx` (intégration composants)
- `app/page.tsx` (bouton CTA "Réserve ta séance")

### Configuration
- `package.json` (framer-motion ^11.15.0)

---

**Total** : 7 animations uniques, 100% responsive, optimisées performance 🚀
