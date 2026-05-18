---
name: publicar-tema
description: >
  Orquestra a criação completa de uma peça de conteúdo SEO + redes sociais a partir de um tema.
  Pega um tema (manual ou da estratégia de conteúdo do SEO), escreve o artigo de blog completo,
  gera o carrossel resumo via skill /carrossel, e produz as legendas pra Instagram, Facebook e
  LinkedIn — tudo amarrado, com o carrossel apontando pro blog.
  Use quando o usuário pedir "publicar tema", "gera o conteúdo do tema X", "transforma esse tema
  em post", "cria o conteúdo completo", ou /publicar-tema. Se for pra cliente, perguntar qual.
---

# /publicar-tema — Pipeline de conteúdo SEO + redes sociais

Pega um tema → entrega artigo no blog + carrossel + 3 legendas (Insta, FB, LinkedIn), tudo conectado.

## Dependências

- **Estratégia de conteúdo:** `seo/05-estrategia-conteudo.md` (se existir — gerado pelo `/seo`)
- **Skill carrossel:** `.claude/skills/carrossel/SKILL.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Contexto:** `_memoria/empresa.md`, `identidade/design-guide.md`

---

## Workflow

### Passo 0 — Escolher o tema e o cliente

Se for pra cliente, identificar qual. Ler o briefing e design-guide do cliente.

Se o usuário passou um tema explícito → usar. Se não → listar temas da estratégia e perguntar.

### Passo 1 — Pesquisa rápida

Ler as pesquisas SEO sobre o tema: keyword principal, como concorrentes tratam, ângulo GEO se aplicável.

### Passo 2 — Escrever o blog post

**Slug:** kebab-case curto, sem stopwords.

**Frontmatter:**
```yaml
---
title: "Título atrativo, próximo da keyword"
description: "Meta description 150-160 caracteres, com keyword e benefício"
publishedAt: YYYY-MM-DD
author: "<nome da empresa ou cliente>"
keywords:
  - keyword principal
  - variação 1
draft: true
---
```

**Estrutura (800-1500 palavras):**
1. Lead: problema concreto do público
2. H2 explicativo: o quê e por quê
3. H2 prático: como fazer / o que olhar
4. H2 de detalhe técnico (opcional)
5. H2 onde a empresa/cliente se encaixa
6. CTA final: contato, WhatsApp, formulário

**Sempre `draft: true`** — o usuário revisa antes de publicar.

### Passo 3 — Carrossel resumo

Sem perguntar, criar carrossel (tipo 1 — texto puro) chamando a skill `/carrossel`.

Estrutura de slides:
- Slide 1: mesmo título do blog
- Slides 2-6: pontos-chave do blog (1 ideia por slide)
- Slide final: CTA pro blog com URL

### Passo 4 — Legendas (3 versões)

**`legenda.md`** (Instagram + Facebook):
- Hook na primeira linha
- 2-3 parágrafos de contexto naturais
- CTA pro carrossel + CTA pro blog
- Bloco oferta (diferenciais, contato)
- 10-15 hashtags

**`legenda-linkedin.md`** (mais formal, sem hashtags):
- Hook profissional
- 3-5 parágrafos analíticos
- CTA: link pro blog
- Máx 3 hashtags

### Passo 5 — Resumo de entrega

```
✓ Blog post: <caminho>/<slug>.md (draft)
✓ Carrossel: <pasta>/
  - carrossel.html + render.js
  - PNGs em instagram/
✓ Legendas:
  - legenda.md (Insta + FB)
  - legenda-linkedin.md

Pra publicar:
1. Revisar o blog → flipar draft: false
2. Renderizar PNGs: cd <pasta> && node render.js
3. Postar carrossel (ou usar /aprovar-post)
```

---

## Princípios

1. **Blog é a peça-mãe.** Carrossel e legendas são derivados.
2. **Tudo conectado.** Cada peça referencia a outra.
3. **Draft sempre.** Nunca publicar automaticamente.
4. **Linguagem do público real.** Sem corporativês.
