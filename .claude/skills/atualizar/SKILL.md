---
name: atualizar
description: >
  Varre o projeto e atualiza os arquivos de contexto (_memoria/empresa.md, preferencias.md,
  estrategia.md, CLAUDE.md, identidade/design-guide.md) que ficaram desatualizados em relação
  ao estado real do workspace. Use quando o usuário disser "atualiza", "/atualizar", "varre o
  projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Varredura e atualização de contexto

Compara o que está nos arquivos de contexto com o estado real do workspace e propõe atualizações.

## Workflow

### Passo 1 — Levantamento

Listar:
- Pastas na raiz (cada uma representa uma área de trabalho)
- Subpastas em `clientes/` — cada uma é um cliente
- Skills em `.claude/skills/` — quais existem hoje
- Arquivos recentes (últimos 30 dias) em `propostas/`, `clientes/`, `briefings/`
- `tarefas.md` — status atual do pipeline

### Passo 2 — Comparação

Ler os arquivos de contexto e identificar:

- **Em `_memoria/empresa.md`:** lista de clientes / serviços / ferramentas — bate com a realidade?
- **Em `_memoria/estrategia.md`:** o foco atual ainda faz sentido (datas, prioridades)?
- **Em `CLAUDE.md`:** as regras de organização e estrutura de pastas batem com o que existe?
- **Em `identidade/design-guide.md`:** continua coerente com o que foi gerado nas últimas peças?
- **Em `tarefas.md`:** há leads/clientes que mudaram de fase e não foram atualizados?

### Passo 3 — Proposta de mudanças

Apresentar pro usuário uma lista curta no formato:

```
Encontrei [N] coisas pra atualizar:

1. _memoria/empresa.md — falta o cliente "X" (vi pasta clientes/X/ criada em [data])
2. tarefas.md — cliente "Y" foi pra proposta mas ainda aparece como lead
3. _memoria/estrategia.md — fala em "fechar 1º cliente em fevereiro", já há 3 clientes ativos

Quer que eu aplique essas mudanças? Posso aplicar todas, escolher algumas, ou nenhuma.
```

### Passo 4 — Aplicação

Se o usuário aprovar, editar os arquivos com cirurgia — só a linha relevante, sem reformatar o documento todo. Mostrar o diff de cada mudança aplicada.

## Regras

- Não inventar fatos — só registrar o que tem evidência no workspace
- Se a evidência for ambígua (ex: pasta vazia chamada "Cliente Novo"), perguntar antes de adicionar
- Não apagar conteúdo dos arquivos de contexto — só atualizar e adicionar
- Se nenhuma mudança for necessária, responder "Tá tudo coerente, nada pra atualizar"
