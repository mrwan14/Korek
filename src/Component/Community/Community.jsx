import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./commmunity.css";

const FilteredList = () => {
  let {
    Data,
    CarBrand,
    carModel,
    ManufactureYear,

    
  } = useContext(DataContext);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  const handleBrandChange = (Car_Brand) => {
    if (selectedBrand.includes(Car_Brand)) {
      setSelectedBrand(selectedBrand.filter((c) => c !== Car_Brand));
    } else {
      setSelectedBrand([...selectedBrand, Car_Brand]);
    }
  };
  const handleModelChange = (Car_Model) => {
    if (selectedModel.includes(Car_Model)) {
      setSelectedModel(selectedModel.filter((c) => c !== Car_Model));
    } else {
      setSelectedModel([...selectedModel, Car_Model]);
    }
  };
  const handleYearChange = (Car_Year) => {
    if (selectedYear.includes(Car_Year)) {
      setSelectedYear(selectedYear.filter((c) => c !== Car_Year));
    } else {
      setSelectedYear([...selectedYear, Car_Year]);
    }
  };
  const filteredData = Data.filter((item) =>
    selectedBrand.includes(item.Car_Brand && item.Car_Model && item.Car_Year)
  );

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="col-lg-3 col-md-4 ">
            <div className=" text-center filter">
              <h3 className="filter-title">Car Brand</h3>

              <div className="row gx-0 gx-md-5  ">
              {CarBrand.map((brand) => (
              <div className="col-md-6 col-lg-4 col-sm-4 col-4">
                <input
                  type="checkbox"
                  class="hidden"
                  name={brand}
                  id={brand}
                  onChange={() => handleBrandChange(brand)}
                  checked={selectedBrand.includes(brand)}
                />
                <label for={brand}>{brand}</label>
              </div>
            ))}
              </div>
              <h3 className=" filter-title">Car Model</h3>

              <div className="row gx-0 gx-md-5 ">
                {carModel.map((model) => (
                  <div className="col-md-6 col-lg-4 col-sm-4 col-4">
                    <input
                      type="checkbox"
                      class="hidden"
                      name={model}
                      id={model}
                      onChange={() => handleModelChange( model )}
                      checked={selectedModel.includes( model )}
                    />
                    <label htmlFor={model}>{model}</label>
                  </div>
                ))}
              </div>
              <h3 className="filter-title">Manufacture Year</h3>

              <div className="row  gx-0 gx-md-5 ">
                {ManufactureYear.map((Year) => (
                  <div className="col-md-6 col-lg-4 col-sm-4 col-4">
                    <input
                      type="checkbox"
                      class="hidden"
                      name={Year}
                      id={Year}
                      onChange={() => handleYearChange( Year )}
                      checked={selectedYear.includes( Year )}
                    />
                    <label htmlFor={Year}>{Year}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {" "}
          <div>
            {CarBrand.map((brand) => (
              <div>
                <input
                  type="checkbox"
                  class="hidden"
                  name={brand}
                  id={brand}
                  onChange={() => handleBrandChange(brand)}
                  checked={selectedBrand.includes(brand)}
                />
                <label for={brand}>{brand}</label>
              </div>
            ))}

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
                    <li key={item.id}>{item.Product_Name}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredList;
