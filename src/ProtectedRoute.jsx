import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth");
  return token ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
