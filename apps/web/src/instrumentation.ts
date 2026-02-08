import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config');
  }
}

interface RequestContext {
  routerKind?: string;
  routePath?: string;
  routeType?: string;
  [key: string]: unknown;
}

interface ErrorWithStatus extends Error {
  status?: number;
}

export const onRequestError = (
  err: Error,
  requestInfo: { request: Request },
  context?: RequestContext,
) => {
  // Don't send 401 errors to Sentry
  const errorWithStatus = err as ErrorWithStatus;
  if (errorWithStatus.status === 401) {
    return;
  }
  // Pass all three parameters to captureRequestError for complete diagnostic data
  // context may contain router kind, route path, route type for better error tracking
  // Use type assertion to match Sentry's expected types
  Sentry.captureRequestError(
    err,
    requestInfo as unknown as Parameters<typeof Sentry.captureRequestError>[1],
    (context ?? {}) as Parameters<typeof Sentry.captureRequestError>[2],
  );
};
