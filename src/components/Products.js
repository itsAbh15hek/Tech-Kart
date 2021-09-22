import React, { useEffect, useState } from "react";
import products from "../data/products.json";
import ProductItem from "./ProductItem";

const Products = ({ filters, categoryId }) => {
  const { delivery, inStock, expensive } = filters;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList((p) => [...p, ...products]);
  }, []);

  const filteredProducts = productList
    .filter((o) => o.categoryId === categoryId)
    .filter((o) => (delivery ? o.delivery === true : true))
    .filter((o) => (inStock ? o.inStock === true : true))
    .filter((o) => (expensive ? o.price > 100 : true));
  return (
    <div className="product-list">
      {filteredProducts.map((o) => {
        return (
          <ProductItem
            key={o.id}
            id={o.id}
            thumbnail={o.thumbnail}
            name={o.name}
            currency={o.currency}
            price={o.price}
            inStock={o.inStock}
          />
        );
      })}
    </div>
  );
};

export default Products;
