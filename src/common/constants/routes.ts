export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  POPULAR: '/popular',
  CLUB_INFO: (clubId: number) => `/club/${clubId}`,
  ADMIN: '/admin',
  ADMIN_APPLICATIONS: '/admin/applicants?evaluation=document&grade=true',
  ADMIN_CLUB_MEMBER: '/admin/clubMember',
  ADMIN_APPLICATIONS_FORM: '/admin/applicationsForm',
};
