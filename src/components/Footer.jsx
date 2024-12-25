import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 dark:bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Interactive Quiz App. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Made with ❤️ by <span className="font-semibold">Shreyash Srivastava</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
