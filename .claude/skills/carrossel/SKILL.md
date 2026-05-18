---
name: carrossel
description: >
  Cria carrosséis e posts visuais pra Instagram, TikTok, LinkedIn com a identidade visual da marca.
  Gera HTML estilizado + renderiza em PNG 1080x1350 via Playwright, com legenda pronta no final.
  Suporta carrossel texto puro, carrossel com foto e post único.
  Use quando o usuário pedir "carrossel", "post", "conteúdo pro instagram", "criar imagem",
  "post educativo", ou /carrossel.
---

# /carrossel — Carrossel e posts visuais

Pega um tema → entrega HTMLs estilizados + PNGs prontos pra postar + legenda no padrão da marca.

## Dependências

- **Identidade visual:** `identidade/design-guide.md`
- **Contexto do negócio:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Playwright:** pra renderizar HTML em PNG (`npx playwright screenshot` ou via `render.js`)
- **Outputs vão em:** `conteudo/<tipo>-<tema>-<YYYY-MM-DD>/`

---

## Tipos de conteúdo

Ao receber um pedido, identificar qual tipo se encaixa:

### 1. CARROSSEL TEXTO PURO
- **Quando usar:** posts educacionais, dicas, listas, explicações
- **Formato:** 1080x1350 (4:5) — sempre
- **Estilo:** tipografia clean, cores da marca alternadas, sem fotos

### 2. CARROSSEL COM FOTO
- **Quando usar:** apresentação visual, conteúdo aspiracional, capa com personagem, profissional de saúde/bem-estar
- **Formato:** 1080x1350 (4:5)
- **Estilo:** foto na capa (split ou full) + slides internos com bg photo sutil

### 3. POST ÚNICO
- **Quando usar:** frase de impacto, dado/estatística, depoimento, bastidores
- **Formato:** 1080x1350
- **Estilo:** varia conforme o conteúdo

Se o tipo não estiver claro, perguntar:
> "Que tipo de conteúdo? (1) carrossel texto, (2) carrossel com foto, (3) post único"

---

## Estilos visuais disponíveis

Sempre ler `identidade/design-guide.md` antes de escolher. Se a identidade indicar elegância, serif, saúde, bem-estar, consultoria ou estética — usar **Premium Serif**. Para negócios modernos, tech, serviços urbanos — usar **Modern Sans**.

### PREMIUM SERIF (padrão recomendado para marcas pessoais e profissional liberal)

Sistema baseado nos melhores carrosséis produzidos para clientes — referência de qualidade interna.

**Fontes:** Playfair Display (títulos, elegância) + Lato (corpo, leveza)
```html
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
```

**Paleta base** (adaptar com as cores do cliente):
```css
:root {
  --bg:     #fafaf7;   /* fundo principal — off-white quente */
  --bg-alt: #f1f0e6;   /* fundo alternativo */
  --dark:   #1a2622;   /* texto escuro / slide ponte */
  --gold:   #C5A028;   /* destaque — substituir pela cor de marca do cliente */
  --muted:  #5a7060;   /* texto secundário */
}
```

**Elementos decorativos obrigatórios:**
- `bar`: `width:52px; height:2px; background:var(--gold)` — separador entre tag e título
- `tag`: `font-size:20px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold)` — categoria do slide
- `dots`: navegação — dot ativo: `width:22px; border-radius:4px; background:var(--gold)`
- `num`: numeral em watermark nos slides internos — `font-size:220px; font-style:italic; opacity:0.07`
- `handle`: URL/@ do cliente em todos os slides — `font-size:20px; font-weight:300; letter-spacing:0.1em`

**Estrutura padrão de 6 slides:**

| Slide | Nome | Layout | Descrição |
|-------|------|---------|-----------|
| 1 | CAPA | Split 48/52% | Foto à esquerda, texto à direita (`tag + bar + h1 em italic + sub + swipe →`) |
| 2 | CONTEÚDO 1 | `s-mid` | Bg foto opacity:0.30 + `num` watermark `1` + `tag + bar + h2 + body` |
| 3 | CONTEÚDO 2 | `s-mid` | Bg foto diferente + `num` watermark `2` + conteúdo |
| 4 | CONTEÚDO 3 | `s-mid` | Bg foto diferente + `num` watermark `3` + conteúdo |
| 5 | PONTE | Dark center | `background:var(--dark)` + bg foto opacity:0.35 + h2 grande + corpo + handle |
| 6 | CTA | Full foto | Foto full + gradient `transparent 30% → dark 97%` + h2 + btn dourado + tagline |

