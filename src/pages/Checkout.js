import React, { useContext } from "react";
import Header from "../components/Header";
import TableRow from "../components/TableRow";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [
    ,
    setCartItemNumber,
    cartAmount,
    setCartAmount,
    cartData,
    setCartData,
  ] = useContext(CartContext);
  console.log("cartData", cartData);

  return (
    <div className="checkout-parent">
      <Header isCheckout={true} />
      <div className="checkout-container">
        <h1>Checkout</h1>

        {cartData.length > 0 ? (
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((o) => {
                  return (
                    <TableRow
                      key={o.id}
                      id={o.id}
                      thumbnail={o.thumbnail}
                      name={o.name}
                      price={o.price}
                      quantity={o.quantity}
                      setCartItemNumber={setCartItemNumber}
                      setCartAmount={setCartAmount}
                      setCartData={setCartData}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="total">
              <p>{`Total Amount: $${cartAmount}`}</p>
            </div>
          </div>
        ) : (
          <p>Your Cart is empty</p>
        )}
      </div>
      <div className="footer">
        <Link to={"/"}>
          <button className="footer-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
