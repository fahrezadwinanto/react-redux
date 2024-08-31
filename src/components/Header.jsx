// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} p-4`}>
      <h1>Dark Mode App</h1>
    </header>
  );
};

export default Header;
