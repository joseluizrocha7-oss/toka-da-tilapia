---
name: pipeline
description: >
  Exibe e atualiza o pipeline comercial da agência — leads, propostas enviadas, negociação e
  clientes fechados. Lê e atualiza o arquivo tarefas.md da raiz. Use quando o usuário disser
  "pipeline", "status dos leads", "onde estão os leads", "quais propostas estão abertas",
  "atualiza o pipeline", "/pipeline", ou "o que tá na fila".
---

# /pipeline — Pipeline comercial da agência

Visão rápida de onde cada lead/cliente está no funil e o que precisa acontecer a seguir.

## Dependências

- **Pipeline:** `tarefas.md` (raiz)
- **Clientes ativos:** `_memoria/empresa.md`
- **Briefings de leads:** `briefings/`
- **Propostas:** `propostas/`

---

## Estrutura do pipeline (tarefas.md)

O `tarefas.md` usa o seguinte formato de pipeline:

```markdown
# Pipeline — Rocha Digital Studio

## 🎯 Leads (contato feito, ainda sem proposta)

| Lead | Negócio | Serviços de interesse | Próxima ação | Data |
|------|---------|----------------------|--------------|------|
| ... | ... | ... | ... | ... |

## 📄 Proposta enviada

| Lead | Proposta | Valor | Data envio | Follow-up |
|------|----------|-------|------------|-----------|
| ... | ... | ... | ... | ... |

## 🤝 Negociação

| Lead | Objeção / Ponto em aberto | Próxima ação | Data |
|------|--------------------------|--------------|------|
| ... | ... | ... | ... |

## ✅ Fechados (últimos 90 dias)

| Cliente | Serviços | Valor mensal | Início |
|---------|----------|--------------|--------|
| ... | ... | ... | ... |

## ❌ Perdidos (últimos 90 dias)

| Lead | Motivo da perda | Data |
|-----|-----------------|------|
| ... | ... | ... |
```

---

## Workflow

### Passo 1 — Ler o estado atual

Ler `tarefas.md` e `_memoria/empresa.md`. Verificar se há propostas em `propostas/` que não estão no pipeline.

### Passo 2 — Exibir o pipeline atual

Mostrar as tabelas de forma limpa. Destacar:
- Propostas abertas há mais de 7 dias sem follow-up
- Leads sem próxima ação definida
- Negociações travadas há mais de 14 dias

### Passo 3 — Perguntar o que atualizar

> "O pipeline está assim. O que quer atualizar? (pode ditar — ex: 'Move [Lead X] pra fechado, começou em 15/05' ou 'Perdemos [Lead Y], foi pro concorrente')"

### Passo 4 — Aplicar as mudanças

Editar `tarefas.md` com as atualizações informadas. Mostrar o diff antes de salvar.

### Passo 5 — Alertas de follow-up

Após atualizar, listar:

```
📬 Follow-up necessário:
- <Lead A> — proposta enviada há 8 dias, sem resposta
- <Lead B> — negociação parada há 12 dias

Quer que eu escreva os follow-ups agora? (usar /email-profissional)
```

---

## Comandos rápidos

- `/pipeline lead <Nome>` — adiciona novo lead diretamente
- `/pipeline fechar <Nome>` — move lead pra fechado e cria pasta em `clientes/` se não existir
- `/pipeline perder <Nome>` — move pro perdidos com registro de motivo
- `/pipeline proposta <Nome>` — registra proposta enviada e aponta pra `/proposta` se ainda não foi criada

---

## Regras

- Nunca apagar leads do histórico — só mover entre colunas
- Perdidos ficam 90 dias no pipeline antes de sumir (memória comercial)
- Ao fechar um cliente, verificar se já tem pasta em `clientes/` — se não, sugerir `/briefing-cliente`
- Sempre manter a coluna "Próxima ação" preenchida — pipeline sem ação é decoração
