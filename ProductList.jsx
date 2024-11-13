// Task 3 - Create the ProductList Component

// ProductList.jsx
// importing the ProductItem component to display individual products
import ProductItem from "./ProductItem";

// ProductList component that takes a list of products as a prop
const ProductList = ({ products }) => {
  return (
    <div>
      {/* map through the products array and render a ProductItem for each product */}
      {products.map((product) => (
        <ProductItem 
          key={product.id} // unique key for each product item
          product={product} // pass the product object as a prop to ProductItem
        />
      ))}
    </div>
  );
};

export default ProductList;
