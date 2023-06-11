import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillEye } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

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
    height: "300px",
    maxHeight: "1000px",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const EditCustomers = (props) => {
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
        <MdModeEdit />
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
          <h4>Edit {props.order.id} </h4>
          <div className="order-details  mt-0 ">
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <div class="form-group">
                <label htmlFor="EditName"></label>
                <input
                  id="EditName"
                  name="EditName"
                  type="text"
                  class="form-control"
                  placeholder={props.order.Name}
                />
              </div>
              <div class="form-group">
                <label htmlFor="Location"></label>
                <input
                  id="Location"
                  name="Location"
                  type="text"
                  class="form-control"
                  placeholder={props.order.Email}
                />
              </div>
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
              Save
            </button>
          </div>
        </div>{" "}
      </Modal>
    </>
  );
};

export default EditCustomers;
