import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`h-[50px] w-[100px] bg-black text-white dark:bg-yellow-500 dark:text-black hover:dark:bg-yellow-400 absolute center hover:bg-neutral-600 duration-200`}
    >
      {darkMode ? "Light" : "Dark"} mode
    </button>
  );
};

export default DarkModeToggle;
