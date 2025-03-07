import React, { useState, useContext } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const PostJob = () => {
    const { darkMode } = useContext(ThemeContext);
    const [jobData, setJobData] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // ✅ Convert commas into new lines for the description field
        if (name === "description") {
            setJobData({
                ...jobData,
                [name]: value.replace(/,\s*/g, "\n"),
            });
        } else {
            setJobData({
                ...jobData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("api/jobs/", jobData);
            alert("Job Posted Successfully!");
            navigate("/job-portal");  // Redirect to homepage after submission
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job!");
        }
    };

    return (
        <div className={`min-h-screen flex justify-center items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className={`text-2xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Post a Job
                </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Job Title" 
                        value={jobData.title} 
                        onChange={handleChange} 
                        required 
                        className={`w-full p-3 mb-4 border rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} 
                    />
                    <textarea 
                        name="description" 
                        placeholder="Job Description (use commas to separate)" 
                        value={jobData.description} 
                        onChange={handleChange} 
                        required 
                        className={`w-full p-3 mb-4 border rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} h-32`}
                    ></textarea>
                    <input 
                        type="text" 
                        name="location" 
                        placeholder="Location" 
                        value={jobData.location} 
                        onChange={handleChange} 
                        required 
                        className={`w-full p-3 mb-4 border rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} 
                    />
                    <input 
                        type="number" 
                        name="salary" 
                        placeholder="Salary (₹)" 
                        value={jobData.salary} 
                        onChange={handleChange} 
                        required 
                        className={`w-full p-3 mb-4 border rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} 
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
