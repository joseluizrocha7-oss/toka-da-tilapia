---
name: relatorio-ads
description: >
  Gera relatório semanal de performance de anúncios pagos (Google Ads + Meta Ads). Lê CSVs
  exportados das plataformas (ou prints) e devolve análise executiva com KPIs, top criativos,
  alertas (queima de orçamento, CTR baixo, conversões caindo) e recomendações práticas pra
  semana seguinte. Pode ser da agência ou de cliente específico.
  Use quando o usuário pedir "relatório de ads", "performance da semana", "relatorio meta",
  "relatorio google ads", ou /relatorio-ads. Se for pra cliente, perguntar qual.
---

# /relatorio-ads — Relatório semanal de Google Ads + Meta Ads

Transforma exports brutos em relatório executivo que o cliente entende sem precisar abrir o painel.

## Dependências

- **Contexto:** `_memoria/empresa.md` ou `clientes/<Nome>/briefing.md`
- **Tom:** `_memoria/preferencias.md`
- **Inputs:** CSVs do Google Ads e/ou Meta Ads Manager. Print também aceito
- **Histórico:** `clientes/<Nome>/campanhas/relatorios/` (criar se não existir)

---

## Como rodar

```
/relatorio-ads
dados/google-ads-2026-05-12.csv
dados/meta-ads-2026-05-12.csv
```

Ou sem argumentos — a skill pergunta onde estão os exports.

## Workflow

### Passo 1 — Ler os exports

**Google Ads:** Campanha, Grupo, Impressões, Cliques, CTR, CPC médio, Custo, Conversões, CPA, Conv. rate.
**Meta Ads:** Campanha, Conjunto, Impressões, Alcance, Cliques no link, CTR, CPM, Frequência, Custo, Resultados, Custo por resultado.

Se faltar coluna crítica, avisar e seguir só com tráfego.

### Passo 2 — Comparar com a semana anterior

Buscar relatório anterior em `relatorios/`. Se existir, calcular variação. Se não, sinalizar como baseline.

### Passo 3 — Resumo executivo

```markdown
# Relatório de Ads — <DD/MM> a <DD/MM> — <Nome do cliente>

## Resumo executivo

**Investimento:** R$ X.XXX (▼/▲ Y% vs semana anterior)
**Conversões:** N (▼/▲ Y%)
**CPA médio:** R$ X.XX (▼/▲ Y%)

**Canais:**
- Google Ads: R$ X.XXX → N conversões (CPA R$ X.XX)
- Meta Ads:   R$ X.XXX → N conversões (CPA R$ X.XX)

**Headline da semana:** 1 frase do que mais importa.
```

### Passo 4 — Detalhamento por canal

- Top 3 campanhas/grupos por performance (menor CPA, maior conv. rate)
- Bottom 3 (sinalizar pra pausar ou ajustar)
- Top criativos Meta (impressões + CTR + custo por resultado)
- Keywords com mais custo e zero conversão (Google) — virar negativas

### Passo 5 — Alertas automáticos

| Alerta | Critério |
|---|---|
| 🔴 Queima de orçamento | Campanha gastou >R$X com 0 conversões |
| 🔴 CTR despencou | CTR caiu >30% vs semana anterior |
| 🟡 Frequência alta (Meta) | Conjunto com freq > 3.0 |
| 🟡 Conv. rate baixa | <1% em Search |
| 🟡 CPC subindo | CPC médio +20% vs semana anterior |
| 🟢 Oportunidade | CTR/conv acima da média + orçamento limitado |

### Passo 6 — Recomendações pra semana

3-5 ações concretas:
1. **Pausar** Grupo "X" — gastou R$Y sem conversão
2. **Adicionar negativas:** [lista de termos]
3. **Trocar criativo** do conjunto "Y" — frequência 4.2
4. **Aumentar orçamento** da campanha "Z" — CPA abaixo do alvo

### Passo 7 — Salvar

`clientes/<Nome>/campanhas/relatorios/<YYYY-MM-DD>-relatorio.md`

### Passo 8 — Entrega

Mostrar resumo executivo + alertas + recomendações no chat. Perguntar:
> "Quer que eu prepare um email com esse relatório pro cliente?"

Se sim, chamar `/email-profissional`.

---

## Regras

- Nunca inventar números
- Comparação é o que importa — número solto não significa nada sem comparativo
- Alertas em ordem: vermelho primeiro
- Recomendações concretas: nome da campanha, valor, motivo
- Tom conforme `_memoria/preferencias.md`
- Frequência Meta: saudável 1.5-3.0. Acima de 4.0 = ruído
