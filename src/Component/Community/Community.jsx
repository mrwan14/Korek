import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./commmunity.css";
import ProductForm from "./ProductForm";

const FilteredList = () => {
  let { Data } = useContext(DataContext);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const handleBrandChange = (Car_Brand) => {
    if (selectedBrand.includes(Car_Brand)) {
      setSelectedBrand(selectedBrand.filter((c) => c !== Car_Brand));
    } else {
      setSelectedBrand([...selectedBrand, Car_Brand]);
    }
  };
  const filteredData = Data.filter((item) =>
    selectedBrand.includes(item.Car_Brand)
  );
  const [products, setProducts] = useState([]);

  const handleSubmit = (formData) => {
    setProducts([...products, formData]);
    
  };

  return (
    <>
      <div>
        <h1>Create a new product</h1>
        <ProductForm onSubmit={handleSubmit} />
        <h2>Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>{" "}
      {/* <div>
        <input
          type="checkbox"
          class="hidden"
          name="BMW"
          id="BMW"
          onChange={() => handleBrandChange("BMW")}
          checked={selectedBrand.includes("BMW")}
        />
        <label for="BMW">BMW</label>
        <input
          type="checkbox"
          class="hidden"
          name="Mercedes"
          id="Mercedes"
          onChange={() => handleBrandChange("Mercedes")}
          checked={selectedBrand.includes("Mercedes")}
        />
        <label for="Mercedes">Mercedes</label>
        <input
          type="checkbox"
          class="hidden"
          name="Toyota"
          id="Toyota"
          onChange={() => handleBrandChange("Toyota")}
          checked={selectedBrand.includes("Toyota")}
        />
        <label for="Toyota">Toyota</label>
        {filteredData.length === 0 ? (
          <>
            {
              <ul>
                {Data.map((item) => (
                  <li key={item.id}>{item.Car_Brand}</li>
                ))}
              </ul>
            }
          </>
        ) : (
          <>
            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>{item.Car_Brand}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div></div> */}
    </>
  );
};

export default FilteredList;
