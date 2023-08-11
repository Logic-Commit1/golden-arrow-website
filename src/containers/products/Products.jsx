import React from 'react';
import './products.css'
import { ProductItem } from '../../components';
import { anglevalve, centrifugalpump, marineblower, winch } from './imports';

const ProductItems = [anglevalve, centrifugalpump, marineblower, winch]

const Products = () => {
    return(
        <div className="golden-chain_products">
            <div className="section-content">
                <h2>Featured Products</h2>
                <div className="products_container">
                    <div className="products_wrapper">
                        <ul className="product_items">
                            <li>
                                <ProductItem 
                                src='../../assets/products/centrifugal-pump.jpg'
                                />
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>        
    )
};

export default Products;