// src/components/Button.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border rounded"
    >
      Toggle Theme
    </button>
  );
};

export default Button;
