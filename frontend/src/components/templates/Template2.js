import React from "react";

const Template2 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-white text-black rounded-lg">
      {/* Header */}
      <div className="w-1/4">
        {/* ✅ Display Profile Picture */}
        {resumeData.profilePic && (
          <img src={resumeData.profilePic} alt="Profile" className="rounded-full w-42 h-52 mx-auto mb-2" />
        )}
        </div>
      <h1 className="w-3/4 text-3xl font-bold text-left text-green-700">{resumeData.name || "Your Name"}</h1>
      <p>{resumeData.email || "your.email@example.com"} | {resumeData.phone || "Your Phone"}</p>
      <p>
        <a href={resumeData.linkedin} className="underline">{resumeData.linkedin || "LinkedIn Profile"}</a>
      </p>
      <p>{resumeData.address || "Address"}</p>

      {/* Summary */}
      <h1 className="text-left border-b-2 pb-4 border-green-700">Professional</h1>
      <h2 className="text-xl font-semibold text-green-700 mt-4">Summary</h2>
      <p>{resumeData.summary || "Your professional summary goes here."}</p>

      {/* Skills */}
      <h2 className="text-xl font-semibold text-green-700 mt-4">Skills</h2>
      <ul className="list-disc list-inside">
        {resumeData.skills.length > 0 ? resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>) : <li>No skills added</li>}
      </ul>

      {/* Hobbies */}
        <h2 className="text-xl font-semibold text-green-700 mt-4">Hobbies</h2>
        <ul className="list-disc list-inside">
          {resumeData.hobbies.length > 0 ? resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) : <li>No hobbies added</li>}
        </ul>

      {/* Education */}
      <h2 className="text-xl font-semibold text-green-700 mt-4">Education</h2>
      {resumeData.education.length > 0 ? resumeData.education.map((edu, index) => (
        <div key={index} className="border-b pb-2">
          <p className="font-bold">{edu.degree}</p>
          <p>{edu.institution} - {edu.year}</p>
        </div>
      )) : <p>No education details added</p>}

      {/* Work Experience */}
      <h2 className="text-xl font-semibold text-green-700 mt-4">Work Experience</h2>
      {resumeData.experience.length > 0 ? resumeData.experience.map((exp, index) => (
        <div key={index} className="border-b pb-2">
          <p className="font-bold">{exp.jobTitle} - {exp.company}</p>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      )) : <p>No work experience added</p>}

      {/* Certifications */}
      <h2 className="text-xl font-semibold text-green-700 mt-4">Certifications</h2>
      <ul className="list-disc list-inside">
        {resumeData.certifications.length > 0 ? resumeData.certifications.map((cert, index) => (
          <li key={index}><span className="font-bold">{cert.title}</span> - {cert.year}</li>
        )) : <li>No certifications added</li>}
      </ul>

      {/* Achievements */}
      <h2 className="text-xl font-semibold text-green-700 mt-4">Achievements</h2>
      <ul className="list-disc list-inside">
        {resumeData.achievements.length > 0 ? resumeData.achievements.map((ach, index) => <li key={index}>{ach}</li>) : <li>No achievements added</li>}
      </ul>
    </div>
  );
};

export default Template2;



