import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillEye } from "react-icons/ai";

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

const ProvidersModel = (props) => {
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
          <h4>View Provider Details {props.order.id}</h4>
          <div className="order-details  mt-5 d-flex justify-content-around">
            <div>
              {" "}
              <div className="d-flex">
                {" "}
                <h5 className=" text-muted">Name: </h5>
                <h5 className="ms-2"> {props.order.Name}</h5>
              </div>
              <div className="d-flex">
                {" "}
                <h5 className=" text-muted">Number Of Customers : </h5>
              </div>
              <div className="d-flex">
                {" "}
                <h5 className=" text-muted">Location: </h5>
              </div>
            </div>
            <div>
              <div className="img-product">
                <img
                  src={require("../../images/product.png")}
                  alt=""
                  className="w-75"
                />
              </div>{" "}
            </div>
          </div>

          <div className="d-flex justify-content-around">
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

export default ProvidersModel;
