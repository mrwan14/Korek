/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Login.css";
import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img src={require("../../images/logo2.png")} alt="" />
      </div>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" Email"
          />

        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="forget-password d-flex">
        <p>Forget Password? </p>
        <a href=""> Reset Password </a>
      </div>
    </div>
  );
}
