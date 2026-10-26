# Paul Lucian Szasz — site Astro

Site static (RO + EN) pentru cabinetul de psihoterapie — rebuild Astro, paleta maro deschis, continut si date de contact actualizate.

## Rulare

1. Instaleaza Node.js (LTS) de la https://nodejs.org/
2. Copiaza (sau cloneaza) intregul folder al proiectului.
3. In folderul proiectului ruleaza:

```bash
npm install
npm run dev      # dev server pe http://localhost:4321
```

4. Pentru build final (fara Node pe serverul de hosting):

```bash
npm run build    # genereaza dist/ — fisiere statice, se pot hosta direct
```

`dist/` contine build-ul curent, deci site-ul poate fi urcat direct pe orice hosting static, fara npm.

## De verificat inainte de publicare

- `src/components/ContactPage.astro` — formularul nu foloseste niciun serviciu extern: la trimis deschide programul de email al vizitatorului cu datele compuse (`mailto:`). Nu e nimic de inlocuit aici.
- `src/data/site.js` — adresa, telefonul si emailul sunt cele actuale (Andrei Saguna Nr. 8, Cluj-Napoca / +40 723 333 609 / paullucianszaszpsihoterapeut@gmail.com); confirma-le inainte de publicare.
- `public/assets/` — logo-urile (PNG) si poza de profil (`me-2.jpg`) sunt cele actuale; inlocueste-le doar daca ai variante noi.

## Publicare articole (Blog)

Articolele sunt fisiere markdown, cate unul per articol:

- `src/content/blog/ro/` — articul in romana, afisat pe `/blog/<numele-fisier>/`
- `src/content/blog/en/` — oglinda in engleza, afisata pe `/en/blog/<numele-fisier>/`

Numele fisierului este slugul din URL (fara diacritice, cu cratime). Frontmatter:

```markdown
---
title: 'Cum functioneaza disputarea in REBT'
date: 2026-11-02
description: 'Cateva cuvinte despre ce inseamna disputarea si de ce functioneaza.'
excerpt: 'Primul paragraf, afisat in lista de pe pagina Blog.'
mirror: 'how-disputing-works-in-rebt'
---

Textul articolului, in paragrafe. `##` pentru subtitluri, `-` pentru liste, `>` pentru citate.
```

`mirror` = slugul articolului oglinda din cealalta limba; fara el, pagina nu afiseaza linkul catre cealalta limba si nu primeste perechea hreflang. Titlul, descrierea, canonical, hreflang si JSON-LD (BlogPosting) sunt luate din frontmatter, iar articolele intra automat in sitemap.

Publicare: adaugi fisierul (si oglinda), rulezi `npm run build`, urci `dist/`. Nu este nevoie de niciun serviciu extern.

## Structura

- `src/pages/` — pagini Astro (RO + EN), inclusive Blog (`src/pages/blog/`, `src/pages/en/blog/`)
- `src/content/blog/` + `src/content.config.js` — articolele markdown si schema frontmatter
- `src/components/` + `src/layouts/Base.astro` — header, footer, comportamente (FAQ, meniuri deschise la click, typed-word, scroll-to-top)
- `src/data/` — continut pe langa (servicii, despre mine, contact); `cv.js` este CV-ul comun, cu titluri traduse in `about-ro.js` / `about-en.js`
- `src/styles/global.css` — design tokens (paleta maro deschis: baruri maro inchis, suprafete crem, text negru)
- `public/assets/` — imagini + font iconite (fontello)
