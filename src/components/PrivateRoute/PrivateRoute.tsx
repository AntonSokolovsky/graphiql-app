import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TPrivateRouteProps } from './PrivateRoute.type';

export function PrivateRoute({ children }: TPrivateRouteProps) {
  // Add your authentication logic here
  const [isAuthenticated] = useState(false);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
