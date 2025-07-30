'use client';
import { create } from 'zustand';
import { AdminProfile } from '../model/adminProfile';
import { PropsWithChildren, useEffect } from 'react';
import { useAdminProfile } from '@/hooks/useAdminProfile';

interface AuthState {
  isAuthenticated: boolean;
  profile: AdminProfile | null;
  isLoading: boolean;
  setProfile: (profile: AdminProfile | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  profile: null,
  isLoading: true,
  setProfile: (profile) =>
    set({
      profile,
      isAuthenticated: !!profile,
    }),
  setLoading: (loading) => set({ isLoading: loading }),
}));

export const AdminAuthProvider = ({ children }: PropsWithChildren) => {
  const { data: profile, isLoading } = useAdminProfile();
  const setProfile = useAuthStore((state) => state.setProfile);

  useEffect(() => {
    setProfile(profile ?? null);
  }, [profile, setProfile]);

  return <>{children}</>;
};
