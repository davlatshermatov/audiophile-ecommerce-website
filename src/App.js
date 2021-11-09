import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headphones from "./pages/headphones/Headphones";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { AppStyled } from "./AppStyle";
import Speakers from "./pages/speakers/Speakers";
import Earphones from "./pages/earphones/Earphones";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/headphones" component={Headphones} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/earphones" component={Earphones} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
