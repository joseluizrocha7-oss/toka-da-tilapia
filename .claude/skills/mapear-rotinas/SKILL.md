---
name: mapear-rotinas
description: >
  Mapeia tarefas repetitivas que o usuário faz no dia a dia e gera skills personalizadas pra
  automatizá-las. Faz uma entrevista curta sobre o que o usuário repete toda semana, propõe
  skills concretas e cria as aprovadas em .claude/skills/. Use quando o usuário pedir
  "/mapear-rotinas", "criar skills personalizadas", "automatizar minhas tarefas" ou "o que dá pra automatizar".
---

# /mapear-rotinas — Mapeamento de tarefas repetitivas em skills

Skill de descoberta + criação. O objetivo é transformar o que a agência repete em automações ativas.

## Workflow

### Passo 1 — Entrevista de descoberta

Fazer 3 perguntas, uma por vez:

1. "Quais 3 tarefas você repete toda semana na agência e gostaria de não ter que pensar mais? (ex: 'montar relatório de cliente', 'criar carrossel', 'responder orçamento')"
2. "Pra cada uma delas, qual o input típico? (ex: 'um export do Meta Ads', 'um tema de conteúdo', 'um briefing de cliente')"
3. "E o que você espera de output? (ex: 'um PDF pronto pra enviar', '5 slides HTML', 'um email com proposta')"

### Passo 2 — Conferir catálogo

Ler `templates/skills/catalogo.md` pra ver se alguma tarefa já é coberta por uma skill existente. Se sim:

> "A tarefa X já é resolvida pela skill `/<nome>` que vem no TheRockzOS. Quer usar ela?"

### Passo 3 — Proposta de skills

Pra cada tarefa sem cobertura existente:

```
### /<nome-da-skill>
**O que faz:** [uma frase]
**Input:** [o que recebe]
**Output:** [o que entrega]
**Dependências:** [arquivos do _memoria/, identidade/, ferramentas externas]
```

Mostrar todas juntas e perguntar:
> "Quais dessas você quer que eu crie agora?"

### Passo 4 — Criação das skills aprovadas

Pra cada skill aprovada:

1. Criar pasta `.claude/skills/<nome>/`
2. Criar `SKILL.md` com frontmatter, workflow estruturado, dependências e regras
3. Calibrar tom e regras conforme `_memoria/preferencias.md` e `_memoria/empresa.md`

### Passo 5 — Resumo

```
Criei [N] skills:
✓ /<nome1> — em .claude/skills/<nome1>/SKILL.md
...

Pra usar: digita / e o nome da skill em qualquer sessão.
```

## Regras

- Não criar skill pra tarefa que aconteceu uma vez só
- Não criar mais de 5 skills por sessão (se pedir mais, dividir em rodadas)
- Cada skill precisa ter um trigger claro no `description`
- Se a skill depender de ferramenta não instalada (ex: MCP do Notion), avisar antes de criar
