import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { loadReCaptcha } from 'react-recaptcha-v3'
import { reCaptchaConfig } from "./config.js"

// const element = <FontAwesomeIcon icon={faCoffee} />;

// loadReCaptcha(reCaptchaConfig.siteKey);
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(element, document.body);
