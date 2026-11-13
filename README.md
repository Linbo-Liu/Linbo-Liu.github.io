# Linbo-Liu.github.io

Personal academic webpage based on the
[Arvid-pku Academic Homepage Template](https://github.com/Arvid-pku/Academic-Homepage-Template),
adapted for GitHub Pages with no build step.

Live at **https://linbo-liu.github.io** once GitHub Pages is enabled.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Compact homepage with profile, news, selected papers, and projects |
| `publications.html` | Full preprint and publication lists |
| `projects.html` | Open-source project list |
| `blogs.html` | External blog/article links |
| `data.js` | Shared site content: news, papers, projects, blogs |
| `main.js` | Renders data into pages |
| `site-shell.js` | Shared navigation, footer, and social links |
| `stylesheet.css`, `shared-styles.css` | Template styles and shared components |
| `assets/portrait.jpg` | Profile photo, favicon, and social preview image |

## Editing

Most content now lives in `data.js`.

- **Add news:** append to `newsItems`.
- **Add a publication:** append to `publications`; set `isPreprint` and `isSelected`.
- **Add a project:** append to `projects`; set `isSelected` to show it on the homepage.
- **Add a blog link:** append to `blogPosts`.
- **Edit contact/nav/footer links:** update `index.html` and `site-shell.js`.

## Previewing Locally

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing

```sh
git add -A
git commit -m "Update site"
git push
```

GitHub Pages redeploys automatically, usually within a minute.
