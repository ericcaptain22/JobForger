import React from "react";

const Template4 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-white text-black rounded-lg flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-red-600 text-white p-4">
        <h1 className="text-2xl font-bold">{resumeData.name || "Your Name"}</h1>
        <p>{resumeData.email || "your.email@example.com"}</p>
        <p>{resumeData.phone || "Your Phone"}</p>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-semibold text-red-600">Summary</h2>
        <p>{resumeData.summary || "Write your professional summary here."}</p>

        <h2 className="text-xl font-semibold text-red-600 mt-4">Work Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mt-2 border-b pb-2">
            <p className="font-bold">{exp.jobTitle} - {exp.company}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template4;
