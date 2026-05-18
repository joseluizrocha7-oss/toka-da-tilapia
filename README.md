# BaseOS

**O sistema operacional de IA para qualquer negócio.**

BaseOS transforma um repositório Git num cérebro digital dedicado a um cliente.
Cada instalação acumula memória, histórico e contexto — e quanto mais é usado,
mais preciso o diagnóstico, a estratégia e as entregas da IA.

Funciona com Claude Code, Gemini CLI e Codex. Um clone por cliente. Setup em 10 minutos.

---

## Como funciona

```
Novo cliente → clone o BaseOS → /instalar → trabalha
```

Tudo que você produz fica registrado: reuniões, relatórios, campanhas, SEO,
conteúdo, sites. A IA lê esse histórico antes de responder. Com o tempo, ela
conhece o negócio melhor do que qualquer briefing genérico conseguiria explicar.

---

## Instalação

### Pré-requisitos

- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [Node.js LTS](https://nodejs.org)
- [Claude Code](https://claude.ai/code): `npm install -g @anthropic-ai/claude-code`

### Para cada cliente novo

```bash
git clone https://github.com/seu-usuario/BaseOS "Nome do Cliente"
cd "Nome do Cliente"
code .
```

No terminal integrado do VS Code (`Ctrl + '`), abra o Claude Code e rode:

```
/instalar
```

O setup leva ~10 minutos e cobre: negócio, mercado, tom de voz, identidade visual
e foco atual. Ao final, orienta a criação do repositório privado do cliente.

---

## A inteligência se acumula com o uso

| O que você registra | Onde | O que a IA aprende |
|---|---|---|
| Negócio e público | `_memoria/empresa.md` | Produto, diferenciais, perfil de cliente |
| Concorrência | `_memoria/mercado.md` | Posicionamento, oportunidades, ameaças |
| Tom de voz | `_memoria/preferencias.md` | Como comunicar, o que evitar |
| Foco atual | `_memoria/estrategia.md` | Prioridades, metas, prazos |
| Reuniões | `reunioes/` | Decisões tomadas, direções combinadas |
| Resultados | `relatorios/` | O que funcionou, tendências |
| Campanhas | `ads/` | Criativos, públicos, performance |
| SEO | `seo/` | Palavras-chave, gaps, oportunidades |
| Sites e LPs | `sites/` | Cada site deployado no Cloudflare Pages |

---

## Sites e deploy

Cada site ou landing page fica numa subpasta de `sites/`:

```
sites/
├── principal/        ← site institucional
├── lp-produto-a/     ← landing page A
└── lp-produto-b/     ← landing page B
```

No Cloudflare Pages, crie um projeto por site apontando para a subpasta correspondente.
O resto do repositório nunca é deployado.

---

## As skills

### Núcleo
| Skill | O que faz |
|---|---|
| `/instalar` | Setup inicial — configura o BaseOS para o cliente |
| `/abrir` | Carrega contexto antes de cada sessão |
| `/atualizar` | Varre o workspace e atualiza a memória |
| `/salvar` | Commit + push no repositório do cliente |
| `/mapear-rotinas` | Transforma tarefas repetitivas em skills personalizadas |

### Estratégia
| Skill | O que faz |
|---|---|
| `/diagnostico` | Lê todo o histórico e entrega diagnóstico estratégico completo |

### Conteúdo e SEO
| Skill | O que faz |
|---|---|
| `/carrossel` | Cria carrossel 1080x1350 + legenda prontos pra postar |
| `/publicar-tema` | Artigo de blog + carrossel + 3 legendas num comando |
| `/seo` | Fluxo completo de SEO em 8 passos |
| `/responder-avaliacoes` | Respostas humanas para reviews do Google |
| `/aprovar-post` | Publica no blog + Instagram + Facebook num comando |

### Anúncios pagos
| Skill | O que faz |
|---|---|
| `/anuncio-google` | Campanha completa em CSV para o Google Ads Editor |
| `/relatorio-ads` | Lê exports do Google + Meta e gera relatório com alertas |

### Produção
| Skill | O que faz |
|---|---|
| `/proposta` | Proposta comercial profissional em HTML |
| `/analisar-dados` | Lê CSV/XLSX/PDF e gera resumo executivo |
| `/email-profissional` | Rascunha email a partir de contexto livre |

---

## Estrutura de pastas

```
Nome do Cliente/
├── .claude/skills/     → skills do BaseOS
├── .githooks/          → proteção contra commit de dados no template
├── _memoria/           → empresa, mercado, preferências, estratégia
├── identidade/         → cores, fontes, logo
├── sites/              → sites e LPs (deployados no Cloudflare Pages)
├── conteudo/           → posts e carrosséis produzidos
├── ads/                → campanhas pagas e exports
├── seo/                → pesquisa e estratégia de SEO
├── relatorios/         → relatórios mensais
├── reunioes/           → notas de reuniões e decisões
├── saidas/             → diagnósticos e documentos pontuais
├── dados/              → arquivos brutos a analisar
├── scripts/            → automações específicas do cliente
├── tarefas.md          → entregas em andamento
└── CLAUDE.md           → regras de operação
```

---

## Baseado em

[MazyOS](https://github.com/mazzeoia/MazyOS) por Mazzeoia.
