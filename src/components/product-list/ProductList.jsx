import React from "react";
import "./productlist.css";

const ProductList = (props) => {
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

export default ProductList;
