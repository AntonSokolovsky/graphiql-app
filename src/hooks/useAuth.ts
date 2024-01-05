import { useAuthStore } from '../store/useAuthStore';

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  return {
    isAuth: !!user,
  };
}
