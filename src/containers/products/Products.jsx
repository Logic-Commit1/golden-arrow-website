import React from "react";
import "./products.css";
import { ProductItem } from "../../components";
import productInfos from "../../data/productsInfo";

const Products = () => {
  return (
    <div className="products-section homepage-products">
      <div className="products-section-text">
        <h2 className="products-title" id="homepage-products-title">
          Our Products<div className="border"></div>
        </h2>

        <p className="products-subtitle" id="homepage-products-subtitle">
          Our extensive range of high-quality marine and industrial products is
          designed to meet your every need. We provide the tools to fuel your success and
          keep your operations running smoothly.
        </p>
      </div>
      <div className="products">
        {productInfos.map((productInfo) => (
          <ProductItem
            key={productInfo.id}
            img={productInfo.img}
            productName={productInfo.productName}
            productDetails={productInfo.productDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
