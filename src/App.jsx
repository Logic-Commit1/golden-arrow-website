import React, { useState, useEffect } from 'react';
import { Clients, CTA, Navbar } from './components'
import { Products, Services, FAQs, Features, Footer, Hero, WhatGAT } from './containers'
import './App.css'


const App = () => {
  return (
    <div className="classname">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Hero />
      <WhatGAT /> 
      <Products />
      <Clients /> 
      <FAQs />
      <Footer />
    </div> 
  );
};

export default App;
