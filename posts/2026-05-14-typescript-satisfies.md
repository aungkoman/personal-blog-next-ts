---
title: "TypeScript satisfies operator"
date: "2024-06-18"
description: "The satisfies keyword validates a value against a type without widening it."
tags: ["typescript"]
---

TypeScript 4.9 added `satisfies`, a small operator that solves a real annoyance.

## The problem

When you use `as` or annotate directly, TypeScript widens the type:

```typescript
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
} as Record<string, string | number[]>

// TypeScript now thinks palette.red is string | number[]
// .map() won't work without a type guard
palette.red.map(x => x / 255) // Error!
```

## satisfies to the rescue

```typescript
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
} satisfies Record<string, string | number[]>

// TypeScript knows palette.red is number[]
palette.red.map(x => x / 255) // Works!
```

The value conforms to the type at the definition site, but the *inferred* type stays narrow. You get validation without losing precision.

## When I reach for it

- Config objects where I want to guarantee all keys exist but still get autocomplete on specific values
- Mapping objects (`{ [K in SomeUnion]: ... }`) where I don't want to lose the literal key types
- Any time I'd normally reach for `as` just to make an error go away

It's a small addition but it comes up constantly.
