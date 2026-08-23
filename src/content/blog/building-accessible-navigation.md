---
title: "Building accessible navigation"
description: "Notes on the semantics and keyboard behavior behind the Pulsar Stack navbar."
date: 2026-02-02
tags: ["accessibility", "components"]
draft: false
lang: "en"
---

The navbar component uses a native `<nav>` landmark with an `aria-label`, a `<button>` (not a `<div>`) for the mobile menu toggle, and `aria-expanded` state that stays in sync with the menu's visibility.

## Keyboard first

Every interactive element in the navbar — links, the menu toggle, the theme switcher — is reachable and operable with a keyboard alone, and focus states are visible rather than suppressed.

Small details like these are what make a starter kit production-ready instead of merely demo-ready.
