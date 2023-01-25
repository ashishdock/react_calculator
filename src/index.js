import React from "react";
import ReactDOM from "react-dom";
import c, {multiply, subtract, divide} from "calculator";
// import {add, multiply, subtract, divide} from "calculator"; use add, subtract, etc. no default in this case
// import * as Calculator from "calculator"; use Calculator.add, Calculator.divide

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{c(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
