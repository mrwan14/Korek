/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css";
import Login from "../Login/Login";
export default function Dashboard() {
  let location = useLocation();
  let finalLocation = location.pathname.split("/");
  return (
    <React.Fragment>
      {location.pathname === "/login" ? (
        <Login />
      ) : (
        <div className="dashboard d-flex">
          <Navbar></Navbar>
          <div className="w-100 ">
            <div className="title d-flex align-items-end">
              <h1>Dashboard / </h1>
              <h4 className="ms-3 mb-2 lead">
                {location.pathname === "/" ? "Statistcs" : finalLocation}
              </h4>
            </div>
            <div className="outlet">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
