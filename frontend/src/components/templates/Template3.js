import React from "react";

const Template3 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-purple-100 text-black rounded-lg flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-purple-700 text-white p-4">
        <h1 className="text-2xl font-bold">{resumeData.name || "Your Name"}</h1>
        <p>{resumeData.email || "your.email@example.com"} | {resumeData.phone || "Your Phone"}</p>
        <p><a href={resumeData.linkedin} className="underline">{resumeData.linkedin || "LinkedIn Profile"}</a></p>
        <p>{resumeData.address || "Address"}</p>

        <h2 className="text-xl font-semibold mt-4">Skills</h2>
        <ul className="list-disc list-inside">
          {resumeData.skills.length > 0 ? resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>) : <li>No skills added</li>}
        </ul>
      </div>

      {/* Right Section - Main Content */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-purple-700">Summary</h2>
        <p>{resumeData.summary || "Your professional summary goes here."}</p>

        <h2 className="text-xl font-semibold text-purple-700 mt-4">Experience</h2>
        {resumeData.experience.length > 0 ? resumeData.experience.map((exp, index) => (
          <div key={index} className="border-b pb-2">
            <p className="font-bold">{exp.jobTitle} - {exp.company}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        )) : <p>No work experience added</p>}

        {/* Hobbies */}
        <h2 className="text-xl font-semibold text-purple-700 mt-4">Hobbies</h2>
        <ul className="list-disc list-inside">
          {resumeData.hobbies.length > 0 ? resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) : <li>No hobbies added</li>}
        </ul>
      


        <h2 className="text-xl font-semibold text-purple-700 mt-4">Education</h2>
        {resumeData.education.length > 0 ? resumeData.education.map((edu, index) => (
          <div key={index} className="border-b pb-2">
            <p className="font-bold">{edu.degree}</p>
            <p>{edu.institution} - {edu.year}</p>
          </div>
        )) : <p>No education details added</p>}

        <h2 className="text-xl font-semibold text-purple-700 mt-4">Certifications</h2>
        <ul className="list-disc list-inside">
          {resumeData.certifications.length > 0 ? resumeData.certifications.map((cert, index) => (
            <li key={index}><span className="font-bold">{cert.title}</span> - {cert.year}</li>
          )) : <li>No certifications added</li>}
        </ul>

        <h2 className="text-xl font-semibold text-purple-700 mt-4">Achievements</h2>
        <ul className="list-disc list-inside">
          {resumeData.achievements.length > 0 ? resumeData.achievements.map((ach, index) => <li key={index}>{ach}</li>) : <li>No achievements added</li>}
        </ul>
      </div>
    </div>
  );
};

export default Template3;
