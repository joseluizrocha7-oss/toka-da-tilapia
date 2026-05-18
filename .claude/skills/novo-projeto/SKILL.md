---
name: novo-projeto
description: >
  Cria uma subpasta de projeto com CLAUDE.md dedicado, depois de uma entrevista curta sobre
  o projeto (objetivo, entregas previstas). Use quando o usuário disser "novo projeto",
  "nova iniciativa", "/novo-projeto", "começar projeto X" ou pedir pra estruturar um trabalho novo
  dentro do projeto atual.
---

# /novo-projeto — Subpasta de projeto com contexto dedicado

## Workflow

### Passo 1 — Entrevista (3 perguntas)

1. "Qual o nome do projeto ou iniciativa?"
2. "Qual o objetivo principal? (uma frase)"
3. "Que tipo de entrega vai ter? (ex: site, campanha, conteúdo, automação — pode ser mais de uma)"

### Passo 2 — Decidir local

Baseado no tipo de entrega:

- **Site ou LP:** criar em `sites/<nome>/`
- **Campanha de anúncios:** criar em `ads/<nome>/`
- **Projeto de conteúdo:** criar em `conteudo/<nome>/`
- **Automação ou script:** criar em `scripts/<nome>/`
- **Outro:** perguntar onde o usuário prefere

### Passo 3 — Estrutura básica

Criar a pasta com:

- `CLAUDE.md` do projeto (instruções herdadas + específicas)
- `briefing.md` (com o que foi coletado na entrevista)
- Subpastas conforme as entregas mencionadas (ex: `social/`, `ads/`, `site/`)

### Passo 4 — Conteúdo do `CLAUDE.md` do projeto

```markdown
# [Nome do projeto]

> Projeto criado em [data]. Pasta dedicada — instruções aqui sobrescrevem as da raiz quando relevantes.

## Sobre

[Objetivo da resposta 2]

## Entregas previstas

- [entrega 1]
- [entrega 2]

## Onde salvar o que

- Contexto e decisões: nessa pasta na raiz
- Entregas: cada subpasta criada

## Contexto que herda da raiz

Tom de voz, marca e contexto do cliente definidos em `_memoria/` e `identidade/` da raiz. Não duplicar aqui.

## Específico desse projeto

[Vazio — preencher com regras que valem só pra esse projeto]
```

### Passo 5 — Resumo

```
Pasta criada: [caminho]
✓ CLAUDE.md do projeto
✓ briefing.md
✓ Subpastas: [lista]

Quando for trabalhar nesse projeto, abre o terminal já dentro da pasta.
```

## Regras

- Nome de pasta: usar o nome como o usuário falou (espaços viram hífen, manter acentos)
- Não criar subpastas que não foram pedidas
- Se o cliente/projeto já existe, avisar e perguntar se é pra adicionar dentro ou criar com sufixo
