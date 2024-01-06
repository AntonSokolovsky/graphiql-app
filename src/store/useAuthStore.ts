import { create } from 'zustand';
import { User } from 'firebase/auth';

interface AuthStore {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  user: User | null | undefined;
  error: string;
  loading: boolean;
  setUser: (newUser: User | null | undefined) => void;
  removeUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (value: boolean) =>
    set(() => {
      return { isAuth: value };
    }),
  user: null,
  error: '',
  loading: false,
  setUser: (newUser) =>
    set(() => {
      return { user: newUser };
    }),
  removeUser: () =>
    set(() => {
      return { user: null };
    }),
}));
