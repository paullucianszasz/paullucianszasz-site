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

`dist/` este build-ul curent; pe un hosting static care face build-ul din repo, `dist/` nu trebuie urcat (nici nu este in repo, este in `.gitignore`). Il folosesti doar daca hostingul cere fisiere generate manual.

## De verificat inainte de publicare

- Domeniu: `astro.config.mjs` — `site` este `https://paullucianszasz.ro/`; canonical, hreflang, `og:url`, JSON-LD, sitemap si `public/robots.txt` folosesc acest domeniu. La hosting, redirectioneaza `www.paullucianszasz.ro` (301) spre `paullucianszasz.ro`, ca sa ramana un singur domeniu canonical. Redirecturile din `astro.config.mjs` sunt pagini meta-refresh, nu 301 reale — hostingul poate face 301 pentru vechile cai.
- `src/components/ContactPage.astro` — formularul nu foloseste niciun serviciu extern: la trimis deschide programul de email al vizitatorului cu datele compuse (`mailto:`). Nu e nimic de inlocuit aici.
- `src/data/site.js` — adresa, telefonul si emailul sunt cele actuale (Str. Scortarilor Nr. 3, Cluj-Napoca 400186 / +40 723 333 609 / paullucianszaszpsihoterapeut@gmail.com); adresa din Andrei Saguna este inchiriata doar pentru un an, deci NAP peste tot foloseste Str. Scortarilor. Confirma postal code inainte de publicare.
- `public/assets/` — logo-urile (PNG) si poza de profil (`me-2.jpg`) sunt cele actuale; inlocueste-le doar daca ai variante noi.

## Publicare articole (Blog)

Articolele sunt fisiere markdown, cate unul per articol:

- `src/content/blog/ro/` — articul in romana, afisat pe `/blog/<numele-fisier>/`
- `src/content/blog/en/` — oglinda in engleza, afisata pe `/en/blog/<numele-fisier>/`

Numele fisierului este slugul din URL (fara diacritice, cu cratime). Numele trebuie sa fie unic in ambele limbi, pentru ca idurile din cele doua colectii se verifica impreuna: fisierul RO si oglinda EN au nume diferite, de ex. `modelul-abc-in-sedinta.md` / `the-abc-model-client-script.md`. Frontmatter:

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

### Publicare dupa ce site-ul este online (hosting static din repo)

Hostingul (Netlify, Cloudflare Pages sau Vercel) cloneaza repo-ul, ruleaza `npm install` si `npm run build` la fiecare push. `dist/` nu este in repo (este in `.gitignore`) pentru ca hostingul il genereaza.

1. Deschide repo-ul pe GitHub, butonul „Add file" → „Create new file", in `src/content/blog/ro/`, nume: `numele-articolului.md`.
2. Lipeste frontmatter-ul de mai sus si textul. Salvezi (commit pe `main`).
3. Oglinda in `src/content/blog/en/`, cu acelasi nume de fisier si `mirror:` completat. Commit.
4. Hostingul face build-ul (un minut sau doua); articolul apare pe `/blog/<numele-fisier>/` si `/en/blog/<numele-fisier>/`, in lista de pe pagina Blog.

Nu rulezi nimic local, nu urci nimic manual. Se poate face din browser, de pe orice dispozitiv.

Cateva reguluri ca build-ul de pe hosting sa nu esueze:
- Frontmatter obligatoriu: `title`, `date`, `description`. Lipseste una, build-ul da eroare si site-ul ramane la varianta anterioara.
- `date` in format `YYYY-MM-DD` (fara ore).
- Numele fisierului: fara diacritice, fara spatii, cu cratime (`cum-functioneaza-disputarea.md`).
- Un fisier markdown nou se vede doar dupa build; un commit care nu schimba frontmatterul si corpul nu schimba pagina.

Node pe hosting: `.nvmrc` cere Node 22 (Astro 5 merge pe Node 18.17+, 20.3+ sau 22+).

Daca hostingul nu face build din repo (de exemplu hosting shared cu FTP), atunci publish inseamna `npm run build` local si urcarea lui `dist/`; pot adauga un workflow GitHub Actions care face build si urca prin SFTP la fiecare push.

## Structura

- `src/pages/` — pagini Astro (RO + EN), inclusive Blog (`src/pages/blog/`, `src/pages/en/blog/`)
- `src/content/blog/` + `src/content.config.js` — articolele markdown si schema frontmatter
- `src/components/` + `src/layouts/Base.astro` — header, footer, comportamente (FAQ, meniuri deschise la click, typed-word, scroll-to-top)
- `src/data/` — continut pe langa (servicii, despre mine, contact); `cv.js` este CV-ul comun, cu titluri traduse in `about-ro.js` / `about-en.js`
- `src/styles/global.css` — design tokens (paleta maro deschis: baruri maro inchis, suprafete crem, text negru)
- `public/assets/` — imagini + font iconite (fontello)
