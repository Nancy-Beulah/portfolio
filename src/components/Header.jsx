import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import "../Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  /* ⭐ AUTO CLOSE DRAWER WHEN SCREEN GOES BACK TO DESKTOP */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className={`header-container ${theme}`}>
        <div className="header-content">

          {/* LEFT SIDE → Hamburger + Logo */}
          <div className="left-group">
            <button className="hamburger-btn" onClick={toggleDrawer}>
              <FaBars size={22} />
            </button>

            <div className="logo">Nancy Kumari Terapalli</div>
          </div>

          {/* RIGHT SIDE → Nav (Desktop) + Theme Button */}
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

      {/* SIDE DRAWER */}
      <div className={`side-drawer ${drawerOpen ? "open" : ""} ${theme}`}>
        <button className="close-btn" onClick={toggleDrawer}>
          <FaTimes size={22} />
        </button>

        <a href="#intro" onClick={toggleDrawer}>Intro</a>
        <a href="#about" onClick={toggleDrawer}>About</a>
        <a href="#experience" onClick={toggleDrawer}>Work Experience</a>
        <a href="#skills" onClick={toggleDrawer}>Skills</a>
        <a href="#projects" onClick={toggleDrawer}>Projects</a>
        <a href="#contact" onClick={toggleDrawer}>Contact</a>
      </div>
    </>
  );
};

export default Header;
