import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/image/logo.png";
import * as requestAPI from "../../api/api";
import sideImg from "../../assets/image/LandingPage.png";

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
      navigate("/");
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
              <div className="logo-register">
                <a href={"/"}>
                  <img src={Logo} alt="" />
                </a>
              </div>
              <h1 className="title"> Welcome Back</h1>
              <div className="mb-2  ">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="6+ Karakter"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="btn-register" onClick={handleSubmit}> Sign in</button>
              </div>
              <h6 className="text-center">
                Don't have an account?
                <span onClick={handleSignUp}>Sign Up for free</span>
              </h6>
            </div>
            <div className="col-6 side-img-wrapper">
              <h1>Binar Car Rental</h1>
              <img className="side-img" src={sideImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
