import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/logout', {}, {
                withCredentials: true
            });

            // Redirect to login page
            navigate('/login');
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Home</h1>

            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
