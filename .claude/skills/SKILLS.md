# Project Skills Configuration — CAAF SAS

> Unified skill registry for all prompts in this project.
> Every interaction should respect these guidelines.

---

## Sources

| Skill | Source | Purpose |
|-------|--------|---------|
| Three.js Animation | CloudAI-X/threejs-skills | 3D animations, GLTF, morph targets |
| Frontend Design | anthropics/skills | Distinctive visual direction |
| GSAP | MengTo/Skills | Scroll animations, timelines, stagger |
| Interaction Design | wshobson/agents | Microinteractions, transitions, feedback |
| Web Interface Guidelines | vercel-labs | Accessibility, performance, best practices |
| Tailwind Design System v4 | Aura | Utility-first styling patterns |
| UI Design System | Aura | Component architecture, tokens |
| Responsive Design | Aura | Breakpoints, fluid layout, mobile-first |

---

## 1. Design System (CAAF SAS)

### Color Tokens

```css
--color-canvas: #faf9f5          /* Fond principal – Crème */
--color-ink: #141413             /* Texte principal – Encre */
--color-primary: #259E01         /* Vert Logo */
--color-primary-active: #1d7d01  /* Hover Vert */
--color-brand-navy: #014065      /* Bleu Signature */
--color-hairline: #e6dfd8        /* Bordures fines */
--color-surface-card: #efe9de    /* Cartes légères */
--color-surface-soft: #f5f0e8    /* Background alternés */
--color-surface-dark: #014065    /* Blocs foncés / CTAs */
```

### Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display/Headings | EB Garamond | 400 | H1–H4, hero text |
| Body | Inter | 400, 500 | Paragraphs, UI text |
| Utility/Captions | Inter | 300, 500 | Labels, metadata |

### Spacing Scale

```
Compact  : py-6  (24px)
Standard : py-12 (48px)
Section  : py-section (64px / 4rem)
```

### Border Radius

```
Cards/Modals : rounded-lg (12px)
Buttons/Input: rounded-md (8px)
```

---

## 2. Frontend Design Principles

### Core Rules

1. **Ground it in the subject** — CAAF is a cabinet d'audit. Every design choice must reflect rigor, trust, and professionalism.
2. **Hero is a thesis** — Open with the most characteristic element (not a generic hero).
3. **Typography carries personality** — EB Garamond for authority, Inter for clarity. Never swap roles.
4. **Structure is information** — Numbering only if content is sequential. Labels encode truth.
5. **Motion is deliberate** — Orchestrate one memorable moment per page. No scattered effects.
6. **Restraint** — Boldness in ONE place. Everything else quiet and disciplined.

### Writing in Design

- Write from the user's side: "Suivre votre dossier" not "Accès portail client"
- Active voice: "Sauvegarder" not "Enregistrer les modifications"
- Consistent naming: same word = same action throughout
- Errors: explain what happened + how to fix it (no apologies)
- French language for this project (cabinet basé à Paris)

### Anti-Patterns to Avoid

- Warm cream + terracotta serif (AI default #1)
- Near-black + acid-green accent (AI default #2)
- Broadsheet newspaper layout (AI default #3)
- Numbered markers on non-sequential content
- Animated GIF where video works better
- `transition: all`
- `outline-none` without replacement

---

## 3. Animation System

### GSAP Configuration

```javascript
// Register plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Project defaults
const ANIM_CONFIG = {
  defaults: {
    ease: "power2.out",
    duration: 0.6,
  },
  stagger: 0.06,
  scrollTrigger: {
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
};
```

### Animation Timing Scale

| Duration | Use Case | Example |
|----------|----------|---------|
| 100-150ms | Micro-feedback | Hovers, button clicks |
| 200-300ms | Small transitions | Toggles, dropdowns |
| 300-500ms | Medium transitions | Modals, page sections |
| 500ms+ | Choreographed | Hero entrance, scroll reveals |

### Easing Functions

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);    /* Entering */
--ease-in: cubic-bezier(0.55, 0, 1, 0.45);    /* Exiting */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1); /* Moving between */
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);   /* Playful overshoot */
```

### Allowed Properties (Performance)

- `transform` (x, y, scale, rotation)
- `opacity` / `autoAlpha`
- `will-change: transform` (sparingly)

### Forbidden Properties (Jank)

- `width`, `height`, `top`, `left`, `right`, `bottom`
- `margin`, `padding` (use transforms instead)
- `transition: all`

### Scroll-Triggered Patterns

```javascript
// Hero entrance on load
gsap.from("[data-anim-hero]", {
  y: 24,
  autoAlpha: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.06,
});

