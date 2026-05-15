---
name: briefing-cliente
description: >
  Cria a pasta estruturada de um novo cliente com briefing completo, estrutura de entregas e
  CLAUDE.md dedicado. Faz uma entrevista curta pra levantar tudo que a agência precisa saber antes
  de começar a trabalhar. Use quando o usuário disser "novo cliente", "briefing do cliente",
  "/briefing-cliente", "vou fechar com X", "começa o projeto do cliente Y".
---

# /briefing-cliente — Onboarding de novo cliente

Cria tudo que a agência precisa pra começar a trabalhar com um cliente novo: pasta, briefing, CLAUDE.md dedicado e estrutura de entregas.

## Workflow

### Passo 1 — Entrevista de onboarding

Fazer em ordem, uma por vez:

**Sobre o cliente:**
1. "Qual o nome do cliente/empresa?"
2. "O que o negócio faz? (em uma frase — do jeito que o cliente explicaria pro vizinho)"
3. "Quem é o público? (perfil real — cliente tem ideia?)"
4. "Qual a situação atual? (presença online, redes, site, anúncios — o que já existe)"

**Sobre o contrato:**
5. "Quais serviços foram contratados? (lista dos entregáveis)"
6. "Qual a frequência e volume de entrega? (ex: 3 posts/semana, 1 carrossel/mês)"
7. "Qual o valor e a forma de pagamento? (pra registrar internamente)"
8. "Tem prazo específico pra alguma entrega? (lançamento, data comemorativa, etc)"

**Sobre a marca:**
9. "Tem identidade visual definida? (cores, fonte, logo)"
10. "Me passa um exemplo de como eles costumam escrever — legenda, email, qualquer coisa real"
11. "O que o cliente pediu pra nunca fazer? (tom, imagem, abordagem)"

**Sobre o contato:**
12. "Quem é o ponto de contato na empresa? (nome, cargo, WhatsApp/email)"
13. "Qual a frequência de reunião/check-in combinada?"

---

### Passo 2 — Criar estrutura de pastas

```
clientes/<Nome-do-cliente>/
  briefing.md              ← tudo da entrevista
  CLAUDE.md               ← contexto dedicado pro cliente
  identidade/
    design-guide.md       ← cores, fonte, logo do cliente
  conteudo/               ← posts, carrosséis, legendas
  ads/                    ← campanhas e exports
  seo/                    ← pesquisa e estratégia
  relatorios/             ← relatórios mensais
  saidas/                 ← arquivos pontuais, análises
  tarefas.md              ← pipeline de entregas do cliente
```

Criar só as subpastas dos serviços contratados (pergunta 5). Não criar pasta de ads se não tem ads no contrato.

---

### Passo 3 — Preencher briefing.md

```markdown
# Briefing — <Nome do cliente>
*Criado em: <data>*

## Sobre o negócio
**Empresa:** <nome>
**O que faz:** <uma frase>
**Público:** <perfil real>
**Situação atual:** <presença online, o que já tem>

## Contrato
**Serviços:** <lista>
**Volume:** <frequência de entrega>
**Valor:** <valor mensal>
**Pagamento:** <forma>
**Prazos específicos:** <se houver>

## Marca e voz
**Identidade visual:** <cores, fonte>
**Tom de voz:** <como escreve, com exemplo>
**O que nunca fazer:** <restrições>

## Contato
**Ponto de contato:** <nome, cargo>
**WhatsApp/email:** <contato>
**Frequência de reunião:** <combinado>

## Notas internas
<observações relevantes que não encaixam acima>
```

---

### Passo 4 — Preencher identidade/design-guide.md

Com as cores, fontes e logo informados. Se não tiver ainda, deixar em branco e avisar que as skills visuais vão usar o padrão da agência até ser preenchido.

---

### Passo 5 — Criar CLAUDE.md do cliente

```markdown
# <Nome do cliente> — TheRockzOS

> Cliente da Rocha Digital Studio. Pasta dedicada — instruções aqui
> sobrescrevem as da raiz quando relevantes.

## Sobre o cliente

<2-3 linhas sobre o negócio e o público>

## Serviços contratados

- <serviço 1>
- <serviço 2>

## Onde salvar o que

- Conteúdo (posts, carrosséis): conteudo/
- Campanhas pagas: ads/
- SEO e estratégia: seo/
- Relatórios: relatorios/

## Voz do cliente

<resumo do tom de voz + o que evitar>

## Contexto que herda da raiz

Tom interno da Rocha Digital Studio e regras gerais do sistema. O tom de voz
e identidade visual acima são específicos do cliente e têm precedência.

## Específico desse cliente

<vazio — preencher com regras que aparecerem com o uso>
```

---

### Passo 6 — Criar tarefas.md do cliente

```markdown
# Tarefas — <Nome do cliente>

## Em andamento

## Próximas entregas

## Concluídas
```

---

### Passo 7 — Atualizar _memoria/empresa.md da raiz

Adicionar o cliente na lista de clientes ativos.

---

### Passo 8 — Resumo

```
✓ Cliente criado: clientes/<Nome>/
  ✓ briefing.md
  ✓ CLAUDE.md
  ✓ identidade/design-guide.md
  ✓ Subpastas: [lista]
  ✓ tarefas.md

Quando for trabalhar nesse cliente:
- Abre o terminal dentro de clientes/<Nome>/
- Ou menciona o nome do cliente no comando (ex: "carrossel pra <Nome>")
```

---

## Regras

- Não criar pasta pra serviço que não está no contrato
- Se o cliente já existe (pasta com mesmo nome), avisar e perguntar se é pra atualizar ou criar com sufixo
- Não inventar dados — registrar do jeito que veio
- Atualizar sempre empresa.md da raiz com o novo cliente
