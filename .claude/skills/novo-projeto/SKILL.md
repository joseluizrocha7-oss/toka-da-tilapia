---
name: novo-projeto
description: >
  Cria uma pasta de projeto nova com CLAUDE.md dedicado, depois de uma entrevista curta sobre
  o projeto (cliente, objetivo, entregas previstas). Use quando o usuário disser "novo projeto",
  "novo cliente", "/novo-projeto", "começar projeto pra X" ou pedir pra estruturar um trabalho novo.
  Para clientes, prefira /briefing-cliente que é mais completo.
---

# /novo-projeto — Pasta de projeto novo com contexto dedicado

## Workflow

### Passo 1 — Entrevista (4 perguntas)

1. "Qual o nome do projeto ou cliente?"
2. "É um cliente novo, projeto interno ou iniciativa da agência?"
3. "Qual o objetivo principal? (uma frase)"
4. "Que tipo de entrega vai ter? (ex: social, ads, site, SEO, IA, proposta — pode ser mais de uma)"

### Passo 2 — Decidir local

Baseado na resposta 2:

- **Cliente novo:** criar em `clientes/<Nome>/`
- **Projeto interno:** criar em `marketing/<nome>/` ou `scripts/<nome>/` conforme o tipo
- **Iniciativa da agência:** perguntar onde o usuário prefere

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

[Objetivo da resposta 3]

## Tipo

[Cliente novo / Projeto interno / Iniciativa da agência]

## Entregas previstas

- [entrega 1]
- [entrega 2]

## Onde salvar o que

- Briefings e contexto: nessa pasta na raiz
- Entregas: cada subpasta criada

## Contexto que herda da raiz

Tom de voz, marca e contexto da agência definidos em `_memoria/` e `identidade/` da raiz. Não duplicar aqui.

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
