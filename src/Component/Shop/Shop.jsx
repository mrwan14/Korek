import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./Shop.css";
import Pagination from "../Pantigation/pantigation";
import { HiFilter } from "react-icons/hi";
import MyModal from "../MyModel/MyModal";

export default function Shop() {
  let { Data } = useContext(DataContext);

  const CarBrand = [
    "Toyota",
    "Hyundai",
    "Kia",
    "Chevrolet",
    "Nissan",
    "Mitsubishi",
    "Mercedes",
    "BMW",
    "Peugeot",
    "Renault",
  ];
  const carModel = [
    "Corolla",
    "Camry",
    "Yaris",
    "Fortuner",
    "RAV4",
    "Land Cruiser",
  ];
  const ManufactureYear = [
    "2013",
    "2014",
    "2015",
    "2017",
    "2018",
    " 2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="shop">
      <div className="row">
        <div className="col-md-7  ">
          <div className="top-buttons d-flex justify-content-between">
            <div>
              {" "}
              <button className="button products-btn">Products</button>
              <button className="button orders-btn">Orders</button>
            </div>
            <div>
              {" "}
              <MyModal />
            </div>
          </div>
          <div>
            <div className="row mt-4">
              {currentItems.map((product) => (
                <div className="col-md-6   gy-3  p-2  product-container ">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-container">
                        <img src={product.ImgSrc} alt="" className="w-100" />
                      </div>{" "}
                    </div>
                    <div className="col-md-7">
                      <div className="product-desc">
                        <div className="d-flex justify-content-between">
                          <p className="product-in-stock">
                            {product.countInStock}{" "}
                            <span className="text-muted">In stock</span>
                          </p>
                          <h5 className="product-price">
                            {product.Price} L.E{" "}
                          </h5>
                        </div>
                        <h4 className="product-name">{product.Product_Name}</h4>
                        <p className="product-details">
                          {product.Product_Details}
                        </p>
                        <div className="d-flex justify-content-between">
                          <button className="bton">
                            <p className="btn-desc">{product.Car_Model}</p>
                          </button>
                          <button className="bton">
                            <p className="btn-desc">{product.Car_Color}</p>
                          </button>
                          <button className="bton">
                            <p className="btn-desc">{product.Car_Brand}</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" d-flex justify-content-center">
              {" "}
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={Data.length}
                paginate={paginate}
              />
            </div>
          </div>{" "}
        </div>

        <div className="col-md-1">
          <div className="brdr"></div>
        </div>
        <div className="col-md-4 ">
          <div className=" text-center filter">
            <h3 className="my-3">
              Car Brand <HiFilter className="filter-icon" />
            </h3>

            <div className="row">
              {CarBrand.map((brand) => (
                <div className="col-md-4">
                  <input
                    type="checkbox"
                    class="hidden"
                    name={brand}
                    id={brand}
                    onChange={() => handleBrandChange({ brand })}
                    checked={selectedCategories.includes({ brand })}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
            <h3 className="my-3">
              Car Model <HiFilter className="filter-icon" />
            </h3>

            <div className="row">
              {carModel.map((brand) => (
                <div className="col-md-4">
                  <input
                    type="checkbox"
                    class="hidden"
                    name={brand}
                    id={brand}
                    onChange={() => handleBrandChange({ brand })}
                    checked={selectedCategories.includes({ brand })}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
            <h3 className="my-3">
              Manufacture Year <HiFilter className="filter-icon" />
            </h3>

            <div className="row">
              {ManufactureYear.map((brand) => (
                <div className="col-md-4">
                  <input
                    type="checkbox"
                    class="hidden"
                    name={brand}
                    id={brand}
                    onChange={() => handleBrandChange({ brand })}
                    checked={selectedCategories.includes({ brand })}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>

            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>{item.Car_Brand}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
