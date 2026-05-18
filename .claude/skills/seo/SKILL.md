---
name: seo
description: >
  Fluxo completo de SEO, GEO e Google Ads em 8 passos: pesquisa de demanda, análise de
  concorrência, Google Meu Negócio, otimização on-page, estratégia de conteúdo, Google Ads,
  checklist de monitoramento e GEO (aparecer em IAs como ChatGPT, Gemini, Perplexity).
  Use quando o usuário pedir "seo", "geo", "palavras-chave", "google ads",
  "aparecer no google", "aparecer no chatgpt", "google meu negócio", "gmb",
  "analisar concorrência seo", "pesquisa de nicho". Se for pra cliente, perguntar qual.
---

# /seo — SEO completo + GEO + Google Ads

## Dependências

- **Contexto:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Ferramentas:** WebSearch, WebFetch (nativos)
- **Outputs vão em:** `seo/`

---

## Workflow

### Passo 1 — DEMANDA: O que as pessoas buscam nesse nicho?

1. Ler contexto do negócio/cliente pra extrair: produtos/serviços, região, público-alvo
2. Gerar lista de **30-50 termos-semente** por categoria de serviço, intenção de busca e localização
3. Usar **WebSearch** pra cada grupo de termos — ver sazonalidade, o que aparece, buscas relacionadas
4. Classificar por volume estimado, intenção e dificuldade

**Output:** `01-pesquisa-demanda.md`

---

### Passo 2 — CONCORRÊNCIA: Quem aparece pra essas buscas?

1. Pegar os top 10 termos do Passo 1
2. Pra cada termo, usar **WebSearch** e analisar top 5 orgânicos, Local Pack e Ads
3. Usar **WebFetch** pra analisar concorrentes relevantes (estrutura, meta tags, conteúdo)
4. Identificar gaps, oportunidades, ameaças e benchmark

**Output:** `02-analise-concorrencia.md`

---

### Passo 3 — GMB: Google Meu Negócio

1. Verificar perfil atual (buscar nome no Google)
2. Criar documento com tudo que precisa ser preenchido/otimizado:
   - Informações básicas, descrição otimizada (750 chars), atributos, fotos, posts, estratégia de avaliações
   - Template de resposta a avaliações (usar `/responder-avaliacoes`)
   - Lista de diretórios relevantes pro nicho

**Output:** `03-google-meu-negocio.md`

---

### Passo 4 — ON-PAGE: Otimizar o site

1. Mapear estrutura do site (se `sites/` existir)
2. Pra cada página: keyword mapeada, title/description otimizados, H1/H2/H3, schema markup JSON-LD, checklist técnico

**Output:** `04-otimizacao-on-page.md`

---

### Passo 5 — CONTEÚDO: Estratégia de autoridade

1. Baseado nos termos informacionais do Passo 1:
   - 5-10 páginas/posts evergreen com estrutura de headings
   - Cluster de conteúdo (pilar + satélites)
   - Calendário editorial com prioridade e formato

**Output:** `05-estrategia-conteudo.md`

> Essa lista é o insumo da skill `/publicar-tema`.

---

### Passo 6 — GOOGLE ADS: Campanhas prontas

1. Estrutura de campanhas Search + Local (se aplicável)
2. Pra cada grupo de anúncios: 10-15 keywords, negativas, 3 RSAs, extensões
3. Copies seguindo `_memoria/preferencias.md`
4. Orçamento diário, estratégia de lance, segmentação geográfica

**Output:** `06-google-ads.md`

> A skill `/anuncio-google` consome esse arquivo e gera o CSV pra importar no Ads Editor.

---

### Passo 7 — MONITORAMENTO: Checklist mensal

Semanal: posições nos top termos, responder GMB, postar no GMB.
Mensal: métricas Ads (via `/relatorio-ads`), tráfego orgânico, negativas, publicar conteúdo.
Trimestral: refazer análise de concorrência, atualizar GMB, revisar estratégia de conteúdo.

**Output:** `07-checklist-monitoramento.md`

---

### Passo 8 — GEO: Aparecer nas respostas de IAs

1. Auditar presença em ChatGPT, Gemini, Perplexity pros top 10 termos
2. Conteúdo otimizado: respostas diretas nas primeiras linhas, dados concretos, formato Q&A
3. FAQ Schema no site (FAQPage JSON-LD, 5-10 perguntas reais)
4. Citações externas: diretórios, avaliações, guest posts, menções em mídia
5. Monitoramento: testar top 5 termos nas IAs a cada 30 dias

**Output:** `08-geo-otimizacao-ia.md`

---

## Execução

Executar os 8 passos em sequência, mostrando resumo entre cada um. Para rodar passo individual: `/seo passo 3` ou `/seo gmb` ou `/seo geo`.

Ao finalizar: top 5 oportunidades, ações prioritárias, estimativa de investimento em ads, próximos passos.

---

## Regras

- Toda pesquisa deve ser real (WebSearch/WebFetch) — nunca inventar dados
- Copies e textos seguem `_memoria/preferencias.md`
- Quando não puder obter dado real, deixar claro que é estimativa
- Schema markup em JSON-LD
- Google Ads: nunca inventar CPC sem base real
