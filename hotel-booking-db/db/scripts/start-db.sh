#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
DB_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
ENV_FILE="${DB_DIR}/.env"

docker_ready() {
  docker version >/dev/null 2>&1
}

try_set_desktop_linux_context() {
  if docker context ls --format '{{.Name}}' 2>/dev/null | grep -q '^desktop-linux$'; then
    docker context use desktop-linux >/dev/null 2>&1 || true
  fi
}

start_docker_engine() {
  local os_name
  os_name="$(uname -s 2>/dev/null || echo unknown)"

  case "${os_name}" in
    MINGW*|MSYS*|CYGWIN*)
      powershell.exe -NoProfile -Command \
        "\$candidates = @('C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe', 'C:\\Program Files\\Docker\\Docker\\Docker Desktop'); \
         \$exe = \$candidates | Where-Object { Test-Path \$_ } | Select-Object -First 1; \
         if (\$exe) { Start-Process -FilePath \$exe | Out-Null }" >/dev/null 2>&1 || true
      ;;
    Darwin*)
      open -a Docker >/dev/null 2>&1 || true
      ;;
    Linux*)
      if command -v systemctl >/dev/null 2>&1; then
        systemctl --user start docker-desktop >/dev/null 2>&1 || true
        systemctl --user start docker >/dev/null 2>&1 || true
      fi
      ;;
    *)
      ;;
  esac
}

ensure_docker_engine() {
  if docker_ready; then
    return 0
  fi

  if [[ "${NO_AUTOSTART_DOCKER:-0}" == "1" ]]; then
    echo "Docker engine is not running and auto-start is disabled (NO_AUTOSTART_DOCKER=1)." >&2
    exit 1
  fi

  echo "Docker engine is not running. Attempting to start it..."
  start_docker_engine

  echo "Waiting for Docker engine to become ready..."
  for _ in {1..180}; do
    if docker_ready; then
      return 0
    fi
    sleep 1
  done

  echo "Docker engine did not become ready within 180 seconds." >&2
  echo "Please start Docker Desktop (or Docker daemon) manually and retry." >&2
  exit 1
}

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

ensure_docker_engine
try_set_desktop_linux_context

docker compose --env-file "${ENV_FILE}" -f "${DB_DIR}/docker-compose.yml" up -d "${POSTGRES_SERVICE}"

echo "Waiting for PostgreSQL to become ready..."
for _ in {1..60}; do
  if docker compose --env-file "${ENV_FILE}" -f "${DB_DIR}/docker-compose.yml" \
    exec -T "${POSTGRES_SERVICE}" pg_isready -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" >/dev/null 2>&1; then
    echo "PostgreSQL is ready."
    exit 0
  fi
  sleep 1
done

echo "PostgreSQL did not become ready within 60 seconds." >&2
exit 1
