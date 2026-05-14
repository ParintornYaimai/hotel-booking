I have a DBML file that defines my hotel booking database schema.

Use that DBML as the source of truth and generate a local PostgreSQL database setup folder.

Requirements:
- PostgreSQL in Docker
- raw SQL only
- no Prisma, no ORM migrations
- split schema into multiple ordered .sql files
- include docker-compose.yml
- include .env.example
- include scripts/start-db.sh
- include scripts/apply-schema.sh
- include scripts/reset-db.sh
- optionally include seed.sql

Folder structure should be:

db/
  AGENT.md
  .env.example
  docker-compose.yml
  scripts/
    start-db.sh
    apply-schema.sh
    reset-db.sh
  schema/
    001_users.sql
    002_hotels.sql
    003_rooms.sql
    ...
  seeds/
    001_seed.sql

Rules:
- schema files must follow the DBML exactly
- use PostgreSQL-compatible SQL
- include primary keys, unique constraints, foreign keys, defaults, timestamps
- preserve relationship integrity
- do not invent unrelated tables
- keep scripts readable and safe to rerun where possible

After generating, explain the execution order.
