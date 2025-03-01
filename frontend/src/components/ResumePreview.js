import React from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";
import Template6 from "./templates/Template6";
import Template7 from "./templates/Template7";
import Template8 from "./templates/Template8";
import Template9 from "./templates/Template9";
import Template10 from "./templates/Template10";

const ResumePreview = ({ resumeData, selectedTemplate }) => {
  return (
    <div className="border p-6 shadow-lg rounded-lg bg-white text-black">
      {/* ✅ Display Profile Picture 
      {resumeData.profilePic && (
        <div className="text-center mb-4">
          <img src={resumeData.profilePic} alt="Profile" className="rounded-full w-24 h-24 mx-auto" />
        </div>
      )} */}
      {selectedTemplate === "template1" && <Template1 resumeData={resumeData} />}
      {selectedTemplate === "template2" && <Template2 resumeData={resumeData} />}
      {selectedTemplate === "template3" && <Template3 resumeData={resumeData} />}
      {selectedTemplate === "template4" && <Template4 resumeData={resumeData} />}
      {selectedTemplate === "template5" && <Template5 resumeData={resumeData} />}
      {selectedTemplate === "template6" && <Template6 resumeData={resumeData} />}
      {selectedTemplate === "template7" && <Template7 resumeData={resumeData} />}
      {selectedTemplate === "template8" && <Template8 resumeData={resumeData} />}
      {selectedTemplate === "template9" && <Template9 resumeData={resumeData} />}
      {selectedTemplate === "template10" && <Template10 resumeData={resumeData} />}
    </div>
  );
};

export default ResumePreview;
