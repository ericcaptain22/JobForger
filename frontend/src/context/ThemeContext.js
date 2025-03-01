import React, { createContext, useState, useEffect } from "react";

// ✅ Create Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Check if dark mode is saved in localStorage, otherwise default to true
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme !== null ? JSON.parse(savedTheme) : true; // ✅ Default is Dark Mode (true)
  });

  // ✅ Save Dark Mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
