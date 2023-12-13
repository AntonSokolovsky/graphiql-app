import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Welcome';
import './index.css';
import ErrorPage from './ErrorPage';
import SignIn from './SignIn';
import GraphiQL from './GraphiQL';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
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
    element: <PrivateRoute component={GraphiQL} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
