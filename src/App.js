import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catagories/" element={<Categories />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </>
    </CartProvider>
  );
}

export default App;
