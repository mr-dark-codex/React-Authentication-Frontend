// import axios from 'axios';
// import { Navigate, Outlet } from 'react-router-dom';

// // Simulated auth check (replace with your real logic)
// const isAuthenticated = async () => {
//     // return !!localStorage.getItem('token'); // or use Redux, Context, etc.

//     const response = await axios.get('http://localhost:3000/auth', {
//         withCredentials : true
//     });

//     console.log(response.data)

//     if(response.data.status) {
//         return true;
//     }else {
//         return false;
//     }

// };

// const PrivateRoute = () => {
//     return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
    const [isAuth, setIsAuth] = useState(null); // null = loading, true = allowed, false = denied

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:3000/auth', {
                    withCredentials: true
                });

                setIsAuth(response.data.status); // expects { status: true } from backend
            } catch (err) {
                console.error('Auth check failed:', err);
                setIsAuth(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuth === null) {
        return <div>Loading...</div>; // or a spinner
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
