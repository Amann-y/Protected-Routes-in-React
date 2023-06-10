import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes = () => {
  let isAuthenticated = localStorage.getItem("isLogged");
  return (
    <>{isAuthenticated != "true" ? <Navigate to="login" /> : <Outlet />}</>
  );
};

export default Protectedroutes;
