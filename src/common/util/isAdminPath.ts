import { ROUTES } from '../constants/routes';

export function isAdminPath() {
  if (typeof window === 'undefined') return false;
  return window.location.pathname.startsWith(ROUTES.ADMIN);
}
