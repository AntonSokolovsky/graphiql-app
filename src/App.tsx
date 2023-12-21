import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
