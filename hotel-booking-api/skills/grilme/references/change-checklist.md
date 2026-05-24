# API Change Checklist

## Add or Update Endpoint

1. Update or create schema in `src/modules/<module>/interface/http/schemas`.
2. Update or create controller in `src/modules/<module>/interface/http/controllers`.
3. Update or create use-case in `src/modules/<module>/application/use-cases`.
4. Update domain entity types and repository interface in `src/modules/<module>/domain`.
5. Update infrastructure repositories in `src/modules/<module>/infrastructure/repositories`.
6. Wire dependencies and route handlers in `src/modules/<module>/interface/http/routes`.
7. If module is new, register route plugin in `src/app.ts`.
8. Add or update tests in `test/routes/<module>.test.ts`.

## Input Validation and Errors

1. Validate request payload/query/params in controllers via `validateInput`.
2. Return `400` from controller validation failures by using existing `validateInput` response.
3. Throw shared errors from use-cases for business rules (`BadRequestError`, `ConflictError`, `NotFoundError`, etc.).
4. Let global handler (`setupErrorHandling`) convert thrown errors to HTTP responses.

## Verification Commands

1. `npm run typecheck`
2. `npm run test`
3. `npm run build` (when you changed build-relevant files and want compile confirmation)

