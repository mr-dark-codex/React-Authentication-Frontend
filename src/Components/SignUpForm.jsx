import React, { useState } from 'react';

const SignUPForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        setError('');
        // onLogin({ email, password });
        setEmail('');
        setPassword('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-md space-y-6"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex flex-col">
                <label className="mb-1 text-gray-600">Email</label>
                <input
                    type="email"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-1 text-gray-600">Password</label>
                <input
                    type="password"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Login
            </button>
        </form>
    );
};

export default SignUPForm;
