import React from "react";
import del from "../images/x-mark-48.ico";

const TableRow = ({
  id,
  thumbnail,
  name,
  price,
  quantity,
  setCartItemNumber,
  setCartAmount,
  setCartData,
}) => {
  const remove = () => {
    setCartData((p) => p.filter((o) => o.id !== id));

    setCartItemNumber((p) => (p = p - quantity));
    setCartAmount((p) => (p = p - price * quantity));
  };

  const decQty = () => {
    if (quantity === 1) remove();
    else {
      setCartData((p) =>
        p.map((o) =>
          o.id !== id
            ? o
            : { id, thumbnail, name, price, quantity: quantity - 1 }
        )
      );
      setCartItemNumber((p) => (p = p - 1));
      setCartAmount((p) => (p = p - price));
    }
  };

  const incQty = () => {
    setCartData((p) =>
      p.map((o) =>
        o.id !== id ? o : { id, thumbnail, name, price, quantity: quantity + 1 }
      )
    );
    setCartItemNumber((p) => (p = p + 1));
    setCartAmount((p) => (p = p + price));
  };

  return (
    <tr key={id}>
      <td>
        <div className="cart-img-container">
          <img className="cart-img" src={thumbnail} alt="thumbnail" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={decQty} className="qty">
          -
        </button>
        {quantity}
        <button onClick={incQty} className="qty">
          +
        </button>
      </td>
      <td>
        <img className="delete" src={del} alt="delete" onClick={remove} />
      </td>
    </tr>
  );
};

export default TableRow;
