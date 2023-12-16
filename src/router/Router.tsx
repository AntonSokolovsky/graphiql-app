import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import MainPage from '../pages/MainPage/MainPage';

//ToDo: replace import to lazy import. It is possible to change the way the private route is implemented
// const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));
const Welcome = lazy(() => import('../pages/Welcome/Welcome'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <ErrorPage />,
    children: [
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
    path: '/main',
    element: <PrivateRoute component={MainPage} />,
  },
]);
