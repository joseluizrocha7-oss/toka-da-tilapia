# TheRockzOS — Sistema de inteligência por cliente

Fork personalizado do [MazyOS](https://github.com/mazzeoia/MazyOS), redesenhado
como plataforma de inteligência dedicada a um único negócio.

---

## A ideia

Cada cliente tem a sua própria instância do TheRockzOS. Você clona o template,
instala com as informações do cliente, e começa a trabalhar. Com o tempo, tudo
que é produzido aqui — conteúdo, campanhas, reuniões, relatórios, pesquisas SEO
— se acumula como base de conhecimento.

Claude, Gemini e Codex leem esse histórico antes de responder. Quanto mais
contexto acumulado, mais preciso o diagnóstico, mais afinada a estratégia,
mais relevante o conteúdo gerado.

---

## Instalação

### Pré-requisitos

1. [VS Code](https://code.visualstudio.com/)
2. [Git](https://git-scm.com/downloads)
3. [Node.js LTS](https://nodejs.org)
4. [Claude Code](https://claude.ai/code): `npm install -g @anthropic-ai/claude-code`

### Para cada cliente novo

```bash
# Clone o template para a pasta do cliente
git clone <URL-do-seu-repo> "Nome do Cliente"
cd "Nome do Cliente"
code .
```

No VS Code, abra o terminal integrado (`Ctrl + '`), digite `claude` e rode:

```
/instalar
```

O setup dura ~10 minutos. Ao final, o sistema conhece o negócio, o mercado,
o tom de voz e o foco atual do cliente.

---

## Como a inteligência se acumula

| O que você registra | Onde fica | O que a IA aprende |
|---|---|---|
| Informações do negócio | `_memoria/empresa.md` | Produto, público, diferenciais |
| Mercado e concorrência | `_memoria/mercado.md` | Posicionamento, oportunidades |
| Reuniões com o cliente | `reunioes/` | Decisões, direções, histórico |
| Relatórios mensais | `relatorios/` | O que funcionou, tendências |
| Campanhas de ads | `ads/` | Criativos, públicos, resultados |
| Pesquisa SEO | `seo/` | Palavras-chave, gaps, oportunidades |
| Conteúdo produzido | `conteudo/` | Temas, formatos, frequência |

---

## As skills

### Núcleo
- `/abrir` — carrega o contexto do cliente antes de cada sessão
- `/salvar` — commit + push no GitHub
- `/atualizar` — varre o projeto e atualiza a memória
- `/instalar` — setup inicial (rodar uma vez por cliente)
- `/mapear-rotinas` — transforma tarefas repetitivas em skills personalizadas

### Conteúdo e SEO
- `/carrossel` — cria carrossel 1080x1350 + legenda prontos pra postar
- `/publicar-tema` — entrega artigo de blog + carrossel + 3 legendas num comando
- `/seo` — fluxo completo de SEO em 8 passos
- `/responder-avaliacoes` — escreve respostas humanas pras reviews do Google
- `/aprovar-post` — publica no blog + Instagram + Facebook num comando

### Anúncios pagos
- `/anuncio-google` — monta campanha inteira em CSV pra importar no Google Ads Editor
- `/relatorio-ads` — lê exports de Google + Meta e devolve relatório com alertas

### Produção
- `/proposta` — cria proposta comercial em HTML
- `/analisar-dados` — lê CSV/XLSX/PDF e gera resumo executivo
- `/email-profissional` — rascunha email a partir de contexto livre

---

## Estrutura de pastas

```
Nome do Cliente/
├── .claude/skills/     → as skills do sistema
├── _memoria/           → quem é o cliente, como fala, mercado, foco
├── identidade/         → marca do cliente (cores, fontes, logo)
├── conteudo/           → posts, carrosséis, textos produzidos
├── ads/                → campanhas pagas e exports
├── seo/                → pesquisa e estratégia de SEO
├── relatorios/         → relatórios mensais
├── reunioes/           → notas de reuniões e decisões
├── saidas/             → diagnósticos e documentos pontuais
├── dados/              → arquivos brutos a analisar
├── scripts/            → automações específicas do cliente
├── tarefas.md          → entregas em andamento
└── CLAUDE.md           → regras de operação do sistema
```

---

## Baseado em

[MazyOS](https://github.com/mazzeoia/MazyOS) por Mazzeoia.
