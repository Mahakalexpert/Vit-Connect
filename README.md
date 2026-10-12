# VIT Connect

VIT Connect is an incremental build of a VIT Pune Campus Hub. This repository currently contains **Milestone 1 + Milestone 2 baseline**: a production-oriented Next.js + TypeScript foundation, reusable UI system primitives, and initial Prisma/PostgreSQL wiring with seed scaffolding.

## Current stack (Milestone 1)
- Next.js App Router
- TypeScript + React
- Tailwind CSS
- Radix Slot primitive + Lucide icons
- Zod (ready for upcoming validation layers)
- Vitest + Testing Library smoke tests

## Milestone 1 delivered
- Landing experience and sign-in prototype (`/`, `/sign-in`)
- Authenticated shell prototype (`/app/dashboard`)
- Reusable design system components for buttons, badges, cards, inputs, and tables
- Architecture + implementation planning docs
- Safe `.env.example` placeholders only (no secrets)
- Prisma schema for planned core campus entities with PostgreSQL datasource
- Seed scaffolding for baseline development records

## Documentation
- Specification and checklist: [`docs/specification.md`](./docs/specification.md)
- Architecture: [`docs/architecture.md`](./docs/architecture.md)

## Local development
```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Validation commands
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deploy (easiest path: Vercel)

One-click import:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mahakalexpert/Vit-Connect)

After import, set this environment variable in Vercel:

- `DATABASE_URL` (PostgreSQL connection string)

Then deploy. Vercel will run `npm install` and `npm run build` automatically, and Prisma Client is generated during install via `postinstall`.

### Post-deploy verification
1. Open `/`
2. Open `/sign-in`
3. Open `/app/dashboard`

## Milestone 2 database baseline commands
```bash
npm run prisma:validate
npm run prisma:generate
npm run db:seed
```

## Important limitations in this milestone
- No production authentication/provider integration yet.
- No Prisma migration history has been applied in this repository yet.
- No real institutional integrations or official notice feeds.
- Synthetic/sample content is used only for UI development.
