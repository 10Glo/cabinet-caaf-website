# Médias Seed — Instructions

Dépose ici les fichiers à uploader lors du seed (`pnpm seed`).

## Emplacement

```
src/payload/seed/media/   ← déposer ici (prioritaire seed)
src/assets/               ← déjà scanné en fallback (logos clients, carte, etc.)
```

Le seed scanne **les deux dossiers**, déduplicate par `basename` et upload vers la collection `media`.

## Formats acceptés

Définis dans `src/payload/collections/Media.ts` :

- `image/*` — `png`, `jpg`, `jpeg`, `webp`, `svg`
- `application/pdf` — rapports / publications

Tailles dérivées générées par `sharp` : `card` (800px) et `hero` (1920px).

## Nommage recommandé

| Fichier | Usage | `alt` généré |
|---|---|---|
| `logo.png` | `SiteSettings.logo`, `Header.logo`, `SeoDefaults.defaultOgImage` | `logo` |
| `kinshasa-office.jpg` | `Offices` / `Pages` hero | `kinshasa office` |
| `lubumbashi-office.jpg` | `Offices` | `lubumbashi office` |
| `rapport-fiscal-2024.pdf` | `Publications.pdf` | `rapport fiscal 2024` |
| `cover-syscohada.jpg` | `Publications.cover`, `Articles.image` | `cover syscohada` |

Le `alt` est dérivé du nom de fichier (`-`/`_` → espace) et localisé (`fr` = nom, `en` = `nom (EN)`). Éditable ensuite dans `/admin`.

## Exemple

```bash
# 1. Copier vos assets
cp ~/Downloads/caaf-logo.png src/payload/seed/media/logo.png
cp ~/Downloads/photos/*.jpg src/payload/seed/media/

# 2. Vérifier
ls -lh src/payload/seed/media/
# logo.png
# kinshasa-office.jpg
# lubumbashi-office.jpg

# 3. Lancer le seed (idempotent — doublons skippés par `alt`)
pnpm payload run src/payload/seed/index.ts
# [1/19] Media — + media logo.png → 664a...
# [1/19] Media — + media kinshasa-office.jpg → 664b...
```

## Idempotence

Le seed fait `payload.find({ collection:'media', where:{ alt:{equals: altFr}}})` avant `create`. Relancer le seed ne duplique pas les médias — logs `↺ media skip`.

## Fallback si dossier vide

Si `src/payload/seed/media/` est vide, le seed utilise `src/assets/*` (logos clients `CRDB_BANK_logo.svg`, `ACG-LOGO-MIDEMA.png`, `kipoi.webp`, etc.). Si aucun fichier n'est trouvé, les relations média sont `null` et un warning est loggé — le site reste fonctionnel, les images sont à ajouter ensuite via `/admin`.

## Tips

- Privilégier `webp`/`jpg` pour photos, `svg` pour logos.
- PDFs : max ~20 Mo (limite Postgres / upload par défaut).
- Ne pas committer de fichiers >5 Mo sans `git lfs`.
- `.gitkeep` ignoré — le dossier peut rester vide.
