import React from "react";

const Template7 = ({ resumeData }) => {
  return (
    <div className="p-6 border shadow-lg bg-gray-100 text-black rounded-lg">
      <h1 className="text-3xl font-bold text-left text-gray-700">{resumeData.name}</h1>
      <p className="text-left">{resumeData.phone} | {resumeData.email}</p>
      <p className="text-left"><a href={resumeData.linkedin} className="underline">{resumeData.linkedin}</a></p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Hobbies</h2>
      <ul className="list-disc list-inside">
        {resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
      </ul>
    </div>
  );
};

export default Template7;
