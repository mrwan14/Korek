import React from "react";
import { MdModeEdit } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import Pagination from "../Pantigation/pantigation";
import { useContext } from "react";
import ViewOrders from "../CreateProduct/ViewOrders";
import "./Customers.css";
import CustomersViewModel from "./CustomersViewModel";
import EditCustomers from "./EditCustomers";
export default function Customers() {
  let { indexOfLastItem, indexOfFirstItem, itemsPerPage, paginate } =
    useContext(DataContext);

  const Customers = [
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 1,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
    {
      id: 2,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
      Cars: "toyota",
    },
    {
      id: 3,
      Name: "Mahmoud",
      Email: "test@email.com",
      LoginDate: "5 / 11",
      Cars: "toyota",
      Numberofcars: 3,
      NumberOfAsideServicesRequested: 9,
    },
  ];

  const currentItems = Customers.slice(indexOfFirstItem, indexOfLastItem);

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
                <th scope="col">Login Data</th>
                <th scope="col">Number of cars</th>
                <th scope="col">Number of aside services requested</th>
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
                  <td>{order.Numberofcars} </td>
                  <td>{order.NumberOfAsideServicesRequested} </td>
                  <td className="text-muted    ">
                    <i>
                      <CustomersViewModel order={order} />
                    </i>{" "}
                    <i className="ms-3">
                      <EditCustomers order={order} />
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
            totalItems={Customers.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
