import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { theme } from './theme/theme';
import { useEffect, useMemo } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { auth } from './services/auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';
import { useThemeModeStore } from './store/useThemeModeStore';
import { deepmerge } from '@mui/utils';

export default function App() {
  const [user, loading] = useAuthState(auth);
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const mode = useThemeModeStore((state) => state.mode);
  const currentTheme = useMemo(
    () =>
      deepmerge(
        theme,
        createTheme({
          palette: {
            mode,
          },
        })
      ),
    [mode]
  );

  useEffect(() => {
    setUser(user);
    setIsAuth(!!user);
  }, [setIsAuth, isAuth, user, setUser]);
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {loading ? <Loader /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}
