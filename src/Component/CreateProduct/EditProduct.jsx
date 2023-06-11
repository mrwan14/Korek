import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./createProduct.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { DataContext } from "../../Context/DataContext";

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
const EditProduct = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { Data, carModel, CarBrand, ManufactureYear } = useContext(DataContext);

  const getProductToEdit = (e) => {
    // const ProductToEdit = Data.find((product) => product.id == e.id);
    console.log(e);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <AiFillEdit
          onClick={(e) => {
            getProductToEdit(e);
            handleOpenModal();
          }}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        style={modalStyle}
        ariaHideApp={false}
      >
        <div className=" d-flex justify-content-end">
          {" "}
          <AiOutlineClose onClick={handleCloseModal} />
        </div>{" "}
        <div className="content text-center ">
          <h3>Edit product {props.product.id}</h3>
          <form action="">
            <div class="form-group">
              <label htmlFor="nameAr"></label>
              <input
                type="text"
                id="nameAr"
                name="nameAr"
                class="form-control"
                placeholder="  الاسم "
              />
            </div>
            <div class="form-group">
              <label htmlFor="nameEn"></label>
              <input
                id="nameEn"
                name="nameEn"
                type="text"
                class="form-control"
                placeholder="   Name"
              />
            </div>
            <div class="form-group mb-5 ">
              <label htmlFor="descriptionAr"></label>
              <textarea
                class="form-control "
                id="descriptionAr"
                rows="3"
                placeholder="وصف المنتج"
              ></textarea>
            </div>
            <div class="form-group  mb-5 ">
              <label htmlFor="descriptionEn"></label>
              <textarea
                class="form-control"
                id="descriptionEn"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="brand"> </label>
              <select class="form-control">
                <option>Select Catogery</option>
                {/* {CarBrand.map((brand) => (
      <option value={brand.id}>{brand}</option>
    ))} */}
              </select>
            </div>
            <div class="form-group  fixing mt-5 ">
              <label class="sr-only" htmlFor="price"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder="   Price"
                />
                <div class="input-group-text">EGP</div>
              </div>
            </div>
            <div class="form-group  fixing  ">
              <label class="sr-only" htmlFor="shippingPrice"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="shippingPrice"
                  placeholder="   shippingPrice"
                />
                <div class="input-group-text">EGP</div>
              </div>
            </div>
            <div class="form-group  ">
              <label class="sr-only" htmlFor="itemInStock"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="itemInStock"
                  placeholder="   Items In Stock"
                />
                <div class="input-group-text">Piece</div>
              </div>
            </div>
            <div class="form-group mb-5">
              <label htmlFor="brand"> </label>
              <select class="form-control" placeholder="car brand">
                {CarBrand.map((brand) => (
                  <option>{brand}</option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-black text-white "
              onClick={handleCloseModal}
            >
              Edit
            </button>
          </form>
        </div>{" "}
      </Modal>
    </>
  );
};

export default EditProduct;
