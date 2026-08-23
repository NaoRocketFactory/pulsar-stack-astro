---
title: "Designing with CSS variables"
description: "How Pulsar Stack's token-based design system makes restyling a five-minute job."
date: 2026-01-20
tags: ["design", "css"]
draft: false
lang: "en"
---

Every color, spacing value, radius and transition in this starter is defined once, as a CSS custom property, in `src/styles/global.css`. Components never hardcode a hex value — they reference a token instead.

## Why this matters

Rebranding a site built this way means editing a handful of variables instead of hunting through dozens of files:

```css
:root {
  --accent: #3b82f6; /* change this, and every button, link and highlight follows */
}
```

The same approach powers dark mode: a second set of token values is applied automatically via `prefers-color-scheme`, or manually via a `.dark` class on `<html>` when a visitor picks a theme explicitly.
