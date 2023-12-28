import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    alert("Login dulu yuk");
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
};

export default AuthLogin;
