import React from "react";

const Template8 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
      <h1 className="text-3xl font-bold text-center">{resumeData.name}</h1>
      <p className="text-center">{resumeData.phone} | {resumeData.email}</p>
      <p className="text-center"><a href={resumeData.linkedin} className="underline">{resumeData.linkedin}</a></p>

      <h2 className="text-xl font-semibold mt-4">Achievements</h2>
      <ul className="list-disc list-inside">
        {resumeData.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
      </ul>
    </div>
  );
};

export default Template8;
