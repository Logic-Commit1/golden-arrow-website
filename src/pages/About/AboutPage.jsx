import React from 'react';
import { Footer } from '../../components';
import Intro from './intro/Intro';
import Story from './story/Story';
import Mission from './mission/Mission';
import CoreValues from './core-values/CoreValues';


const AboutUsPage = () => {
  return (
    <>  
      <Intro />
      <Story />
      <Mission />
      <CoreValues />

      <Footer />
    </>
  );
};

export default AboutUsPage;
