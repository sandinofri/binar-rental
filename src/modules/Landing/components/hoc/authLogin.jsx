import { Outlet } from "react-router-dom";
// import Home from "../pages/home";
import { Navigate } from "react-router-dom";

const authLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    alert("Login dulu yuk");
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
};

export default authLogin;
