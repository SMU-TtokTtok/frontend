// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://40484f988d805d1c90b4a46b42d8f6af@o4509802545741824.ingest.us.sentry.io/4509802549805056',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.7,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Filter out 401 errors from being sent to Sentry
  beforeSend(event, hint) {
    const error = hint.originalException;
    if (error && typeof error === 'object' && 'status' in error && error.status === 401) {
      return null; // Don't send 401 errors to Sentry
    }
    // Check if error message contains 401
    if (event.message?.includes('401') || event.exception?.values?.[0]?.value?.includes('401')) {
      return null;
    }
    return event;
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
