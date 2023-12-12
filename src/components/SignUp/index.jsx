import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/image/logo.png";
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
  const handleSubmit = () => {
    const token = localStorage.getItem("Acces Token");

    axios
      .post(`https://api-car-rental.binaracademy.org/admin/auth/register`, form)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("Acces Token", res.data.access_token);
        alert("Register Berhasil Berhasil");
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        if (!form.name.length) {
          alert("Nama tidak boleh kosong");
        } else if (!form.email.length) {
          alert("email tidak boleh kosong");
        } else if (!form.password.length) {
          alert("password tidak boleh kosong");
        } else if (form.email.length) {
          alert(err.response.data.message);
        } else if (form.password.length) {
          alert(err.response.data.error.message);
        }
      });
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
              <h1>Sign Up</h1>
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
              <h1>ini background</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
