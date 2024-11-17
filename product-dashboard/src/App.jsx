// app.jsx file


// Task 2 - Create the App Component

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import './app.css';

function App () { //main app component 
  // Default list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Coffee Mug', price: 15, description: 'A great mug for cold days.' },
    { id: 2, name: 'T-Shirt', price: 10, description: 'Comfortable cotton t-shirt.' }
  ]);

const addProduct = (product) => {
  setProducts([...products, product]);
};

return (
  <div id="root">
    <div className="App">
      <h1>Products Dashboard</h1>
      {/* Display list of products */}
      <ProductList products={products} />
      {/* Form to add a new product */}
      <AddProductForm addProduct={addProduct} />
    </div>
  </div>
);
};

export default App;
