import React, { Component } from "react";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import "./styling/_global.scss";
import "./App.css";
import { loadReCaptcha } from 'react-recaptcha-v3'
import { reCaptchaConfig } from "./config.js";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
      </Router>
      <Footer path="/footer" />
    </div>
  );
  }
  componentDidMount() {
    // loadReCaptcha(reCaptchaConfig.siteKey);
  }
}


export default App;
