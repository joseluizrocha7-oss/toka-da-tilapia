---
name: carrossel
description: >
  Cria carrosséis e posts visuais pra Instagram, TikTok, LinkedIn com a identidade visual da marca ou do cliente.
  Gera HTML estilizado + renderiza em PNG 1080x1350 via Playwright, com legenda pronta no final.
  Suporta carrossel texto puro, carrossel com foto IA (gerada via OpenAI) e post único.
  Use quando o usuário pedir "carrossel", "post", "conteúdo pro instagram", "criar imagem",
  "gerar foto", "post educativo", ou /carrossel. Se for pra um cliente específico, perguntar qual.
---

# /carrossel — Carrossel e posts visuais

Pega um tema → entrega HTMLs estilizados + PNGs prontos pra postar + legenda no padrão da marca.

## Dependências

- **Identidade visual:** `identidade/design-guide.md` (agência) ou `clientes/<Nome>/identidade/design-guide.md` (cliente)
- **Contexto do negócio:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Playwright:** pra renderizar HTML em PNG (`npx playwright screenshot` ou via `render.js`)
- **OpenAI API (opcional):** pra gerar fotos realistas — só se tiver chave configurada
- **Outputs vão em:** `clientes/<Nome>/conteudo/<tipo>-<tema>-<YYYY-MM-DD>/` (cliente) ou `marketing/conteudo/` (institucional)

---

## Tipos de conteúdo

Ao receber um pedido, identificar qual tipo se encaixa:

### 1. CARROSSEL TEXTO PURO
- **Quando usar:** posts educacionais, dicas, listas, explicações
- **Formato:** 1080x1350 (4:5) — sempre
- **Estilo:** tipografia clean, cores da marca alternadas, sem fotos

### 2. CARROSSEL COM FOTO
- **Quando usar:** apresentação visual, conteúdo aspiracional, capa com personagem
- **Formato:** 1080x1350 (4:5)
- **Estilo:** foto como capa com gradient overlay + slides internos no padrão alternado

### 3. POST ÚNICO
- **Quando usar:** frase de impacto, dado/estatística, depoimento, bastidores
- **Formato:** 1080x1350
- **Estilo:** varia conforme o conteúdo

Se o tipo não estiver claro, perguntar:
> "Que tipo de conteúdo? (1) carrossel texto, (2) carrossel com foto, (3) post único"

---

## Estilo visual base

Editorial, calmo, premium. Sem clip-art, sem emoji decorativo, sem gradiente arco-íris, sem template genérico de IA. `identidade/design-guide.md` sobrescreve esses padrões.

### Tipografia padrão

- **Fonte:** Inter (Google Fonts), pesos 400/500/600/700/800/900
- **Título de capa:** 90-100px, weight 900, line-height 0.98, letter-spacing **-0.04em**
- **H2 (slides internos):** 60-72px, weight 800, line-height 1.04, letter-spacing **-0.035em**
- **Corpo:** 20-24px, weight 500, line-height 1.5
- **Eyebrow/kicker:** 13-16px, weight 700-800, **UPPERCASE**, letter-spacing **0.22-0.32em**, cor de destaque
- **Page counter (canto sup. dir.):** 14-16px, weight 500-600, letter-spacing 0.18em, cor muted

### Cores padrão (quando design-guide for vago)

- Fundo escuro: `#0E1116` ou `#1A1A1A`
- Fundo claro alternativo: `#F5ECD7` ou `#FAFAF7`
- Texto sobre escuro: `#FAFAF7`
- Texto sobre claro: `#1A1A1A` (h2) e `#444` (corpo)
- Destaque: cor da marca (uma só)

### Layouts nomeados

- **CAPA** — eyebrow + título grande + subtítulo + @handle
- **SOLO** — split horizontal: foto à esquerda 50% + texto à direita 50%
- **DUO** — texto em cima + 2 fotos lado a lado embaixo
- **NÚMERO** — numeral gigante como elemento gráfico + h2 + parágrafo
- **CITAÇÃO** — aspas grandes em watermark + frase em h2 + atribuição
- **CTA FINAL** — fundo na cor de destaque, logo, headline, botão, contato

**Ritmo:** alternar fundo escuro ↔ claro ↔ destaque. Nunca dois slides iguais.

---

## Workflow

### Passo 1 — Entender e planejar

1. Verificar se é pra agência ou pra cliente específico
2. Ler design-guide relevante + empresa.md + preferencias.md
3. Identificar tipo de conteúdo (1, 2 ou 3)

### Passo 2 — Texto

- Capa: título impactante, máx 8 palavras — oferecer 3 opções
- Slides internos: um insight por slide, frases naturais
- Slide final: CTA + logo

**CHECKPOINT:** Mostrar texto completo. Esperar aprovação antes do visual.

### Passo 3 — Gerar fotos (se tipo 2)

Montar prompt em inglês. Padrão:
```
Professional [TIPO] photography of [ASSUNTO], [DETALHES], [AMBIENTE],
[ESTILO DE LUZ] lighting, shallow depth of field, editorial quality
```
Mostrar a foto pro usuário antes de continuar.

### Passo 4 — Criar visuais (HTML + PNG)

1. Criar `carrossel.html` com todos os slides como `<div class="slide">`. Inline CSS.
2. Criar `render.js` com Playwright pra renderizar cada `.slide` em 1080x1350.
3. Mostrar slide 1, 2 e CTA final. Se aprovado, mostrar os intermediários.

### Passo 5 — Salvar e organizar

```
clientes/<Nome>/conteudo/<tipo>-<tema>-<YYYY-MM-DD>/
  texto.md
  carrossel.html
  render.js
  instagram/
    slide-01.png → slide-NN.png
  legenda.md
```

### Passo 6 — Conexão com blog (opcional)

> "Esse conteúdo dá pra virar artigo no blog também. Quer que eu crie a versão blog pra SEO?"

---

## Regras

- Sempre ler `identidade/design-guide.md` antes de criar qualquer visual
- Carrossel: 1080x1350 (4:5) — sempre. TikTok/Reels: 1080x1920 — só quando pedido
- Sempre gerar legenda automaticamente ao final, salvando em `legenda.md`
- Fotos IA: sempre pedir aprovação antes de usar. Prompts em inglês
- Fotos IA: nunca gerar fotos de pessoas/rostos identificáveis
- Não repetir layout entre slides — usar variação visual
