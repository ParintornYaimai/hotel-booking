# Hotel Booking API (Fastify + TypeScript)

Backend API using Fastify v5 and TypeScript with a Clean Architecture structure.

## Stack

- Fastify v5
- TypeScript
- Zod (environment validation)
- `@fastify/sensible`
- `@fastify/cors`
- `@fastify/helmet`

## Scripts

- `npm run dev` starts the API in watch mode
- `npm run test` runs test suites with Node test runner + `tsx`
- `npm run typecheck` validates TypeScript types
- `npm run build` compiles to `dist/`
- `npm start` runs compiled production build

## Environment

Supported variables:

- `NODE_ENV` (`development` | `test` | `production`)
- `PORT` (default `3000`)
- `HOST` (default `0.0.0.0`)
- `LOG_LEVEL` (`fatal` | `error` | `warn` | `info` | `debug` | `trace` | `silent`)
- `CORS_ORIGIN` (default `*`)

## Architecture

```text
src/
  app.ts
  server.ts
  shared/
    config/
    plugins/
  modules/
    auth/
      domain/
      application/
      infrastructure/
      interface/http/
    users/
      domain/
      application/
      infrastructure/
      interface/http/
    bookings/
      domain/
      application/
      infrastructure/
      interface/http/
    system/
      domain/
      application/
      infrastructure/
      interface/http/
```

Flow: `route -> controller -> use-case -> repository (interface) -> repository implementation`.

Starter endpoints:

- `POST /auth/login`
- `GET /users`
- `GET /users/:userId`
- `GET /bookings`
- `POST /bookings`
