import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [resumes, setResumes] = useState([]); // ✅ New State for Resumes
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        if (!token) {
            navigate("/login");  // Redirect to login if not authenticated
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
                    "Authorization": `Bearer ${token}`,
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
                    "Authorization": `Bearer ${token}`,
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
                    "Authorization": `Bearer ${token}`,
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
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>

                {user ? (
                    <div>
                        <h3 className="text-xl font-semibold">Welcome, {user.username}!</h3>
                        <p>Email: {user.email}</p>
                        <p>User Type: {user.user_type}</p>
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}

                <h3 className="text-xl font-semibold mt-6">Your Resumes</h3>
                {resumes.length > 0 ? (
                    <ul className="mt-3 space-y-3">
                        {resumes.map((resume) => (
                            <li key={resume.id} className="border p-4 rounded">
                                <h4 className="font-semibold">{resume.title}</h4>
                                <p>{resume.summary}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No resumes found.</p>
                )}

                <h3 className="text-xl font-semibold mt-6">Recent Job Listings</h3>
                {jobs.length > 0 ? (
                    <ul className="mt-3 space-y-3">
                        {jobs.map((job) => (
                            <li key={job.id} className="border p-4 rounded">
                                <h4 className="font-semibold">{job.title}</h4>
                                <p>{job.description}</p>
                                <p className="text-gray-500">Location: {job.location}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No job listings available.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
