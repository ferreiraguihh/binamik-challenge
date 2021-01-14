import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./component/Header/Header";
import Persons from "./component/Persons/Persons";
import Footer from "./component/Footer/Footer";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <>
          <Route exact path="/" component={Persons} />
        </>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
