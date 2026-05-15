# TheRockzOS — Sistema operacional da Rocha Digital Studio

Fork personalizado do [MazyOS](https://github.com/mazzeoia/MazyOS), adaptado pra operação de agência de marketing digital.

---

## Instalação

### Pré-requisitos

1. [VS Code](https://code.visualstudio.com/)
2. [Git](https://git-scm.com/downloads)
3. [Node.js LTS](https://nodejs.org)
4. [Claude Code](https://claude.ai/code): `npm install -g @anthropic-ai/claude-code`

### Primeira vez

```bash
git clone <URL-do-seu-repo> TheRockzOS
cd TheRockzOS
code .
```

No VS Code, abra o terminal integrado (`Ctrl + '`), digite `claude` e rode:

```
/instalar
```

O setup dura ~10 minutos. Ao final, o sistema vai conhecer a agência, o tom de voz e o foco atual.

---

## As 18 skills

### Núcleo
- `/abrir` — carrega o contexto antes de cada sessão
- `/salvar` — commit + push no GitHub
- `/atualizar` — varre o projeto e atualiza a memória
- `/instalar` — setup inicial (rodar uma vez)
- `/mapear-rotinas` — transforma tarefas repetitivas em skills personalizadas

### Clientes e projetos
- `/briefing-cliente` — cria pasta estruturada de novo cliente com entrevista completa
- `/novo-projeto` — cria pasta de projeto interno ou iniciativa
- `/pipeline` — exibe e atualiza o funil comercial (leads → proposta → fechado)
- `/proposta` — cria proposta comercial profissional em HTML

### Conteúdo e SEO
- `/carrossel` — cria carrossel 1080x1350 + legenda prontos pra postar
- `/publicar-tema` — entrega artigo de blog + carrossel + 3 legendas num comando
- `/seo` — fluxo completo de SEO em 8 passos (demanda, concorrência, GMB, on-page, conteúdo, ads, monitoramento, GEO)
- `/responder-avaliacoes` — escreve respostas humanas pras reviews do Google
- `/aprovar-post` — publica no blog + Instagram + Facebook num comando

### Anúncios pagos
- `/anuncio-google` — monta campanha inteira em CSV pra importar no Google Ads Editor
- `/relatorio-ads` — lê exports de Google + Meta e devolve relatório semanal com alertas

### Produção
- `/analisar-dados` — lê CSV/XLSX/PDF e gera resumo executivo
- `/email-profissional` — rascunha email a partir de contexto livre

---

## Estrutura de pastas

```
TheRockzOS/
├── .claude/skills/     → as 18 skills do sistema
├── _memoria/           → quem é a agência, como fala, foco atual
├── identidade/         → marca da agência (cores, fontes, logo)
├── clientes/           → uma subpasta por cliente
├── briefings/          → leads antes de virar cliente
├── propostas/          → propostas comerciais
├── marketing/          → conteúdo institucional da agência
├── dados/              → arquivos a analisar
├── saidas/             → documentos pontuais
├── scripts/            → automações internas
├── templates/          → modelos reutilizáveis
├── tarefas.md          → pipeline comercial
└── CLAUDE.md           → regras de operação do sistema
```

---

## Baseado em

[MazyOS](https://github.com/mazzeoia/MazyOS) por Mazzeoia. Adaptado pra Rocha Digital Studio.
