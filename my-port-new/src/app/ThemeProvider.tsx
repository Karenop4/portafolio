"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const value = {
    darkMode,
    toggleDarkMode
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {children}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg hover:scale-105 transition-transform
                     bg-secondary text-secondary-foreground dark:bg-white dark:text-black"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}