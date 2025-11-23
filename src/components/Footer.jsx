import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p className="footer-text">
          © 2025 <strong>Nancy Kumari Terapalli</strong>. All rights reserved.
        </p>

        <div className="social-icons">
          <a
            href="https://linkedin.com\in\nancy-kumari-t-19872526b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Nancy-Beulah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
