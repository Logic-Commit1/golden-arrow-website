import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components'
import { Home, About, Offers }  from './pages';

import './App.css'


const App = () => {
  return (
    <>
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/offers' element={<Offers />} />
      </Routes>
    </>
  );
};

export default App;
