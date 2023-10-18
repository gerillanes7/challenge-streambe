import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user = useContext(AuthenticationContext);

  return user?.userLogged ? <Outlet /> : <Navigate to="/" />;
};
