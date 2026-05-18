# Catálogo de Ferramentas — BaseOS

Referência de APIs, CLIs e conectores disponíveis nas skills do Claude Code.
Consulte antes de criar skills novas pra saber o que já está disponível.

---

## Criar visuais (HTML pra PNG)

### Playwright CLI
**O que faz:** Renderiza HTML em PNG (carrosséis, propostas, slides)
**Precisa de conta:** Não, roda local
**Como instalar:** `npx playwright install chromium`
**Como usar:**
```bash
npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///caminho/slide.html" "slide.png"
```
**Tamanhos comuns:** Instagram feed 1080x1350 · Story/Reels 1080x1920 · Slide 16:9 1920x1080

---

## Publicar na web

### Cloudflare Pages API
**O que faz:** Publica HTML com link público (propostas, landing pages)
**Precisa de conta:** Sim, Cloudflare (gratuito)
**Configurar:** `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` no `.env`

---

## Publicar em redes sociais

### Meta Graph API (Instagram + Facebook)
**O que faz:** Posta carrosséis e imagens no Instagram e Facebook via API
**Precisa de conta:** Sim, conta Business + App Meta
**Configurar:** `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID` no `.env`
**Scripts:** `scripts/postar-instagram.js` e `scripts/postar-facebook.js`

---

## Buscar conteúdo da web

### WebFetch (nativo)
**O que faz:** Lê o conteúdo de qualquer URL como texto
**Precisa de conta:** Não, já vem no Claude Code

### WebSearch (nativo)
**O que faz:** Pesquisa no Google e traz resultados
**Precisa de conta:** Não, já vem no Claude Code

### Jina Reader
**O que faz:** Converte qualquer URL em markdown limpo
**Como usar:** Acessar `https://r.jina.ai/{URL}` via WebFetch
**Quando usar:** Extrair texto de artigos longos

---

## Gerar imagens com IA

### DALL-E (OpenAI)
**O que faz:** Gera imagens a partir de texto
**Precisa de conta:** Sim, OpenAI (pago)
**Configurar:** `OPENAI_API_KEY` no `.env`
**Script:** `scripts/gerar-imagem.js`

### Gemini (Google AI)
**O que faz:** Gera imagens a partir de texto
**Precisa de conta:** Sim, Google AI Studio (gratuito até certo limite)
**Configurar:** `GEMINI_API_KEY` no `.env`

---

## Conectar com plataformas (MCPs)

Verificar MCPs instalados: `claude mcp list`

### Notion
**O que faz:** Acessa projetos, bases de dados, briefings e tarefas
**Como instalar:** `claude mcp add notion -- npx -y @notionhq/notion-mcp-server`

### Gmail
**O que faz:** Lê e compõe emails sem sair do Claude Code
**Como instalar:** `claude mcp add gmail -- npx -y @gongrzhe/server-gmail-autoauth-mcp`

### Google Calendar
**O que faz:** Vê agenda, cria eventos, encontra horários disponíveis
**Como instalar:** `claude mcp add google-calendar -- npx -y @gongrzhe/server-google-calendar-autoauth-mcp`

### N8N
**O que faz:** Dispara automações e workflows do N8N
**Como instalar:** `claude mcp add n8n -- npx -y n8n-mcp`

### Supabase
**O que faz:** Banco de dados e backend
**Quando usar:** Skills que precisam guardar dados ou autenticação

### Canva
**O que faz:** Acessa designs e cria assets visuais via Claude
**Como instalar:** `claude mcp add canva -- npx -y @canva/canva-mcp-server`

### Telegram
**O que faz:** Envia e recebe mensagens via bot
**Quando usar:** Notificações automáticas, comunicação com clientes

---

## Extrair conteúdo de vídeo

### yt-dlp (CLI)
**O que faz:** Baixa transcrições/legendas de vídeos do YouTube
**Como instalar:** `winget install yt-dlp.yt-dlp` (Windows) ou `brew install yt-dlp` (Mac)

---

## Como adicionar ferramentas novas

```markdown
### Nome da Ferramenta
**O que faz:** [descrição em uma frase]
**Precisa de conta:** [Sim/Não]
**Configurar:** [o que salvar no .env]
**Como usar:** [comando ou instrução]
**Quando usar:** [em que tipo de skill faz sentido]
```
