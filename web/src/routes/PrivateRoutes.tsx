import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export { PrivateRoute };
