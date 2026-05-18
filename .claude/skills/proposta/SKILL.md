---
name: proposta
description: >
  Cria uma proposta comercial profissional em HTML pra um lead ou cliente. Faz uma entrevista
  curta sobre o briefing, o pacote de serviços e o valor, e gera um documento pronto pra enviar.
  Use quando o usuário disser "cria uma proposta pra", "proposta comercial", "proposta pro cliente X",
  "/proposta", ou "preciso fechar com X".
---

# /proposta — Proposta comercial profissional

Gera proposta comercial em HTML, estilizada com a identidade da agência, pronta pra enviar por link ou PDF.

## Dependências

- **Identidade visual:** `identidade/design-guide.md`
- **Contexto da agência:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Briefing do lead (se existir):** `briefings/<Nome>.md`
- **Output:** `propostas/<Nome-do-cliente>-<YYYY-MM-DD>.html`

---

## Workflow

### Passo 1 — Briefing da proposta

Se já existe briefing em `briefings/<Nome>.md`, usar como base. Caso contrário, perguntar:

1. "Qual o nome do lead/empresa?"
2. "O que o negócio faz? (uma frase)"
3. "Qual o problema ou objetivo que eles querem resolver?"
4. "Quais serviços você vai propor? (lista dos entregáveis)"
5. "Qual o valor? (pode ser faixa ou valor fixo)"
6. "Tem prazo de início ou vigência do contrato?"
7. "Tem algum diferencial específico que você quer destacar nessa proposta?"

---

### Passo 2 — Montar estrutura da proposta

**Seções padrão:**

1. **Capa** — logo da agência, nome do lead, data
2. **Quem somos** — 2-3 linhas sobre a agência (puxar de `empresa.md`)
3. **O problema/oportunidade** — resumo do que foi levantado no briefing
4. **Nossa proposta** — serviços, escopo e entregáveis com detalhamento
5. **Como funciona** — processo de trabalho, frequência, ponto de contato
6. **Investimento** — tabela de valores (mensal ou por projeto)
7. **Prazo e próximos passos** — quando começa, o que o lead precisa fazer pra fechar
8. **Contato** — nome, WhatsApp, email, site

---

### Passo 3 — Escrever o conteúdo

Seguir `_memoria/preferencias.md` estritamente:
- Direto ao ponto — sem enrolação no começo
- Concreto — o que exatamente o lead vai receber, não promessas vagas
- Sem jargão de agência ("estratégias omnichannel", "soluções integradas") a menos que o lead use e espere
- Valor claro — não enterrar o preço no final ou deixar vago

---

### Passo 4 — Criar o HTML

Proposta em HTML com:
- Identidade visual da agência (cores, fonte, logo de `identidade/design-guide.md`)
- Layout limpo, legível em tela e imprimível em PDF
- Logo no topo, tabela de serviços e valores bem formatada
- Botão de ação final: WhatsApp ou email pra fechar

Estrutura de arquivo HTML responsivo, sem dependências externas além do Google Fonts. Inline CSS.

---

### Passo 5 — Salvar e confirmar

```
propostas/<Nome-do-cliente>-<YYYY-MM-DD>.html
```

Mostrar pro usuário:
> "Proposta salva. Pra gerar PDF: abrir no Chrome → Ctrl+P → Salvar como PDF (sem margens, fundo colorido ativado)."

---

### Passo 6 — Registrar no briefings/ (se lead novo)

Se ainda não existe pasta do lead, criar `briefings/<Nome>.md` com os dados coletados na entrevista (pra referência futura, mesmo que ele não feche).

---

## Regras

- Nunca inventar serviços que não foram mencionados na entrevista
- Valor claro e explícito — proposta com "a consultar" não fecha
- Não usar PDF de terceiros ou template online — gerar HTML próprio sempre
- Se o lead já é cliente (existe `clientes/<Nome>/`), salvar também em `clientes/<Nome>/propostas/`
- Sempre mostrar o HTML renderizado antes de considerar concluído
