import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, login }) {
  if (login) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
