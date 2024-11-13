// Task 4 - Create the ProductItem Component

// ProductItem component to display details of a single product
const ProductItem = ({ product }) => {
    return (
      <div>
        {/* Display the name, price, and description of the product */}
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  };
  
  export default ProductItem;
  