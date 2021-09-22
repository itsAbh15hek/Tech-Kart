import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import categories from "../data/categories.json";
import keyboardImg from "../images/keyboard.png";
import headphoneImg from "../images/headphone.png";

const HomePage = () => {
  const [keyboardsData, setKeyboardsData] = useState({});
  const [headphonesData, setHeadphonesData] = useState({});
  const [isShown, setIsShown] = useState("");

  useEffect(() => {
    setKeyboardsData(
      (p) => categories.filter((o) => o.name === "Keyboards")[0]
    );
    setHeadphonesData(
      (p) => categories.filter((o) => o.name === "Headphones")[0]
    );
  }, []);

  const keyboardStyle = {
    position: "fixed",
    width: "30%",
    top: "35vh",
    right: `${isShown === "Keyboards" ? "-5%" : "-40%"}`,
    zIndex: "-1",
    transition: "right .5s ease-in-out",
  };
  const headphoneStyle = {
    position: "fixed",
    width: "25%",
    top: "31vh",
    transform: "scaleX(-1)",
    left: `${isShown === "Headphones" ? "-0%" : "-30%"}`,
    zIndex: "-1",
    transition: "left .5s ease-in-out",
  };

  const headphonesMsgStyle = {
    position: "fixed",
    bottom: "100px",
    fontSize: "20px",
    fontFamily: "Lucida Console, Monaco, monospace",
    letterSpacing: "1px",
    color: `${isShown === "Headphones" ? "white" : "transparent"}`,
    transition: "all .5s ease-in-out",
  };
  const keyboardsMsgStyle = {
    position: "fixed",
    bottom: "100px",
    fontSize: "20px",
    fontFamily: "Lucida Console, Monaco, monospace",
    letterSpacing: "1px",
    color: `${isShown === "Keyboards" ? "white" : "transparent"}`,
    transition: "all .5s ease-in-out",
  };

  return (
    <div className="home-container">
      <Header isHeader={true} />
      <div className="home-showcase">
        <Link
          to={{
            pathname: "/catagories",
            state: {
              categoryData: headphonesData ? headphonesData : 0,
              otherCategoryData: keyboardsData ? keyboardsData : 0,
            },
          }}
        >
          <button
            onMouseEnter={() => setIsShown("Headphones")}
            onMouseLeave={() => setIsShown("")}
            className="button type1"
          >
            Headphones
          </button>
        </Link>
        <Link
          to={{
            pathname: "/catagories",
            state: {
              categoryData: keyboardsData ? keyboardsData : 0,
              otherCategoryData: headphonesData ? headphonesData : 0,
            },
          }}
        >
          <button
            onMouseEnter={() => setIsShown("Keyboards")}
            onMouseLeave={() => setIsShown("")}
            className="button type1"
          >
            Keyboards
          </button>
        </Link>
      </div>

      <div style={headphonesMsgStyle}>{headphonesData.description}</div>
      <div style={keyboardsMsgStyle}>{keyboardsData.description}</div>

      <img src={headphoneImg} alt="keyboard" style={headphoneStyle} />
      <img src={keyboardImg} alt="keyboard" style={keyboardStyle} />
    </div>
  );
};

export default HomePage;
