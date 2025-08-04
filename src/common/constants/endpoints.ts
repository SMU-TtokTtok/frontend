export const API = {
  USER: {
    LOGIN: '/api/login',
    LOGOUT: '/api/logout',
    REFRESH: '/api/refresh',
    CLUBS: '/api/clubs',
    POPULAR_CLUBS: '/api/clubs/banner/popular',
    SEARCH: '/api/clubs/search',
  },
  ADMIN: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    RE_ISSUE: '/auth/re-issue',
    APPLICANTS: '/applies',
    APPLICANTS_PASS: '/applies/passed',
    APPLICANTS_FAIL: '/applies/failed',
    APPLICANTS_SEARCH: '/applies/search',
    APPLICANTS_STATUS: (applicantId: string) => `/applies/evaluations/${applicantId}`,
    APPLICANTS_DETAIL: (applicantId: string) => `/applies/${applicantId}`,
    APPLICANTS_MEMO_CREATE: (applicantId: string) => `/applies/${applicantId}/memos`,
    APPLICANTS_MEMO_DELETE: (applicantId: string, memoId: string) =>
      `/applies/${applicantId}/memos/${memoId}`,
    APPLICANTS_MEMO_UPDATE: (applicantId: string, memoId: string) =>
      `/applies/${applicantId}/memos/${memoId}`,
    FORMS: (clubId: string) => `/forms/${clubId}`,
    FORMS_UPDATE: (formId: string) => `/forms/${formId}`,
    APPLICANTS_CONNECTION: (clubId: string) => `/applies/${clubId}/finalize`,
    FORMS_CREATE: (clubId: string) => `/forms/clubs/${clubId}`,
  },
};
