import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import "./styling/_global.scss";

// library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
      </Router>
      <Footer path="/footer" />
    </div>
  );
}

export default App;
