import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/image/logo.png";
import * as requestAPI from "../../api/api";
import sideImg from "../../assets/image/landing-page-desktop.png";

const SignUp = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // console.log(props.func);

  const handleSignIn = () => {
    props.func(false);
    // console.log(props.func());
  };

  // console.log(form);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    // const token = localStorage.getItem("access_token");
    try {
      const res = await requestAPI.register(form);
      // const token = localStorage.setItem("acces_token", res.data.access_token);
      alert("Register Berhasil Berhasil");
      navigate(-1);
    } catch (error) {
      if (!form.name.length) {
        alert("Nama tidak boleh kosong");
      } else if (!form.email.length) {
        alert("email tidak boleh kosong");
      } else if (!form.password.length) {
        alert("password tidak boleh kosong");
      } else if (form.email.length) {
        alert(error.response.data.message);
      } else if (form.password.length) {
        alert(error.response.data.error.message);
      }
    }
  };

  return (
    <div className="register mx-auto">
      <div className="sign-page ">
        <div className="container-fluid">
          <div className="row">
            <div className="login-area col-xl-6 ">
              <div className="btn">
                <a href={"/"}>
                  <img src={Logo} alt="" />
                </a>
              </div>
              <h1 className="title">Sign Up</h1>
              <div class="mb-2  ">
                <label class="form-label">Name*</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="name"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div class="mb-2  ">
                <label class="form-label">Email*</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Contoh: johndee@gmail.com"
                />
              </div>
              <div>
                <label class="form-label">Create Password*</label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="6+ Karakter"
                />
              </div>
              <button onClick={handleSubmit}> Sign Up</button>
              <h6 className="text-center">
                Don't have an account?{" "}
                <span onClick={handleSignIn}>Sign in here</span>
              </h6>
            </div>
            <div className="bg col-xl-6">
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

export default SignUp;
