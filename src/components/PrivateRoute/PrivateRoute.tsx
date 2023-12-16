import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TPrivateRouteProps } from './PrivateRoute.type';

export default function PrivateRoute({
  component: Component,
  ...props
}: TPrivateRouteProps) {
  // Add your authentication logic here
  const [isAuthenticated] = useState(false);
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}
