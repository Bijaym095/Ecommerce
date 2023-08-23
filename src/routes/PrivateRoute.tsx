import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute: React.FC = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
