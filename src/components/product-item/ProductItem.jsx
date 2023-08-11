import React from 'react';
import './productitem.css'

const ProductItem = () => {
    return(
        <div>
            <figure className="cards_item_pic-wrap">
                <img src="" alt="Product Image" className="cards_item_img"/>
            </figure>
            <div className="product_item_info"> 
                <h5 className="products_item_text"></h5>
            </div>

        </div>
    )
};

export default ProductItem;