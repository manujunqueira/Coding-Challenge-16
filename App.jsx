// app.jsx file


// Task 2 - Create the App Component

import { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  // Default list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Coffee Mug', price: 15, description: 'A great mug for cold days.' },
    { id: 2, name: 'T-Shirt', price: 10, description: 'Comfortable cotton t-shirt.' }
  ]);

  return (
    <div>
      <ProductList products={products} />
      <AddProductForm addProduct={(product) => setProducts([...products, product])} />
    </div>
  );
};

export default App;

