export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: '/admin',
  SIGNUP: '/signup',
  POPULAR: '/popular',
  CLUB_INFO: (clubId: number) => `/club/${clubId}`,
};
