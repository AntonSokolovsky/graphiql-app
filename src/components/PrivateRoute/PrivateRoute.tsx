import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TPrivateRouteProps } from './PrivateRoute.type';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/auth/firebase';

export function PrivateRoute({ children }: TPrivateRouteProps) {
  // Add your authentication logic here
  const [user] = useAuthState(auth);
  const [isAuthenticated] = useState(!!user);

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
