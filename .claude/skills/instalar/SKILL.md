---
name: instalar
description: >
  Instala o BaseOS para um cliente específico. Faz uma entrevista de onboarding
  para levantar o negócio, o mercado, o tom de voz, a identidade visual e o foco atual,
  e preenche todos os arquivos de memória. Use quando o usuário acabou de clonar o
  repositório para um novo cliente, ou pedir "/instalar".
---

# /instalar — Onboarding do cliente

Esse é o primeiro comando depois de clonar o BaseOS para um cliente novo.
Trata como conversa de descoberta — pergunta uma coisa por vez, escuta de verdade.
O objetivo é o sistema sair daqui conhecendo esse negócio profundamente o suficiente
para dar direções úteis desde a primeira sessão.

## Fase 0 — Ativar proteções

Antes de qualquer coisa, executar:

```bash
git config core.hooksPath .githooks
```

Isso ativa o hook de pre-commit que bloqueia commit acidental de dados do cliente
no repositório template. Confirmar com:

```bash
git config core.hooksPath
```

Se retornar `.githooks`, está ativo. Seguir.

---

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

### Sobre identidade visual e sites
13. "Tem identidade visual definida? Me passa: cor principal, cor de destaque, fonte dos títulos e fonte do corpo. (Se não tiver, inventamos agora — um bom padrão já ajuda)"
14. "Tem logo? Se sim, joga o arquivo em `identidade/logo.png` (ou `.svg`) e confirma"
15. "Tem site, landing page ou página para criar/manter? Quantos? (ex: 1 site + 2 LPs)"

### Sobre stack e ferramentas
16. "Já usa alguma ferramenta de marketing ou automação? (ex: Google Ads, Meta Ads, RD Station, Google Sheets, WhatsApp Business)"
17. "Onde o site fica hospedado hoje, ou onde quer hospedar? (ex: Cloudflare Pages, Vercel, sem site ainda)"

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
Preencher sempre — mesmo que o cliente não tenha identidade definida:
- Se forneceu cores/fontes: preencher os campos com os dados reais
- Se não tem identidade definida: propor um padrão funcional (cor neutra + Inter/Roboto) e registrar com nota "a definir com o cliente"

Nunca deixar em branco. Skills visuais sem identidade geram peças genéricas e sem aprovação.

### `_memoria/stack.md`
Preencher com base nas perguntas 16-17:
- Ferramentas ativas de anúncios, CRM, automação
- Plataforma de hospedagem escolhida
- Qualquer integração mencionada

### `sites/`
Se informou sites ou LPs (pergunta 15), criar as subpastas:
```
sites/principal/      ← site institucional (se houver)
sites/lp-<nome>/      ← uma subpasta por landing page
```
Explicar:
> "Cada subpasta em `sites/` é um projeto independente no Cloudflare Pages.
> Configure cada um apontando para a subpasta correspondente — só aquela pasta vai pro deploy,
> o restante do repositório fica protegido."

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

## Fase 4 — Criar repositório privado do cliente

Este passo é obrigatório. Os dados do cliente não devem ficar no repositório template.

Orientar o usuário:

> "Agora preciso que você crie um repositório PRIVADO para esse cliente no GitHub.
> É rápido — vai em github.com/new, nome sugerido: `[nome-do-cliente-em-kebab-case]`, marque 'Private'."

Quando o usuário confirmar que criou, executar:

```bash
git remote set-url origin <URL-fornecida-pelo-usuário>
git push -u origin master
```

Confirmar que o push funcionou antes de seguir.

> "Perfeito. Os dados do [nome do cliente] agora estão no repositório privado dele.
> O template do BaseOS continua limpo e seguro para o próximo cliente."

---

## Fase 5 — Próximos passos

> "Pronto. O BaseOS já conhece o negócio.
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
