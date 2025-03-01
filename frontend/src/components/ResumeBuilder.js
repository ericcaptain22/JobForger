import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ResumePreview from "../components/ResumePreview";
import API from "../services/api";

const ResumeBuilder = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const [resumeData, setResumeData] = useState({
    name: "", phone: "", email: "", linkedin: "", address: "",
    summary: "", skills: [], hobbies: [],
    education: [{ degree: "", institution: "", year: "" }],
    experience: [{ jobTitle: "", company: "", duration: "", description: "" }],
    certifications: [{ title: "", year: "" }],
    achievements: [""],
    profilePic: "" // ✅ New field for Profile Picture
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value, section) => {
    const updatedSection = [...resumeData[section]];
    updatedSection[index][field] = value;
    setResumeData({ ...resumeData, [section]: updatedSection });
  };

  const addNewField = (section, newItem) => {
    setResumeData({ ...resumeData, [section]: [...resumeData[section], newItem] });
  };

  const removeField = (section, index) => {
    const updatedSection = [...resumeData[section]];
    updatedSection.splice(index, 1);
    setResumeData({ ...resumeData, [section]: updatedSection });
  };
  

   // ✅ Function to Handle Profile Picture Upload
   const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({ ...resumeData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("resumes/", resumeData);
      alert("Resume Saved Successfully!");
    } catch (error) {
      alert("Error saving resume");
    }
  };

  return (
    <div className={`flex flex-col md:flex-row min-h-screen transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-3xl font-bold text-center">Resume Builder 📝</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* ✅ Profile Picture Upload */}
          <label className="block text-lg font-semibold">Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleProfilePicUpload} className="w-full p-2 border rounded" />

          {/* Personal Info */}
          <input type="text" name="name" placeholder="Full Name" value={resumeData.name} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required />
          <input type="email" name="email" placeholder="Email" value={resumeData.email} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required />
          <input type="tel" name="phone" placeholder="Phone" value={resumeData.phone} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
          <input type="text" name="linkedin" placeholder="LinkedIn Profile" value={resumeData.linkedin} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
          <input type="text" name="address" placeholder="Address" value={resumeData.address} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
          <textarea name="summary" placeholder="Professional Summary" value={resumeData.summary} onChange={handleChange} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />

          {/* Skills */}
          <h2 className="text-xl font-semibold">Skills</h2>
          <textarea name="skills" placeholder="Enter skills separated by commas" value={resumeData.skills.join(", ")} onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value.split(", ") })} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />

          {/* Hobbies */}
          <h2 className="text-xl font-semibold">Hobbies</h2>
          <textarea name="hobbies" placeholder="Enter hobbies separated by commas" value={resumeData.hobbies.join(", ")} onChange={(e) => setResumeData({ ...resumeData, hobbies: e.target.value.split(", ") })} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />

          {/* Education */}
          <h2 className="text-xl font-semibold">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleArrayChange(index, "degree", e.target.value, "education")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
              <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleArrayChange(index, "institution", e.target.value, "education")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
              <input type="text" placeholder="Year of Completion" value={edu.year} onChange={(e) => handleArrayChange(index, "year", e.target.value, "education")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
              <button type="button" onClick={() => removeField("education", index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addNewField("education", { degree: "", institution: "", year: "" })} className="text-blue-500">+ Add More</button>

          {/* Work Experience */}
          <h2 className="text-xl font-semibold">Work Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleArrayChange(index, "jobTitle", e.target.value, "experience")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required />
              <input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleArrayChange(index, "company", e.target.value, "experience")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required />
              <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => handleArrayChange(index, "duration", e.target.value, "experience")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required />
              <textarea placeholder="Description" value={exp.description} onChange={(e) => handleArrayChange(index, "description", e.target.value, "experience")} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required  />
              <button type="button" onClick={() => removeField("experience", index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addNewField("experience", { jobTitle: "", company: "", duration: "", description: "" })} className="text-blue-500">+ Add More</button>

            {/* Certifications */}
        <h2 className="text-xl font-semibold">Certifications</h2>
        <textarea
          name="certifications"
          placeholder="Enter certifications separated by commas"
          value={resumeData.certifications.map(cert => cert.title).join(", ")}  // ✅ FIX: Convert array of objects to a comma-separated string
          onChange={(e) => 
            setResumeData({ 
              ...resumeData, 
              certifications: e.target.value.split(", ").map(cert => ({ title: cert.trim(), year: "" }))  // ✅ FIX: Convert string back to an array of objects
            })
          }
          className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        />


  {/* Achievements */}
  <h2 className="text-xl font-semibold">Achievements</h2>
  <textarea
    name="achievements"
    placeholder="Enter achievements separated by commas"
    value={resumeData.achievements.join(", ")}
    onChange={(e) => setResumeData({ ...resumeData, achievements: e.target.value.split(", ") })}
    className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
  />

          {/* Template Selection */}
          <h2 className="text-xl font-semibold">Choose Resume Template</h2>
          <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)} className={`w-full p-2 border rounded ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `} required >
            <option value="template1">Modern (Blue)</option>
            <option value="template2">Minimalist (Green)</option>
            <option value="template3">Elegant (Purple)</option>
            <option value="template4">Creative (Red & Black)</option>
            <option value="template5">Professional (Gold)</option>
            <option value="template6">Dark Mode Neon</option>
            <option value="template7">Corporate (Gray)</option>
            <option value="template8">Tech Blue Gradient</option>
            <option value="template9">Colorful Abstract</option>
            <option value="template10">Classic Black & White</option>
          </select>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Save Resume</button>
        </form>
      </div>

      {/* Resume Preview Section */}
      <div className="w-full md:w-1/2 p-6">
        <ResumePreview resumeData={resumeData} selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
