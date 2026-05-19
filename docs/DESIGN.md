---
name: Contextra
colors:
  surface: '#fcf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1eee5'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#444844'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f0e8'
  outline: '#757874'
  outline-variant: '#c5c7c2'
  surface-tint: '#5e5f5c'
  primary: '#5e5f5c'
  on-primary: '#ffffff'
  primary-container: '#f8f7f4'
  on-primary-container: '#71716f'
  inverse-primary: '#c7c6c4'
  secondary: '#5e5b7c'
  on-secondary: '#ffffff'
  secondary-container: '#dbd6fd'
  on-secondary-container: '#5f5b7c'
  tertiary: '#5e578f'
  on-tertiary: '#ffffff'
  tertiary-container: '#faf5ff'
  on-tertiary-container: '#716aa3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2df'
  primary-fixed-dim: '#c7c6c4'
  on-primary-fixed: '#1a1c1a'
  on-primary-fixed-variant: '#464745'
  secondary-fixed: '#e4dfff'
  secondary-fixed-dim: '#c7c2e8'
  on-secondary-fixed: '#1a1835'
  on-secondary-fixed-variant: '#464363'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c8bffe'
  on-tertiary-fixed: '#1b1247'
  on-tertiary-fixed-variant: '#474075'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '200'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '300'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-ui:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  margin-page: 64px
  gutter-grid: 24px
  dock-padding: 12px
  canvas-safe-area: 40px
---

## Brand & Style

The design system embodies a philosophy of **"Digital Tactility,"** where Scandinavian functionalism meets the meticulous editorial precision of Japanese print. It is designed to feel like luxury stationery for the mind—a premium, calm, and spatial environment for high-order synthesis.

The visual narrative avoids the frantic energy of typical AI interfaces, opting instead for a "breathing" UI that mimics the expansion and contraction of thought. We utilize a blend of **Minimalism** and **Sophisticated Glassmorphism**, where surfaces have a physical weight reminiscent of heavy vellum or frosted glass. The goal is to evoke a sense of intellectual clarity and serene focus.

## Colors

The palette is anchored in **Warm Ivory (#F8F7F4)**, acting as a "living" canvas that reduces eye strain compared to pure white. Surfaces are layered using a hierarchy of **Pearl White** and **Linen Beige** to create architectural depth without relying on heavy lines.

Accents are used sparingly to denote intelligence and semantic weight. **Smoky Lilac** and **Soft Indigo** provide a ethereal glow to active states and AI-generated insights, while **Muted Plum** is reserved for high-level synthesis and "Deep Memory" threads. The color behavior mimics natural light diffusion across matte surfaces.

## Typography

The typographic system is built on an editorial rhythm. **Hanken Grotesk** is used for large-scale headers, utilizing its lightweight variants to create a cinematic, airy feel. Headlines should be "oversized but understated," often set with negative letter-spacing to emphasize the geometric purity of the characters.

**Plus Jakarta Sans** handles the utilitarian needs of the platform. Its modern, friendly, yet professional apertures ensure legibility in dense AI threads. We employ a generous line-height (1.6x for body text) to ensure the interface feels "spacious" and allows the user's eyes to glide through complex information.

## Layout & Spacing

This design system employs a **Fixed-Editorial Grid** for the core Intelligence Canvas, centered to maximize focus. Outer margins are expansive (64px+) to create a frame-like effect, treating the UI as a piece of curated content.

- **The Intelligence Canvas:** A centered 12-column layout (max-width 1280px) for primary research.
- **Floating Source Dock:** Situated at the bottom of the viewport, using dynamic padding to "hover" above the canvas.
- **Command Layer:** An overlay system that ignores the grid, appearing in the absolute center of the viewport with a focused, cinematic backdrop blur.

Transitions between states should be fluid; when a sidebar or "Context Lens" opens, the primary canvas should subtly scale down (98%) rather than simply shifting, maintaining spatial continuity.

## Elevation & Depth

Hierarchy is established through **Spatial Stacking** and **Backdrop Blurs** rather than traditional drop shadows.

1.  **The Canvas (Level 0):** The solid Warm Ivory base.
2.  **The Sheet (Level 1):** Subtle 1px borders in #E5E2DA with a 2px blur shadow to represent paper-like "Source DNA Cards."
3.  **The Lens (Level 2):** High-translucency overlays (Glassmorphism) with a 24px backdrop blur and a tint of Smoky Lilac.
4.  **The Command (Level 3):** The highest z-index, featuring a soft "glow" shadow that uses the secondary accent color at 10% opacity to simulate light emitting from the AI.

Avoid harsh blacks; shadows should always be tinted with the surface color to maintain the "warm" atmosphere.

## Shapes

The shape language is "Organic-Geometric." We use a **base radius of 16px (1rem)** for most cards and containers to provide a soft, approachable feel that aligns with modern OS patterns.

- **Input Fields:** Semi-pill (rounded-lg) to distinguish them as interactive zones.
- **Knowledge Nodes:** Perfect circles to represent atomic units of data.
- **Selection Highlights:** Soft, 8px rounded rectangles that "hug" the content.

All corner radii should feel intentional; avoid mixing sharp corners with rounded ones to maintain the "liquid" aesthetic.

## Components

### Source DNA Cards
Miniature, vertical cards representing citations. They use a "Paper" texture (subtle grain overlay) and display metadata in the `mono-ui` font. Hovering reveals a "Context Lens" preview.

### Knowledge Constellation
A semantic graph where nodes are interconnected by thin, 0.5px "Light Threads." Nodes pulse subtly in **Dusty Lavender** when the AI is processing that specific vector of information.

### Floating Source Dock
An Arc-inspired container at the bottom of the screen. It features a heavy backdrop blur (64px) and an inner white border (0.5px at 20% opacity) to create a "glass edge" effect.

### Semantic Relevance Meter
A vertical bar next to insights, using a gradient from **Linen Beige** to **Soft Indigo** to indicate how closely a piece of information matches the current search intent.

### Command Layer
The central nerve center. A large, borderless input field using `display-hero` typography. The background blurs the entire Intelligence Canvas, shifting the focus entirely to the prompt.

### Intelligence Canvas
The main workspace where AI Memory Threads unfold. Threads are separated by whitespace rather than lines, using "Focus Mode" logic where inactive threads fade to 40% opacity.