import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./commmunity.css";
import MyModal from "../MyModel/MyModal";

const FilteredList = () => {
  let { Data } = useContext(DataContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleBrandChange = (Car_Brand) => {
    if (selectedCategories.includes(Car_Brand)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== Car_Brand));
    } else {
      setSelectedCategories([...selectedCategories, Car_Brand]);
    }
  };

  const filteredData = Data.filter((item) =>
    selectedCategories.includes(item.Car_Brand)
  );

  return (
    <>
      {" "}
      <div>
        <input
          type="checkbox"
          class="hidden"
          name="BMW"
          id="BMW"
          onChange={() => handleBrandChange("BMW")}
          checked={selectedCategories.includes("BMW")}
        />
        <label for="BMW">BMW</label>
        <input
          type="checkbox"
          class="hidden"
          name="Mercedes"
          id="Mercedes"
          onChange={() => handleBrandChange("Mercedes")}
          checked={selectedCategories.includes("Mercedes")}
        />
        <label for="Mercedes">Mercedes</label>
        <input
          type="checkbox"
          class="hidden"
          name="Toyota"
          id="Toyota"
          onChange={() => handleBrandChange("Toyota")}
          checked={selectedCategories.includes("Toyota")}
        />
        <label for="Toyota">Toyota</label>

        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.Car_Brand}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilteredList;
