import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

function Darkmode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex p-1 rounded-lg bg-gray-300 space-x-1 ">
      <button
        onClick={toggleTheme}
        className={` rounded-md transition-all duration-300 ${
          theme == "light"
            ? "bg-gray-400 text-yellow-400"
            : "bg-transparent text-gray-500"
        }`}
      >
        <Moon size={18} color="gray" />
      </button>
      <button
        onClick={toggleTheme}
        className={`rounded-md transition-all duration-300 ${
          theme == "dark"
            ? "bg-white text-yellow-500"
            : "bg-transparent text-gray-500"
        }`}
      >
        <Sun
          size={18}
          color="gray"
          className={theme == "dark" ? "animate-pulse" : ""}
        />
      </button>
    </div>
  );
}

export default Darkmode;
