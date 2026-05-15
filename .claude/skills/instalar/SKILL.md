---
name: instalar
description: >
  Instala o TheRockzOS na operação da agência. Entrevista sobre equipe, serviços, clientes,
  tom de voz, foco atual e identidade visual, e preenche _memoria/empresa.md, _memoria/preferencias.md,
  _memoria/estrategia.md, identidade/design-guide.md e adapta o CLAUDE.md conforme a realidade da agência.
  Use quando o usuário acabou de clonar o repositório e quer fazer o setup inicial, ou pedir "/instalar".
---

# /instalar — Instalação inicial do TheRockzOS

Esse é o primeiro comando depois de clonar o repositório. Trata como conversa de descoberta — pergunta uma coisa por vez, escuta de verdade. O objetivo é o sistema sair daqui sabendo quem é a agência, como ela fala, e onde tá o atrito do dia a dia.

## Pré-checagem

### 1. Arquivos de contexto

Verificar se algum arquivo de memória já está preenchido (não é placeholder):
- `_memoria/empresa.md`
- `_memoria/preferencias.md`
- `_memoria/estrategia.md`
- `identidade/design-guide.md`

Se algum já tiver conteúdo real, perguntar:
> "Já tem algum contexto preenchido aqui. Quer que eu sobrescreva (recomeçar do zero) ou complemente o que falta?"

Se for setup limpo, seguir direto.

---

## Fase 1 — Entrevista da agência

Fazer em ordem, uma por vez. Escutar a resposta antes de seguir.

**Sobre a agência:**
1. "Como se chama a agência? (confirmar se é Rocha Digital Studio ou tem outro nome pra marca)"
2. "Quais serviços vocês oferecem? (lista rápida — pode ser informal)"
3. "Quantas pessoas na equipe hoje? Se tiver sócio, colaborador ou freelancer fixo, me fala quem faz o quê"
4. "Quantos clientes ativos vocês têm agora? Me passa os nomes se tiver"
5. "Qual o perfil de cliente ideal? (tipo de negócio, porte, região, dor que resolve)"

**Sobre voz:**
6. "Me cola um exemplo de como você escreve pra cliente — uma mensagem de WhatsApp, email de proposta, legenda do Insta. Qualquer coisa real e recente"
7. "O que te dá ranço quando vê texto de marketing? (ex: 'alavancar', 'soluções inovadoras', emoji em todo parágrafo)"

**Sobre foco:**
8. "Qual é o maior gargalo da agência hoje? O que tá segurando o crescimento?"
9. "Se eu pudesse tirar UMA tarefa que você repete toda semana das suas costas, qual seria?"

**Sobre identidade visual:**
10. "A agência tem identidade visual definida? Se sim, me passa as cores principais e a fonte"
11. "Tem logo? Se sim, joga o arquivo em `identidade/logo.png` (ou `.svg`) e me confirma"

---

## Fase 2 — Preenchimento dos arquivos

### `_memoria/empresa.md`
Preencher com base nas perguntas 1-5:
- Nome, serviços, equipe, clientes ativos, perfil de cliente ideal

### `_memoria/preferencias.md`
Preencher com base nas perguntas 6-7:
- Tom de voz derivado do exemplo real (2-3 frases descrevendo o estilo)
- O que evitar (lista direta da resposta 7)
- Estilo geral: síntese do que combina e do que destoa

### `_memoria/estrategia.md`
Preencher com base nas perguntas 8-9:
- Gargalo atual
- Tarefa a automatizar (candidata ao `/mapear-rotinas`)
- Próximas prioridades (derivadas do gargalo)

### `identidade/design-guide.md`
Se forneceu cores/fontes (perguntas 10-11), preencher os campos. Se não:
> "Deixei o `identidade/design-guide.md` em branco. Quando definir a identidade visual, edita lá — as skills de carrossel e proposta leem esse arquivo antes de criar qualquer visual."

### `CLAUDE.md`
Adaptar com o nome da agência e clientes ativos. Não reformatar — só atualizar os campos relevantes.

---

## Fase 3 — Criar pastas dos clientes ativos

Se o usuário informou clientes ativos na pergunta 4, criar a pasta de cada um:

```bash
mkdir clientes/<Nome-do-cliente>
```

Com `briefing.md` básico (nome, serviços contratados, contato) e `tarefas.md` inicial.

---

## Fase 4 — Resumo

```
✓ Agência configurada: _memoria/empresa.md
✓ Tom de voz: _memoria/preferencias.md
✓ Foco atual: _memoria/estrategia.md
✓ Marca: identidade/design-guide.md  [preenchida | em branco — preencher depois]
✓ CLAUDE.md atualizado
✓ Clientes: [N pastas criadas em clientes/]
```

---

## Fase 5 — Próximos passos

> "Pronto. O TheRockzOS já conhece a agência.
>
> No começo de cada sessão de trabalho, roda `/abrir` — eu carrego tudo que combinamos aqui antes da primeira frase.
>
> Você mencionou que repete '<resposta da pergunta 9>' toda semana. Quando quiser transformar isso em automação, roda `/mapear-rotinas`.
>
> Quando fechar um cliente novo, roda `/briefing-cliente` — ele cria a pasta estruturada e levanta tudo que você precisa saber do cliente antes de começar."

---

## Regras

- Não inventar dados — se a resposta for vaga, registrar do jeito que veio
- Setup deve durar 5-10 minutos. Se o usuário estiver enrolando numa pergunta, registra o que tem e segue
- Não fazer perguntas extras além das listadas sem motivo claro
- Nunca escrever "este campo será preenchido pelo /instalar" nos arquivos finais
