import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
          ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${darkMode ? "translate-x-6" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
