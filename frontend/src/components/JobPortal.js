import React, { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { ThemeContext } from "../context/ThemeContext";

const JobPortal = () => {
  const { darkMode } = useContext(ThemeContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("jobs/")
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch jobs. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen px-4 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="w-full max-w-4xl p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-70 bg-white dark:bg-gray-800 transition-all animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-blue-500 dark:text-blue-400 mb-5 animate-slideInDown">
          Job Portal <span role="img" aria-label="rocket">🚀</span>
        </h1>

        {loading && <p className="text-center text-gray-700 dark:text-gray-300 animate-pulse">Loading jobs...</p>}
        {error && <p className="text-red-500 text-center"><span role="img" aria-label="warning">⚠️</span> {error}</p>}
      </div>
    </div>
  );
};

export default JobPortal;
