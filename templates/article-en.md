Copy this file into `src/content/blog/en/` and save it with the article name (no diacritics, hyphens): the file name becomes the link, `/en/blog/file-name/`. The name must be unique across both languages, so the Romanian article has a different name.

---
title: 'Article title, as it appears in the list and in Google'
date: 2026-10-26
description: 'A short sentence shown under the title in Google results. Maximum ~160 characters.'
excerpt: 'The first paragraph, shown in the list on the Blog page.'
mirror: 'roslug-of-the-mirror-article'
---

The article text, in paragraphs. Keep a blank line between paragraphs.

## Subheading

- a list item
- another list item

> A quote, if needed.

## When you fill this in

- `date` is the day the article actually goes online.
- `mirror` = the file name of the mirror article in `src/content/blog/ro/`. Without it, the article gets no link to the other language and no hreflang pair in the sitemap.
- The frontmatter is the block of lines between the first two `---`; everything after it is the article text.
- The Blog page lists articles newest first.
