import React from 'react';
import { Clients } from '../components';
import { Products, FAQs, Footer, Hero, WhatGAT } from '../containers'


const Home = () => {
    return (
        <div>
          <Hero />
          <WhatGAT /> 
          <Products />
          <Clients /> 
          <FAQs />
          <Footer />
        </div> 
      );
};

export default Home;
