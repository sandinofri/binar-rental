import './login.css'

const SignIn = () => {
  return (
    <>
      <section>
        <div className="row min-vh-100">
          <div className="col-lg-8 left">
          </div>
          <div className="col-lg-4 d-flex justify-content-center ">
            <div className="right">
              <div className="logo"></div>
              <h1>Welcome, Admin BCR</h1>
              <form action="">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="" className="mb-2">Email</label>
                  <input type="text" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="" className='mb-2'>Password</label>
                  <input type="password" placeholder="6+ caracter" />
                </div>
                <a className="text-center">Sign In</a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
