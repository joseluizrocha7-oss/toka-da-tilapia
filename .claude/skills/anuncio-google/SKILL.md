---
name: anuncio-google
description: >
  Cria estrutura completa de campanha do Google Ads a partir de um briefing ou da pesquisa SEO.
  Gera CSV pronto pra importar no Google Ads Editor com campanhas Search organizadas por cluster
  de palavras-chave, grupos de anúncios, RSAs, extensões e palavras-chave negativas.
  Use quando o usuário pedir "criar campanha google ads", "anúncio google", "google ads",
  "csv pro google ads", ou /anuncio-google. Se for pra cliente, perguntar qual.
---

# /anuncio-google — Estrutura de campanha Google Ads

Sai do briefing direto pro CSV — sem montar grupo por grupo na mão na interface do Google.

## Dependências

- **Contexto:** `_memoria/empresa.md` (agência) ou `clientes/<Nome>/briefing.md` (cliente)
- **Tom de voz:** `_memoria/preferencias.md`
- **Pesquisa SEO (se existir):** `clientes/<Nome>/seo/01-pesquisa-demanda.md`, `06-google-ads.md`
- **Outputs vão em:** `clientes/<Nome>/campanhas/google-ads-<YYYY-MM-DD>/`

---

## Workflow

### Passo 1 — Briefing

Se não passou briefing, perguntar:
1. Produto/serviço a anunciar?
2. Quem é o público? (perfil, dor que resolve)
3. Região: raio em km a partir de qual cidade?
4. Orçamento diário? (R$/dia)
5. Objetivo: ligações / WhatsApp / formulário / visita?
6. Site/landing page existe? URL?

Se já existe `06-google-ads.md` (do `/seo`), usar como base.

### Passo 2 — Pesquisa de palavras-chave

Usar `01-pesquisa-demanda.md` se existir. Se não:
- Gerar 30-50 termos-semente baseados no briefing
- WebSearch pra verificar concorrência e sazonalidade
- Filtrar pelos de intenção comercial/transacional
- Agrupar em clusters temáticos

### Passo 3 — Estrutura de campanha

```
Campanha 1: <Cliente> — Search Geral
├── Grupo: <Cluster 1>
│   ├── 10-15 keywords (exata + frase + ampla modificada)
│   ├── 3 RSAs
│   └── 10-15 negativas do grupo
├── Grupo: <Cluster 2>
│   └── ...

Campanha 2: <Cliente> — Local (opcional)
Lista de negativas globais
```

### Passo 4 — Copies (RSAs)

Pra cada grupo, gerar 3 RSAs com:
- **15 headlines** (30 chars cada): 5 com keyword, 3 com diferenciais, 3 com CTA, 2 com prova social, 2 com proposta de valor
- **4 descriptions** (90 chars cada): institucional + diferencial técnico + urgência + prova social

Seguir `_memoria/preferencias.md`. Sem caps lock, sem emojis, sem superlativo sem fonte.

### Passo 5 — Extensões

- Sitelinks (4-6), Chamadas, Snippets estruturados, Preço (se aplicável)

### Passo 6 — Configurações

Arquivo `configuracoes.md` com: estratégia de lance, orçamento, segmentação geográfica, programação, conversões a configurar.

### Passo 7 — Gerar os CSVs

```
clientes/<Nome>/campanhas/google-ads-<YYYY-MM-DD>/
  campanhas.csv
  grupos.csv
  keywords.csv
  keywords-negativas.csv
  anuncios.csv
  extensoes-sitelinks.csv
  extensoes-chamadas.csv
  configuracoes.md
  README.md
```

### Passo 8 — Resumo

```
✓ Campanha pronta: clientes/<Nome>/campanhas/google-ads-<data>/
- <N> campanhas, <N> grupos, <N> keywords, <N> RSAs
```

---

## Regras

- Nunca inventar dados de CPC — dar faixa baseada em WebSearch se perguntarem
- Sempre começar com status pausado — cliente revisa e ativa quando aprovar
- Não anunciar pra termos informacionais — deixar pra SEO orgânico
- Match type: começar com Phrase Match. Exact pra termos premium. Broad só com dados
- Lista de negativas global é obrigatória
- Conversões precisam estar configuradas antes de ativar — relatar isso
