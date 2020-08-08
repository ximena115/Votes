import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProductList from "./ProductList";

import { products } from "./const";

function App() {
  return (
    <div className="App">
      <ProductList data={products} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
