// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { CustomHttpError } from '@/common/apis/apiClient';

Sentry.init({
  dsn: 'https://40484f988d805d1c90b4a46b42d8f6af@o4509802545741824.ingest.us.sentry.io/4509802549805056',
  enabled: process.env.NODE_ENV === 'production',

  // Add optional integrations for additional features
  integrations: [Sentry.replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Filter out 401 errors from being sent to Sentry
  beforeSend(event, hint) {
    const error = hint.originalException;
    if (error instanceof CustomHttpError && error.status === 401) {
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
