import { Navigate } from 'react-router-dom';
import { TPrivateRouteProps } from './PrivateRoute.type';
import { useAuth } from '../../hooks/useAuth';
import { PAGES } from '../../router/pages';

export function PrivateRoute({ children }: TPrivateRouteProps) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to={PAGES.SIGN_IN.path} replace />;
}
