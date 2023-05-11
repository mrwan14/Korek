/* eslint-disable jsx-a11y/anchor-is-valid */
import Joi from "joi";
import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [erroeList, seterroeList] = useState([]);
  const [error, seterror] = useState("");
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const getUserData = (e) => {
    let myUser = { ...User };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  async function submitLoginForm(e) {
    e.preventDefault();
    setIsloading(true);
    let validateResulte = validateLoginForm();
    if (validateResulte.error) {
      seterroeList(validateResulte.error.details);
      setIsloading(false);
    } else {
      let { data } = await axios.post(
        "https://korek-app.herokuapp.com/auth/admin/login",
        User
      );

      if (data) {
        setIsloading(false);
        localStorage.setItem("userToken", data.accessToken);
        navigate("/");
      } else {
        seterror(data.message);
        setIsloading(false);
      }
      
    }
    
  }

  function validateLoginForm() {
    let schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      password: Joi.string(),
    });
    return schema.validate(User, { abortEarly: false });
  }

  return (
    <div className="login">
      <div className="errors">
        {erroeList.map((error, i) =>
          i === 1 ? (
            <div className="alert py-2 alert-danger ">password invalid</div>
          ) : (
            <div className="alert py-2 alert-danger ">{error.message}</div>
          )
        )}
        {/* {error.length ? <div className="alert alert-danger">{error}</div> : ""} */}
      </div>

      <div className="logo">
        <img src={require("../../images/logo2.png")} alt="" />
      </div>
      <form onSubmit={submitLoginForm}>
        <div className="form-group">
          <label htmlFor="email"> </label>
          <input
            onChange={getUserData}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder=" Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            onChange={getUserData}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLoading === true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
      <div className="forget-password ">
        <p>Forget Password? </p>
        <a href=""> Reset Password </a>
      </div>
    </div>
  );
}
