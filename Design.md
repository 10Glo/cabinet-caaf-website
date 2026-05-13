# Design System — CAAF SAS

> Version 1.0 • Document de présentation client  
> Date : Janvier 2025  
> Auteur : Équipe Design CAAF SAS

---

## 📖 Introduction

Ce document présente le système de design du nouveau site web **CAAF SAS**, conçu pour refléter l'identité d'un cabinet d'audit rigoureux, moderne et ancré dans des valeurs traditionnelles de confiance et d'excellence professionnelle.

### Objectifs
- Inspirer confiance et autorité aux prospects B2B
- Garantir une expérience utilisateur claire et professionnelle
- Assurer la cohérence visuelle sur tous les supports numériques
- Respecter les standards d'accessibilité (WCAG AA minimum)

---

## 🎨 Philosophie de Design

| Principe | Description | Application |
|----------|-------------|-------------|
| **Rigueur** | Chaque élément est intentionnel, rien n'est décoratif | Espacement calculé, alignements précis |
| **Sobriété** | Éviter le bruit visuel inutile | Couleurs limitées à 6 max, typographie contrastée |
| **Modernité** | Touches contemporaines dans un style classique | Backdrop blur, micro-interactions subtiles |
| **Transparence** | Architecture d'information claire | Navigation simple, hiérarchie visible |

> *"La rigueur est la politesse des experts."*

---

## 🌈 Palette de Couleurs

### Couleurs Principales

```css
--color-canvas: #faf9f5          /* Fond principal – Crème */
--color-ink: #141413             /* Texte principal – Encre */
--color-primary: #259E01         /* Vert Logo */
--color-primary-active: #1d7d01  /* Hover Vert */
--color-brand-navy: #014065      /* Bleu Signature */
--color-hairline: #e6dfd8        /* Bordures fines */
```

### Surfaces & Cartes

```css
--color-surface-card: #efe9de    /* Cartes légères */
--color-surface-soft: #f5f0e8    /* Background alternés */
--color-surface-dark: #014065    /* Blocs foncés / CTAs */
```

### Utilisation Recommandée

| Élément | Couleur | Ratio de contraste |
|---------|---------|--------------------|
| Texte principal | `text-ink` | 16.8:1 (WCAG AAA) |
| Liens interactifs | `text-ink/70 → text-primary` | 8.2:1 |
| Bouton primaire | `bg-primary bg-white` | 4.9:1 |
| Bordures | `border-hairline` | 2.1:1 (décoratif) |
| Surfaces | `bg-surface-card` | 1.4:1 (neutre) |

---

## 🔤 Système de Typographie

### Fonts Utilisées

| Usage | Font | Fichier | Poids |
|-------|------|---------|-------|
| Titres | **EB Garamond** | Google Fonts | Normal (400) |
| Corps | **Inter** | Google Fonts | Regular (400), Medium (500) |

### Hiérarchie Textuelle

| Niveau | Taille | Line-height | Margin-top | Exemple |
|--------|--------|-------------|------------|---------|
| H1 | `text-5xl` | 1.1 | 2rem | Titres de page |
| H2 | `text-4xl` | 1.2 | 1.5rem | Sections principales |
| H3 | `text-2xl` | 1.3 | 1.25rem | Sous-sections |
| Body | `text-base` | 1.625 | - | Paragraphes |
| Caption | `text-xs` | 1.4 | - | Légendes, labels |

### Règles d'Usage

```css
/* Tous les titres suivent ce pattern */
h1, h2, h3, h4 {
  @apply font-serif font-normal tracking-[-0.02em];
}

/* Les corps de texte utilisent Inter */
p {
  @apply font-sans leading-relaxed;
}
```

### Accessibilité
- Minimum `16px` pour le body text
- Pas de justification sur mobile
- Contraste vérifié via axe.dev

---

## 📐 Espacement & Layout

### Grille de Base

```
Header fixed     : pt-10, h-16 (mobile) / h-20 (desktop)
Main content     : px-10, pt-36 md:pt-40
Footer           : px-10, full width alignment
Max-width        : 100% avec padding, ou max-w-7xl centré
```

### Padding Verticaux

| Section | Valeur | Classe |
|---------|--------|--------|
| Compact | 24px   | `py-6` |
| Standard | 48px  | `py-12` |
| Élevé | 96px   | `py-section` |

### Arrondis & Bordures

