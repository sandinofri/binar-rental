import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/image/logo.png";
import * as requestAPI from "../../api/api";
import classNames from "classnames";

import sideImg from "../../assets/image/LandingPage.png";
import { useDispatch, useSelector } from "react-redux";
import {
  disableButton,
  enableButton,
  isLoading,
} from "../../features/detail/detailSlice";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.detail);
  const { loading } = useSelector((state) => state.detail);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const className = classNames({
    //nama class : condition
    disabled: !state.is_disabled,
    disabled_loading: loading,
    null: state.is_disabled,
  });

  const handleSignUp = () => {
    props.func(true);
  };

  useEffect(() => {
    if (!form.email && !form.password) {
      dispatch(disableButton());
    }
  }, [state.is_disabled, form.email, form.password]);

  const handleChange = (e) => {
    // console.log(e.target);
    dispatch(enableButton());
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // console.log(form);

  const handleSubmit = async () => {
    dispatch(isLoading());

    const token = localStorage.getItem("access_token");

    const config = () => {
      header: {
        Authorization: `Bearer ${token}`;
      }
    };

    try {
      const res = await requestAPI.authLogin(form, config);
      localStorage.setItem("access_token", res.data.access_token);
      dispatch(isLoading());
      alert("Login Berhasil");
      navigate(-1); //go to previous page
    } catch (error) {
      dispatch(isLoading());

      if (!form.email.length) {
        alert("email tidak boleh kosong");
      } else if (!form.password.length) {
        alert("password tidak boleh kosong");
      } else if (form.email.length) {
        alert(error.response.data.message);
      } else if (form.password.length) {
        alert(error.response.data.message);
      }
      // console.log(err.response);
    }
  };

  return (
    <div className="register ">
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
                <button
                  onClick={handleSubmit}
                  disabled={!state.is_disabled}
                  className={className}>
                  Sign in
                </button>
                <button className="btn-register" onClick={handleSubmit}>
                  {" "}
                  Sign in
                </button>
              </div>
              <h6 className="text-center">
                Don't have an account?
                <span onClick={handleSignUp}>Sign Up for free</span>
              </h6>
            </div>
            <div className="bg col-xl-6">
              <h1 className="ms-5">Binar Car Rental</h1>
              <div className="img ms-5"></div>
              <div className="col-6 side-img-wrapper">
                <h1>Binar Car Rental</h1>
                <img className="side-img" src={sideImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
