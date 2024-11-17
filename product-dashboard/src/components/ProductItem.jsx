// Task 4 - Create the ProductItem Component

// ProductItem component to display details of a single product
const ProductItem = ({ product }) => {
    return (
      <div className="product-item">
      {/* Display the name, price, and description of the product */}
      <h3>{product.name}</h3>
      <p><strong>Price: </strong>${product.price}</p>
      <p><strong>{product.description}</strong></p>
    </div>
    );
  };
  
  export default ProductItem;
  