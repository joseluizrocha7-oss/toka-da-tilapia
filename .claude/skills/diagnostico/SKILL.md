---
name: diagnostico
description: >
  Lê todo o histórico acumulado do cliente (memória, reuniões, relatórios, SEO, ads, conteúdo)
  e produz um diagnóstico estratégico completo: o que está funcionando, o que está travado,
  oportunidades não exploradas e recomendações priorizadas. Use quando o usuário disser
  "diagnóstico", "como está o negócio", "me dá uma análise", "o que devo focar", "/diagnostico",
  ou pedir uma visão estratégica do cliente.
---

# /diagnostico — Diagnóstico estratégico do negócio

Lê tudo que foi acumulado nesse workspace e produz uma análise estratégica baseada em
evidências reais — não em suposições genéricas. Quanto mais histórico existir, mais
preciso e útil o diagnóstico.

## Workflow

### Passo 1 — Leitura completa do contexto

Ler em ordem:

**Memória base:**
- `_memoria/empresa.md` — o negócio
- `_memoria/mercado.md` — posicionamento e concorrência
- `_memoria/preferencias.md` — tom e comunicação
- `_memoria/estrategia.md` — foco atual e metas

**Histórico acumulado:**
- `reunioes/` — todas as notas de reunião (decisões, direções, reclamações do cliente)
- `relatorios/` — relatórios mensais de performance
- `tarefas.md` — entregas concluídas, em andamento e travadas
- `seo/` — pesquisa de palavras-chave e resultados de SEO
- `ads/` — histórico de campanhas e performance
- `conteudo/` — o que foi produzido, temas, formatos

Anotar internamente: o que há evidências de, o que está ausente, quais padrões se repetem.

---

### Passo 2 — Estrutura do diagnóstico

Produzir um documento em `saidas/diagnostico-<YYYY-MM-DD>.md` com as seguintes seções:

#### 1. Situação atual
Resumo de 3-5 linhas de onde o negócio está hoje — baseado no que foi registrado,
não em suposições. Citar fontes específicas do workspace ("conforme reunião de X",
"relatório de março mostra...").

#### 2. O que está funcionando
Lista objetiva com evidências. Só afirmar o que tem dado certo se houver registro concreto
(campanha que performou, conteúdo que gerou engajamento, feedback de cliente, meta batida).

#### 3. O que está travado
Gargalos identificados no histórico: tarefas que aparecem toda semana sem avançar,
metas que não foram batidas, reclamações recorrentes do cliente em reuniões,
canais que foram tentados e não funcionaram.

#### 4. Oportunidades não exploradas
Cruzar o que foi levantado em `_memoria/mercado.md` e `seo/` com o que ainda não
foi feito. O que a concorrência faz que esse negócio não faz? Quais palavras-chave
têm demanda mas nenhum conteúdo foi criado?

#### 5. Recomendações priorizadas
Máximo 5 ações, ordenadas por impacto × facilidade. Para cada uma:
- O que fazer (concreto — não "melhorar SEO", mas "criar 3 artigos sobre X")
- Por que agora (o que no histórico justifica essa prioridade)
- Como medir (métrica específica)

#### 6. O que monitorar nos próximos 30 dias
3-4 indicadores que vão mostrar se o negócio está na direção certa.

---

### Passo 3 — Apresentar e salvar

Mostrar o diagnóstico completo na conversa e salvar em:
```
saidas/diagnostico-<YYYY-MM-DD>.md
```

Ao final, perguntar:
> "Quer que eu transforme alguma dessas recomendações em tarefas no `tarefas.md`?"

---

## Regras

- Toda afirmação precisa de evidência no workspace — se não tem registro, não afirmar
- Se o histórico for escasso (workspace novo), dizer claramente: "Com o contexto disponível até agora, consigo analisar X. Para um diagnóstico mais completo, registre Y"
- Não repetir o que já está em `_memoria/estrategia.md` como se fosse insight — isso já é o plano
- Foco em diagnóstico acionável: cada seção deve levar a uma decisão ou ação concreta
- Tom direto — sem rodeios, sem linguagem de consultoria vazia