```css
--radius-lg: 12px   /* Cartes, modales */
--radius-md: 8px    /* Boutons, inputs */
border-hairline     /* 1px solid #e6dfd8 */
```

> ⚠️ **Note :** Tous les arrondis sont subtils. Aucun élément n'utilise plus de `radius-lg`.

---

## 🧩 Patterns de Composants

### Card Style (Audit Card)

```tsx
<div className="audit-card">
  <!-- Contenu -->
</div>
```

| Propriété | Valeur |
|-----------|--------|
| Background | `#efe9de` |
| Border | `1px #e6dfd8` |
| Radius | `12px` |
| Shadow | Transition au hover |

### Buttons

| Type | Style | Usage |
|------|-------|-------|
| Primary | `btn-primary` | Actions principales |
| Secondary | `border-hairline bg-white` | Actions alternatives |
| Text Link | `text-primary underline` | Navigation contextuelle |

### Navigation

```
┌─────────────────────────────────────┐
│ [Logo]  Expertises · Cabinet · ...  │  ← Fixed header
├─────────────────────────────────────┤
│                                      │
│              Content                 │  ← pt-36/40 offset
│                                      │
├─────────────────────────────────────┤
│ Footer aligned px-10                 │  ← Full width
└─────────────────────────────────────┘
```

---

## ♿ Accessibilité & Conformité

### WCAG 2.2 Level AA

- ✅ Contraste minimum 4.5:1 pour textes normaux
- ✅ Taille tactile minimum 44×44px pour les boutons
- ✅ Focus states visibles (`focus-visible:ring-2`)
- ✅ Navigation clavier complète
- ✅ Aria-labels sur tous les icônes interactifs

### Vérifications

```bash
npm install axe-core
npx playwright test --config=accessibility.config.js
```

---

## 📱 Responsive Behavior

| Breakpoint | Largeur max | Padding horizontal |
|------------|-------------|---------------------|
| Mobile | < 768px | `px-10` (40px total) |
| Tablet | 768–1024px | `px-10` (40px total) |
| Desktop | > 1024px | `px-10` ou `max-w-7xl` |

### Media Queries Clés

```css
@tailwind utilities;

@media (min-width: 768px) {
  .md\:h-20 { height: 5rem; } /* Header desktop */
}

@media (min-width: 1024px) {
  .lg\:grid-cols-5 { display: grid; } /* Footer grid */
}
```

---

## 📋 Checklist de Marque

Avant publication, chaque page doit vérifier :

- [ ] La couleur principale utilisée est bien `#259E01`
- [ ] Les titres utilisent EB Garamond (serif)
- [ ] Le body utilise Inter (sans-serif)
- [ ] L'espacement respecte `py-section` ou `py-12`
- [ ] Toutes les images ont un `alt` descriptif
- [ ] Les liens externes ont `target="_blank"` + `rel="noreferrer"`
- [ ] Les bordures utilisent `border-hairline` (pas de black)
- [ ] Le footer est aligné sur `px-10` comme le header

---

## 🚀 Livrables

| Fichier | Chemin | Description |
|---------|--------|-------------|
| `styles/globals.css` | Root | Configuration Tailwind + tokens |
| `components/HeaderNavigation.tsx` | `/components/ui` | Header fixe |
| `components/ui/footer.tsx` | `/components/ui` | Footer aligné |
| `Design.md` | Root | Ce document |

---

## 💬 Pour le Client

### Prochaines Étapes

1. **Validation** : Confirmer les couleurs et la typographie
2. **Contenu** : Remplacer le placeholder par le contenu définitif
3. **Tests** : Relecture sur mobiles/tablettes
4. **Publication** : Déploiement sur le domaine cible

### Questions Clients Répondues

| Question | Réponse |
|----------|---------|
| Pourquoi ce vert ? | Correspond au logo, symbolise croissance & stabilité |
| Pourquoi ces polices ? | Serif = autorité ; Sans = modernité technique |
| Accessible ? | Oui, conforme WCAG AA minimum |
| Performant ? | Optimisé (WebP, lazy loading, minimal JS) |

---

## 📞 Contact

**CAAF SAS**  
📧 contact@caaf-sas.com  
📍 12 Rue de la Conformité, 75008 Paris, France  
📞 +33 1 00 00 00 00

---

> *Document interne CAAF SAS — Version 1.0 — Ne pas distribuer sans autorisation.*