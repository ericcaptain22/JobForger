import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [resumes, setResumes] = useState([]);
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        if (!token) {
            navigate("/login"); // Redirect to login if not authenticated
        } else {
            fetchUserData();
            fetchUserResumes();
            fetchJobPosts();
        }
    }, [token, navigate]);

    const fetchUserData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/users/me/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Failed to fetch user data");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const fetchUserResumes = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/resumes/my-resumes/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setResumes(data);
            } else {
                console.error("Failed to fetch resumes");
            }
        } catch (error) {
            console.error("Error fetching resumes:", error);
        }
    };

    const fetchJobPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/jobs/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setJobs(data);
            } else {
                console.error("Failed to fetch job posts");
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 animate-fadeIn">Dashboard</h2>

                {/* User Profile Card with Animation */}
                {user ? (
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center animate-fadeInUp">
                        <img
                            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`}
                            alt="User Avatar"
                            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                        />
                        <h3 className="text-xl text-black font-semibold mt-3">{user.username}</h3>
                        <p className="text-gray-600">{user.email}</p>
                        <span className="inline-block bg-blue-500 text-white px-4 py-1 mt-2 rounded-full">
                            {user.user_type === "job_seeker" ? "Job Seeker" : "Recruiter"}
                        </span>
                    </div>
                ) : (
                    <p className="text-center text-white animate-pulse">Loading user data...</p>
                )}

                {/* Your Resumes Section */}
                <h3 className="text-xl font-semibold mt-8 text-white text-center animate-fadeIn">Your Resumes</h3>
                {resumes.length > 0 ? (
                    <ul className="mt-3 space-y-3">
                        {resumes.map((resume) => (
                            <li key={resume.id} className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
                                <h4 className="font-semibold">{resume.title}</h4>
                                <p className="text-gray-600">{resume.summary}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-white animate-fadeIn">No resumes found.</p>
                )}

                {/* Recent Job Listings */}
                <h3 className="text-xl font-semibold mt-8 text-white text-center animate-fadeIn">Recent Job Listings</h3>
                {jobs.length > 0 ? (
                    <ul className="mt-3 space-y-3">
                        {jobs.map((job) => (
                            <li key={job.id} className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
                                <h4 className="font-semibold">{job.title}</h4>
                                <p className="text-gray-600">{job.description}</p>
                                <p className="text-gray-500">Location: {job.location}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-white animate-fadeIn">No job listings available.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
