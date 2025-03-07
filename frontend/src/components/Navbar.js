import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Remove JWT token
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition">
            JobForger
          </Link>
        </div>
        <div className="space-x-6">
          <Link to="/resume-builder" className="hover:text-gray-300 transition">
            Resume Builder
          </Link>
          <Link to="/job-portal" className="hover:text-gray-300 transition">
            Job Portal
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
                Login
              </Link>
              <Link to="/register" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
