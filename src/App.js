import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headphones from "./pages/headphones/Headphones";
import Home from "./pages/home/Home";
import { AppStyled } from "./AppStyle";
import Speakers from "./pages/speakers/Speakers";
import Earphones from "./pages/earphones/Earphones";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Menu from "./components/home-menu/Menu";
import Xx99MarkTwo from "./pages/xx99-mark-two/Xx99MarkTwo";
import NotFound from "./pages/not-found/NotFound"

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/headphones" component={Headphones} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/earphones" component={Earphones} />
          {/* <Route exact path="/headphones/xx99two" component={Xx99MarkTwo} /> */}
          {/* <Route exact path="/headphones/xx99one" />
          <Route exact path="/headphones/xx59" />
          <Route exact path="/speakers/" />
          <Route exact path="/earphones/" /> */}
          <Route component={NotFound} />
        </Switch>
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
