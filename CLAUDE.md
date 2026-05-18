# TheRockzOS

> Sistema de inteligência por cliente. Cada pasta é um cliente — com memória,
> histórico e contexto acumulado. Quanto mais informação registrada aqui,
> mais preciso o diagnóstico, a estratégia e as entregas da IA.

## O que é esse workspace

Uma instância do TheRockzOS dedicada a um único negócio. Todas as decisões,
conteúdos, campanhas, reuniões e resultados ficam registrados aqui e se tornam
base de conhecimento para Claude, Gemini e Codex entenderem esse negócio
profundamente — e darem direções cada vez mais precisas.

**Estrutura de pastas:**
- `_memoria/` — quem é o cliente, como fala, em que mercado atua, foco atual
- `identidade/` — marca do cliente (aplicada em todas as peças geradas)
- `conteudo/` — posts, carrosséis e textos produzidos
- `ads/` — campanhas pagas e exports de performance
- `seo/` — pesquisa de palavras-chave, estratégia e resultados
- `relatorios/` — relatórios mensais de performance
- `reunioes/` — notas de reuniões e decisões importantes
- `saidas/` — diagnósticos, análises e documentos pontuais
- `dados/` — arquivos brutos a analisar (CSV, XLSX, PDF)
- `scripts/` — automações específicas desse cliente
- `tarefas.md` — entregas em andamento e próximas ações

---

## Contexto do cliente

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — o negócio: o que faz, público, diferenciais
2. `_memoria/mercado.md` — concorrência, posicionamento, oportunidades
3. `_memoria/preferencias.md` — tom de voz, estilo, o que evitar
4. `_memoria/estrategia.md` — foco atual, metas, prazos
5. `identidade/design-guide.md` — referência visual para peças geradas

Usar essas informações como base para qualquer resposta ou decisão. Ao
sugerir conteúdo, campanhas ou estratégia, considerar o mercado e o foco
atual descritos nos arquivos de memória.

Não listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Memória acumulada

O histórico registrado nesse workspace é inteligência sobre o negócio.
Antes de sugerir qualquer estratégia, considerar:

- `relatorios/` — o que funcionou e o que não funcionou em campanhas anteriores
- `reunioes/` — decisões tomadas e direções combinadas com o cliente
- `seo/` — quais palavras e temas já foram trabalhados
- `ads/` — quais criativos e públicos já foram testados
- `conteudo/` — quais formatos e temas já foram produzidos

Quanto mais registros existirem, mais embasada é a sugestão.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Regras do sistema

- Conteúdo novo → salvar em `conteudo/` com data no nome
- Campanha nova → criar pasta em `ads/<campanha>/`
- Reunião → registrar em `reunioes/<YYYY-MM-DD>.md` com decisões e próximos passos
- Relatório mensal → `relatorios/<YYYY-MM>.md`
- Análise ou diagnóstico → `saidas/<tema>-<data>.md`
- Atualizar `tarefas.md` sempre que uma entrega mudar de status

---

## Aprender com correções

Quando o usuário corrigir algo ou der instrução permanente (frases como
"na verdade é assim", "não faça mais isso", "prefiro assim", "sempre
que...", "evita..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (produto, público, mercado) → `_memoria/empresa.md`
- **Sobre o mercado** (concorrentes, posicionamento) → `_memoria/mercado.md`
- **Sobre tom e estilo** → `_memoria/preferencias.md`
- **Sobre prioridades e foco** → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (novo serviço, mudança de
foco, resultado de campanha), perguntar:

> "Isso mudou algo no contexto. Quer que eu atualize a memória?"

Se sim:

- **Negócio, produto, público** → `_memoria/empresa.md`
- **Concorrência, oportunidade** → `_memoria/mercado.md`
- **Mudança de prioridade** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Dica: rode `/atualizar` pra varredura completa.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/`
2. Perguntar se é específica desse cliente ou global:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md`
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md`
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
4. Se a skill precisar de arquivos de apoio, criar dentro da pasta da skill

---

## Skills disponíveis

**Núcleo:**
`/abrir` · `/salvar` · `/atualizar` · `/instalar` · `/mapear-rotinas`

**Conteúdo e SEO:**
`/carrossel` · `/publicar-tema` · `/seo` · `/responder-avaliacoes` · `/aprovar-post`

**Anúncios pagos:**
`/anuncio-google` · `/relatorio-ads`

**Estratégia:**
`/diagnostico`

**Produção:**
`/proposta` · `/analisar-dados` · `/email-profissional`