// Section reveal on scroll
gsap.utils.toArray("[data-anim-section]").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

// Pinned scroll story
gsap.timeline({
  scrollTrigger: {
    trigger: ".story-section",
    start: "top top",
    end: "+=800",
    scrub: 1,
    pin: true,
  },
}).to(".story-panel", { xPercent: -200 });
```

### React/Next.js Cleanup

```javascript
// Always use gsap.context() for cleanup
import { useEffect, useRef } from "react";

export function AnimatedSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-anim]", {
        y: 24,
        autoAlpha: 0,
        stagger: 0.06,
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return <div ref={containerRef}>...</div>;
}
```

---

## 4. Interaction Design

### Core Principles

1. **Purposeful Motion** — Communicate, don't decorate
   - Feedback: confirm actions occurred
   - Orientation: show where elements come from
   - Focus: direct attention to changes
   - Continuity: maintain context

2. **Consistent Timing** — Use the timing scale above

3. **Natural Physics** — Springs over linear for playful elements

### Interaction Patterns

#### Button Feedback

```tsx
// Hover: scale(1.02), Active: scale(0.98)
// Spring: stiffness=400, damping=17
```

#### State Transitions

```tsx
// Toggle: spring animation on thumb position
// Stiffness: 500, Damping: 30
```

#### Loading States

```tsx
// Skeleton: animate-pulse with bg-surface-card
// Progress: animated width with easeOut
```

#### Page Transitions

```tsx
// Enter: opacity 0→1, y 20→0
// Exit: opacity 1→0, y 0→-20
// Duration: 300ms
```

#### Scroll Reveals

```tsx
// Data attribute pattern: [data-anim-section]
// Trigger: when 80% of viewport
// Animation: y 40→0, opacity 0→1
```

---

## 5. Web Interface Guidelines (Vercel)

### Accessibility

- Icon-only buttons need `aria-label`
- Form controls need `<label>` or `aria-label`
- Interactive elements need keyboard handlers
- `<button>` for actions, `<a>`/`<Link>` for navigation
- Images need `alt` (or `alt=""` if decorative)
- Async updates need `aria-live="polite"`
- Use semantic HTML before ARIA
- Headings hierarchical `<h1>`–`<h6>`
- `scroll-margin-top` on heading anchors

### Focus States

- Interactive elements need visible focus: `focus-visible:ring-2`
- Never `outline-none` without replacement
- Use `:focus-visible` over `:focus`
- Sticky headers must not cover focused elements

### Forms

- Inputs need `autocomplete` and meaningful `name`
- Use correct `type` (`email`, `tel`, `url`)
- Never block paste
- Labels clickable (`htmlFor` or wrapping)
- Errors inline next to fields; focus first error on submit
- Warn before navigation with unsaved changes

### Animation

- Honor `prefers-reduced-motion`
- Animate `transform`/`opacity` only
- Never `transition: all`
- Set correct `transform-origin`
- Animations interruptible
- Autoplay motion >5s needs pause/stop controls

### Typography

- `…` not `...`
- Curly quotes `"` `"` not straight `"`
- Non-breaking spaces: `10 %`, `Cliquez ici`
- Loading states end with `…`: `"Chargement…"`
- `font-variant-numeric: tabular-nums` for numbers
- `text-wrap: balance` on headings

### Content Handling

- Text containers handle long content: `truncate`, `break-words`
- Flex children need `min-w-0` for truncation
- Handle empty states
- User-generated content: anticipate short and long

### Images

- `<img>` needs explicit `width` and `height` (CLS prevention)
- Below-fold: `loading="lazy"`
- Above-fold critical: `priority` or `fetchpriority="high"`

### Performance

- Large lists (>50 items): virtualize
- No layout reads in render
- Batch DOM reads/writes
- `<link rel="preconnect">` for CDN domains
- Critical fonts: `<link rel="preload">` with `font-display: swap`
- Prefer `<video autoplay muted loop playsinline>` over GIF

