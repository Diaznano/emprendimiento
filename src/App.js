import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SocialButtonsPage from "./components/SocialButton";
import ListProducts from "./pages/ListProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-content">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list/:category">
              <ListProducts />
            </Route>
          </Switch>
          <SocialButtonsPage />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
