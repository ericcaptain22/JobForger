import React from "react";

const Template1 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-white text-black rounded-lg">
      {/* Header Section */}
      <div className="text-center bg-blue-500 text-white p-6 rounded-t-lg">
      <div className="flex items-center bg-blue-500 text-white p-6 rounded-t-lg">
        {/* ✅ Display Profile Picture */}
        {resumeData.profilePic && (
          <img src={resumeData.profilePic} alt="Profile" className="rounded-full w-42 h-52 mr-6" />
        )}
        <div>
        <h1 className="text-3xl font-bold">{resumeData.name || "Your Name"}</h1>
        <p>{resumeData.email || "your.email@example.com"} | {resumeData.phone || "Your Phone"}</p>
        <p>
          <a href={resumeData.linkedin} className="text-white underline">
            {resumeData.linkedin || "LinkedIn Profile"}
          </a>
        </p>
        <p>{resumeData.address || "Address"}</p>
      </div>
      </div>
      </div>

      {/* Summary */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Summary</h2>
        <p>{resumeData.summary || "Your professional summary goes here."}</p>
      </div>

      {/* Skills */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
        <ul className="list-disc list-inside">
          {resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>)
          ) : (
            <li>No skills added</li>
          )}
        </ul>
      </div>
      
      {/* Hobbies */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Hobbies</h2>
        <ul className="list-disc list-inside">
          {resumeData.hobbies.length > 0 ? resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) : <li>No hobbies added</li>}
        </ul>
      </div>

      {/* Education */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Education</h2>
        {resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <div key={index} className="mt-2">
              <p className="font-bold">{edu.degree}</p>
              <p>{edu.institution} - {edu.year}</p>
            </div>
          ))
        ) : (
          <p>No education details added</p>
        )}
      </div>

      {/* Work Experience */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Work Experience</h2>
        {resumeData.experience.length > 0 ? (
          resumeData.experience.map((exp, index) => (
            <div key={index} className="mt-2">
              <p className="font-bold">{exp.jobTitle} - {exp.company}</p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))
        ) : (
          <p>No work experience added</p>
        )}
      </div>

      {/* Certifications */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Certifications</h2>
        {resumeData.certifications.length > 0 ? (
          <ul className="list-disc list-inside">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>
                <span className="font-bold">{cert.title}</span> - {cert.year}
              </li>
            ))}
          </ul>
        ) : (
          <p>No certifications added</p>
        )}
      </div>

      {/* Achievements */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">Achievements</h2>
        {resumeData.achievements.length > 0 ? (
          <ul className="list-disc list-inside">
            {resumeData.achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        ) : (
          <p>No achievements added</p>
        )}
      </div>
    </div>
  );
};

export default Template1;
