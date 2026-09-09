# CAAF SAS — Project Context

## Project Overview

**CAAF SAS** is a professional audit cabinet website built with Next.js + Tailwind CSS. The site targets B2B prospects and must convey rigor, trust, and modern professionalism.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: GSAP + ScrollTrigger
- **CMS**: Payload CMS
- **Testing**: Vitest + Playwright
- **Package Manager**: pnpm

## Design System

- **Colors**: See `Design.md` for full palette
- **Typography**: EB Garamond (serif) + Inter (sans-serif)
- **Primary**: #259E01 (green)
- **Background**: #faf9f5 (cream)
- **Language**: French (formal)

## Skills Configuration

**All prompts in this project must follow the skills defined in:**

```
.claude/skills/SKILLS.md
```

This file contains unified guidelines from:
1. **Frontend Design** — Distinctive visual direction (no generic AI aesthetics)
2. **GSAP** — Scroll animations, timelines, stagger
3. **Interaction Design** — Microinteractions, transitions, feedback
4. **Web Interface Guidelines** — Accessibility, performance, best practices
5. **Tailwind CSS v4** — Utility-first patterns
6. **Responsive Design** — Mobile-first breakpoints
7. **Three.js Animation** — 3D elements (when needed)
8. **UI Design System** — Component architecture

## Quick Reference

### Colors
```
Primary:    #259E01 (green)
Navy:       #014065 (signature blue)
Canvas:     #faf9f5 (background)
Ink:        #141413 (text)
Surface:    #efe9de (cards)
Hairline:   #e6dfd8 (borders)
```

### Typography
```
Headings: EB Garamond, font-normal, tracking-tight
Body:     Inter, font-normal, leading-relaxed
```

### Spacing
```
Compact:  py-6
Standard: py-12
Section:  py-section (4rem)
```

### Animation
```
Duration: 200-500ms (most transitions)
Easing:   power2.out (entering), power2.in (exiting)
Stagger:  0.06s (sequential reveals)
```

## File Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   └── ui/           # Reusable UI components
└── lib/              # Utilities and helpers
```

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm test         # Run tests
pnpm lint         # Run linter
```

## Design Document

See `Design.md` for the full design system specification.
