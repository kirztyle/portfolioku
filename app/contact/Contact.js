"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-customNavy text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Logo or Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-cyan-400">
              Muhammad <span className="text-white">Rafii</span>
            </h2>
            <p className="mt-2 text-gray-400">Fullstack Developer</p>
          </div>

          {/* Social Links */}
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <a href="https://instagram.com/kirztyle_">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a href="https://github.com/kirztyle/">
              <FontAwesomeIcon icon={faGit} size="2xl" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rafii16/">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center text-gray-400">
          <p>Made with Next.js and Tailwind CSS</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Muhammad Rafii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
