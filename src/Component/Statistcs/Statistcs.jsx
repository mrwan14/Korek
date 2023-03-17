/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Statistcs.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Statistcs() {
  const [dropDownValue, setdropDownValue] = useState("This month");

  return (
    <>
      <div className="dropdown">
        <DropdownButton
          id="dropdown-item-button"
          title={dropDownValue}
          className="format"
        >
          <Dropdown.Item as="button">
            <div onClick={(e) => setdropDownValue(e.target.textContent)}>
              Last month
            </div>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <div onClick={(e) => setdropDownValue(e.target.textContent)}>
              Today
            </div>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <div onClick={(e) => setdropDownValue(e.target.textContent)}>
              Tomorrow
            </div>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <div onClick={(e) => setdropDownValue(e.target.textContent)}>
              This year
            </div>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <div onClick={(e) => setdropDownValue(e.target.textContent)}>
              Last year
            </div>
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="statistcs d-flex row">
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item1 text-white d-flex">
            <h6>Registered Users</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>146</h1>
              <span>user</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item2 text-white d-flex">
            <h6>Registered Service Providers</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>14</h1>
              <span>provider</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item3 text-white d-flex">
            <h6>Registered L Service Providers</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>120</h1>
              <span>provider</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="line"></div>
        </div>
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item3 text-white d-flex">
            <h6>Average Car per User</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>2.4</h1>
              <span>cars</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item2 text-white d-flex">
            <h6>Location Service Requests</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>5923</h1>
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 m-sm-auto p-2 ">
          <div className="item item1 text-white d-flex">
            <h6>Special Service Requests</h6>
            <div className="d-flex justify-content-end align-items-end">
              <h1>1485</h1>
              <span>request</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
