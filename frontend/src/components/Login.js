import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
  const { darkMode } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await API.post("api/users/login/", { username, password });
      
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      
      navigate("/dashboard"); // ✅ Redirect to Dashboard after successful login
    } catch (error) {
      setError("❌ Invalid credentials! Try again.");
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-all`}>
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl backdrop-blur-lg bg-opacity-60 bg-white dark:bg-gray-800">
        <h2 className={`text-3xl font-semibold text-center mb-6 animate-fadeIn ${darkMode ? "text-white" : "text-gray-900"}`}>
          Welcome Back <span role="img" aria-label="rocket">👋</span>
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className={`font-semibold text-center mt-2 animate-fadeIn ${darkMode ? "text-white" : "text-gray-900"}`}>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
