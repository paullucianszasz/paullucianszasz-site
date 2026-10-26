# Deploy (Cloudflare Pages)

## Status

- Repo GitHub: conectat la Cloudflare Pages (build `npm run build`, output `dist`, Node 22 din `.nvmrc`).
- Cloudflare: zona `paullucianszasz.ro` creată (Free, Full setup), nameservers `harvey.ns.cloudflare.com` / `val.ns.cloudflare.com`.
- RoTLD: nameservers salvate pe 26 Oct 2026. RoTLD cere validarea datelor de înregistrare cu actul de identitate (meniul **Validare date** / „Validați acum", încărcare securizată în panou); procesare manuală, câteva zile.
- Domeniul nu rezolvă încă (NXDOMAIN la zonă). Un domeniu .ro nevalidat poate fi suspendat și atunci nameservers nu se publică; verificat din când în când până apare răspunsul DNS.
- Domeniu înregistrat la RoTLD (12 €/an); Cloudflare nu poate găzdui un domeniu `.ro` la registrar, deci rămâne la RoTLD și doar DNS-ul este la Cloudflare. La data verificării, domeniul nu rezolvă deloc (NXDOMAIN): nu există zonă activă și nu există inregistrari de păstrat.

## Ce este gata acum

- Repo pe GitHub: `https://github.com/paullucianszasz/paullucianszasz-site` — remote adăugat și primul push făcut (`main`).
  Accountul GitHub (`paullucianszasz@gmail.com`) este acelasi cu cel de Cloudflare; commit author = `Paul Lucian Szasz / paullucianszasz@gmail.com`.
  Repo este public in acest moment; poate deveni privat, Cloudflare poate construi din el oricum (trebuie doar acordat accesul la repo cand conectam Pages).
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

- Cloudflare → Domains → zone (Free plan, Full setup) → nameservers atribuite zonei:
  - `harvey.ns.cloudflare.com`
  - `val.ns.cloudflare.com`
- RoTLD → **Domain Administration** → domeniul + domain password → **Nameservers** → cele două de mai sus, campurile 3 si 4 ramân goale.
- DNSSEC: pentru `paullucianszasz.ro` nu este nimic publicat (domeniul returna NXDOMAIN), deci nu este de dezactivat. Daca panoul RoTLD arata DNSSEC pornit, il dezactivam inainte de a salva nameservers, dupa ce zona devine Active il reactivam in Cloudflare.
- Nu se adauga inregistrari DNS la RoTLD dupa schimbare (RoTLD nu mai serveste DNS) si nu se adauga A/CNAME manual in Cloudflare pentru site: inregistrarea se creeaza automat cand adaugam Custom domain la proiectul Pages.
- MX / SPF / DKIM / DMARC nu sunt necesare: adresa de email afisata pe site este un cont Gmail, nu mailbox pe domeniu.
- Propagare: pana la 24 h. Cloudflare trimite email cand zona devine Active.

## Publicare articole după ce hostingul citește repo-ul

1. GitHub → `src/content/blog/ro/` → Add file → Create new file, nume: `slug-articol.md` (fără diacritice, cu cratime).
2. Lipești frontmatter-ul din `templates/article-ro.md` (`title`, `date`, `description`, `excerpt`, `mirror`) și textul. Salvezi.
3. Oglinda în `src/content/blog/en/`, cu alt nume de fișier și `mirror:` completat. Salvezi.
4. Cloudflare rulează build la fiecare push; articolul apare pe Blog, în sitemap și cu hreflang.

## Rămâne de făcut (nu ține de cod)

- Google Business Profile: nume exact `Cabinet individual de psihologie Paul Lucian Szasz`, adresă, telefon, program Luni – Vineri 16:00 – 20:00.
- Search Console: verificăm `https://paullucianszasz.ro/` (după ce zona este Active, cel mai simplu: înregistrare TXT în Cloudflare DNS, valoarea dată de Google), Target audience → Romania, trimitem `sitemap-index.xml`.
- Citări cu aceeași adresă/telefon (NAP): CPR, APCCR, directoare.
- `geo` (coordonatele) lipsește din JSON-LD — se adaugă când confirmi locația din Google Maps.
- La mutarea cabinetului (începutul anului): schimbi `office` în `src/data/site.js` și, în aceeași zi, adresa din Google Business Profile și pinul de pe hartă. Codul postal actual, 400103, este pentru Str. Șaguna Andrei; pentru Str. Scortarilor este 400186.

## După primul build pe domeniu

- Confirmi `site: 'https://paullucianszasz.ro/'` în `astro.config.mjs` (canonical, hreflang, `og:url`, JSON-LD, `robots.txt`).
- hreflang: `ro-RO` / `en-RO` (decizie deschisă: coduri cu țară sau simple `ro` / `en`).
