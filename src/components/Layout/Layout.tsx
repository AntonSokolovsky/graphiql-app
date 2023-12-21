import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export function Layout() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<div>Div</div>}>
        <main>
          <Outlet></Outlet>
        </main>
      </Suspense>
    </>
  );
}
