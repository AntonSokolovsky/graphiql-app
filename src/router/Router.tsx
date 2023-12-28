import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { Layout } from '../components/Layout';
import { PAGES } from './pages';
import { ACTION } from './action';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));
const Welcome = lazy(() => import('../pages/Welcome/Welcome'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={`${PAGES.WELCOME.path}`} />,
      },
      {
        path: `${PAGES.WELCOME.path}`,
        element: <Welcome />,
      },
      {
        path: `${PAGES.SIGN_IN.path}`,
        element: <SignIn action={ACTION.SIGN_IN} />,
      },
      {
        path: `${PAGES.SIGN_UP.path}`,
        element: <SignIn action={ACTION.SIGN_UP} />,
      },
    ],
  },
  {
    path: `${PAGES.MAIN.path}`,
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
]);
