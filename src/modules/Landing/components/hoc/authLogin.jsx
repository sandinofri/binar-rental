import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  const { start_date, end_date } = useSelector((state) => state.detail);
  if (!token || !start_date || !end_date) {
    alert("Login dulu yuk");
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
};

export default AuthLogin;
