import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/image/logo.png";
import * as requestAPI from "../../api/api";
import sideImg from "../../assets/image/landing-page-desktop.png";

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    props.func(true);
  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // console.log(form);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem("access_token");

    const config = () => {
      header: {
        Authorization: `Bearer ${token}`;
      }
    };

    try {
      const res = await requestAPI.authLogin(form, config);
      localStorage.setItem("access_token", res.data.access_token);
      console.log(res);
      alert("Login Berhasil");
      navigate(-1);
    } catch (error) {
      if (!form.email.length) {
        alert("email tidak boleh kosong");
      } else if (!form.password.length) {
        alert("password tidak boleh kosong");
      } else if (form.email.length) {
        alert(err.response.data.message);
      } else if (form.password.length) {
        alert(err.response.data.message);
      }
      // console.log(err.response);
    }
  };

  return (
    <div className="register mx-auto">
      <div className="sign-page ">
        <div className="container-fluid">
          <div className="row">
            <div className="login-area col " xs={12}>
              <div className="btn">
                <a href={"/"}>
                  <img src={Logo} alt="" />
                </a>
              </div>
              <h1 className="title"> Welcome Back</h1>
              <div class="mb-2  ">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="6+ Karakter"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button onClick={handleSubmit}> Sign in</button>
              </div>
              <h6 className="text-center">
                Don't have an account?
                <span onClick={handleSignUp}>Sign Up for free</span>
              </h6>
            </div>
            <div className="bg col-6">
              <h1>Binar Car Rental</h1>
              <div className="side-img">
                <img src={sideImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
