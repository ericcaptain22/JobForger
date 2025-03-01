import React from "react";

const Template9 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 text-black rounded-lg">
      <h1 className="text-3xl font-bold text-left">{resumeData.name}</h1>
      <p className="text-left">{resumeData.phone} | {resumeData.email}</p>
      <p className="text-left"><a href={resumeData.linkedin} className="underline">{resumeData.linkedin}</a></p>

      <h2 className="text-xl font-semibold mt-4">Skills</h2>
      <ul className="list-disc list-inside">
        {resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default Template9;
