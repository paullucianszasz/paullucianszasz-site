# Deploy (Cloudflare Pages)

## Status

- Repo GitHub: conectat la Cloudflare Pages (build `npm run build`, output `dist`, Node 22 din `.nvmrc`).
- Cloudflare: zona `paullucianszasz.ro` creată (Free, Full setup), nameservers `harvey.ns.cloudflare.com` / `val.ns.cloudflare.com`.
- RoTLD: datele validate cu actul de identitate (26–27 Oct 2026); nameservers salvate și **publicate** — zona răspunde deja cu `harvey.ns.cloudflare.com` / `val.ns.cloudflare.com`.
- Cloudflare servește zona (SOA afișat de serverele Cloudflare). Inregistrari CNAME create: `@` → `paullucianszasz-site.pages.dev` si `www` → `paullucianszasz-site.pages.dev` (Proxied).
- **`https://paullucianszasz.ro/` este activ** si serveste site-ul (verificat: Home, Blog, `sitemap-index.xml`, `robots.txt` și redirecturile 301 din `public/_redirects`).
- **`www` functioneaza** (de la 27 Oct, dupa deploy): `https://www.paullucianszasz.ro/*` → **301** catre `https://paullucianszasz.ro/${1}` (verificat: `/`, `/blog/`, `/despre-mine/`, `/en/`). Regula: Rules → Redirect Rules, wildcard `https://www.paullucianszasz.ro/*`, target `https://paullucianszasz.ro/${1}`, 301, Deploy. `www` nu mai trebuie sa fie Active la Pages.
- Domeniu înregistrat la RoTLD (12 €/an); Cloudflare nu poate găzdui un domeniu `.ro` la registrar, deci rămâne la RoTLD și doar DNS-ul este la Cloudflare.

## Ce este gata acum

- Repo pe GitHub: `https://github.com/paullucianszasz/paullucianszasz-site` — remote adăugat și primul push făcut (`main`).
  Accountul GitHub (`paullucianszasz@gmail.com`) este acelasi cu cel de Cloudflare; commit author = `Paul Lucian Szasz / paullucianszasz@gmail.com`.
  Repo este public in acest moment; poate deveni privat, Cloudflare poate construi din el oricum (trebuie doar acordat accesul la repo cand conectam Pages).
- Build static: `npm run build` → `dist/` (16 pagini, `sitemap-index.xml`, `sitemap-0.xml`, `robots.txt`).
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

- Google Business Profile: **amânat până ai spațiu propriu** (Str. Scortarilor nr. 3, 400186). Atunci: nume exact `Cabinet individual de psihologie Paul Lucian Szasz`, adresă nouă, telefon `+40 723 333 609`, program Luni – Vineri 16:00 – 20:00, categorie Psihoterapeut, model storefront (pin pe hartă). Până atunci nu se creează nicio listare la Str. Andrei Șaguna nr. 8.
- **404**: pagina există acum în repo (`src/pages/404.astro` + `src/pages/en/404.astro`, textele în `src/data/notfound-ro.js` / `notfound-en.js`), `robots noindex`, fără canonical și fără JSON-LD, cu linkuri către paginile principale. Cloudflare Pages servește `dist/404.html` pentru orice cale inexistentă. Rămâne de debifat **Single page application** (Settings → Build & deployments), altfel Cloudflare răspunde în continuare cu Home + status 200 (soft 404). Build: 16 pagini, sitemap fără 404.
- **Search Console**: proprietatea `sc-domain:paullucianszasz.ro` este verificată (27 Oct 2026), TXT în Cloudflare DNS (`google-site-verification=DfBXs6ffGMl7fKvErv3XjYoCZcZ5v1zylGufWFrQ43k`) — rămâne acolo, Google re-verifică periodic. Setarea „Target audience / country targeting" nu mai există în Search Console (raportul International Targeting este deprecated din 2022); semnalele care contează sunt hreflang (deja în cod, `ro` / `en` / `x-default`) și TLD-ul `.ro`, pe care Google îl asociază automat cu Romania. Țara se citește apoi din Performance → Countries.
- **Sitemap**: `https://paullucianszasz.ro/sitemap-index.xml` este trimis și starea lui este **Success** (27 Oct 2026). Copilul `sitemap-0.xml` apare „Couldn't fetch" — din exterior fișierul se citește normal ca Googlebot (200, `application/xml`, XML bine format, fără BOM, 14 URL-uri), deci e challenge de edge, nu o problemă a fișierului; Google îl reîncearcă singur. Nu se retrimite.
- **Panoul Cloudflare → Security → Bots** (zona `paullucianszasz.ro`): Bot fight mode **Off**, AI Labyrinth **Off** (nu ține de Googlebot, dar modifică răspunsul pentru boti), Challenge passage lăsat implicit, managed ruleset poate rămâne active, AI bot policies → verified bots **Allow**. Fără policy Access și fără regulă WAF care acoperă zona. Dacă `sitemap-0.xml` rămâne „Couldn't fetch" după ~o săptămână, se adaugă o regulă WAF pe planul Free: condition `Category equals Verified bots` → action **Allow**, Deploy. Starea se urmărește în Settings → Crawl stats și Settings → robots.txt. La 27 Oct 2026: Crawl stats = „No crawl requests (last 90 days)" (host `paullucianszasz.ro`), deci primul crawl încă nu a avut loc; afară, toate URL-urile răspund 200 ca Googlebot. Declanșator: URL inspection → Request indexing pe Home și `/contacts/` (o singură dată, cu cotă zilnică) + primul link de la un citation (CPR / APCCR / director).
- Citări cu același telefon (NAP): CPR, APCCR, directoare. Până la mutare folosim telefonul, orașul și site-ul, fără adresă de cabinet, ca să nu rescriem totul de două ori.
- `geo` (coordonatele) lipsește din JSON-LD — se adaugă când confirmi locația din Google Maps.
- Adresa afișată acum este `Andrei Șaguna nr. 8, Cluj-Napoca 400103` (unde vin clienții), dintr-un singur loc: `office` în `src/data/site.js` (footer în ambele limbi, propozitia din Home, descrierile Contact, JSON-LD, pinul din hartă). La mutare se schimbă aici și, în aceeași zi, se creează listarea cu adresa nouă.
- Mențiunea `(punct de lucru)` / `(work location)` apare în footer, pe Contact și in propozitia de pe Home, nu in JSON-LD si nu in cautarea de pe harta (care ramane curata, ca pinul sa fie corect).
- La Str. Andrei Șaguna nr. 8 spațiul este închiriat (The Inner Bridge Psychology); listarea de acolo aparține altcuiva și nu se revendică. Google tratează spațiile shared/hourly ca birou virtual, de aceea listarea se face doar la adresa proprie.
- La adresa proprie se pune un num afișat (plăcuță sau inscripție la intrare) înainte de verificare; fără inscripție, verificarea video poate eșua. Cardul poștal cu PIN este ruta normală pentru o listare storefront.

## După primul build pe domeniu

- Confirmi `site: 'https://paullucianszasz.ro/'` în `astro.config.mjs` (canonical, hreflang, `og:url`, JSON-LD, `robots.txt`).
- hreflang: `ro-RO` / `en-RO` (decizie deschisă: coduri cu țară sau simple `ro` / `en`).
