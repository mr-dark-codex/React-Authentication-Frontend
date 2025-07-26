import { Navigate, Outlet } from 'react-router-dom';

// Simulated auth check (replace with your real logic)
const isAuthenticated = () => {
    // return !!localStorage.getItem('token'); // or use Redux, Context, etc.
    return false;
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
