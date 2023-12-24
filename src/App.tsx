import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}
