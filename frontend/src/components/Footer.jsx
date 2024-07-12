import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 h-10 bg-gray-800 text-white px-4 fixed bottom-0 w-full">
      <p className="text-sm">&copy; {new Date().getFullYear()} Made by Okan Ozman. All rights reserved.</p>
    </footer>
  );
};

export default Footer;