---
name: atualizar
description: >
  Varre o projeto e atualiza os arquivos de contexto (_memoria/empresa.md, mercado.md,
  preferencias.md, estrategia.md, CLAUDE.md, identidade/design-guide.md) que ficaram
  desatualizados em relação ao estado real do workspace. Use quando o usuário disser
  "atualiza", "/atualizar", "varre o projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Varredura e atualização de contexto

Compara o que está nos arquivos de memória com o estado real do workspace e propõe atualizações.

## Workflow

### Passo 1 — Levantamento

Verificar:
- `_memoria/empresa.md` — dados do negócio
- `_memoria/mercado.md` — concorrência e posicionamento
- `_memoria/preferencias.md` — tom de voz
- `_memoria/estrategia.md` — foco atual e prazos
- `identidade/design-guide.md` — identidade visual
- `tarefas.md` — status das entregas
- Skills em `.claude/skills/` — quais existem hoje
- Pastas com conteúdo recente (últimos 30 dias): `reunioes/`, `relatorios/`, `conteudo/`, `ads/`, `seo/`

### Passo 2 — Comparação

Identificar inconsistências:

- **`_memoria/empresa.md`:** as informações do negócio ainda batem com a realidade? Algum produto, serviço ou dado mudou?
- **`_memoria/mercado.md`:** o cenário competitivo ou posicionamento evoluiu?
- **`_memoria/estrategia.md`:** o foco atual ainda faz sentido? Datas vencidas, prioridades concluídas?
- **`tarefas.md`:** há entregas concluídas que ainda aparecem como em andamento?
- **`CLAUDE.md`:** as regras de organização batem com a estrutura real de pastas?
- **`identidade/design-guide.md`:** continua coerente com o que foi gerado nas últimas peças em `conteudo/`?
- **Reuniões recentes em `reunioes/`:** houve decisões que deveriam atualizar `estrategia.md` ou `empresa.md`?
- **Relatórios em `relatorios/`:** há resultados que deveriam ser registrados em `estrategia.md` como aprendizado?

### Passo 3 — Proposta de mudanças

Apresentar pro usuário uma lista curta no formato:

```
Encontrei [N] coisas pra atualizar:

1. _memoria/estrategia.md — prioridade "X" aparece como pendente, mas vi entrega concluída em tarefas.md
2. _memoria/empresa.md — falta registrar o novo serviço mencionado na reunião de [data]
3. identidade/design-guide.md — peças recentes em conteudo/ usam cor diferente da registrada

Quer que eu aplique essas mudanças? Posso aplicar todas, escolher algumas, ou nenhuma.
```

### Passo 4 — Aplicação

Se o usuário aprovar, editar os arquivos com cirurgia — só a linha relevante, sem reformatar o documento todo. Mostrar o diff de cada mudança aplicada.

## Regras

- Não inventar fatos — só registrar o que tem evidência no workspace
- Se a evidência for ambígua, perguntar antes de atualizar
- Não apagar conteúdo dos arquivos de contexto — só atualizar e adicionar
- Se nenhuma mudança for necessária, responder: "Tá tudo coerente, nada pra atualizar"
