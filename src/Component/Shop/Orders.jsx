import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import { MdModeEdit } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import Pagination from "../Pantigation/pantigation";

import { useContext } from "react";
import ViewOrders from "../CreateProduct/ViewOrders";
export default function Orders() {
  let { indexOfLastItem, indexOfFirstItem, itemsPerPage, paginate } =
    useContext(DataContext);
  const orders = [
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
    },
  ];
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="orders mt-0">
        <div className="order-btn">
          {" "}
          <Link to="/shop">
            {" "}
            <button className="button products-btn ">Products</button>{" "}
          </Link>
          <button className="button orders-btn active">Orders</button>
        </div>
        <div className=" container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((order) => (
                <tr>
                  <th scope="row">{order.id}</th>
                  <td>{order.Name}</td>
                  <td>
                    <button
                      className={`status-btn bg-${
                        order.Status === "Cancelled"
                          ? "danger"
                          : order.Status === "Delivered"
                          ? "success"
                          : order.Status === "Placed"
                          ? "primary bg-opacity-75"
                          : "black bg-opacity-75"
                      } `}
                    >
                      {order.Status}
                    </button>
                  </td>
                  <td>{order.Amount}EGP </td>
                  <td className="text-muted    ">
                    <i>
                      <ViewOrders order={order} />
                    </i>{" "}
                    <i className="ms-3">
                      <MdModeEdit />
                    </i>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" d-flex justify-content-center  Pagination">
          {" "}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={orders.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

// /////////////////////////
