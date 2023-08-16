import React from 'react';
import './products.css'
import { ProductItem } from '../../components';
import productInfos from '../../data/productsInfo';


const Products = () => {
    return(
        <div className="products-section">
            <div className="products-section-text">
                <h2 className="products-title">Marine Products<div className="border"></div></h2>
                
                <p className="products-subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris eros, facilisis sit amet iaculis sollicitudin, consequat non lacus. Nullam maximus, risus sed faucibus, risus arcu facilisis quam, efficitur pharetra
                                                  elit purus in diam. </p>
            </div>
            <div className="products">
                {productInfos.map((productInfo) => (
                    <ProductItem 
                        key = {productInfo.id}
                        img = {productInfo.img}
                        productName = {productInfo.productName}
                        productDetails = {productInfo.productDetails}
                    />
                ))}
            </div>
            
        </div>        
    )
};

export default Products;