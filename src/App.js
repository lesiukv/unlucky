import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  Navbar,
  HomePage,
  CryptoCurrencies,
  News,
  CryptoDetails,
  Exchanges,
  Footer,
} from "./components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="main">
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/cryptodetails/:cryptoId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
