import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components'
import { HomePage, AboutPage, OffersPage }  from './pages';

import './App.css'


const App = () => {
  return (
    <>
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/offers' element={<OffersPage />} />
      </Routes>
    </>
  );
};

export default App;
