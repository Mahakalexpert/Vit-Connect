# VIT Connect

VIT Connect is an incremental build of a VIT Pune Campus Hub. This repository currently contains **Milestone 1**: a production-oriented Next.js + TypeScript foundation, reusable UI system primitives, and an authenticated-shell prototype with clearly marked development-only states.

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

## Important limitations in this milestone
- No production authentication/provider integration yet.
- No PostgreSQL/Prisma schema implementation yet.
- No real institutional integrations or official notice feeds.
- Synthetic/sample content is used only for UI development.
