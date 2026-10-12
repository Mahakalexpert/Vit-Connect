# VIT Connect Architecture (Milestone 1 Foundation)

## 1) Selected stack and rationale
- **Framework**: Next.js App Router + TypeScript for typed server/client boundaries and scalable routing.
- **UI foundation**: Tailwind CSS v4 tokens + reusable primitives (`Button`, `Badge`, `Card`, `Input`, `Table`) with Radix Slot composition and Lucide icons.
- **Validation plan**: Zod is included for request/config validation in upcoming API and form layers.
- **Data plan**: PostgreSQL + Prisma-ready boundaries are documented for Milestone 2 implementation.
- **Authentication plan**: Auth.js-style server session approach is planned; current sign-in is explicitly development-only UI state.

## 2) Planned module boundaries
- `app/`: route surfaces and layouts.
  - `/`: public landing entry.
  - `/sign-in`: development-only sign-in UI.
  - `/app/dashboard`: authenticated-shell prototype.
- `components/ui/`: reusable design-system primitives.
- `components/layout/`: cross-route shell scaffolding.
- `lib/`: utilities and future adapters/validators.
- `docs/`: architecture and milestone specifications.

## 3) Planned database entities (not implemented yet)
- `User`: identity profile and status.
- `RoleAssignment`: role membership in scopes (student/faculty/admin/moderator).
- `Department`, `Program`, `Course`: academic hierarchy.
- `Announcement`: official campus notices.
- `ForumThread`, `ForumPost`: discussion model.
- `Event`: campus activities.
- `Notification`: user-facing delivery records.
- `AuditLog`: moderation/admin traceability.

## 4) Authorization model (planned)
- Default deny outside public routes.
- Role-based permissions mapped to feature scopes.
- Moderation and admin actions to require explicit server-side checks.
- Tenant/institution boundary assumptions documented before integration work.

## 5) Integration adapter boundaries (planned)
- `lib/adapters/academics/*`: SIS/LMS ingestion adapters.
- `lib/adapters/notifications/*`: email/SMS/push providers.
- `lib/adapters/search/*`: indexing/query provider.
- Adapters must expose typed contracts and preserve provider-specific details behind interfaces.

## 6) Environment variable direction
See `.env.example` placeholders:
- App URL/name variables.
- Auth secret/host trust settings.
- Database connection placeholders.
- Integration API placeholders.

## 7) Local setup
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Lint: `npm run lint`
4. Type-check: `npm run typecheck`
5. Test: `npm run test`
6. Build: `npm run build`

## 8) Deployment direction
- Target: managed Node-compatible runtime for Next.js server rendering.
- Required before production deployment:
  - real authentication wiring,
  - persistent PostgreSQL + Prisma migrations,
  - secured environment secret injection,
  - CI checks with integration/e2e coverage,
  - monitoring and audit logging.

## 9) Current explicit limitations
- No real auth provider/session persistence.
- No database schema/migrations yet.
- No live institutional integrations.
- Synthetic content only for UI demonstration.
