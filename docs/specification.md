# VIT Connect Project Specification and Milestone Checklist

## Product scope (incremental)
VIT Connect is intended to become a campus information and collaboration hub for VIT Pune stakeholders. This milestone establishes only the reusable frontend/application-shell foundation and documentation needed for secure incremental development.

## User roles (planned)
- Student
- Faculty
- Department coordinator
- Moderator
- System administrator

> Role permissions are not implemented in Milestone 1.

## Security boundaries
- Public routes: landing and sign-in prototype only.
- Protected surface prototype: `/app/dashboard` visual shell only.
- No real credential validation, session management, or external trust assumptions yet.
- No institutional data is stored or exposed in this milestone.

## External dependencies selected
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Radix Slot primitive
- Lucide icons
- Zod (prepared for upcoming validation work)
- Vitest + Testing Library (smoke tests)

## Milestone plan
- [x] **Milestone 1 (this change)**: project specification, architecture docs, reusable design system foundation, public entry pages, authenticated-shell prototype, placeholder environment template, runnable smoke tests.
- [ ] Milestone 2: Prisma schema + PostgreSQL wiring + initial seed strategy.
- [ ] Milestone 3: Authentication/authorization integration with real session boundaries.
- [ ] Milestone 4: announcements, forums, academic hierarchy modules.
- [ ] Milestone 5: integrations, notifications, search, admin governance.
- [ ] Milestone 6: end-to-end tests and release hardening.

## Implemented status in this milestone
- [x] Stack selected and scaffolded in repository using Next.js + TypeScript + Tailwind.
- [x] Restrained light-theme design system baseline with reusable UI primitives.
- [x] Responsive landing, sign-in prototype, and authenticated-shell dashboard prototype.
- [x] Explicit development-only labels for non-production auth/data states.
- [x] Architecture documentation and `.env.example` placeholders added.
- [x] Minimal test setup and smoke tests for landing/shell behaviors.

## Explicitly incomplete (by design)
- [ ] Production authentication flow
- [ ] Database schema/migrations and persistence
- [ ] External SIS/LMS/notification/search integrations
- [ ] Real announcements/forums/event data
- [ ] End-to-end and integration test suites

## Verification log for this milestone
- [x] `npm install`
- [x] `npm run lint`
- [x] `npm run typecheck`
- [x] `npm run test`
- [x] `npm run build`

### Notes from verification
- Initial build attempt failed because remote Google font fetch was blocked in the sandbox environment.
- The issue was fixed by replacing remote font loading with local/system font stacks.
- Build, lint, typecheck, and tests now complete successfully in this environment.
