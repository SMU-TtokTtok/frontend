export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: '/admin',
  SIGNUP: '/signup',
  CLUB_INFO: (clubId: number) => `/club/${clubId}`,
};
