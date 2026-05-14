---
title: "Markdown as a CMS"
date: "2024-09-04"
description: "Why plain .md files beat most CMS options for a personal blog."
tags: ["writing", "tools"]
---

Every few years I migrate my blog to a different CMS. WordPress, Ghost, Contentful, Sanity — each one adds a layer of infrastructure that eventually becomes something to maintain instead of just a place to write.

## The simplest thing that works

A folder of `.md` files with YAML front-matter is surprisingly capable:

- Version control for free — every draft, edit, and publish is a git commit
- No database, no API keys, no vendor lock-in
- Readable and writable in any text editor
- Diff-able, searchable with grep, portable forever

The tradeoff is a deploy step when you publish. For a personal blog that publishes a few times a month, that's not a real cost.

## Front-matter

Gray-matter parses the YAML block at the top of each file:

```
---
title: "Markdown as a CMS"
date: "2024-09-04"
tags: ["writing", "tools"]
---
```

That's your schema. Add whatever fields you need — no migrations, no type definitions to update.

## What I miss

An image upload UI. Dropping an image into a CMS editor is genuinely easier than resizing, naming, and committing a file to `public/images/`. That's the only thing I've wanted back.

Everything else? Good riddance.
