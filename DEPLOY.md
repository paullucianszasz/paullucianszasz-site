# Deploy (Cloudflare Pages) — de facut cand mergem la hosting

## Ce este gata acum

- Repo pe GitHub: creat, dar încă nu este împins de pe acest calculator (remoteul lipsește):
  `git remote add origin <url-repo>`, apoi `git push -u origin main`.
- Build static: `npm run build` → `dist/` (15 pagini, `sitemap-index.xml`, `sitemap-0.xml`, `robots.txt`).
- `dist/` nu este în repo (`.gitignore`); hostingul îl generează.
- Node 22 (`.nvmrc`), build command `npm run build`, output directory `dist`.
- Domeniu: `paullucianszasz.ro`, înregistrat la RoTLD (12 €/an). Cloudflare Registrar nu suportă `.ro`, deci domeniul rămâne la RoTLD și doar DNS-ul se indică spre Cloudflare.

## Setări în Cloudflare

1. Workers & Pages → Create → Pages → connect GitHub.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: 22
2. Custom domains: `paullucianszasz.ro` (apex funcționează prin CNAME flattening) și `www.paullucianszasz.ro`.
3. `_redirects` (în `public/`, ajunge în `dist`) face 301 reale: `www → apex`, vechile căi Psihoterapie, aliasul `/en/homepage-english/ → /en/`.

## DNS la RoTLD

- RoTLD → **Domain Administration** → domeniul + domain password → **Nameservers**.
- Cloudflare → Domains → zone (Full setup) → copiem exact cele două nameservers atribuite zonei.
- **Dezactivăm DNSSEC la RoTLD înainte** de schimbarea nameservers; după ce zona devine Active, DNSSEC se reactivează în Cloudflare.
- Propagare: până la 24 h. Cloudflare trimite email când cele două părți se potrivesc.
- MX / SPF / DKIM / DMARC și înregistrările de mail trebuie readăugate în Cloudflare, altfel emailul se strică.

## Publicare articole după ce hostingul citește repo-ul

1. GitHub → `src/content/blog/ro/` → Add file → Create new file, nume: `slug-articol.md` (fără diacritice, cu cratime).
2. Lipești frontmatter-ul din `templates/article-ro.md` (`title`, `date`, `description`, `excerpt`, `mirror`) și textul. Salvezi.
3. Oglinda în `src/content/blog/en/`, cu alt nume de fișier și `mirror:` completat. Salvezi.
4. Cloudflare rulează build la fiecare push; articolul apare pe Blog, în sitemap și cu hreflang.

## Rămâne de făcut (nu ține de cod)

- Google Business Profile: nume exact `Cabinet individual de psihologie Paul Lucian Szasz`, adresă, telefon, program Luni – Vineri 16:00 – 20:00.
- Search Console: verificăm `https://paullucianszasz.ro/`, Target audience → Romania, trimitem `sitemap-index.xml`.
- Citări cu aceeași adresă/telefon (NAP): CPR, APCCR, directoare.
- `geo` (coordonatele) lipsește din JSON-LD — se adaugă când confirmi locația din Google Maps.
- La mutarea cabinetului (începutul anului): schimbi `office` în `src/data/site.js` și, în aceeași zi, adresa din Google Business Profile și pinul de pe hartă. Codul postal actual, 400103, este pentru Str. Șaguna Andrei; pentru Str. Scortarilor este 400186.

## După primul build pe domeniu

- Confirmi `site: 'https://paullucianszasz.ro/'` în `astro.config.mjs` (canonical, hreflang, `og:url`, JSON-LD, `robots.txt`).
- hreflang: `ro-RO` / `en-RO` (decizie deschisă: coduri cu țară sau simple `ro` / `en`).
