import React, { useContext } from "react";
import { AuthContext } from "../context";

const PrivateRoute = ({ children }) => {
  const [state] = useContext(AuthContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
