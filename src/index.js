import React from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Compound component</h1>
      <Nav>
        <Nav.On>Show</Nav.On>
        <Nav.Off>Hide</Nav.Off>
        <br />
        <Nav.Button />
      </Nav>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
