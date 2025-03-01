import React from "react";

const Template10 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-white text-black rounded-lg">
      <h1 className="text-3xl font-bold text-center">{resumeData.name}</h1>
      <p className="text-center">{resumeData.phone} | {resumeData.email}</p>
      <p className="text-center"><a href={resumeData.linkedin} className="underline">{resumeData.linkedin}</a></p>

      <h2 className="text-xl font-semibold mt-4">Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="border-b border-black pb-2">
          <p className="font-bold">{edu.degree}</p>
          <p>{edu.institution} - {edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Template10;
