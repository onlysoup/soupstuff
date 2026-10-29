# Soupstuff

A small static blog generator. Blog posts live in `content/posts` as Markdown files. The build reads each file, renders modular TSX components with React on the server, and writes plain HTML into `dist/`. Tailwind compiles the site stylesheet during the same build.

## Add a post

Create a `.md` file in `content/posts` with `title` and `date` front matter. `summary` is optional.

```md
---
title: A new entry
date: 2026-10-26
summary: A short description for the home page.
---

Write your post in Markdown.
```

The filename becomes the URL slug. For example, `a-new-entry.md` generates `dist/posts/a-new-entry/index.html`.

## Build

```sh
npm install
npm run build
```

The output is ordinary static HTML and CSS. Publish the contents of `dist/` with any static file host. There is no Vite, browser-side React, or runtime server. Page components are in `src/components`, Markdown parsing and date helpers are in `src/lib`, and the build entrypoint is `scripts/build.tsx`.
