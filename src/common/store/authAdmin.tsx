import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  setLogin: (token: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!sessionStorage.getItem('admin_access_token') || false,
  accessToken: sessionStorage.getItem('admin_access_token') || null,
  setLogin: (token) => set({ isAuthenticated: true, accessToken: token }),
  setLogout: () => set({ isAuthenticated: false, accessToken: null }),
}));
