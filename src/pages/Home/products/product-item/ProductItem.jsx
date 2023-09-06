import React from 'react';
import './productitem.css'

const ProductItem = ( props ) => {
    return(
        <div key={props.id} className="product-item"> 
            <img src={props.img} alt="Product Image" className="product-image" />
            <div className="product-text">
                <h5 className="product-name">{props.productName}</h5>
                <p className="product-details">{props.productDetails}</p>
            </div>
        </div>
    )
};

export default ProductItem;