import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box, CircularProgress } from '@mui/material';

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Box component={'main'}>
          <Outlet />
        </Box>
      </Suspense>
      <Footer />
    </>
  );
}
