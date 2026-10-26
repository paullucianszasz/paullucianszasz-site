Copiaza acest fisier in `src/content/blog/ro/` si salveaza-l cu numele articolului (fara diacritice, cu cratime): numele fisierului devina linkul, `/blog/numele-fisierului/`. Numele trebuie sa fie unic in ambele limbi, deci oglinda din engleza are alt nume.

---
title: 'Titlul articolului, asa cum apare in lista si in Google'
date: 2026-10-26
description: 'O propozitie scurta, afisata sub titlu in rezultatele Google. Maxim ~160 caractere.'
excerpt: 'Primul paragraf, afisat in lista de pe pagina Blog.'
mirror: 'english-slug-of-the-mirror-article'
---

Textul articolului, in paragrafe. O linie goala intre paragrafe.

## Subtitlu

- un punct din lista
- inca un punct

> Un citat, daca e nevoie.

## Cand completezi

- `date` se pune in ziua in care articolul intra realmente online.
- `mirror` = numele fisierului oglinda din `src/content/blog/en/`. Fara el, articolul nu primeste linkul catre cealalta limba si nu apare in sitemap cu perechea hreflang.
- Frontmatter este grupul de linii dintre primele dou `---`; restul este textul articolului.
- Pe Blog afisam articolele de la cel mai nou la cel mai vechi.
