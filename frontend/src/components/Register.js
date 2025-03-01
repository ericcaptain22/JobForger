import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { ThemeContext } from "../context/ThemeContext";

const Register = () => {
  const { darkMode } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("job_seeker");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("api/users/register/", { username, email, password, user_type: userType });
      navigate("/login");
    } catch (error) {
      setError("❌ Registration failed! Please try again.");
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-all`}>
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl backdrop-blur-lg bg-opacity-60 bg-white dark:bg-gray-800">
        <h2 className={`text-3xl font-semibold text-center mb-6 animate-fadeIn ${darkMode ? " text-white" : "text-white"}`}>
          Create Your Account 🚀
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-3 border rounded focus:ring focus:ring-green-300 dark:bg-gray-700 dark:text-white" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded focus:ring focus:ring-green-300 dark:bg-gray-700 dark:text-white" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded focus:ring focus:ring-green-300 dark:bg-gray-700 dark:text-white" required />
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white">
            <option value="job_seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition transform hover:scale-105">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
