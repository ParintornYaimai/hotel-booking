# hotel-booking-db

This README explains what each script in `db/scripts` does for the local PostgreSQL setup in Docker.

## Important paths

- `db/scripts/start-db.sh`
- `db/scripts/apply-schema.sh`
- `db/scripts/reset-db.sh`
- `db/schema/*.sql`
- `db/seeds/001_seed.sql`

## Script responsibilities

### `start-db.sh`

What it does:
- Loads env vars from `.env` (or falls back to `.env.example`)
- Verifies Docker is available
- Tries to auto-start Docker Desktop if Docker is not running
- Starts PostgreSQL service with `docker compose up -d`
- Waits until PostgreSQL is ready via `pg_isready`

Use when:
- You only want the database container running (no schema/seed changes)

### `apply-schema.sh`

What it does:
- Loads env vars from `.env` (or `.env.example`)
- Calls `start-db.sh` first
- Applies all `db/schema/*.sql` files in filename order (for example `001_...`, `002_...`)
- Applies all `db/seeds/*.sql` files in filename order after schema files

Use when:
- You want to apply schema and seed data in one command

### `reset-db.sh`

What it does:
- Loads env vars from `.env` (or `.env.example`)
- Calls `start-db.sh`
- Drops and recreates `public` schema (`DROP SCHEMA ... CASCADE`)
- Calls `apply-schema.sh` to rebuild all tables and apply all seeds

Use when:
- You want a full clean rebuild (reset data + reapply schema + seed)

## Recommended execution order

Run from `hotel-booking-db/db`:

1. Start database only
```bash
./scripts/start-db.sh
```

2. Apply schema + seed
```bash
./scripts/apply-schema.sh
```

3. Full reset and reseed (schema + seed)
```bash
./scripts/reset-db.sh
```

## Environment variables used

- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_PORT`
- `POSTGRES_SERVICE`

If `.env` is missing, scripts read values from `.env.example`.
