# DS Store – Design System Store

Documentazione completa del **Design System** utilizzato nel progetto **Pezzoli Elettrica**.  
Questo file funge da riferimento rapido per sviluppatori e designer, raccogliendo tutti i **token**, le **regole** e i **componenti** effettivamente implementati nel codice.

---

## Indice

1. [Panoramica](#panoramica)
2. [Palette Colori](#palette-colori)
3. [Tipografia](#tipografia)
4. [Spaziatura e Layout](#spaziatura-e-layout)
5. [Bordi e Arrotondamenti](#bordi-e-arrotondamenti)
6. [Elevazione e Profondità](#elevazione-e-profondità)
7. [Componenti](#componenti)
8. [Icone](#icone)
9. [File del Progetto](#file-del-progetto)

---

## Panoramica

| Proprietà         | Valore                                           |
| ----------------- | ------------------------------------------------ |
| **Stile visivo**  | Corporate Modern con edge tecnico                |
| **Font primario** | Inter (Google Fonts)                             |
| **Framework CSS** | Tailwind CSS (CDN) + config personalizzata       |
| **Icone**         | Material Symbols Outlined (Google Fonts)         |
| **Approccio**     | "Wash of Azure" – palette blu stratificata       |
| **Griglia**       | 12 colonne desktop, fluida su mobile             |
| **Unità base**    | 8px                                              |

---

## Palette Colori

### Colori principali del brand

| Nome            | Hex       | Uso                                                  | Token Tailwind           |
| --------------- | --------- | ---------------------------------------------------- | ------------------------ |
| Electric Blue   | `#001F73` | Header, footer, titoli principali, ancoraggi visivi  | `primary`                |
| Azure           | `#6F86D6` | UI backgrounds, bordi decorativi, hover states        | `secondary`              |
| Light Azure     | `#AFC4FF` | Sfondi leggeri, chip, differenziazione sezioni        | `secondary-container`, `secondary-fixed` |
| Bright Yellow   | `#F5C000` | CTA primarie, alert critici                           | `brand-yellow`           |
| Cloud White     | `#F5F5F5` | Canvas principale, sfondo contenuti                   | `background`, `surface`  |

### Colori di sistema completi

| Token Tailwind                 | Hex       | Ruolo                                    |
| ------------------------------ | --------- | ---------------------------------------- |
| `primary`                      | `#001F73` | Colore primario                          |
| `on-primary`                   | `#FFFFFF` | Testo/icone su primary                   |
| `primary-container`            | `#001F73` | Contenitore primario                     |
| `on-primary-container`         | `#778BE1` | Testo su primary-container               |
| `secondary`                    | `#6F86D6` | Colore secondario (Azure)                |
| `on-secondary`                 | `#FFFFFF` | Testo/icone su secondary                 |
| `secondary-container`          | `#AFC4FF` | Contenitore secondario (Light Azure)     |
| `on-secondary-container`       | `#223C88` | Testo su secondary-container             |
| `secondary-fixed`              | `#AFC4FF` | Secondario fisso (non cambia con tema)   |
| `secondary-fixed-dim`          | `#B5C4FF` | Secondario fisso attenuato               |
| `tertiary`                     | `#001239` | Colore terziario                         |
| `on-tertiary`                  | `#FFFFFF` | Testo/icone su tertiary                  |
| `tertiary-container`           | `#0E2758` | Contenitore terziario                    |
| `on-tertiary-container`        | `#7A8FC7` | Testo su tertiary-container              |
| `error`                        | `#BA1A1A` | Errori                                   |
| `on-error`                     | `#FFFFFF` | Testo su errore                          |
| `error-container`              | `#FFDAD6` | Contenitore errore                       |
| `on-error-container`           | `#93000A` | Testo su error-container                 |
| `background`                   | `#F5F5F5` | Sfondo pagina                            |
| `on-background`                | `#1A1B21` | Testo su sfondo                          |
| `surface`                      | `#F5F5F5` | Superficie base                          |
| `on-surface-variant`           | `#454651` | Testo secondario                         |
| `surface-container-lowest`     | `#FFFFFF` | Superficie più chiara (card, form)       |
| `surface-container-low`        | `#F4F2FA` | Superficie leggera (sezione servizi)     |
| `surface-container`            | `#EFEDF5` | Superficie media                         |
| `surface-container-high`       | `#E9E7EF` | Superficie scura                         |
| `surface-dim`                  | `#DBD9E1` | Superficie opaca (mappa)                 |
| `surface-bright`               | `#F5F5F5` | Superficie luminosa                      |
| `surface-tint`                 | `#4459AB` | Tinta superficie                         |
| `outline`                      | `#757683` | Bordi standard                           |
| `outline-variant`              | `#C5C5D3` | Bordi leggeri (input fields)             |
| `inverse-surface`              | `#2F3036` | Superficie inversa                       |
| `brand-yellow`                 | `#F5C000` | Giallo brand per CTA                     |

### Colori speciali (hardcoded)

| Colore                    | Hex / Valore     | Uso                           |
| ------------------------- | ---------------- | ----------------------------- |
| WhatsApp Green            | `#25D366`        | Pulsante WhatsApp flottante   |
| Header overlay            | `#001F73/95`     | Navbar con trasparenza        |
| Hero overlay              | `#001F73/60`     | Overlay immagine Hero         |

---

## Tipografia

### Font

- **Font unico**: [Inter](https://fonts.google.com/specimen/Inter) – caricato via Google Fonts CDN.
- Pesi utilizzati: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).

### Scale tipografiche

| Token                | Dimensione | Line Height | Weight | Letter Spacing | Uso tipico                      |
| -------------------- | ---------- | ----------- | ------ | -------------- | ------------------------------- |
| `display-lg`         | 48px       | 56px        | 700    | -0.02em        | Titolo Hero                     |
| `display-lg-mobile`  | 36px       | 42px        | 700    | -0.02em        | Titolo Hero (mobile)            |
| `headline-md`        | 30px       | 38px        | 600    | -0.01em        | Titoli sezioni                  |
| `headline-sm`        | 24px       | 32px        | 600    | –              | Sotto-titoli, card gallery      |
| `body-lg`            | 18px       | 28px        | 400    | –              | Paragrafo Hero                  |
| `body-md`            | 16px       | 24px        | 400    | –              | Testo corpo principale          |
| `label-bold`         | 14px       | 20px        | 600    | 0.02em         | Etichette, badge, label form    |
| `label-sm`           | 12px       | 16px        | 500    | –              | Testo minore                    |
| `button-text`        | 16px       | 16px        | 600    | –              | Testo pulsanti e link navbar    |

---

## Spaziatura e Layout

### Token di spaziatura

| Token             | Valore   | Uso                                          |
| ----------------- | -------- | -------------------------------------------- |
| `unit`            | 8px      | Unità base del sistema                       |
| `stack-sm`        | 8px      | Spaziatura verticale piccola (1×)            |
| `stack-md`        | 16px     | Spaziatura verticale media (2×)              |
| `stack-lg`        | 32px     | Spaziatura verticale grande (4×)             |
| `gutter`          | 24px     | Gap tra colonne e elementi della griglia     |
| `section-gap`     | 80px     | Padding verticale tra sezioni (10×)          |
| `margin-desktop`  | 64px     | Margini laterali desktop (8×)                |
| `margin-mobile`   | 20px     | Margini laterali mobile                      |
| `container-max`   | 1280px   | Larghezza massima del contenitore            |

### Sistema griglia

| Viewport   | Colonne | Gap     | Margini |
| ---------- | ------- | ------- | ------- |
| Desktop    | 12 col  | 24px    | 64px    |
| Tablet     | Fluid   | 24px    | 64px    |
| Mobile     | 1 col   | 24px    | 20px    |

### Breakpoints (Tailwind default)

| Nome | Min-width | Uso nel progetto                        |
| ---- | --------- | --------------------------------------- |
| `md` | 768px     | Grid 2 colonne, navbar desktop, gallery buttons |
| `lg` | 1024px    | Grid 4 colonne (servizi)                |

---

## Bordi e Arrotondamenti

| Token     | Valore     | Uso                                         |
| --------- | ---------- | ------------------------------------------- |
| `DEFAULT` | 0.25rem    | Arrotondamento base                         |
| `lg`      | 0.5rem     | Pulsanti, input, card info contatto         |
| `xl`      | 0.75rem    | Card servizi, card galleria, form, sezioni  |
| `full`    | 9999px     | Pulsante WhatsApp flottante, pill shapes    |

---

## Elevazione e Profondità

Il sistema evita ombre pesanti a favore di **Tonal Layers** e **bordi a basso contrasto**.

| Livello        | Implementazione                                       | Dove usato                    |
| -------------- | ----------------------------------------------------- | ----------------------------- |
| Base           | Nessuna ombra, colore superficie differenziato        | Sezioni alternate             |
| Leggero        | `shadow-md`                                           | Header navbar                 |
| Medio          | `shadow-lg`                                           | CTA Hero, form contatto       |
| Interattivo    | `shadow-xl` (su hover)                                | Card servizi                  |
| Massimo        | `shadow-2xl`                                          | Pulsante WhatsApp flottante   |
| Backdrop       | `backdrop-blur-md` (12px blur)                        | Header navbar trasparente     |

### "Technical Glow"

Ombra diffusa tinta Azure al 10-15% di opacità – prevista nel Design System ma non ancora implementata esplicitamente nei componenti attuali.

---

## Componenti

### 1. Navbar (Header)

```
Posizione: fixed, top-0, z-50
Sfondo: #001F73 al 95% opacità + backdrop-blur
Altezza: h-20 (80px)
Contenuto: Logo (text) | Link navigazione (hidden su mobile) | CTA button
```

- **Logo**: Font `display-lg`, dimensione `headline-md`, colore `on-primary`.
- **Link attivo**: Colore `secondary-fixed`, bordo inferiore 2px.
- **Link inattivo**: `on-primary/80`, hover → `on-primary`.
- **CTA**: Sfondo `brand-yellow`, testo `primary`, `rounded-lg`, hover scale 0.95.

### 2. Hero Section

```
Layout: Full-screen (h-screen), flex center, pt-20 (compensa header)
Sfondo: Immagine + overlay #001F73/60
Contenuto max-width: max-w-2xl
```

- **Titolo**: `display-lg`, colore `on-primary`.
- **Sottotitolo**: `body-lg`, colore `on-primary/90`.
- **CTA primaria**: Sfondo `brand-yellow`, icona + testo, hover scale 1.05 + shadow-lg.
- **CTA secondaria**: Ghost button, bordo 2px bianco, hover → sfondo bianco + testo primary.

### 3. Card Servizio

```
Sfondo: surface (#F5F5F5)
Padding: stack-lg (32px)
Border: 1px secondary/10
Border-radius: xl (0.75rem)
```

- **Stato default**: Bordo leggero, nessuna ombra.
- **Stato hover**: `shadow-xl`, `-translate-y-2`, transizione 300ms.
- **Icona container**: 48×48px, sfondo `secondary-container/30`, icona `secondary`. Su hover del gruppo → sfondo `secondary`, icona `on-secondary`.

### 4. Card Galleria

```
Dimensione: 350px (mobile) / 450px (desktop) × 400px
Border-radius: xl
Overflow: hidden
Scroll: snap-start
```

- **Immagine**: `object-cover`, hover scale 1.05–1.10 + rotate(1deg) opzionale, transizione 700ms.
- **Overlay**: Gradiente da `#001F73/80` a trasparente, `opacity-0` → `opacity-100` su hover.
- **Label**: Font `label-bold`, uppercase, colore `secondary-fixed`.

### 5. Form Contatto

```
Container: surface-container-lowest (#FFFFFF)
Padding: stack-lg
Border-radius: xl
Ombra: shadow-lg
```

- **Label**: `label-bold`, colore `on-surface-variant`.
- **Input**: `rounded-lg`, bordo `outline-variant`, focus ring `secondary`.
- **Submit button**: Full-width, sfondo `#001F73`, hover → `secondary`.

### 6. Box Info Contatto

```
Sfondo: #001F73
Testo: on-primary
Padding: stack-lg
Border-radius: xl
```

- Icone: Material Symbols, colore `secondary-fixed`.
- Informazioni: indirizzo, telefono, email, orari lavorativi.

### 7. Pulsante WhatsApp Flottante

```
Posizione: fixed, bottom-right (margin-desktop)
Sfondo: #25D366
Forma: rounded-full
Z-index: 40
```

- Hover: `scale-110`.
- Active: `scale-95`.
- Tooltip: Sfondo bianco, appare a sinistra del pulsante con `opacity` transition.

### 8. Footer

```
Sfondo: #001F73
Layout: 4 colonne (1+1+1+1) su desktop, 1 colonna su mobile
Padding verticale: py-12
```

- **Branding**: col-span-1, logo + descrizione.
- **Link Rapidi**: Lista con hover `on-primary/60` → `on-primary`.
- **Servizi**: Lista statica (non cliccabile).
- **Copyright**: Bordo superiore `on-primary/10`, testo `on-primary/60`.

---

## Icone

**Libreria**: [Material Symbols Outlined](https://fonts.google.com/icons) (Google Fonts CDN).

**Configurazione CSS**:
```css
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

### Icone utilizzate

| Icona               | Sezione         | Contesto                    |
| ------------------- | --------------- | --------------------------- |
| `chat`              | Hero, WhatsApp  | CTA WhatsApp                |
| `verified`          | Chi Siamo       | Certificazioni              |
| `thumb_up`          | Chi Siamo       | Clienti soddisfatti         |
| `eco`               | Chi Siamo       | Eco-sostenibilità           |
| `home`              | Servizi         | Impianti civili             |
| `factory`           | Servizi         | Impianti industriali        |
| `videocam`          | Servizi         | Videosorveglianza           |
| `home_iot_device`   | Servizi         | Domotica                    |
| `lightbulb`         | Servizi         | Illuminazione LED           |
| `solar_power`       | Servizi         | Fotovoltaico                |
| `build`             | Servizi         | Manutenzione, Quadri        |
| `chevron_left`      | Gallery         | Navigazione precedente      |
| `chevron_right`     | Gallery         | Navigazione successiva      |
| `location_on`       | Contatti        | Indirizzo                   |
| `phone`             | Contatti        | Telefono                    |
| `mail`              | Contatti        | Email                       |
| `schedule`          | Contatti        | Orari                       |
| `map`               | Contatti        | Placeholder mappa           |

---

## File del Progetto

| File                  | Tipo       | Dimensione | Descrizione                                     |
| --------------------- | ---------- | ---------- | ----------------------------------------------- |
| `code.html`           | HTML       | ~29 KB     | Pagina principale single-page                   |
| `index.css`           | CSS        | ~0.7 KB    | Stili custom (scrollbar, gallery nav, Material)  |
| `script.js`           | JavaScript | ~1.9 KB    | Logica galleria (scroll, auto-play, navigazione) |
| `tailwind-config.js`  | JavaScript | ~4 KB      | Configurazione Tailwind con token del DS         |
| `DESIGN.md`           | Markdown   | ~7.8 KB    | Documentazione del Design System (sorgente)      |
| `immagine1.jpeg`      | Immagine   | ~256 KB    | Foto progetto galleria – Industriale             |
| `immagine2.jpg`       | Immagine   | ~72 KB     | Foto progetto galleria – Domotica                |
| `immagine3.jpeg`      | Immagine   | ~282 KB    | Foto progetto galleria – Fotovoltaico            |
| `immagine4.jpg`       | Immagine   | ~120 KB    | Foto progetto galleria – Industriale             |
| `immagine5.jpg`       | Immagine   | ~1.9 MB    | Foto progetto galleria – Industriale             |

### Dipendenze esterne (CDN)

| Risorsa               | URL                                                                 |
| --------------------- | ------------------------------------------------------------------- |
| Tailwind CSS          | `https://cdn.tailwindcss.com?plugins=forms,container-queries`       |
| Inter (font)          | Google Fonts CDN                                                    |
| Material Symbols      | Google Fonts CDN                                                    |
