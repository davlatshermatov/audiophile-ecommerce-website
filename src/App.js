import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headphones from "./pages/headphones/Headphones";
import Home from "./pages/home/Home";
import { AppStyled } from "./AppStyle";
import Speakers from "./pages/speakers/Speakers";
import Earphones from "./pages/earphones/Earphones";
import NotFound from "./pages/not-found/NotFound";
import Xx99Two from "./pages/xx99Two/Xx99Two";
import Xx99One from "./pages/xx99One/Xx99One.jsx";
import Xx59 from "./pages/xx59/Xx59.jsx";
import Zx9 from "./pages/zx9/Zx9.jsx";
import Zx7 from "./pages/zx7/Zx7.jsx";
import Yx1 from "./pages/yx1/Yx1.jsx";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppStyled>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/headphones" component={Headphones} />
            <Route exact path="/speakers" component={Speakers} />
            <Route exact path="/earphones" component={Earphones} />
            <Route exact path="/headphones/xx99two" component={Xx99Two} />
            <Route exact path="/headphones/xx99one" component={Xx99One} />
            <Route exact path="/headphones/xx59" component={Xx59} />
            <Route exact path="/speakers/zx9" component={Zx9} />
            <Route exact path="/speakers/zx7" component={Zx7} />
            <Route exact path="/earphones/yx1" component={Yx1} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </AppStyled>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
