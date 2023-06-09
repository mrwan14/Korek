import React from "react";
import { MdModeEdit } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import Pagination from "../Pantigation/pantigation";
import { useContext } from "react";
import ViewOrders from "../CreateProduct/ViewOrders";
import "./Providers.css";
import ProvidersModel from "./ProvidersModel";
import EditProviderModel from "./EditProviderModel";
export default function Providers() {
  let { indexOfLastItem, indexOfFirstItem, itemsPerPage, paginate } =
    useContext(DataContext);

  const Providers = [
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
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
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Login Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((order) => (
                <tr>
                  <th scope="row">{order.id}</th>
                  <td>{order.Name}</td>
                  <td>
                    <p> {order.Email}</p>
                  </td>
                  <td>{order.LoginDate} </td>
                  <td className="text-muted    ">
                    <i>
                      <ProvidersModel order={order} />
                    </i>{" "}
                    <i className="ms-3">
                      <EditProviderModel order={order} />
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
