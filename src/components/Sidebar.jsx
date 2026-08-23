import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import profilePic from "../assets/profile.jpg";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaDownload,
  FaNewspaper,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Sidebar = ({ theme, toggleTheme }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        sidebarRef.current?.classList.add("scrolled");
      } else {
        sidebarRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <h1>{personalInfo.name}</h1>
        <p className="student-id">ID: {personalInfo.id}</p>
        <p className="title">I'm {personalInfo.title}</p>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaHome /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUser /> ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaBriefcase /> MY PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaFileAlt /> RESUME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaEnvelope /> CONTACTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaCalendarAlt /> SCHEDULE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaNewspaper /> BLOG
            </NavLink>
          </li>
        </ul>

        <div className="sidebar-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <a
            href="/cv.pdf"
            download="Chhunhor-Han-CV.pdf"
            className="download-cv-btn"
          >
            <FaDownload /> Download CV (PDF)
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
