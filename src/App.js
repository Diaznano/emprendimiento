import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SocialButtonsPage from "./components/SocialButton";
import ListProducts from "./pages/ListProducts";
import Navigation from "./components/Navigation";
import Logo from "./assets/gif/Logo.gif";

const styles = {
  containerButton: {
    flexDirection: "row",
    textAlign: "left",
    paddingTop: 20,
    marginLeft: 10,
    display: "flex",
  },
  containerHeader: {
    textAlign: "center",
    marginTop: -65,
    marginBottom: 15,
  },
  textHeader: { fontSize: 30, fontWeight: "600" },
  textSubHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: -35,
  },
};

function App() {
  const [isVisible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="App">
      <Router>
        <Navigation isVisible={isVisible} changeVisible={changeVisible} />
        <div
          style={{
            marginLeft: isVisible ? 200 : 0,
            transition: "all 0.5s ease-in",
          }}
          className="app-content"
        >
          <div className="header-page">
            <div style={styles.containerButton} onClick={() => changeVisible()}>
              <img
                src="https://image.flaticon.com/icons/png/512/17/17654.png"
                height={25}
                width={25}
              />
            </div>
            <div style={styles.containerHeader}>
              <a href="#/">
                <img src={Logo} height={100} width={100} />
              </a>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list/:category">
              <ListProducts />
            </Route>
          </Switch>
          <SocialButtonsPage isVisible={isVisible} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
