---
name: reuniao
description: >
  Registra uma reunião com o cliente de forma estruturada em reunioes/<data>.md.
  Captura decisões, pendências e próximas ações de forma que o /diagnostico possa
  ler e usar no futuro. Use quando o usuário disser "registra a reunião", "anota o
  que combinamos", "resumo da call", "/reuniao" ou após uma conversa com o cliente.
---

# /reuniao — Registro de reunião

Transforma o relato de uma reunião num documento estruturado que alimenta a memória
do projeto. Cada reunião registrada aqui vira inteligência para o /diagnostico.

## Workflow

### Passo 1 — Coletar o relato

Se o usuário não forneceu o conteúdo da reunião, perguntar:

1. "Quando foi a reunião? (data e duração aproximada)"
2. "Quem participou?"
3. "Qual era o objetivo da reunião?"
4. "O que foi discutido? (pode ser informal, bullet points, parágrafo livre — eu estruturo)"
5. "Quais decisões foram tomadas?"
6. "O que ficou pendente ou combinado pra fazer?"

Se o usuário já trouxe um relato livre, usar como base e estruturar.

### Passo 2 — Criar o documento

Salvar em `reunioes/<YYYY-MM-DD>.md`:

```markdown
# Reunião — <DD/MM/YYYY>

**Participantes:** <lista>
**Duração:** <aproximada>
**Objetivo:** <em uma frase>

## O que foi discutido

<resumo dos tópicos principais — sem perder detalhes relevantes>

## Decisões tomadas

- <decisão 1>
- <decisão 2>

## Pendências e próximas ações

| Ação | Responsável | Prazo |
|------|-------------|-------|
| <ação 1> | <quem> | <quando> |
| <ação 2> | <quem> | <quando> |

## Contexto relevante

<observações que não encaixam acima mas podem ser úteis no futuro:
sentimento do cliente, objeções levantadas, mudanças de direção, etc.>
```

### Passo 3 — Verificar impacto na memória

Ao salvar, verificar se alguma decisão atualiza os arquivos de contexto:

- Nova prioridade ou mudança de foco → oferecer atualizar `_memoria/estrategia.md`
- Nova ferramenta ou integração → oferecer atualizar `_memoria/stack.md`
- Mudança no tom ou estilo → oferecer atualizar `_memoria/preferencias.md`
- Novo produto ou serviço → oferecer atualizar `_memoria/empresa.md`

Mostrar o que mudaria antes de editar. Perguntar:
> "Essa reunião muda algo na memória do projeto. Quer que eu atualize agora?"

### Passo 4 — Tarefas no pipeline

Se houver próximas ações definidas, oferecer adicionar em `tarefas.md`:
> "Tem [N] ações saindo dessa reunião. Adiciono em tarefas.md?"

## Regras

- Registrar o que foi dito, não o que deveria ter sido dito
- Se houver contradição com uma decisão anterior (em outra reunião), destacar: "Isso muda o que foi combinado em [data]"
- Não resumir demais — detalhes de contexto são o que tornam o registro útil para a IA no futuro
- Nomear o arquivo sempre com a data no formato `YYYY-MM-DD` para ordenação cronológica
