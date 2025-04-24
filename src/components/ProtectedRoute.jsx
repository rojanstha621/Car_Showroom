import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  console.log('Is Logged In:', isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
