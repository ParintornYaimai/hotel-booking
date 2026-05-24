---
name: "grilme"
description: "Build, modify, and debug the Fastify + TypeScript backend in this workspace using its Clean Architecture conventions. Use when implementing or changing endpoints, HTTP schemas, controllers, use-cases, repository interfaces/implementations, PostgreSQL integration, shared error handling, or route integration tests under hotel-booking-api."
---

# Hotel Booking API

Use this skill to make safe, consistent API changes in `hotel-booking-api`.

## Workflow

1. Identify the module and entry route first (`src/modules/*/interface/http/routes/*.route.ts`).
2. Keep HTTP concerns in controllers and schemas only.
3. Keep business rules in use-cases only.
4. Keep storage contracts in domain repositories and storage logic in infrastructure repositories.
5. Throw shared app errors from use-cases (`src/shared/errors/*`) instead of replying directly there.
6. Validate request input in controllers with `validateInput`.
7. Cover API behavior with route integration tests in `test/routes/*.test.ts`.
8. Run `npm run typecheck` and `npm run test` before finishing.

## Architecture Rules

- Follow `route -> controller -> use-case -> repository interface -> repository implementation`.
- Do not import Fastify request/reply types into use-cases.
- Do not access `app.db` or SQL from controllers or use-cases.
- Instantiate repository + use-case + controller inside route plugins.
- If persistence behavior changes, update both in-memory and PostgreSQL repositories when applicable.
- Register new module routes in `src/app.ts`.

## References

- Read `references/change-checklist.md` for endpoint-level file checklist and command checklist.

