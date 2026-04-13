#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
DB_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
ENV_FILE="${DB_DIR}/.env"

if [[ ! -f "${ENV_FILE}" ]]; then
  ENV_FILE="${DB_DIR}/.env.example"
fi

if [[ ! -f "${ENV_FILE}" ]]; then
  echo "Missing .env or .env.example in ${DB_DIR}" >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "${ENV_FILE}"
set +a

: "${POSTGRES_DB:?POSTGRES_DB is required}"
: "${POSTGRES_USER:?POSTGRES_USER is required}"
: "${POSTGRES_PASSWORD:?POSTGRES_PASSWORD is required}"
: "${POSTGRES_SERVICE:=postgres}"

"${SCRIPT_DIR}/start-db.sh"

echo "Resetting public schema..."
docker compose --env-file "${ENV_FILE}" -f "${DB_DIR}/docker-compose.yml" \
  exec -T "${POSTGRES_SERVICE}" psql -v ON_ERROR_STOP=1 -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" <<'SQL'
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO CURRENT_USER;
GRANT ALL ON SCHEMA public TO PUBLIC;
SQL

"${SCRIPT_DIR}/apply-schema.sh"

echo "Database reset completed."
