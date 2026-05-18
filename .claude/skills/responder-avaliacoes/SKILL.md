---
name: responder-avaliacoes
description: >
  Escreve respostas curtas e humanas pras avaliações do Google Meu Negócio de um cliente ou da agência.
  Mantém o padrão: nome do cliente, agradecimento variado, frase concreta sobre o produto/serviço, emoji opcional.
  Use quando o usuário disser "responder avaliação", "resposta pro Google", "tem uma avaliação nova",
  "me ajuda a responder essas reviews", ou colar texto/print de uma review do Google.
  Se for pra cliente específico, perguntar qual.
---

# /responder-avaliacoes — Respostas pras avaliações do Google

## Dependências

- **Tom de voz:** `_memoria/preferencias.md`
- **Contexto:** `_memoria/empresa.md`

---

## Padrão de resposta

Respostas são **curtas** (1 a 2 frases), **pessoais** e **concretas**. Nada de resposta automática.

### Regras fixas

1. **Sempre citar o nome do cliente** — primeiro nome, capitalização correta
2. **Sempre agradecer** — variar: "Obrigado", "Muito obrigado", "Que bom", "Valeu"
3. **Frase concreta** — puxar algo específico da review ou do negócio. Evitar "seu feedback é importante pra nós"
4. **Emoji no final** — em reviews calorosas. Pular em reviews formais ou críticas. Nunca mais de 1
5. **Tom:** seguir `_memoria/preferencias.md`. Sem jargão de marketing

### Calibrar pelo tipo de review

| Tipo | Abordagem |
|---|---|
| 5★ elogio específico | Agradecer + eco da coisa elogiada + emoji caloroso |
| 5★ genérica/curta | Agradecer + frase sobre cuidado/processo + emoji opcional |
| 5★ sem texto | Agradecimento curto, sem inventar contexto |
| 4★ com ressalva | Agradecer + reconhecer o ponto + compromisso simples, sem emoji |
| 3★ ou menos | **Parar e alinhar com o usuário antes de responder** |

---

## Workflow

### Passo 1 — Receber a(s) avaliação(ões)

Extrair pra cada uma: nome do autor, nota, texto (se tiver). Se for print, ler e transcrever antes.

### Passo 2 — Escrever a resposta

Seguir o padrão acima. Nunca copiar resposta idêntica pra reviews diferentes.

### Passo 3 — Entregar em formato fácil de copiar

```
**[Nome do autor]** — [estrelas] — "[trecho curto da review]"
→ [resposta]
```

### Passo 4 — Salvar o histórico (se pedir)

Salvar em `saidas/avaliacoes-google/YYYY-MM-DD-respostas.md`. Só criar se o usuário pedir.

---

## Regras

- Nunca copiar respostas idênticas pra reviews diferentes
- Não prometer o que não depende só do negócio
- Não usar nome completo do cliente — só primeiro nome
- Em reviews negativas: reconhecer, não se defender, oferecer canal privado só se autorizado
