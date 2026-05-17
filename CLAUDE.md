# TheRockzOS — Personal Emerson

> Workspace dedicado ao projeto Personal Emerson.
> Funil de vendas digital para o personal trainer Emerson:
> landing page + Meta Ads + Asaas + email automático.

## O que é esse workspace

Operação do funil de vendas do Personal Emerson. Landing page vendendo
assinaturas do app MFIT Personal (Q R$497 / S R$697 / A R$997),
tráfego pago via Meta Ads e checkout via Asaas.

**Estrutura de pastas:**
- `_memoria/` — quem somos, como falamos, foco atual
- `identidade/` — marca da agência (aplicada nas peças)
- `clientes/` — uma subpasta por cliente, autossuficiente
- `briefings/` — briefings de leads antes de virar cliente
- `propostas/` — propostas comerciais em andamento
- `marketing/` — conteúdo institucional da agência
- `saidas/` — documentos pontuais, análises, relatórios internos
- `dados/` — arquivos a analisar (exports, planilhas, relatórios)
- `scripts/` — automações e ferramentas internas
- `templates/` — modelos reutilizáveis (perfis, skills, ferramentas)
- `tarefas.md` — pipeline da agência

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é a agência, serviços, clientes, equipe
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, proposta, slide), consultar
`identidade/design-guide.md` como referência de estilo.

Não listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível,
perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Regras do sistema

- Cliente novo → criar pasta `clientes/<Nome>/` com `/novo-projeto` ou `/briefing-cliente`
- Proposta nova → `propostas/<cliente>-<data>.html` via `/proposta`
- Casos de sucesso → `clientes/<Nome>/caso.md` (reuso em pitches futuros)
- Pipeline atualizado → `tarefas.md` (roda `/pipeline` pra atualizar)
- Conteúdo de cliente → dentro de `clientes/<Nome>/conteudo/`

---

## Aprender com correções

Quando o usuário corrigir algo ou der instrução permanente (frases como
"na verdade é assim", "não faça mais isso", "prefiro assim", "sempre
que...", "evita..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre a agência** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** → `_memoria/preferencias.md`
- **Sobre prioridades e foco** → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco), perguntar:

> "Isso mudou algo no contexto. Quer que eu atualize a memória?"

Se sim:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Dica: rode `/atualizar` pra varredura completa.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`
2. Perguntar se é específica desse projeto ou global:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md`
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md`
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
4. Se a skill precisar de arquivos de apoio, criar dentro da pasta da skill

---

## Skills disponíveis

**Núcleo:**
`/abrir` · `/salvar` · `/atualizar` · `/novo-projeto` · `/mapear-rotinas` · `/instalar`

**Conteúdo e SEO:**
`/carrossel` · `/publicar-tema` · `/seo` · `/responder-avaliacoes` · `/aprovar-post`

**Anúncios pagos:**
`/anuncio-google` · `/relatorio-ads`

**Agência (exclusivas TheRockzOS):**
`/proposta` · `/briefing-cliente` · `/pipeline`

**Produção:**
`/analisar-dados` · `/email-profissional`
