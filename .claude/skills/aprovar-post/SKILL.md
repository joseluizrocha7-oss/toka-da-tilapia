---
name: aprovar-post
description: >
  Aprova e publica um post da fila — flipa o blog de draft pra published, copia os PNGs do
  carrossel pro public folder do site, faz commit e push (Netlify/Vercel deploya), aguarda
  o deploy, e posta o carrossel no Instagram + Facebook via Meta Graph API. Use quando o
  usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X", ou quando
  quiser disparar a publicação automática de um conteúdo já criado pela skill /publicar-tema.
  Se for pra cliente específico, perguntar qual.
---

# /aprovar-post — Pipeline de aprovação e publicação automática

## Pré-requisitos (uma vez só)

- `.env` na raiz com:
  - `META_PAGE_ACCESS_TOKEN` — token de longa duração da Página FB
  - `META_PAGE_ID` — ID da Página FB
  - `META_IG_USER_ID` — ID da conta Insta Business
  - `SITE_URL` — ex: `https://exemplo.com.br`
- Site com deploy automático a partir do `main` do GitHub (Netlify, Vercel, etc.)
- Scripts `scripts/postar-instagram.js` e `scripts/postar-facebook.js` configurados

Se algo disso faltar: parar e apontar pro guia de setup em `marketing/automacao-meta-setup.md`.

## Argumento

`/aprovar-post <slug>` — ex: `/aprovar-post como-fazer-x`

Se não passou slug, listar blogs em draft e perguntar qual.

## Workflow

### Passo 1 — Localizar arquivos

Localizar blog, carrossel, PNGs, legenda.md e legenda-linkedin.md. Se faltar qualquer um, parar e relatar.

### Passo 2 — Mostrar resumo + pedir confirmação

Mostrar título, nº de slides, primeiros 200 chars da legenda, URL final. Perguntar: **"Confirma publicação?"**

### Passo 3 — Flipar draft pra false

Editar frontmatter: `draft: true` → `draft: false`.

### Passo 4 — Copiar PNGs pro public folder

Origem: `<pasta-carrossel>/instagram/slide-*.png` → Destino: `site/.../public/img/posts/<slug>/`

### Passo 5 — Commit + push

```bash
git add site/<caminho>/blog/<slug>.md site/.../public/img/posts/<slug>/
git commit -m "publicar: <título>"
git push origin main
```

### Passo 6 — Aguardar deploy (timeout 5 min)

Validar HTTP 200 no `$SITE_URL/blog/$slug/` e no `slide-01.png` antes de chamar a Meta API.

### Passo 7 — Postar no Instagram

```bash
node --env-file=.env scripts/postar-instagram.js <pasta-carrossel>
```

### Passo 8 — Postar no Facebook

```bash
node --env-file=.env scripts/postar-facebook.js <pasta-carrossel>
```

### Passo 9 — LinkedIn (manual por enquanto)

Mostrar o texto de `legenda-linkedin.md` e pedir pro usuário postar manualmente.

### Passo 10 — Resumo

```
✓ Post publicado: <título>
Site:        <URL>
Instagram:   <link>
Facebook:    <link>
LinkedIn:    pendente — texto em legenda-linkedin.md
```

## Princípios

1. Confirmação humana antes de qualquer ação irreversível
2. Falha cedo, falha alto — pré-requisito faltando = abortar e explicar
3. Rollback do `draft: false` se o push falhar
