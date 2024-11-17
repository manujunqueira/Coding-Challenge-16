// Task 6 - Create the AddProductForm Component

// Importing useState to manage form input states
import { useState } from "react";

// AddProductForm component that includes a form to add new products
const AddProductForm = ({ addProduct }) => {
  // State variables for the form input fields
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Create a new product object with a unique ID and current form values
    const newProduct = {
      id: Date.now(), // Generate a unique ID based on the current timestamp
      name,
      price: parseFloat(price), // Convert price to a number
      description,
    };

    // Call the addProduct function passed down from App to add the new product to the list
    addProduct(newProduct);

    // Reset the form fields after submission
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Input field for product name */}
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name state on change
        style={{ padding: '0.3rem', fontSize: '1rem' }}
      />
      
      {/* Input field for product price */}
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)} // Update price state on change
        style={{ padding: '0.3rem', fontSize: '1rem' }}
      />
      
      {/* Textarea for product description */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description state on change
        style={{ padding: '0.3rem', fontSize: '1rem', resize: 'vertical' }}
      ></textarea>
      
      {/* Submit button to add the product */}
      <button type="submit"
      style={{
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      >
        
        Add Product</button>
    </form>
  );
};

export default AddProductForm;

// Task 7 - Pass Data Between Components
/*This is already covered in previous steps:

The App component passes the addProduct function to AddProductForm.
When the form is submitted, addProduct updates the products state with the new product.
Summary*/