import React, { useState } from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-indigo-600 dark:bg-gray-800 text-white py-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">InQuizitive App</h1>
        <div className="flex space-x-4 items-center">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
          <button
            onClick={toggleTheme}
            className="bg-zinc-400 dark:bg-gray-700 text-indigo-600 dark:text-white p-2 rounded-full focus:outline-none transition duration-300"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
