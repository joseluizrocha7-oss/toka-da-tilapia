---
name: abrir
description: >
  Abre uma sessão de trabalho carregando o contexto do cliente (negócio, mercado,
  preferências, estratégia, identidade) e devolve um resumo curto. Use quando o
  usuário disser "abrir", "começar o dia", "/abrir" ou no primeiro turno de uma sessão.
---

# /abrir — Abertura de sessão

Curto e direto. O objetivo é carregar contexto e devolver uma síntese de uma frase pra começar a trabalhar.

## Workflow

1. Ler, em ordem:
   - `_memoria/empresa.md`
   - `_memoria/mercado.md`
   - `_memoria/preferencias.md`
   - `_memoria/estrategia.md`
   - `_memoria/stack.md`
   - `identidade/design-guide.md` (só pra saber se está preenchido ou em branco)

2. Se algum dos quatro primeiros estiver em branco (placeholder), responder:
   > "Vi que `_memoria/<arquivo>.md` ainda não foi preenchido. Quer rodar `/instalar` agora?"
   E parar.

3. Se tudo estiver preenchido, devolver UMA mensagem curta no formato:

```
[nome do cliente lido de empresa.md] — [o que faz em 5-8 palavras]
Foco atual: [prioridade da estratégia, em uma frase]
Tom: [resumo de 3-4 palavras do tom de voz]
Mercado: [diferencial ou oportunidade principal, em uma frase]

Pronto. O que vamos fazer?
```

4. Não listar quais arquivos foram lidos. Não confirmar leitura. Só usar o contexto.

## Regras

- Resposta tem que caber em 6 linhas no terminal
- Não fazer perguntas além de "o que vamos fazer?"
- Se o `design-guide.md` estiver em branco, não mencionar — só vira problema quando alguma skill visual for chamada