**Padrão do `h2` com `em` italic:**
```html
<h2>Por que me sinto <em>culpada</em> sem saber ao certo por quê?</h2>
<!-- em = font-style:italic; color:var(--gold) ou cor do segmento -->
```

**Botão CTA:**
```css
.btn {
  background: var(--gold);
  color: var(--dark);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 32px 96px;
  border-radius: 100px;
}
```

---

### MODERN SANS (para negócios modernos, tech, serviços urbanos)

**Fontes:** Inter (Google Fonts), pesos 400/500/600/700/800/900

**Tipografia:**
- Título de capa: 90-100px, weight 900, line-height 0.98, letter-spacing -0.04em
- H2 (slides internos): 60-72px, weight 800, line-height 1.04, letter-spacing -0.035em
- Corpo: 20-24px, weight 500, line-height 1.5
- Eyebrow/kicker: 13-16px, weight 700-800, UPPERCASE, letter-spacing 0.22-0.32em, cor de destaque
- Page counter (canto sup. dir.): 14-16px, weight 500-600, letter-spacing 0.18em, cor muted

**Paleta padrão:**
- Fundo escuro: `#0E1116` ou `#1A1A1A`
- Fundo claro alternativo: `#F5ECD7` ou `#FAFAF7`
- Texto sobre escuro: `#FAFAF7`
- Destaque: cor da marca

**Layouts:**
- **CAPA** — eyebrow + título grande + subtítulo + @handle
- **SOLO** — split horizontal: foto à esquerda 50% + texto à direita 50%
- **NÚMERO** — numeral gigante como elemento gráfico + h2 + parágrafo
- **CITAÇÃO** — aspas grandes em watermark + frase em h2 + atribuição
- **CTA FINAL** — fundo na cor de destaque, logo, headline, botão, contato

**Ritmo:** alternar fundo escuro ↔ claro ↔ destaque. Nunca dois slides iguais.

---

## Workflow

### Passo 1 — Entender e planejar

1. Ler `identidade/design-guide.md` → escolher estilo (Premium Serif ou Modern Sans)
2. Ler `_memoria/empresa.md` + `_memoria/preferencias.md`
3. Identificar tipo de conteúdo (1, 2 ou 3)
4. Confirmar tema com o usuário se não vier explícito

### Passo 2 — Texto

- Capa: título impactante, máx 8 palavras — oferecer 3 opções
- Slides internos: um insight por slide, frases naturais
- `<em>` dentro do h2 em pelo menos um slide (palavra-chave emocional)
- Slide final: CTA direto + tagline da marca

**CHECKPOINT:** Mostrar texto completo. Esperar aprovação antes do visual.

### Passo 3 — Gerar fotos (se tipo 2)

Montar prompt em inglês. Padrão:
```
Professional [TIPO] photography of [ASSUNTO], [DETALHES], [AMBIENTE],
[ESTILO DE LUZ] lighting, shallow depth of field, editorial quality
```
Mostrar a foto pro usuário antes de continuar.

### Passo 4 — Criar visuais (HTML + PNG)

1. Criar `carrossel.html` com todos os slides como `<div class="slide">`. Inline CSS completo.
2. Criar `render.js` com Playwright pra renderizar cada `.slide` em 1080x1350.
3. Mostrar slide 1 e CTA final para aprovação. Se aprovado, renderizar todos.

**Template `render.js`:**
```javascript
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file://' + path.resolve(__dirname, 'carrossel.html');
  await page.goto(file, { waitUntil: 'networkidle' });

  const slides = await page.$$('.slide');
  const dir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(dir, `slide-${n}.png`) });
    console.log(`✓ slide-${n}.png`);
  }

  await browser.close();
})();
```

### Passo 5 — Salvar e organizar

```
conteudo/<tipo>-<tema>-<YYYY-MM-DD>/
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
- Premium Serif é o padrão para marcas pessoais e profissional liberal — não usar Inter nesses casos
- Carrossel: 1080x1350 (4:5) — sempre. TikTok/Reels: 1080x1920 — só quando pedido
- Sempre gerar legenda automaticamente ao final, salvando em `legenda.md`
- Fotos IA: sempre pedir aprovação antes de usar. Prompts em inglês
- Fotos IA: nunca gerar fotos de pessoas/rostos identificáveis
- Não repetir layout entre slides — variação visual é obrigatória
- `<em>` italic em pelo menos um título — cria ritmo visual e destaca palavra-chave emocional
