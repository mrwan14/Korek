import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillEye } from "react-icons/ai";

import "./ViewOrder.css";
import { AiOutlineClose } from "react-icons/ai";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    border: "1px solid #cccccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "1000px",
    width: "900px",
    height: "500px",
    maxHeight: "1000px",
    overflow: "auto",
    
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
const orders = [

  {
    id: 1,
    Product_Name: "Alternator",
    Product_Details: "electrical generator  ",
    Price: 526,
    ImgSrc: require("../../images/product.png"),
    countInStock: 32,
    Car_Model: 2018,
    Car_Brand: "Toyota",
    Car_Color: "Camry",
  },
  {
    id: 2,
    Product_Name: "Alternator",
    Product_Details: "electrical generator  ",
    Price: 526,
    ImgSrc: require("../../images/product.png"),
    countInStock: 32,
    Car_Model: 2018,
    Car_Brand: "Mercedes",
    Car_Color: "Camry",
  },
];
const ViewOrders = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          handleOpenModal();
        }}
        className="view-order-btn"
      >
        {" "}
        <AiFillEye />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        style={modalStyle}
      >
      
        <div className=" d-flex justify-content-end">
          {" "}
          <AiOutlineClose onClick={handleCloseModal} />
        </div>{" "}
        <div className="content text-center ">
          <h4>View Order {props.order.id}</h4>
          <div className="order-details d-flex justify-content-around mt-5">
            <div className="d-flex">
              {" "}
              <h5 className=" text-muted">Name: </h5>
              <h5 className="ms-2"> {props.order.Name}</h5>
            </div>
            <div className="d-flex">
              {" "}
              <h5 className=" text-muted">Status: </h5>
              <h5 className="ms-2"> {props.order.Status}</h5>
            </div>
            <div className="d-flex">
              {" "}
              <h5 className=" text-muted">Amount: </h5>
              <h5 className="ms-2"> {props.order.Amount}</h5>
            </div>
          </div>
          <div className="row mt-4">
            <h6 className=" fw-bolder">Products</h6>

            {orders.map((product) => (
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
                          <h5 className="product-price">
                            {product.Price} L.E{" "}
                          </h5>
                        </div>
                        <h4 className="product-name ms-0">
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

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger  text-white "
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger text-white "
              onClick={handleCloseModal}
            >
              Create
            </button>
          </div>
        </div>{" "}
      </Modal>
    </>
  );
};

export default ViewOrders;
