import React from "react";
import Pagination from "../Pantigation/pantigation";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import EditProduct from "../CreateProduct/EditProduct";

export default function Products() {
  let [category, setcategory] = useState([]);
  let userToken = localStorage.getItem("userToken");
  async function getCatogery() {
    let { data } = await axios.get("https://korek-app.herokuapp.com/category", {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    setcategory(data.data);
  }

  useEffect(() => {
    getCatogery();
  }, []);

  let {
    Data,
    indexOfLastItem,
    indexOfFirstItem,
    itemsPerPage,
    paginate,
    selectedBrand,
    selectedModel,
    selectedYear,
  } = useContext(DataContext);
  let filteredData = Data.filter(
    (item) =>
      selectedBrand.includes(item.Car_Brand) ||
      selectedModel.includes(item.Car_Model) ||
      selectedYear.includes(item.Car_Year)
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  // const getProductToEdit = (e) => {
  //   // const ProductToEdit = Data.find((product) => product.id == e.id);
  //   console.log(e.target.id);
  // };

  return (
    <div>
      {/* {category.map((product) => (
        <div>
          <h1>{product._id}</h1>
          <h1>{product.name}</h1>
        </div>
      ))}{" "} */}
      <div>
        <div className="row mt-4">
          <div className="row mt-4">
            {selectedBrand.length ||
            selectedModel.length ||
            selectedYear.length > 0 ? (
              <>
                {!filteredData.length ? (
                  <div>
                    <h1 className="product-doesnot-exist">
                      Product Doesn't Exist
                    </h1>{" "}
                  </div>
                ) : (
                  <div>
                    {" "}
                    {currentItems.map((product) => (
                      <div className="col-md-6  col-sm-12 gy-3 bg-    p-2  product-container ">
                        <div className="product">
                          <div className="row gx-2">
                            <div className="col-md-5 col-5">
                              <div className="img-product position-relative">
                                <div className="edit-icon position-absolute top-0 start-0">
                                  <EditProduct product={product} />
                                </div>
                                <img
                                  src={`${
                                    product.ImgSrc == null
                                      ? require("../../images/product.png")
                                      : product.ImgSrc
                                  }`}
                                  alt=""
                                  className="w-100"
                                />
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
                                    <p className="btn-desc">
                                      {product.Car_Model}
                                    </p>
                                  </button>
                                  <button className="bton">
                                    <p className="btn-desc">
                                      {product.Car_Year}
                                    </p>
                                  </button>
                                  <button className="bton">
                                    <p className="btn-desc">
                                      {product.Car_Brand}
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {" "}
                {Data.map((product) => (
                  <div className="col-md-6  col-sm-12 gy-3 bg-    p-2  product-container ">
                    <div
                      className="product"
                      onClick={(e) => {
                      }}
                    >
                      <div className="row gx-2">
                        <div className="col-md-5 col-5">
                          <div className="img-product position-relative">
                            <div className="edit-icon position-absolute top-0 start-0 text-bg-danger">
                              <EditProduct product={product} />{" "}
                            </div>
                            <img
                              src={`${
                                product.ImgSrc == null
                                  ? require("../../images/product.png")
                                  : product.ImgSrc
                              }`}
                              alt=""
                              className="w-100"
                            />
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
                                <p className="btn-desc">{product.Car_Year}</p>
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
              </>
            )}
          </div>
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
  );
}
