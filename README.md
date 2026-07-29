# Portfólio — Felipe Pereira

Meu site de portfólio: uma vitrine dos projetos e da carreira, pensada para um
recrutador entender quem eu sou em menos de dois minutos. O próprio site é uma
amostra do trabalho — escuro, dev-focused, rápido.

## Stack

- **Next.js (App Router) + TypeScript** estrito, deploy na Vercel
- **Tailwind CSS** (v4, sem config em JS — tokens no CSS)
- **Geist / Geist Mono** via `next/font` (self-hosted, zero request externo)
- **lucide-react** para ícones — a única dependência de UI
- Sem banco: os projetos vêm da **API pública do GitHub**; o resto de um config
  tipado no repo

## Como rodar

```bash
npm install
cp .env.example .env      # GITHUB_TOKEN é opcional
npm run dev               # http://localhost:3000
```

## Editando o conteúdo

Tudo que é seu vive em [`src/config/portfolio.ts`](src/config/portfolio.ts):
bio, links, projetos em destaque (com descrição própria), a allowlist de quais
repositórios mostrar, habilidades, certificados e o acento de cor. Nenhum texto
fica preso em componente.

## Decisões

**Sem banco, dados do GitHub no servidor.** Os projetos são buscados da API do
GitHub em tempo de build, com revalidação (ISR) de 1 hora. O token, quando
existe, sobe o limite de 60 para 5000 req/h; sem ele, o cache segura o limite
não autenticado. Se a API falhar, a página não quebra — cai para os destaques
do config.

**Um acento só, dirigido pelo config.** O `data-acento` no `<html>` troca uma
variável CSS; todo o resto lê dela. Trocar o tema é mudar uma linha.

## Estado

Em construção, por fatias:

- [x] Bootstrap: Next + TS + Tailwind v4, fontes, tema escuro/ciano, config
      tipado, metadata base
- [x] Projetos: busca do GitHub (cache + fallback) e o grid de cards
- [x] Hero e Sobre
- [x] Habilidades, Certificados e Rodapé/Contato
- [x] Acabamento: imagem OG, sitemap/robots, passe de acessibilidade e Lighthouse
