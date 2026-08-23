import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Schedule from "./pages/Schedule";
import Blog from "./pages/Blog";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    return () => document.body.classList.remove("dark-mode");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
