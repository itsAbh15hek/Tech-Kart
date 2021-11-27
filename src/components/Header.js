import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = ({ categoryData, otherCategoryData, isCheckout, isHeader }) => {
  const [cartItemNumber, , cartAmount] = useContext(CartContext);
  let keyboardsData = {},
    headphonesData = {},
    isKeyboards;
  if (!isHeader && !isCheckout) {
    isKeyboards = categoryData.name === "Keyboards";

    keyboardsData =
      categoryData.name === "Keyboards" ? categoryData : otherCategoryData;
    headphonesData =
      categoryData.name === "Headphones" ? categoryData : otherCategoryData;
  }

  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">Tech Kart</h1>
      </Link>

      {!isHeader && !isCheckout && (
        <div className="nav">
          <Link
            to="/catagories"
            state={{
              categoryData: headphonesData ? headphonesData : 0,
              otherCategoryData: keyboardsData ? keyboardsData : 0,
            }}
          >
            <button className={`nav-btn ${!isKeyboards ? "nav-active" : ""}`}>
              Headphones
            </button>
          </Link>
          <Link
            to="/catagories"
            state={{
              categoryData: keyboardsData ? keyboardsData : 0,
              otherCategoryData: headphonesData ? headphonesData : 0,
            }}
          >
            <button className={`nav-btn ${isKeyboards ? "nav-active" : ""}`}>
              Keyboards
            </button>
          </Link>
        </div>
      )}
      {!isCheckout && (
        <Link to="/checkout">
          <div className="cart">
            <p className="item-number">{cartItemNumber}</p>
            <p className="item-amount">{`$${cartAmount}`}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

Header.defaultProps = {
  isCheckout: false,
};

export default Header;
