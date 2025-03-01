import React from "react";

const Template5 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-yellow-100 text-black rounded-lg flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-yellow-500 text-white p-4">
        <h1 className="text-2xl font-bold">{resumeData.name}</h1>
        <p>{resumeData.phone} | {resumeData.email}</p>
        <p><a href={resumeData.linkedin} className="underline">{resumeData.linkedin}</a></p>
        <h2 className="text-xl font-semibold mt-4">Skills</h2>
        <ul className="list-disc list-inside">
          {resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </div>

      {/* Middle Section - Experience */}
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-semibold text-yellow-700">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="border-b pb-2">
            <p className="font-bold">{exp.jobTitle} - {exp.company}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Right Section - Education */}
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-semibold text-yellow-700">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="border-b pb-2">
            <p className="font-bold">{edu.degree}</p>
            <p>{edu.institution} - {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template5;
