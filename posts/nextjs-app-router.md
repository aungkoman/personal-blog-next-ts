---
title: "Getting started with Next.js App Router"
date: "2024-11-12"
description: "A practical look at the App Router, file-based layouts, and static generation."
tags: ["next.js", "react"]
---

The Next.js App Router changed how I think about routing in React apps. Instead of a flat `pages/` directory, you build a folder tree where every folder can have its own `layout.tsx`, `page.tsx`, `loading.tsx`, and `error.tsx`.

## The basics

Every folder inside `app/` maps to a URL segment. Drop a `page.tsx` in it, and it becomes a route:

```
app/
  page.tsx          → /
  blog/
    page.tsx        → /blog
    [slug]/
      page.tsx      → /blog/:slug
```

## Static generation

For fully static sites, `generateStaticParams` tells Next which slugs to pre-render at build time:

```typescript
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}
```

At build time, Next calls your page component once per slug and writes out plain HTML. No server needed — just a CDN.

## Layouts

Layouts persist across navigations within their subtree. A root `layout.tsx` wraps every page. A `blog/layout.tsx` only wraps blog pages. This replaces `_app.tsx` and `_document.tsx` from the Pages Router.

The mental model is clean once it clicks.
