/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";

import "./Shop.css";
import { HiFilter } from "react-icons/hi";
import Products from "./Products";
import Orders from "./Orders";
import { Link } from "react-router-dom";
import MyModal from "../MyModel/MyModal";

export default function Shop() {
  let {
    CarBrand,
    carModel,
    ManufactureYear,
    Data,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedYear,
    setSelectedYear,
    handleBrandChange,
    handleModelChange,
    handleYearChange,

    


    selectedCategories,
  } = useContext(DataContext);


  // const filteredData = Data.filter((item) =>
  //   selectedCategories.includes(item.Car_Brand)
  // );

  const [Button, setButton] = useState([]);

  return (
    <div className="shop">
      <div className="row">
        <div className=" col-lg-8  col-md-7   ">
          <div className="top-buttons d-flex justify-content-between">
            <div className="btn-group">
              {" "}
              <button className="button products-btn active">Products</button>
              <Link to="/order">
                {" "}
                <button className="button orders-btn">Orders</button>
              </Link>
            </div>
            <div>
              <MyModal />
            </div>
          </div>
          <div>
            {Button === "Orders" ? (
              <div>
                {" "}
                <Orders />
              </div>
            ) : (
              <div>
                <Products />{" "}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-1">
          <div className="brdr"></div>
        </div>
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
                    onChange={() => handleModelChange(model)}
                    checked={selectedModel.includes(model)}
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
                    onChange={() => handleYearChange(Year)}
                    checked={selectedYear.includes(Year)}
                  />
                  <label htmlFor={Year}>{Year}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
