import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />  
      </main>
    </>
  );
};

export default ProtectedRoute;
