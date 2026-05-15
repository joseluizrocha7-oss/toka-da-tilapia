---
name: analisar-dados
description: >
  Analisa um arquivo de dados (CSV, Excel, TXT, JSON, PDF) e gera um resumo executivo
  com os principais insights, tendências e recomendações.
  Use quando o usuário disser "analisa esse arquivo", "o que mostram esses dados",
  "resume esses resultados", "analisa esse relatório", ou arrastar um arquivo de dados.
  Se for pra cliente, perguntar qual.
---

# /analisar-dados — Análise de arquivo de dados

## Dependências

- **Contexto:** `_memoria/empresa.md` ou `clientes/<Nome>/briefing.md`
- **Tom:** `_memoria/preferencias.md`

---

## Workflow

### Passo 1 — Entender o contexto

Se não estiver claro, perguntar:
- "O que é esse arquivo? (vendas, anúncios, métricas, pesquisa...)"
- "Qual é a pergunta principal que você quer responder?"

Se o contexto estiver óbvio pelo nome ou conteúdo, prosseguir sem perguntar.

### Passo 2 — Ler o arquivo

Ler o arquivo fornecido. Se for Excel, extrair conteúdo das células.

### Passo 3 — Análise

Identificar e reportar:

**O que está bom:** métricas em crescimento, top performers, padrões positivos.
**O que preocupa:** quedas, anomalias, tendências negativas, gargalos.
**Comparações:** período atual vs anterior (se houver), top vs bottom performers.
**Insights não óbvios:** correlações interessantes, padrões que não aparecem na leitura superficial.

### Passo 4 — Output

```markdown
# Análise — [Nome do arquivo/relatório]
*[Data]*

## O que esses dados mostram
[2-3 parágrafos com o panorama geral]

## O que está funcionando
[lista com contexto]

## O que merece atenção
[lista com contexto]

## 3 recomendações
1. [ação concreta]
2. [ação concreta]
3. [ação concreta]

## Números-chave
| Métrica | Valor | Contexto |
|---------|-------|---------|
| ... | ... | ... |
```

Salvar em `clientes/<Nome>/saidas/analise-<nome>-<data>.md` ou `saidas/analise-<nome>-<data>.md`.

Perguntar se quer exportar em HTML pra compartilhar.

---

## Regras

- Análise em prosa, não só listas — o usuário deve entender sem abrir o arquivo original
- Nunca inventar dados que não estão no arquivo
- Se os dados estiverem incompletos, mencionar antes de analisar
- Tom conforme `_memoria/preferencias.md`
