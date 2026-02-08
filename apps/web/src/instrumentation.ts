import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config');
  }
}

export const onRequestError = (err: Error, requestInfo: { request: Request }, context?: any) => {
  // Don't send 401 errors to Sentry
  if (err && typeof err === 'object' && 'status' in err && (err as any).status === 401) {
    return;
  }
  // Pass all three parameters to captureRequestError for complete diagnostic data
  // context may contain router kind, route path, route type for better error tracking
  // Use type assertion to match Sentry's expected RequestInfo type
  Sentry.captureRequestError(err, requestInfo as any, context);
};
