import React, { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)

    // Do something with the form data, e.g. send it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Product price:
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </label>
      <button type="submit">Create product</button>
    </form>
  );
}

export default ProductForm;
