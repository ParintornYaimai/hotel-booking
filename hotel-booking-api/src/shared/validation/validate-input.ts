import type { FastifyReply } from 'fastify';
import type { z } from 'zod';

type ValidationIssue = {
  path: string;
  message: string;
  code: string;
};

function mapPath(path: PropertyKey[]): string {
  if (path.length === 0) {
    return '(root)';
  }

  return path.map((segment) => String(segment)).join('.');
}

export function validateInput<T>({
  schema,
  input,
  reply,
  message
}: {
  schema: z.ZodType<T>;
  input: unknown;
  reply: FastifyReply;
  message: string;
}): T | null {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    const errors: ValidationIssue[] = parsed.error.issues.map((issue) => ({
      path: mapPath(issue.path),
      message: issue.message,
      code: issue.code
    }));

    reply.code(400).send({
      message,
      errors
    });
    return null;
  }

  return parsed.data;
}
