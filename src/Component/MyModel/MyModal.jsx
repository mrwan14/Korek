import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./myModel.css";
import { AiOutlineClose } from "react-icons/ai";
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
const MyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { carModel, CarBrand, ManufactureYear, setData, Data } =
    useContext(DataContext);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...Data, formData]);

    console.log(Data);
    handleCloseModal();

    // Do something with the form data, e.g. send it to a server
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
        ariaHideApp={false}
      >
        <div className=" d-flex justify-content-end">
          {" "}
          <AiOutlineClose onClick={handleCloseModal} />
        </div>{" "}
        <div className="content text-center ">
          <h3>Create a new product</h3>
          <form action="" onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="nameAr"></label>
              <input
                type="text"
                id="nameAr"
                name="nameAr"
                class="form-control"
                value={formData.Product_Name}
                placeholder="  الاسم "
                onChange={(e) =>
                  setFormData({ ...formData, Product_Name: e.target.value })
                }
              />
            </div>
            <div class="form-group">
              <label htmlFor="nameEn"></label>
              <input
                id="nameEn"
                name="nameEn"
                type="text"
                class="form-control"
                value={formData.Product_Name}
                placeholder="   Name"
                onChange={(e) =>
                  setFormData({ ...formData, Product_Name: e.target.value })
                }
              />
            </div>
            <div class="form-group mb-5 ">
              <label htmlFor="descriptionAr"></label>
              <textarea
                class="form-control "
                id="descriptionAr"
                value={formData.Product_Details}
                rows="3"
                placeholder="وصف المنتج"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Product_Details: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div class="form-group  mb-5 ">
              <label htmlFor="descriptionEn"></label>
              <textarea
                class="form-control"
                id="descriptionEn"
                value={formData.Product_Details}
                rows="3"
                placeholder="Description"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Product_Details: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="brand"> </label>
              <select
                class="form-control"
                value={formData.Car_Brand}
                onChange={(e) =>
                  setFormData({ ...formData, Car_Brand: e.target.value })
                }
              >
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
                  value={formData.Price}
                  placeholder="   Price"
                  onChange={(e) =>
                    setFormData({ ...formData, Price: e.target.value })
                  }
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
                  value={formData.shippingPrice}
                  placeholder="   shippingPrice"
                  onChange={(e) =>
                    setFormData({ ...formData, shippingPrice: e.target.value })
                  }
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
                  value={formData.countInStock}
                  placeholder="   Items In Stock"
                  onChange={(e) =>
                    setFormData({ ...formData, countInStock: e.target.value })
                  }
                />
                <div class="input-group-text">Piece</div>
              </div>
            </div>
            <div class="form-group mb-5">
              <label htmlFor="brand"> </label>
              <select 
                class="form-control"
                value={formData.Car_Brand}
                placeholder="car brand"
                onChange={(e) =>
                  setFormData({ ...formData, Car_Brand: e.target.value })
                }
              >
                {CarBrand.map((brand) => (
                  <option >{brand}</option>
                ))}
              </select>
            </div>
            {/*
           

            <div class="form-group">
              <label htmlFor="brand"> </label>
              <select
                class="form-control"
                value={formData.Car_Brand}
                onChange={(e) =>
                  setFormData({ ...formData, Car_Brand: e.target.value })
                }
              >
                <option>Select Car Brand</option>
                {CarBrand.map((brand) => (
                  <option>{brand}</option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="Model"> </label>
              <select
                class="form-control"
                value={formData.Car_Model}
                onChange={(e) =>
                  setFormData({ ...formData, Car_Model: e.target.value })
                }
              >
                <option>Select Car Model</option>
                {carModel.map((model) => (
                  <option>{model}</option>
                ))}
              </select>
            </div>
            <div class="form-group ">
              <label htmlFor="Year"> </label>
              <select
                class="form-control"
                value={formData.Car_Year}
                onChange={(e) =>
                  setFormData({ ...formData, Car_Year: e.target.value })
                }
              >
                <option>Select Manufacture Year</option>
                {ManufactureYear.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>

            <div class="form-group  fixing ">
              <label class="sr-only" htmlFor="price"></label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  value={formData.Price}
                  placeholder="   Price"
                  onChange={(e) =>
                    setFormData({ ...formData, Price: e.target.value })
                  }
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
                  value={formData.countInStock}
                  placeholder="   Items In Stock"
                  onChange={(e) =>
                    setFormData({ ...formData, countInStock: e.target.value })
                  }
                />
                <div class="input-group-text">Piece</div>
              </div>
            </div> */}
            <button className="btn btn-black text-white mt-5" type="submit">
              Create
            </button>
          </form>
        </div>{" "}
      </Modal>
    </>
  );
};

export default MyModal;
