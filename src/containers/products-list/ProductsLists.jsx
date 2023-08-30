import React from "react";
import "./productslists.css";
import { ProductList } from "../../components";
import productListInfos from "../../data/productListInfo";

const ProductsLists = () => {
  return (
    <div className="products-section products-lists-section">
      <div className="products-section-text">
        <h2 className="products-title">
          Our Products<div className="border"></div>
        </h2>

        <p className="products-subtitle">
          Our extensive range of high-quality marine and industrial products is
          designed to meet your every need. From cutting-edge equipment to
          dependable spare parts, we provide the tools to fuel your success and
          keep your operations running smoothly.
        </p>
      </div>
      <div className="product-lists">
        {productListInfos.map((productListInfo) => (
          <ProductList
            key={productListInfo.id}
            category={productListInfo.category}
            categoryListItems={productListInfo.categoryListItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsLists;
