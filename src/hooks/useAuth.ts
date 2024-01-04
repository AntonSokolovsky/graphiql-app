import { useAuthStore } from '../store/store';

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  return {
    isAuth: !!user,
  };
}
