import React, { FC, ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

type TPrivateRouteProps = {
  component: () => ReactNode;
};

const PrivateRoute: FC<TPrivateRouteProps> = ({
  component: Component,
  ...props
}) => {
  // Add your authentication logic here
  const [isAuthenticated] = useState(false);
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};
export default PrivateRoute;
