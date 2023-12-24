import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Div</div>}>
        <Box component={'main'}>
          <Outlet></Outlet>
        </Box>
      </Suspense>
      <Footer />
    </>
  );
}
