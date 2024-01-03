import { useContext } from "react";
import { GlobalUserContext } from "../context";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// Protected Route Layout
export default function ProtectRoute() {
  const { user } = useContext(GlobalUserContext); // Get user from GlobaluserContext
  const location = useLocation(); // Get location
  // if user display context and if not redirect to signin and store the state of clicked context before redirecting
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/signin"} state={{ from: location.state }} replace />
  );
}
