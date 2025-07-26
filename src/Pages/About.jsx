import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          Welcome to our website! This project is built with React and Tailwind CSS.
          Our goal is to create clean, responsive, and user-friendly interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
