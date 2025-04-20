import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Raj Nandini</h3>

        <div className="footer-socials">
          <a href="https://github.com/RajNandini2039" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/raj-nandini-211256286/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="rajnandini2039@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Vikas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;