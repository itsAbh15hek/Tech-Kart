import HomePage from "./pages/HomePage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <CartProvider>
            <Route path="/" exact component={HomePage} />
            <Route path="/catagories/" exact component={Categories} />
            <Route path="/checkout" exact component={Checkout} />
          </CartProvider>
        </Switch>
      </>
    </Router>
  );
}

export default App;
