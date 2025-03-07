import React, { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { ThemeContext } from "../context/ThemeContext";

const JobPortal = () => {
    const { darkMode } = useContext(ThemeContext);  // ✅ Use Dark Mode Context
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        API.get("api/jobs/")
            .then(response => {
                if (response.data.length > 0) {
                    setJobs(response.data);
                    setFilteredJobs(response.data);
                } else {
                    // ✅ Use test jobs if API returns an empty list
                    console.warn("API returned no jobs. Loading sample jobs.");
                    setJobs([
                        { id: 1, title: "Software Engineer", description: "Develop amazing applications!", location: "New York", salary: "120000" },
                        { id: 2, title: "Data Scientist", description: "Analyze data to uncover trends.", location: "San Francisco", salary: "140000" }
                    ]);
                    setFilteredJobs([
                        { id: 1, title: "Software Engineer", description: "Develop amazing applications!", location: "New York", salary: "120000" },
                        { id: 2, title: "Data Scientist", description: "Analyze data to uncover trends.", location: "San Francisco", salary: "140000" }
                    ]);
                }
            })
            .catch(error => {
                console.error("Error fetching jobs:", error);
                // ✅ Load test jobs if API fails
                setJobs([
                    { id: 1, title: "Software Engineer", description: "Develop amazing applications!", location: "New York", salary: "120000" },
                    { id: 2, title: "Data Scientist", description: "Analyze data to uncover trends.", location: "San Francisco", salary: "140000" }
                ]);
                setFilteredJobs([
                    { id: 1, title: "Software Engineer", description: "Develop amazing applications!", location: "New York", salary: "120000" },
                    { id: 2, title: "Data Scientist", description: "Analyze data to uncover trends.", location: "San Francisco", salary: "140000" }
                ]);
            });
    }, []);

    // Handle search and filter jobs
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredJobs(
            jobs.filter(job =>
                job.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                job.location.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            
            {/* ✅ Hero Section */}
            <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 text-white">
                <h1 className="text-5xl font-bold">Find Your Dream Job <span role="img" aria-label="briefcase">💼</span></h1>
                <p className="mt-4 text-lg">Explore top job opportunities from leading companies.</p>
                <a href="#jobs" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
                    Browse Jobs
                </a>
            </section>

            {/* ✅ Job Search Bar */}
            <section className="py-6 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search by job title or location..."
                        className="w-full p-3 text-lg border rounded-md shadow-md focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
                    />
                </div>
            </section>

            {/* ✅ Job Listings Section */}
            <section id="jobs" className="py-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center">Latest Job Openings</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mt-2">Browse through the best job opportunities.</p>

                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {filteredJobs.map((job) => (
                                <div key={job.id} className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 transition hover:shadow-2xl">
                                    <h3 className="text-xl font-bold">{job.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
                                    <p className="text-gray-500 mt-2">📍 {job.location}</p>
                                    <p className="text-green-600 font-bold mt-2">💰 ₹{job.salary}</p>
                                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-6">No jobs available.</p>
                    )}
                </div>
            </section>
  {/* ✅ Featured Companies Section */}
            {/* ✅ Featured Companies Section (Carousel) */}
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Top Hiring Companies</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Discover top employers looking for talent.</p>

                    {/* Carousel Container */}
                    <div className="relative overflow-hidden mt-8">
                        <div className="flex space-x-10 animate-scroll hover:pause">
                            {[
                                { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                                { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                                { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
                                { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
                                { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
                                { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
                                { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
                            ].map((company, index) => (
                                <div key={index} className="flex-none w-40 h-40 flex flex-col items-center justify-center bg-white dark:bg-gray-700 shadow-md rounded-lg transition-transform transform hover:scale-110">
                                    <img src={company.logo} alt={company.name} className="h-16 w-16 object-contain" />
                                    <h3 className="text-md font-semibold mt-3">{company.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Call to Action Section */}
            <section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white">
                <h2 className="text-3xl font-semibold">Post a Job & Hire Top Talent! 🚀</h2>
                <p className="mt-3 text-lg opacity-90">Reach thousands of qualified candidates.</p>
                <a href="/post-job" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
                    Post a Job
                </a>
            </section>

            {/* ✅ Footer Section */}
            <footer className="py-6 text-center bg-gray-800 text-gray-300">
                <p>&copy; {new Date().getFullYear()} JobPortal | All Rights Reserved</p>
                <div className="flex justify-center mt-3 space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">📘 Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">🐦 Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">📷 Instagram</a>
                </div>
            </footer>

        </div>
    );
};

export default JobPortal;
