---
title: "Concevoir avec les variables CSS"
description: "Comment le design system par tokens de Pulsar Stack rend le rebranding rapide."
date: 2026-01-20
tags: ["design", "css"]
draft: false
lang: "fr"
---

Chaque couleur, valeur d'espacement, rayon et transition de ce starter est défini une seule fois, sous forme de propriété CSS personnalisée, dans `src/styles/global.css`. Les composants n'utilisent jamais de valeur hexadécimale en dur — ils font référence à un token.

## Pourquoi c'est important

Rebrander un site conçu ainsi revient à modifier quelques variables plutôt qu'à fouiller des dizaines de fichiers :

```css
:root {
  --accent: #3b82f6; /* changez cette valeur, et chaque bouton, lien et surbrillance suit */
}
```

La même approche alimente le mode sombre : un second jeu de valeurs de tokens est appliqué automatiquement via `prefers-color-scheme`, ou manuellement via une classe `.dark` sur `<html>` lorsqu'un visiteur choisit un thème explicitement.
