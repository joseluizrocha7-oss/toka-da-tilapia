---
name: email-profissional
description: >
  Rascunha um email profissional a partir de um contexto livre.
  Calibra o tom ao destinatário e ao objetivo do email.
  Use quando o usuário disser "escreve um email pra", "preciso mandar um email sobre",
  "como eu respondo isso", "faz um email pra [cliente/pessoa]", "manda o relatório por email".
---

# /email-profissional — Rascunho de email

## Dependências

- **Contexto:** `_memoria/empresa.md`
- **Tom:** `_memoria/preferencias.md`

---

## Workflow

### Passo 1 — Coletar contexto

Se o usuário não forneceu, perguntar:
1. "Pra quem é o email? (nome, cargo, relação)"
2. "Qual é o objetivo? (cobrar, propor, responder, agradecer, follow-up...)"
3. "Tem algo específico que precisa constar ou que precisa evitar dizer?"

Se o usuário deu contexto livre (mesmo que bagunçado), extrai o que der e prossegue.

### Passo 2 — Escrever o email

**Considerar:**
- Tom proporcional à relação (cliente novo = mais cuidado, parceiro antigo = mais direto)
- Objetivo claro na abertura — não enterrar o pedido no final
- Uma ação pedida por vez
- Encerramento limpo — sem "qualquer dúvida estou à disposição" automático

**Estrutura:**
```
Assunto: [linha direta e descritiva, sem clickbait]

[Nome],

[Parágrafo 1 — contexto ou referência ao último contato]

[Parágrafo 2 — o ponto principal ou o pedido]

[Parágrafo 3 — próximo passo, se houver]

[Assinatura — puxar nome de _memoria/empresa.md]
```

### Passo 3 — Opções de tom (quando fizer sentido)

Se o assunto for delicado (cobrança, feedback negativo, recusa), oferecer 2 versões:
- Versão A: mais direta
- Versão B: mais suave

---

## Regras

- Tom segue `_memoria/preferencias.md`
- Assunto do email deve ser específico, não vago ("Seguimento", "Proposta")
- Se for cobrança: direto mas sem agressividade
- Se for resposta a algo: citar o contexto na primeira linha
- Nunca usar linguagem corporativa genérica sem necessidade
