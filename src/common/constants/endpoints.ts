// apiRoutes.ts

export const API = {
  USER: {
    LOGIN: '/api/login',
    LOGOUT: '/api/logout',
    REFRESH: '/api/refresh',
  },
  ADMIN: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    RE_ISSUE: '/auth/re-issue',
    APPLICATIONS: '/applies',
    APPLICATIONS_PASS: '/applies/passed',
    APPLICATIONS_FAIL: '/applies/failed',
  },
};
