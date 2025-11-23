import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "../Header.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header-container ${theme}`}>
      <div className="header-content">
        <div className="logo">Nancy Kumari Terapalli</div>

        <div className="right-section">
          <nav className="nav-menu">
            <a href="#intro">Intro</a>
            <a href="#about">About</a>
            <a href="#experience">Work Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            
            <a href="#contact">Contact</a>
          </nav>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
