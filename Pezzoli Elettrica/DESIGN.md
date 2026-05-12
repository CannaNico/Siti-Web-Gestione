---
name: High-Voltage Precision
colors:
  surface: '#fbf8ff'
  surface-dim: '#dbd9e1'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fa'
  surface-container: '#efedf5'
  surface-container-high: '#e9e7ef'
  surface-container-highest: '#e3e1e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#454651'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f2f0f7'
  outline: '#757683'
  outline-variant: '#c5c5d3'
  surface-tint: '#4459ab'
  primary: '#000e43'
  on-primary: '#ffffff'
  primary-container: '#001f73'
  on-primary-container: '#778be1'
  inverse-primary: '#b8c4ff'
  secondary: '#425aa7'
  on-secondary: '#ffffff'
  secondary-container: '#93aafd'
  on-secondary-container: '#223c88'
  tertiary: '#001239'
  on-tertiary: '#ffffff'
  tertiary-container: '#0e2758'
  on-tertiary-container: '#7a8fc7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#2a4091'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b5c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#29428d'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b1c5ff'
  on-tertiary-fixed: '#001946'
  on-tertiary-fixed-variant: '#304578'
  background: '#fbf8ff'
  on-background: '#1a1b21'
  surface-variant: '#e3e1e9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style

The design system is engineered to project a sense of technical mastery, safety, and modern innovation. It caters to property managers and premium homeowners who value reliability and high-tech electrical solutions.

The visual style is **Corporate Modern with a Technical Edge**. It utilizes expansive whitespace and crisp alignment to evoke the precision of electrical engineering. The aesthetic leans heavily into a layered blue palette to establish trust, while the strategic use of high-visibility accents suggests action and energy. The UI is characterized by clean lines, purposeful movement, and a premium "pro-service" atmosphere that distinguishes it from traditional, local contractor aesthetics.

## Colors

This design system prioritizes a "Wash of Azure" technique. While the deep Electric Blue anchors the brand in the header and footer for structural stability, the Azure and Light Azure tones dominate the main interface surfaces to create a more approachable, high-tech feel.

- **Electric Blue (#001F73):** Reserved for global navigation, footers, and primary headings to provide a "grounding" effect.
- **Azure (#6F86D6):** The core brand driver for UI backgrounds, illustrations, and decorative borders.
- **Light Azure (#AFC4FF):** Used for subtle backgrounds, hover states, and to differentiate content sections without using harsh greys.
- **Bright Yellow (#F5C000):** Exclusively for CTA buttons and critical alerts, providing maximum contrast against the blue-heavy environment.
- **Cloud White (#F5F5F5):** The canvas for all content, ensuring a crisp, surgical cleanliness.

## Typography

The design system utilizes **Inter** for its neutral, systematic clarity. The typographic hierarchy is designed to be highly legible under varying light conditions (relevant for technicians and clients alike).

Headlines use a bold weight with slightly tighter letter-spacing to create a "technical block" feel. Body text maintains a generous line height to ensure high readability against the Cloud White background. Semantic labeling (e.g., status badges, service categories) uses uppercase styling to mimic industrial labeling systems.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain a premium, editorial feel, while transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid is used for desktop. Components should align to these columns to maintain a sense of structural integrity.
- **Rhythm:** A strict 8px spacing scale governs all margins and paddings. 
- **Whitespace:** Large vertical gaps (80px+) between homepage sections are required to emphasize the premium nature of the service and prevent the "cluttered contractor" look.
- **Mobile:** Margins shrink to 20px, and gutters to 16px. Multi-column cards stack vertically to prioritize thumb-friendly interaction.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers and Low-Contrast Outlines**. 

Depth is primarily communicated through color shifts (Cloud White surfaces on Light Azure backgrounds). When elevation is necessary for interactive elements like modals or floating action buttons, a "Technical Glow" is used—a very soft, diffused shadow tinted with Azure (#6F86D6) at 10-15% opacity. This creates a high-tech, slightly luminous effect rather than a traditional heavy drop shadow. Physicality is suggested through subtle 1px borders in Azure or Light Azure.

## Shapes

The shape language is defined by "Precision Geometry." A consistent **8px (0.5rem)** radius is applied to all standard components (buttons, cards, input fields). 

This specific radius strikes a balance between the friendliness of rounded corners and the professional "hard-edge" feel of engineering tools. Containers that house large imagery or map interfaces may use the `rounded-lg` (1rem) setting to create a softer frame for complex visual data. Icons should follow a linear, 2px stroke weight style with slightly rounded terminals to match the component geometry.

## Components

### Buttons
- **Primary Action:** Bright Yellow (#F5C000) background with Black text. These are the highest priority elements. 
- **Secondary Action:** Ghost style with Azure (#6F86D6) borders and text.
- **Header/Footer Buttons:** White outlines or solid Light Azure to pop against the Electric Blue background.

### Cards
- Cards use a Cloud White background with a 1px Azure border. 
- On hover, cards should transition to a Light Azure background or gain the "Technical Glow" elevation.

### Input Fields
- Inputs feature a 1px Light Azure border that thickens and changes to Azure on focus. 
- Labels sit above the field in `label-bold` typography using the Electric Blue color.

### Status Indicators & Chips
- Use specialized "Circuit Chips" for service status (e.g., "Active," "Scheduled"). These are small, pill-shaped elements with a Light Azure background and a small colored dot indicating status.

### Additional Components
- **Service Specs List:** A specialized list component for technical data, featuring monospaced-style digits and Azure dividers.
- **Technician Profile Cards:** Small, focused cards highlighting professional certifications and ratings, utilizing the 8px roundedness.