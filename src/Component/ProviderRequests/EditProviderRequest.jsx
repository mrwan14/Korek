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
    height: "400px",
    maxHeight: "1000px",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const EditProviderRequest = (props) => {
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

          <select class="form-select mt-5" aria-label="Default select example">
            <option selected>Requests Status</option>
            <option value="Shipping">Shipping</option>
            <option value="Cancalled">Cancalled</option>
            <option value="Deliverd">Deliverd</option>
          </select>

          <label for="Requests-Date" className="mt-3 ms-0">
            Requests Date:
          </label>
          <input
            type="date"
            id="Requests-Date"
            name="Requests-Date"
            className="form-control"
          />
        </div>{" "}
      </Modal>
    </>
  );
};

export default EditProviderRequest;
