---
name: Clinical Elegance
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#42474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#526069'
  on-secondary: '#ffffff'
  secondary-container: '#d3e2ed'
  on-secondary-container: '#56656e'
  tertiary: '#193743'
  on-tertiary: '#ffffff'
  tertiary-container: '#314e5b'
  on-tertiary-container: '#a0bece'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#d6e5ef'
  secondary-fixed-dim: '#bac9d3'
  on-secondary-fixed: '#0f1d25'
  on-secondary-fixed-variant: '#3b4951'
  tertiary-fixed: '#c9e7f7'
  tertiary-fixed-dim: '#adcbda'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#2e4b57'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is centered on a "Premium Clinical Minimalism" aesthetic. It targets a discerning patient demographic seeking high-end, trustworthy healthcare. The emotional response should be one of immediate calm, safety, and technological sophistication.

The style leverages **Minimalism** with a focus on expansive whitespace to reduce cognitive load, paired with **Glassmorphism** for secondary overlays to maintain a sense of lightness. Every element is designed to feel intentional and sterile without being cold, utilizing soft depth and high-quality rendering to communicate precision and care.

## Colors
The palette is rooted in "Clinical Blues" and "Pure Whites." 

*   **Primary (#0F4C81):** A deep, authoritative navy used for primary actions, headers, and core brand moments. It represents stability and professional expertise.
*   **Secondary (#E3F2FD):** A soft, airy blue used for subtle backgrounds, hover states, and to soften the transition between white and grey.
*   **Neutral (#F8FAFC):** A cool-toned off-white that serves as the canvas for the entire interface, preventing "snow blindness" while maintaining a clean look.
*   **Functional Colors:** Use high-contrast slate (#1E293B) for body text to ensure maximum legibility against white backgrounds.

## Typography
Inter is the foundational typeface, selected for its exceptional legibility and systematic, clinical feel. 

Headlines utilize tighter letter-spacing and semi-bold weights to create a sense of modern authority. Body text is prioritized for comfort, using a generous line height (1.6) to ensure medical information is easily digestible. Use `label-caps` for section headers or small metadata to provide a structured, organized hierarchy.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop (12 columns, 1280px max-width) and a **Fluid Grid** on mobile. 

A "Generous Whitespace" philosophy is applied; vertical section gaps are intentionally large (120px+) to allow the content to breathe. Use 32px gutters to maintain a feeling of luxury and openness. All internal padding for cards and containers should follow a minimum of 40px padding to maintain the high-end, spacious feel.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. 

Shadows should be extremely diffused (e.g., `0 20px 50px rgba(15, 76, 129, 0.05)`), using a tiny hint of the primary blue color rather than pure black to keep the UI looking "fresh" and clinical. Elevated surfaces should remain white, while the background remains the neutral off-white, creating a soft, layered hierarchy that guides the eye toward primary interactive cards.

## Shapes
The shape language is defined by large, inviting radii. While the base `rounded` is 8px for small elements like checkboxes, the system relies heavily on `rounded-xl` (24px) and custom 32px corners for large containers and cards. This removes any "sharpness" from the medical experience, making the institution feel approachable and modern.

## Components
*   **Buttons:** Primary buttons use the deep navy primary color with 32px (pill) or 12px (rounded) corners. Text should be medium weight.
*   **Cards:** Use a white fill, 24px-32px border-radius, and a very soft ambient shadow. Cards should never have borders; depth alone defines their boundaries.
*   **Input Fields:** Large 16px vertical padding, soft grey backgrounds (#F1F5F9), and 12px rounded corners. Focus states should transition to a thin primary blue border.
*   **Chips/Tags:** Used for medical specialties or doctor tags. Use the secondary light blue background with primary navy text, 100px border-radius (pill).
*   **Lists:** High-density medical data should be presented in clean, horizontal rows with 1px soft grey separators and generous vertical padding (24px).
*   **Hero Imagery:** Use high-resolution, bright, and professionally shot photography with a slight cool-tint filter to align with the brand colors.