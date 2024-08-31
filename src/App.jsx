// src/App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex flex-col`}>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <Button />
        <p className="mt-4">Hello World!</p>
      </main>
    </div>
  );
};

export default App;
