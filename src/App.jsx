
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
// import Signup from './Signup';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default App;
