import React from "react";

const Template6 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-gray-900 text-white rounded-lg">
      <h1 className="text-3xl font-bold text-center text-green-400">{resumeData.name}</h1>
      <p className="text-center">{resumeData.phone} | {resumeData.email}</p>
      <p className="text-center"><a href={resumeData.linkedin} className="text-green-400 underline">{resumeData.linkedin}</a></p>

      <h2 className="text-xl font-semibold text-green-400 mt-4">Summary</h2>
      <p>{resumeData.summary}</p>

      <h2 className="text-xl font-semibold text-green-400 mt-4">Certifications</h2>
      {resumeData.certifications.map((cert, index) => (
        <div key={index} className="border-b border-green-500 pb-2">
          <p className="font-bold">{cert.title} - {cert.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Template6;
