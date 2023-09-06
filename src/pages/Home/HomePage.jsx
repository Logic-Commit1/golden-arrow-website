import React from 'react';
import Clients from './clients/Clients';
import Hero from './hero/Hero';
import WhatGAT from './whatGAT/WhatGAT';
import FAQs from './faqs/FAQs';
import Products from './products/Products';
import { Footer } from '../../components';


const HomePage = () => {
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

export default HomePage;
