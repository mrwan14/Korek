import React from "react";
import Pagination from "../Pantigation/pantigation";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export default function Products() {
  let { Data, indexOfLastItem, indexOfFirstItem, itemsPerPage, paginate } =
    useContext(DataContext);
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {" "}
      <div>
        <div className="row mt-4">
          {currentItems.map((product) => (
            <div className="col-md-6  col-sm-12 gy-3 bg-    p-2  product-container ">
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
                        <h5 className="product-price">{product.Price} L.E </h5>
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
  );
}
