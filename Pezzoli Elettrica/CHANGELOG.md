# Changelog – Pezzoli Elettrica

Tutte le modifiche rilevanti al progetto del sito web **Pezzoli Elettrica** sono documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/).

---

## [1.0.0] – 2026-04-30

### Aggiunto

#### Struttura generale
- Creazione del progetto con architettura **single-page** (SPA statica).
- Configurazione del framework CSS **Tailwind CSS** (via CDN) con file di configurazione personalizzato (`tailwind-config.js`).
- Foglio di stile personalizzato (`index.css`) per regole non gestibili da Tailwind (scrollbar nascosta, pulsanti galleria, Material Symbols).
- File JavaScript (`script.js`) per la logica interattiva della galleria.
- Definizione del **Design System** nel file `DESIGN.md` con palette colori, tipografia, spaziatura, elevazione e componenti.

#### Sezioni della pagina (`code.html`)
- **Header / Navbar** – Barra di navigazione fissa con sfondo `#001F73` semi-trasparente e `backdrop-blur`. Logo "Pezzoli Elettrica", link di navigazione (Home, Chi Siamo, Servizi, Gallery, Contatti) e pulsante CTA "Contattaci" in giallo.
- **Hero Section** – Sezione a schermo intero con immagine di sfondo, overlay blu e testi di presentazione. Due CTA: "Contattaci su WhatsApp" (link diretto `wa.me`) e "Scopri i Servizi" (ancora interna).
- **Chi Siamo** – Layout a due colonne (immagine + testo). Descrizione dell'azienda con oltre 20 anni di esperienza. Badge: Certificazioni DM 37/08, Clienti Soddisfatti, Eco-Sostenibilità.
- **Servizi** – Griglia responsive di 8 card servizio (1 / 2 / 4 colonne). Servizi elencati: Impianti Civili, Impianti Industriali, Videosorveglianza, Domotica, Illuminazione LED, Fotovoltaico, Manutenzione, Quadri Elettrici. Ogni card ha icona Material Symbols, titolo e descrizione con effetto hover (traslazione + ombra).
- **Gallery** – Carosello orizzontale con scroll snap di 5 immagini di progetti. Pulsanti di navigazione (prev/next) visibili solo su desktop. Auto-scroll ogni 5 secondi con pausa al passaggio del mouse. Overlay con categoria e titolo al hover.
- **Contatti** – Layout a due colonne: form preventivo (Nome, Telefono, Email, Messaggio + pulsante Invio) e box informazioni di contatto (indirizzo, telefono, email, orari) con mappa placeholder.
- **Footer** – Sfondo Electric Blue con 3 colonne: branding ("VoltExpert" + descrizione), Link Rapidi (Privacy, Cookie, Termini, Lavora con Noi), Servizi (Automazione, Antifurto, Climatizzazione, Quadristica). Copyright e P.IVA.
- **Pulsante WhatsApp flottante** – Posizionato in basso a destra, colore verde WhatsApp (`#25D366`), tooltip al hover, link diretto a `wa.me/393355885735`.

#### Asset
- Aggiunte 5 immagini locali per la galleria progetti (`immagine1.jpeg` – `immagine5.jpg`).
- Immagini esterne (Google hosted) per Hero, Chi Siamo e Mappa.

#### Design System (`DESIGN.md`)
- Definizione palette colori: Electric Blue, Azure, Light Azure, Bright Yellow, Cloud White.
- Sistema tipografico basato su **Inter** con scale: Display LG, Headline MD/SM, Body LG/MD, Label Bold/SM.
- Sistema di spaziatura con unità base 8px, griglia 12 colonne, margini desktop/mobile.
- Regole elevazione: "Tonal Layers" e "Technical Glow" al posto di ombre pesanti.
- Geometria componenti: bordi 8px (0.5rem), stile "Precision Geometry".
- Specifiche componenti: Buttons (Primary/Secondary/Header), Cards, Input Fields, Status Chips, Service Specs List, Technician Profile Cards.

#### Configurazione Tailwind (`tailwind-config.js`)
- Mappatura completa dei colori del Design System in token Tailwind.
- Personalizzazione `borderRadius`, `spacing`, `fontFamily` e `fontSize` con valori coerenti al Design System.

---

## Note

- Il nome del brand nel footer è attualmente "VoltExpert" anziché "Pezzoli Elettrica" – da allineare in una futura revisione.
- Il form di contatto non ha backend collegato – è solo markup HTML.
- La mappa nella sezione Contatti è un'immagine placeholder, non un embed interattivo (es. Google Maps).
- Le immagini esterne sono ospitate su `lh3.googleusercontent.com` (servizio AIDA public).
