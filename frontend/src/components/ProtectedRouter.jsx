import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProtectedRouter({ children }) {
  const { user } = useContext(UserContext);

  if (!user?.userName) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRouter;
