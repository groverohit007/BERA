# BERA Monorepo

**BERA** = **Best Ever Resume — AI powered**  
Tagline: **Beats the bots. Impress the boss.**

## Workspace structure

- `apps/web` — Next.js + TypeScript + TailwindCSS + Framer Motion
- `services/api` — NestJS + TypeScript + Prisma
- `packages/shared` — shared TypeScript types + zod schemas
- `infra/docker-compose.yml` — Postgres + Redis

## Setup

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
cp services/api/.env.example services/api/.env
```

## Run locally

```bash
# run both (in parallel using separate terminals currently)
npm run dev:web
npm run dev:api

# or one at a time
npm run dev:web
npm run dev:api
```

## Start local infra

```bash
docker compose -f infra/docker-compose.yml up -d
docker ps
```
