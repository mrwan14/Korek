import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      {" "}
      <div className="nav">
        <div className="nav-logo">
          <img src={require("../images/image 2.png")} alt="" />
        </div>
        <div className="icons">
          <Link to="/">
            {" "}
            <div className="icon ">
              <img src={require("../images/statics.png")} alt="" />
            </div>{" "}
          </Link>
          <Link to="/shop">
            <div className="icon">
              <img src={require("../images/cart.png")} alt="" />
            </div>{" "}
          </Link>
          <Link to="/providers">
            <div className="icon">
              <img src={require("../images/logo3.png")} alt="" />
            </div>{" "}
          </Link>
          <Link to="/community">
            {" "}
            <div className="icon">
              <img src={require("../images/community.png")} alt="" />
            </div>{" "}
          </Link>
          <div className="icon">
            <img src={require("../images/fix.png")} alt="" />
          </div>{" "}
          <Link to="/Settings">
            <div className="icon">
              <img src={require("../images/settings.png")} alt="" />
            </div>{" "}
          </Link>
        </div>
        <Link to="/login">
          <div className="exit">
            <img src={require("../images/exit.png")} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
