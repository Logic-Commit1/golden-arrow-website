import React from "react";
import ImageSlider from "../image-slider/ImageSlider";

import "./productlistitem.css";


const ProductListItem = (props) => {
  return (
    <div className="product-list-container">
      <ImageSlider 
        img1={props.categorySamplePhotos[0]}
        img2={props.categorySamplePhotos[1]}
      />
      <p className="product-category">{props.category}</p>
      <ul className="product-list">
        {props.categoryListItems.map((categoryListItem) => (
          <li key={categoryListItem}>
            <p>- {categoryListItem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListItem;
