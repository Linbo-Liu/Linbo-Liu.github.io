# Linbo-Liu.github.io

Personal webpage. A single `index.html` with inline CSS — no build step, no dependencies.

The layout follows the [Academic theme](https://sourcethemes.com/academic/) for Hugo
(as used on [inoryy.com](http://inoryy.com)), reimplemented standalone: fixed navbar,
alternating white/grey sections, a left profile column, and content on the right.
Bootstrap, FontAwesome, and Academicons are replaced with CSS grid and inline SVG, so
the page has no external dependency beyond Google Fonts.

Content is populated from `Linbo_CV_2026.pdf`. The CV itself is deliberately **not**
published — it contains a phone number. Keep it out of this directory.

Live at **https://linbo-liu.github.io** once GitHub Pages is enabled.

## Structure

| Section | Content |
| --- | --- |
| `#about` | Biography, Education |
| `#news` | Recent updates, newest first — one `.news-item` each |
| `#blog` | Blog posts — one `.post-item` each |
| `#projects` | Open-source projects with Code/Docs/Blog buttons |
| `#publications` | 5 preprints + 11 conference/journal papers |

Contact links (email, LinkedIn, GitHub, Scholar) live in the profile sidebar icon row
rather than a separate section.

## Editing

Everything is plain HTML in one file — find the section by its `id` and edit in place.

- **Add a news item:** copy a `.news-item` block into `#news` at the top.
- **Add a blog post:** copy a `.post-item` block into `#blog` at the top.
- **Add a paper:** copy a `.pub-item` block into the right group in `#publications`.
  Wrap your own name in `<span class="me">Linbo Liu</span>` to bold it.
- **Add a project:** copy a `.card-simple` block in `#projects`.
- **Recolor:** change `--link` (`#0095eb`) in the `:root` block at the top.

## Assets

- `assets/portrait.jpg` — 600×600 photo, rendered as the 200px circle in the sidebar.
  Also used as the favicon and the `og:image` social preview. Replace with any square
  image to update all three.

## Previewing locally

```sh
open index.html                # straight from the filesystem
python3 -m http.server 8000    # or serve it, then visit localhost:8000
```

## Publishing

```sh
git add -A && git commit -m "Update site" && git push
```

Pages redeploys automatically, usually within a minute.
