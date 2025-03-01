import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import JobPortal from "./components/JobPortal";
import ResumeBuilder from "./components/ResumeBuilder";
import Login from "./components/Login";
import Register from "./components/Register";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/job-portal" element={<JobPortal />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ThemeToggle />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
