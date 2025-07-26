import { Navigate, Outlet } from 'react-router-dom';

// Simulated auth check (replace with your real logic)
const isAuthenticated = () => {
    // return !!localStorage.getItem('token'); // or use Redux, Context, etc.
    return true;
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
