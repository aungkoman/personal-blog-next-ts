# jkelly blog

Simple static blog built with Next.js App Router. Posts are plain Markdown files — no database, no CMS, no admin panel.

## Stack

- **Next.js 14** (App Router, fully static output)
- **gray-matter** — parse YAML front-matter from `.md` files
- **remark** + **remark-html** + **remark-gfm** — convert Markdown to HTML


## Webhook



## Project layout

```
blog/
├── posts/                  ← your Markdown files live here
│   └── my-post.md
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← site header/footer
│   │   ├── page.tsx        ← post list (home)
│   │   ├── globals.css
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx  ← individual post
│   └── lib/
│       └── posts.ts        ← file system helpers
├── next.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export
```

## Writing a post

Create a `.md` file in `posts/`:

```markdown
---
title: "My post title"
date: "2024-12-01"
description: "One sentence summary shown on the list page."
tags: ["optional", "tags"]
---

Your content here. Standard Markdown, GFM tables and code blocks supported.
```

Save the file. The post appears on the home page automatically, sorted by date.

## Deploying

Works on any static host:

- **Vercel** — push to GitHub, import project, done
- **Netlify** — same
- **GitHub Pages** — add `output: 'export'` to `next.config.js`, push to `gh-pages` branch

No server required.
