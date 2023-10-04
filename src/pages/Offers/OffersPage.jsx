import React from 'react';

import ProductsLists from './product-list/ProductList';
import Brochure from './brochure/Brochure';
import { Footer } from '../../components';


const OffersPage = () => {
  return (
    <> 
      <ProductsLists />
      <Brochure />
      <Footer />
    </>
  );
};

export default OffersPage;
