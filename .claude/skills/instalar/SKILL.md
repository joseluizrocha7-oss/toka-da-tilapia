---
name: instalar
description: >
  Instala o TheRockzOS para um cliente específico. Faz uma entrevista de onboarding
  para levantar o negócio, o mercado, o tom de voz, a identidade visual e o foco atual,
  e preenche todos os arquivos de memória. Use quando o usuário acabou de clonar o
  repositório para um novo cliente, ou pedir "/instalar".
---

# /instalar — Onboarding do cliente

Esse é o primeiro comando depois de clonar o TheRockzOS para um cliente novo.
Trata como conversa de descoberta — pergunta uma coisa por vez, escuta de verdade.
O objetivo é o sistema sair daqui conhecendo esse negócio profundamente o suficiente
para dar direções úteis desde a primeira sessão.

## Pré-checagem

Verificar se algum arquivo de memória já está preenchido (não é placeholder):
- `_memoria/empresa.md`
- `_memoria/mercado.md`
- `_memoria/preferencias.md`
- `_memoria/estrategia.md`

Se algum já tiver conteúdo real, perguntar:
> "Já tem algum contexto preenchido aqui. Quer que eu sobrescreva (recomeçar do zero) ou complemente o que falta?"

Se for setup limpo, seguir direto.

---

## Fase 1 — Entrevista de onboarding

Fazer em ordem, uma por vez. Escutar a resposta antes de seguir.

### Sobre o negócio
1. "Como se chama o negócio? (nome da empresa ou marca)"
2. "O que o negócio faz? (em uma frase — do jeito que o dono explicaria pro vizinho)"
3. "Quais são os produtos ou serviços principais?"
4. "Quem é o cliente ideal? (perfil real — quem compra, quem decide, qual dor resolve)"
5. "Onde o negócio atua? (local, regional, nacional, online)"

### Sobre o mercado
6. "Quem são os concorrentes diretos? (os que disputam o mesmo cliente)"
7. "O que diferencia esse negócio dos concorrentes? (na visão do dono)"
8. "Tem alguma oportunidade óbvia que ainda não foi explorada?"

### Sobre voz e comunicação
9. "Me cola um exemplo de como o negócio escreve — uma legenda, mensagem de WhatsApp, email. Qualquer coisa real e recente"
10. "O que te dá ranço quando vê em comunicação de outras marcas do setor? (ex: linguagem muito formal, emoji em excesso, promessas vagas)"

### Sobre foco atual
11. "Qual é o maior desafio do negócio hoje? O que tá segurando o crescimento?"
12. "Qual a prioridade dos próximos 30-60 dias? (ex: lançar site, fechar 5 clientes novos, aparecer no Google)"

### Sobre identidade visual
13. "Tem identidade visual definida? Se sim, me passa as cores principais e a fonte"
14. "Tem logo? Se sim, joga o arquivo em `identidade/logo.png` (ou `.svg`) e confirma"

---

## Fase 2 — Preenchimento dos arquivos

### `_memoria/empresa.md`
Preencher com base nas perguntas 1-5:
- Nome, o que faz, produtos/serviços, público ideal, localização/atuação

### `_memoria/mercado.md`
Preencher com base nas perguntas 6-8:
- Segmento, concorrentes diretos, diferencial competitivo, oportunidades

### `_memoria/preferencias.md`
Preencher com base nas perguntas 9-10:
- Tom de voz derivado do exemplo real (2-3 frases descrevendo o estilo)
- O que evitar (lista direta da resposta 10)

### `_memoria/estrategia.md`
Preencher com base nas perguntas 11-12:
- Desafio atual e prioridade dos próximos 30-60 dias

### `identidade/design-guide.md`
Se forneceu cores/fontes (perguntas 13-14), preencher os campos. Se não:
> "Deixei o `identidade/design-guide.md` em branco. Quando definir a identidade visual, edita lá — as skills de carrossel e proposta leem esse arquivo antes de criar qualquer visual."

---

## Fase 3 — Resumo

```
✓ Negócio configurado: _memoria/empresa.md
✓ Mercado mapeado: _memoria/mercado.md
✓ Tom de voz: _memoria/preferencias.md
✓ Foco atual: _memoria/estrategia.md
✓ Marca: identidade/design-guide.md  [preenchida | em branco — preencher depois]
✓ Contexto otimizado: .claudeignore e .geminiignore já configurados
```

---

## Fase 4 — Próximos passos

> "Pronto. O TheRockzOS já conhece o negócio.
>
> No começo de cada sessão de trabalho, roda `/abrir` — eu carrego tudo que combinamos aqui antes da primeira frase.
>
> Quanto mais você registrar aqui — reuniões, relatórios, resultados de campanha — mais contexto eu tenho pra dar direções melhores.
>
> Baseado no que você me contou, a primeira prioridade parece ser [síntese da resposta 12]. Quer começar por aí?"

---

## Regras

- Não inventar dados — se a resposta for vaga, registrar do jeito que veio
- Setup deve durar 10-15 minutos. Se o usuário estiver enrolando, registra o que tem e segue
- Não fazer perguntas extras além das listadas sem motivo claro
- Nunca escrever "este campo será preenchido pelo /instalar" nos arquivos finais
- Ao final, sugerir a próxima ação com base no que foi levantado (não deixar vazio)
