import React, { useState, useEffect } from 'react';
import { Brand, CTA, Navbar } from './components'
import { Blog, Features, Footer, Header, WhatGAT } from './containers'
import './App.css'


const App = () => {
  return (
    <div className="classname">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand /> 
      <WhatGAT /> 
      <Features /> 
      <CTA />
      <Blog />
      <Footer />
    </div> 
  );
};

export default App;
