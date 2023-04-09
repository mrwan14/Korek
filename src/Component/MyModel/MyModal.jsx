import React, { useState } from "react";
import Modal from "react-modal";
import "./myModel.css";
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
    maxWidth: "700px",
    width: "500px",
    height: "732px",
    maxHeight: "1000px",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
const MyModal = () => {
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
        onClick={handleOpenModal}
        className="btn btn-black text-white  mt-0 "
      >
        {" "}
        Create Product
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
          <h3>Create a new product</h3>
          <form action="">
            <div class="form-group">
              <label for="exampleFormControlInput1"></label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="   Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Select Car Brand</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Select Car Model</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group ">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Select Manufacture Year</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group ">
              <label for="exampleFormControlTextarea1"></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="form-group  fixing ">
              <label class="sr-only" for="inlineFormInputGroupUsername"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="   Price"
                />
                <div class="input-group-text">EGP</div>
              </div>
            </div>
            <div class="form-group  ">
              <label class="sr-only" for="inlineFormInputGroupUsername"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="   Items In Stock"
                />
                <div class="input-group-text">Piece</div>
              </div>
            </div>
          </form>
          <button
            className="btn btn-black text-white "
            onClick={handleCloseModal}
          >
            Create
          </button>
        </div>{" "}
      </Modal>
    </>
  );
};

export default MyModal;
