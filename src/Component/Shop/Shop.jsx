import React, { useContext,  } from "react";
import { DataContext } from "../../Context/DataContext";
import "./Shop.css";
import Pagination from "../Pantigation/pantigation";
import { HiFilter } from "react-icons/hi";
import MyModal from "../MyModel/MyModal";

export default function Shop() {
  let {
    Data,
    CarBrand,
    carModel,
    ManufactureYear,
    handleBrandChange,
    selectedCategories,

    indexOfLastItem,
    indexOfFirstItem,
    itemsPerPage,
    paginate,
  } = useContext(DataContext);

  const filteredData = Data.filter((item) =>
    selectedCategories.includes(item.Car_Brand)
  );

  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="shop">
      <div className="row">
        <div className=" col-lg-8  col-md-7   ">
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
                <div className="col-md-6  col-sm-12 gy-3    p-2  product-container ">
                  <div className="product">
                    <div className="row gx-2">
                      <div className="col-md-5 col-5">
                        <div className="img-product">
                          <img src={product.ImgSrc} alt="" className="w-100" />
                        </div>{" "}
                      </div>
                      <div className="col-md-7 col-7">
                        {" "}
                        <div className="desc-product">
                          <div className="d-flex justify-content-between">
                            <p className="product-in-stock">
                              {product.countInStock}{" "}
                              <span className="text-muted">In stock</span>
                            </p>
                            <h5 className="product-price">
                              {product.Price} L.E{" "}
                            </h5>
                          </div>
                          <h4 className="product-name">
                            {product.Product_Name}
                          </h4>
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
                </div>
              ))}
            </div>
            <div className=" d-flex justify-content-center  Pagination">
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
        <div className="col-lg-3 col-md-4 ">
          <div className=" text-center filter">
            <h3 className="filter-title">
              Car Brand <HiFilter className="filter-icon" />
            </h3>

            <div className="row gx-0 gx-md-5  ">
              {CarBrand.map((brand) => (
                <div className="col-md-6 col-lg-4 col-sm-4 col-4">
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
            <h3 className=" filter-title">
              Car Model <HiFilter className="filter-icon" />
            </h3>

            <div className="row gx-0 gx-md-5 ">
              {carModel.map((brand) => (
                <div className="col-md-6 col-lg-4 col-sm-4 col-4">
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
            <h3 className="filter-title">
              Manufacture Year <HiFilter className="filter-icon" />
            </h3>

            <div className="row gx-0 gx-md-5 ">
              {ManufactureYear.map((brand) => (
                <div className="col-md-6 col-lg-4 col-sm-4 col-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