### Navigation

- URL reflects state (filters, tabs, pagination)
- Links use `<a>`/`<Link>` (Cmd/Ctrl+click support)
- Deep-link all stateful UI
- Destructive actions need confirmation

### Touch

- `touch-action: manipulation` (no double-tap zoom)
- `overscroll-behavior: contain` in modals
- Drag/swipe need tap/click alternatives

### Safe Areas

- Full-bleed layouts: `env(safe-area-inset-*)`
- Avoid scrollbars: `overflow-x-hidden`
- Flex/grid over JS measurement

### Dark Mode

- `color-scheme: dark` on `<html>` for dark themes
- `<meta name="theme-color">` matches background

### Locale (French)

- Dates: use `Intl.DateTimeFormat` with `fr-FR`
- Numbers: use `Intl.NumberFormat` with `fr-FR`
- Brand names: `translate="no"`

### Hydration Safety

- Inputs with `value` need `onChange` (or `defaultValue`)
- Date/time: guard against hydration mismatch

---

## 6. Responsive Design

### Breakpoints

| Name | Width | Padding | Usage |
|------|-------|---------|-------|
| Mobile | < 768px | px-5 | Single column |
| Tablet | 768–1024px | px-8 | Adjusted spacing |
| Desktop | > 1024px | px-10 / max-w-7xl | Full layout |

### Fluid Typography

```css
/* Headings scale fluidly */
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); }
```

### Grid Patterns

```css
/* Mobile-first grid */
.grid { grid-template-columns: 1fr; }
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### Container Queries

```css
/* Use when component adapts to its container */
@container (min-width: 400px) {
  .card-layout { grid-template-columns: 200px 1fr; }
}
```

---

## 7. Three.js / 3D (When Needed)

### When to Use

- Interactive 3D elements (globes, product viewers)
- Background effects (particles, environments)
- Data visualization with depth

### Key APIs

```javascript
// Animation system
const clock = new THREE.Clock();
const mixer = new THREE.AnimationMixer(model);

// Loop
function animate() {
  const delta = clock.getDelta();
  mixer.update(delta);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### Performance Rules

1. Share clips across mixers
2. Call `clip.optimize()` on load
3. Disable updates for off-screen objects
4. Use LOD for distant objects
5. Limit active mixers

---

## 8. Tailwind CSS v4 Patterns

### Utility-First Approach

```tsx
// Use utilities directly, avoid custom CSS when possible
<div className="px-10 py-section bg-canvas text-ink">
  <h1 className="font-serif text-5xl tracking-tight">
    Titre Principal
  </h1>
</div>
```

### Component Variants

```tsx
// Use clsx or cn() for conditional classes
import { cn } from "@/lib/utils";

<button className={cn(
  "px-6 py-3 rounded-md font-sans font-medium transition-all",
  variant === "primary" && "bg-primary text-white hover:bg-primary-active",
  variant === "secondary" && "border border-hairline bg-white text-ink",
)}>
```

### Custom Utilities

```css
/* Add to globals.css for project-specific needs */
@layer utilities {
  .text-balance { text-wrap: balance; }
  .text-pretty { text-wrap: pretty; }
}
```

---

## 9. Accessibility Checklist

- [ ] All images have `alt` text
- [ ] Icon buttons have `aria-label`
- [ ] Forms have associated labels
- [ ] Focus states visible (`focus-visible:ring-2`)
- [ ] Keyboard navigation works
- [ ] `prefers-reduced-motion` respected
- [ ] Color contrast ≥ 4.5:1 (text), ≥ 3:1 (large text)
- [ ] Semantic HTML used (`<button>`, `<a>`, `<label>`)
- [ ] Headings hierarchical (no skipped levels)
- [ ] Skip link for main content
- [ ] `aria-live="polite"` for dynamic content

---

## 10. Project-Specific Rules

### CAAF SAS Brand Voice

- Professional, not stiff
- Expert, not condescending
- Clear, not verbose
- French language (formal "vous")

### Content Structure

- Hero: one clear value proposition
- Services: grid of expertise areas
- Team: professional photos + bios
- Contact: clear CTA with form

### Navigation

- Fixed header with logo + main nav
- Mobile: hamburger menu
- Footer: aligned on `px-10` like header

### Performance Targets

- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse score > 90
