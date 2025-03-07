import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const selectTemplate = (template) => {
    navigate("/resume-builder", { state: { selectedTemplate: template } });
  };

  return (
    <div className={`min-h-screen transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* ✅ Hero Section */}
      <section className="relative text-center py-32 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 text-white">
        <div className="absolute inset-0 bg-opacity-50"></div>
        <h1 className="text-5xl font-bold animate-fade-in relative">
          Build Your Dream Resume <span role="img" aria-label="rocket">🚀</span>
        </h1>
        <p className="mt-4 text-lg opacity-90 relative">Create a stunning resume effortlessly!</p>
        <a href="/resume-builder" 
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Get Started
        </a>
      </section>

      {/* ✅ Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Why Choose Us? <span role="img" aria-label="briefcase">🏆</span></h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Top reasons to build your resume with us.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "AI-Powered Suggestions", icon: "🤖", desc: "Get smart recommendations to improve your resume." },
              { title: "ATS-Friendly", icon: "✅", desc: "Optimized for Applicant Tracking Systems." },
              { title: "Live Editing", icon: "✏️", desc: "Modify your resume with real-time previews." }
            ].map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 transform transition hover:scale-105">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-bold mt-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Step-by-Step Guide Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">How It Works? 🛠️</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Follow these steps to create your perfect resume.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { step: "Choose a Template", icon: "🎨", desc: "Pick from a variety of professional templates." },
              { step: "Customize Your Resume", icon: "⚙️", desc: "Fill in details and personalize as needed." },
              { step: "Download & Apply", icon: "📥", desc: "Save your resume and start applying!" }
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 transform transition hover:scale-105">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-3">{item.step}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">What Our Users Say 🏅</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Success stories from job seekers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              { name: "John Doe", review: "This resume builder got me my dream job!", avatar: "👨‍💼" },
              { name: "Sarah Smith", review: "Loved the AI suggestions, very useful!", avatar: "👩‍💼" },
              { name: "Mike Johnson", review: "Easy to use and great templates!", avatar: "🧑‍💼" }
            ].map((user, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg bg-gray-50 dark:bg-gray-800 transform transition hover:scale-105">
                <span className="text-4xl">{user.avatar}</span>
                <h3 className="text-xl font-bold mt-3">{user.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2 italic">"{user.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Call to Action Section */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 text-white">
        <h2 className="text-3xl font-semibold">Ready to Create Your Resume? 🚀</h2>
        <p className="mt-3 text-lg opacity-90">Get started now and land your dream job!</p>
        <a href="/resume-builder" 
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Start Now
        </a>
      </section>

      {/* ✅ Footer Section */}
      <footer className="py-6 text-center bg-gray-800 text-gray-300">
        <p>&copy; {new Date().getFullYear()} Resume Builder | All Rights Reserved</p>
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">📘 Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white transition">🐦 Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition">📷 Instagram</a>
        </div>
      </footer>

    </div>
  );
};

export default Home;
