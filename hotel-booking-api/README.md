# Hotel Booking API (Fastify + TypeScript)

Backend API using Fastify v5 and TypeScript with a Clean Architecture structure.

## Stack

- Fastify v5
- TypeScript
- Zod (environment validation)
- `@fastify/sensible`
- `@fastify/cors`
- `@fastify/helmet`
- `pg` (PostgreSQL client)

## Scripts

- `npm run dev` starts the API in watch mode
- `npm run test` runs test suites with Node test runner + `tsx`
- `npm run typecheck` validates TypeScript types
- `npm run build` compiles to `dist/`
- `npm start` runs compiled production build

## Environment

The API loads variables from `.env` automatically at startup.

Supported variables:

- `NODE_ENV` (`development` | `test` | `production`)
- `PORT` (default `3000`)
- `HOST` (default `127.0.0.1`, use `0.0.0.0` for Docker/container exposure)
- `LOG_LEVEL` (`fatal` | `error` | `warn` | `info` | `debug` | `trace` | `silent`)
- `CORS_ORIGIN` (default `*`)
- `DB_ENABLED` (`true`/`false`, default `false`)
- `DATABASE_URL` (optional, takes precedence)
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
- `DB_SSL`, `DB_SSL_REJECT_UNAUTHORIZED`
- `DB_POOL_MIN`, `DB_POOL_MAX`, `DB_IDLE_TIMEOUT_MS`, `DB_CONNECTION_TIMEOUT_MS`

To connect with local PostgreSQL from `hotel-booking-db`, copy `.env.example` and set:

- `DB_ENABLED=true`
- `DB_HOST=127.0.0.1`
- `DB_PORT=5432`
- `DB_NAME=hotel_booking`
- `DB_USER=hotel_user`
- `DB_PASSWORD=hotel_password`

## Architecture


```
├── src
│   ├── modules
│   │   ├── auth
│   │   │   ├── application
│   │   │   │   ├── dto
│   │   │   │   │   ├── login-result.dto.ts
│   │   │   │   │   └── login.dto.ts
│   │   │   │   └── use-cases
│   │   │   │       └── login.use-case.ts
│   │   │   ├── domain
│   │   │   │   ├── entities
│   │   │   │   │   ├── auth-tokens.ts
│   │   │   │   │   └── auth-user.ts
│   │   │   │   └── repositories
│   │   │   │       └── auth.repository.ts
│   │   │   ├── infrastructure
│   │   │   │   └── repositories
│   │   │   │       └── in-memory-auth.repository.ts
│   │   │   └── interface
│   │   │       └── http
│   │   │           ├── controllers
│   │   │           │   └── login.controller.ts
│   │   │           └── routes
│   │   │               └── auth.route.ts
│   │   ├── bookings
│   │   │   ├── application
│   │   │   │   └── use-cases
│   │   │   │       ├── create-booking.use-case.ts
│   │   │   │       └── list-bookings.use-case.ts
│   │   │   ├── domain
│   │   │   │   ├── entities
│   │   │   │   │   └── booking.ts
│   │   │   │   └── repositories
│   │   │   │       └── booking.repository.ts
│   │   │   ├── infrastructure
│   │   │   │   └── repositories
│   │   │   │       ├── in-memory-booking.repository.ts
│   │   │   │       └── pg-booking.repository.ts
│   │   │   └── interface
│   │   │       └── http
│   │   │           ├── controllers
│   │   │           │   ├── create-booking.controller.ts
│   │   │           │   └── list-bookings.controller.ts
│   │   │           └── routes
│   │   │               └── booking.route.ts
│   │   ├── system
│   │   │   ├── application
│   │   │   │   └── use-cases
│   │   │   │       ├── get-example-message.use-case.ts
│   │   │   │       └── get-service-status.use-case.ts
│   │   │   ├── domain
│   │   │   │   ├── entities
│   │   │   │   │   └── service-status.ts
│   │   │   │   └── repositories
│   │   │   │       └── system-read.repository.ts
│   │   │   ├── infrastructure
│   │   │   │   └── repositories
│   │   │   │       └── static-system.repository.ts
│   │   │   └── interface
│   │   │       └── http
│   │   │           ├── controllers
│   │   │           │   ├── get-example-message.controller.ts
│   │   │           │   └── get-root-status.controller.ts
│   │   │           └── routes
│   │   │               └── system.route.ts
│   │   └── users
│   │       ├── application
│   │       │   └── use-cases
│   │       │       ├── get-user-by-id.use-case.ts
│   │       │       └── list-users.use-case.ts
│   │       ├── domain
│   │       │   ├── entities
│   │       │   │   └── user.ts
│   │       │   └── repositories
│   │       │       └── user.repository.ts
│   │       ├── infrastructure
│   │       │   └── repositories
│   │       │       ├── in-memory-user.repository.ts
│   │       │       └── pg-user.repository.ts
│   │       └── interface
│   │           └── http
│   │               ├── controllers
│   │               │   ├── get-user-by-id.controller.ts
│   │               │   └── list-users.controller.ts
│   │               └── routes
│   │                   └── user.route.ts
│   ├── shared
│   │   ├── config
│   │   │   └── env.ts
│   │   ├── database
│   │   │   └── postgres.ts
│   │   └── plugins
│   │       ├── core-plugins.ts
│   │       └── database-plugin.ts
│   ├── types
│   │   └── fastify.d.ts
│   ├── app.ts
│   └── server.ts
├── test
│   ├── routes
│   │   ├── auth.test.ts
│   │   ├── bookings.test.ts
│   │   ├── example.test.ts
│   │   ├── root.test.ts
│   │   └── users.test.ts
│   ├── helper.ts
│   └── index.test.ts
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```

Flow: `route -> controller -> use-case -> repository (interface) -> repository implementation`.

Database integration:

- Shared pool is initialized by `databasePlugin` when `DB_ENABLED=true`
- Pool is available as `fastify.db`
- Pool is closed automatically on server shutdown

Starter endpoints:

- `POST /auth/login`
- `GET /users`
- `GET /users/:userId`
- `GET /bookings`
- `POST /bookings`
