import React from 'react'
import './login.css'
import loginimage from "../../assets/image/login-image.png"

const Login = () => {
  return (
    <>
    <section>
        <div className="row min-vh-100">
          <div className="col-lg-8 left">
            <div className="gambar">
              <img src={loginimage} alt="" />
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center ">
            <div className="right">
              <div className="logo"></div>
              <h1>welcome, admin BCR</h1>
              <form action="">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="" className="mb-2">email</label>
                  <input type="text" placeholder="ex:admin@mail.com"/>
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="" className='mb-2'>password</label>
                  <input type="password" placeholder="6+ caracter"/>
                </div>
                <a className="text-center">sign In</a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login