import React from "react";
import "./productlist.css";
import ProductListItem from "./product-list-item/ProductListItem";
import productListInfos from "src/data/ProductList";

const ProductList = () => {
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
          <ProductListItem
            key={productListInfo.id}
            category={productListInfo.category}
            categoryListItems={productListInfo.categoryListItems}
            categorySamplePhotos = {productListInfo.categorySamplePhotos}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
