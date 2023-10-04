import React from "react";

import "./productlistitem.css";

const ProductListItem = (props) => {
  return (
    <div className="product-list-container">
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
