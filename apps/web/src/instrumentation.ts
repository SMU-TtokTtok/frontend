import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config');
  }
}

export const onRequestError = (err: Error, requestInfo: { request: Request }) => {
  // Don't send 401 errors to Sentry
  if (err && typeof err === 'object' && 'status' in err && (err as any).status === 401) {
    return;
  }
  // Use captureException instead of captureRequestError to avoid type issues
  Sentry.captureException(err, {
    contexts: {
      request: {
        url: requestInfo.request.url,
        method: requestInfo.request.method,
      },
    },
  });
};
