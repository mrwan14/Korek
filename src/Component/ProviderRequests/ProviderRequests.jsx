import React from "react";
import { MdModeEdit } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import Pagination from "../Pantigation/pantigation";
import { useContext } from "react";
import ViewOrders from "../CreateProduct/ViewOrders";
import "./ProviderRequests.css";
import ViewProviderRequest from "./ViewProviderRequest";
import EditProviderRequest from "./EditProviderRequest";
export default function ProviderRequest() {
  let { indexOfLastItem, indexOfFirstItem, itemsPerPage, paginate } =
    useContext(DataContext);

  const Providers = [
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Delivered",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Shipping",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Status: "Placed",
      Amount: 2500,
      Email: "Test@admin.com",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Status: "Cancelled",
      Amount: 2500,
      Email: "Test@admin.com",
    },
  ];

  const currentItems = Providers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="providers mt-0">
        <div className=" container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Provider Name</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((order) => (
                <tr>
                  <th scope="row">{order.id}</th>
                  <td>{order.Name}</td>
                  <td>{order.Name}</td>
                  <td>14/1</td>
                  <td>Cairo</td>
                  <td className="text-muted    ">
                    <i>
                      <ViewProviderRequest order={order} />
                    </i>{" "}
                    <i className="ms-3">
                      <EditProviderRequest order={order} />
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
            totalItems={Providers.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
