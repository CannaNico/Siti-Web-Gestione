---
name: Active Heritage
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#3b6751'
  on-secondary: '#ffffff'
  secondary-container: '#bbeacf'
  on-secondary-container: '#406b56'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00210b'
  on-tertiary-container: '#11984b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#bdedd2'
  secondary-fixed-dim: '#a2d1b7'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#234f3b'
  tertiary-fixed: '#85fba1'
  tertiary-fixed-dim: '#68dd88'
  on-tertiary-fixed: '#00210b'
  on-tertiary-fixed-variant: '#005225'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system embodies the intersection of athletic dynamism and cultural heritage. The brand personality is **Elite yet Inclusive**, blending the discipline of competitive sports with the warmth of a social association. 

The aesthetic style is **High-Contrast Minimalism** infused with **Celtic Geometry**. The interface relies on stark black-and-white foundations to project professionalism, while the Italian Tricolore and Celtic Green accents provide bursts of energy and regional identity. Visual elements should feel "linear and locked," utilizing precise border-work and geometric patterns inspired by the Triquetra to create a sense of continuity and tradition.

## Colors

The palette is rooted in a high-contrast monochrome base to ensure readability and a premium feel. 

- **Dominant Tone:** Pure Black (#000000) is used for primary text and structural headers.
- **Celtic Heritage:** Dark Celtic Green (#013220) serves as the primary brand anchor for deep backgrounds and formal elements.
- **The Tricolore:** Used strictly for interactive accents and status indicators. Italian Green (#009246) and Red (#CE2B37) act as "action" colors, while the Off-White (#F1F2F1) provides a soft secondary background to reduce eye strain compared to pure white.
- **Functional Use:** Use the Dark Celtic Green for high-importance "Social" sections and the Italian Green for "Sports/Active" sections to differentiate association activities.

## Typography

The typography strategy prioritizes momentum and clarity. 

**Montserrat** is utilized for headlines to provide a bold, urban, and geometric foundation. It should be set with tight letter-spacing in larger formats to evoke the strength of a sports brand. 

**Lexend** is selected for body copy and UI labels. Originally designed to improve reading proficiency, its expanded character tracking and clear letterforms keep the "Active" theme consistent while ensuring the social aspect of the association remains accessible to all age groups. Use `label-caps` for small metadata or category tags to maintain a disciplined, "medallion-like" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a "contained" feel, reminiscent of a framed medallion or badge. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **Active Margins:** Use generous outer margins (48px+) on desktop to allow the high-contrast content to breathe, emphasizing a premium "club" atmosphere.
- **Patterns:** Vertical and horizontal dividers should be 1px or 2px solid lines. In specific sections, use a "Triquetra Border"—a double-line border where the inner line is 1px and the outer is 3px—to echo the Celtic influence.

## Elevation & Depth

This system avoids heavy shadows, favoring **Tonal Layers** and **Bold Outlines** to maintain a clean, athletic look.

- **Stacking:** Use background color shifts to define hierarchy. Level 0 is White (#FFFFFF), Level 1 is Off-White (#F1F2F1). 
- **Interactive Depth:** Instead of shadows, use "hard offsets" for hover states. For example, a button might gain a 2px solid black border and a slight interior inset to look "pressed."
- **Glassmorphism:** Reserved exclusively for mobile navigation overlays or "Active" stat cards. Use a high-density blur (20px) with a subtle Black 5% tint to maintain legibility over photography.
- **Celtic Dividers:** Use hair-line separators in Dark Celtic Green to divide list items, ensuring the "Linear" style is present in every interaction.

## Shapes

The shape language is **Soft-Geometric**. While the logo is circular, the UI elements utilize subtle rounding to balance the "sharpness" of the high-contrast colors.

- **Standard Elements:** Buttons and input fields use a `0.25rem` (Soft) radius to maintain a modern, professional look.
- **The Medallion Influence:** Profile avatars, icons, and specific "Featured" badges should be rendered as perfect circles or within Triquetra-inspired frames.
- **Containers:** Large cards and content blocks should use the `rounded-lg` (0.5rem) setting to feel approachable and friendly.

## Components

- **Buttons:** Primary buttons are solid Black with White text. Secondary buttons use a transparent background with a 2px solid Black or Dark Celtic Green border.
- **Action Chips:** Use the Italian Tricolore colors for status (e.g., Green for "Active Session", Red for "Full/Closed"). Chips should be pill-shaped to contrast against the mostly rectangular UI.
- **Celtic Dividers:** Incorporate a subtle "knot-work" pattern—a repeating linear geometric SVG—as a section break or as a footer ornament.
- **Input Fields:** Minimalist design with a bottom-only 2px border that turns Italian Green (#009246) on focus.
- **Cards:** White background, 1px border in Off-White (#F1F2F1), with a heavy 4px "accent bar" at the top in Celtic Green or the Tricolore to categorize content.
- **Lynx Iconography:** Icons should be stylized, mono-line, and use consistent stroke weights (2px) to match the typography's visual weight.