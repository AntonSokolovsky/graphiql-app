import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { useEffect } from 'react';
import { useAuthStore } from './store/store';
import { auth } from './services/auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';

export default function App() {
  const [user, loading] = useAuthState(auth);
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
    setIsAuth(!!user);
  }, [setIsAuth, isAuth, user, setUser]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? <Loader /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}
