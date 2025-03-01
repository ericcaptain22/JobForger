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
      <section className="text-center py-20 bg-blue-500 dark:bg-blue-700 text-white">
        <h1 className="text-5xl font-bold">Build Your Perfect Resume 🚀</h1>
        <p className="mt-4 text-lg">Create a professional resume with ease and land your dream job!</p>
        <a href="/resume-builder" className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start Now
        </a>
      </section>

      {/* ✅ Features Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us? 🏆</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Powerful tools to build the best resume for your career.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "AI-Powered Suggestions", icon: "🤖", desc: "Get smart recommendations to improve your resume." },
              { title: "ATS-Friendly", icon: "✅", desc: "Our templates are optimized for Applicant Tracking Systems." },
              { title: "Easy Customization", icon: "✏️", desc: "Modify your resume in real-time with a live preview." }
            ].map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-700 transition transform hover:scale-105">
                <span role="img" aria-label={feature.title} className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-bold mt-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Resume Template Selection */}
      <section id="templates" className="py-12 bg-gray-100 dark:bg-gray-800 transition">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Choose Your Resume Template 🎨</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Select a template and start building your resume instantly!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { name: "Modern (Blue)", file: "template1.png", template: "template1" },
              { name: "Minimalist (Green)", file: "template2.png", template: "template2" },
              { name: "Elegant (Purple)", file: "template3.png", template: "template3" },
              { name: "Creative (Red & Black)", file: "template4.png", template: "template4" }
            ].map((temp, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-lg bg-white dark:bg-gray-700 transition transform hover:scale-105">
                <img src={`/images/${temp.file}`} alt={temp.name} className="w-full rounded-md" />
                <h3 className="text-xl font-bold mt-3">{temp.name}</h3>
                <button onClick={() => selectTemplate(temp.template)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-3 hover:bg-blue-600 transition">
                  Select Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Other Sections (Job Listings, Blogs, Newsletter, Contact) - Keep Existing Content */}
      
    </div>
  );
};

export default Home;
