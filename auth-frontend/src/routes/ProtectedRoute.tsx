import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const loggedUser = localStorage.getItem("loggedUser");

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
