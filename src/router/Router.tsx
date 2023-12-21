import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { Layout } from '../components/Layout';

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
        element: <Navigate to={'/welcome'} />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/sign-in',
        element: <SignIn action="sign-in" />,
      },
      {
        path: '/sign-up',
        element: <SignIn action="sign-up" />,
      },
    ],
  },
  {
    path: 'main',
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
]);
