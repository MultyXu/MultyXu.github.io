# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal academic homepage built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, deployed to GitHub Pages. Content (pages, blog posts, projects, news, publications) lives in plain Markdown/YAML/BibTeX files; the theme (layouts, includes, Sass, plugins) is largely upstream al-folio code that should rarely need changes for day-to-day content edits.

## Common commands

### Local development (Docker, recommended)

```bash
docker compose pull
docker compose up          # serves at http://localhost:8080, live-reloads on file changes
docker compose up --build  # rebuild the image (needed after changing Gemfile/Ruby deps)
```

A slimmer image is available via `docker compose -f docker-compose-slim.yml up`.

### Local development (without Docker)

```bash
bundle install
bundle exec jekyll serve --lsi   # serves at http://localhost:4000
```

Requires Ruby/Bundler and Python/pip (`pip install jupyter`) installed locally. `--lsi` enables "Latent Semantic Indexing" for related-posts; it's slow, so drop it for faster rebuilds during iteration.

Changes to `_config.yml` require restarting the Jekyll server; all other content changes hot-reload.

### Build (as run in CI)

```bash
bundle exec jekyll build --lsi   # bin/cibuild
```

### Formatting

```bash
npx prettier . --check   # what CI runs on every push/PR
npx prettier . --write   # fix formatting
```

Uses `@shopify/prettier-plugin-liquid` for `.liquid` files (see `.prettierrc` / `.prettierignore`). CI (`prettier.yml`) fails the build and posts a diff on PRs if formatting is off.

### Link checking

CI (`broken-links.yml`) runs `lychee` over all `.md`/`.html` files on push/PR when content-relevant paths change. There's no local equivalent script; if you need to check manually, install `lychee` and run it with similar excludes (README.md, `_pages/404.md`, `_pages/blog.md`, files with Liquid tags cause false positives).

### Manual deployment to GitHub Pages

```bash
bin/deploy   # builds, purges unused CSS, force-pushes the static site to gh-pages
```

Normally unnecessary — pushing to `master` triggers `deploy.yml`, which builds and publishes to `gh-pages` automatically. `bin/deploy` is a fallback for manual/non-Actions deploys; it force-pushes and requires a clean working tree.

## Architecture / project structure

```
_config.yml          # site-wide config: url/baseurl, author info, scholar author-name matching,
                      # jekyll-scholar options, collections, social links, theme color name, nav
_data/
  cv.yml              # CV content (YAML) — fallback when assets/json/resume.json is absent
  coauthors.yml       # co-author name -> URL mapping, used to auto-link authors in publications
  repositories.yml    # GitHub users/repos shown in the "repositories" section
  venues.yml          # abbreviation -> link mapping for the `abbr` bibtex field
_bibliography/papers.bib   # all publications, in BibTeX; jekyll-scholar renders/sorts these
_pages/               # one Markdown file per site page; `layout` + `permalink` in front matter
                      # select which _layouts/*.liquid template and URL a page uses
_news/                # news items shown on the about page (inline or linked)
_posts/               # blog posts, filename must be YYYY-MM-DD-title.md
_projects/            # project entries, rendered as a grid on the projects page
_layouts/             # Liquid page templates selected via a page's front-matter `layout`
_includes/            # Liquid partials included by layouts/pages (e.g. news.liquid)
_sass/                # theme styling
  _themes.scss          # `--global-theme-color` and other theme color variables — edit here to
                        # change the accent color
  _variables.scss       # named color palette available to _themes.scss
_plugins/             # custom Jekyll plugins (Ruby) extending build-time behavior, e.g.
                      # google-scholar-citations.rb, hide-custom-bibtex.rb, external-posts.rb
assets/json/resume.json    # CV content (JSON Resume format) — takes priority over _data/cv.yml
```

### How publications work

`_bibliography/papers.bib` entries are rendered by `jekyll-scholar` using `_layouts/bib.liquid`. Custom BibTeX fields (not part of standard BibTeX) drive extra UI: `abstract`, `arxiv`, `bibtex_show`, `blog`, `code`, `pdf`, `poster`, `slides`, `supp`, `website`, `html`, `altmetric`, `dimensions`, `abbr` (linked via `_data/venues.yml`). `scholar.last_name`/`scholar.first_name` in `_config.yml` determine which author name gets underlined as "self" in author lists; `_data/coauthors.yml` auto-links co-author names.

### Content vs. theme code

When making content edits (adding a publication, project, news item, blog post, or tweaking `_config.yml`/`_data/*.yml`), no Sass/Liquid/plugin changes are needed. Only touch `_layouts/`, `_includes/`, `_sass/`, or `_plugins/` when changing site behavior/appearance itself, since these are shared theme internals largely inherited from upstream al-folio.
