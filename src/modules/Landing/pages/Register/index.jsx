import React, { useState } from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const Register = () => {
  const [isLogged, setIsLogged] = useState(false);
  const pull_data = (data) => {
    setIsLogged(data);
  };

  return (
    <div>
      {!isLogged ? <SignIn func={pull_data} /> : <SignUp func={pull_data} />}
    </div>
  );
};
export default Register;
