import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductItem = ({ id, thumbnail, name, currency, price, inStock }) => {
  const [, setCartItemNumber, , setCartAmount, cartData, setCartData] =
    useContext(CartContext);
  const onAddToCart = () => {
    let itemExists = false;

    cartData.forEach((o) => (o.id === id ? (itemExists = !itemExists) : true));

    cartData.length === 0 || itemExists === false
      ? setCartData((p) => [
          ...p,
          {
            id: id,
            thumbnail: thumbnail,
            name: name,
            price: price,
            quantity: 1,
          },
        ])
      : cartData.forEach((o) =>
          o.id === id ? (o.quantity = o.quantity + 1) : true
        );

    setCartItemNumber((p) => (p = p + 1));
    setCartAmount((p) => (p = p + price));
  };

  return (
    <div key={id} className="item-container">
      <div className="item-image-container">
        <img className="item-image" src={thumbnail} alt={name} />
      </div>
      <span className="item-data">{name}</span>
      <span className="item-data">{`${currency} ${price}`}</span>
      {inStock ? (
        <span className="item-data" style={{ color: "green" }}>
          In Stock
        </span>
      ) : (
        <span className="item-data" style={{ color: "red" }}>
          Out of Stock
        </span>
      )}
      {inStock ? (
        <button className="add-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      ) : (
        <button
          className="add-btn"
          style={{
            backgroundColor: "grey",
            color: "white",
            cursor: "default",
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
