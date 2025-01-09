"use client";

import { useState } from "react";
import Link from "next/link";

const Navbur = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-customNavy text-white">
        <div className="mx-auto flex justify-between items-center py-4 px-6 text-xl">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-bold text-cyan-400">
              Muhammad <span className="text-white">Rafii</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            {["#hero", "#about", "#services", "#projects", "/contact"].map(
              (href, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="hover:bg-cyan-500 px-4 py-2 rounded-md transition-all duration-200"
                  >
                    {["Home", "About", "Services", "My Project", "Contact"][index]}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ease-in-out duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white my-1 transition-opacity ease-in-out duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ease-in-out duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div
          className={`fixed right-4 top-14 w-48 bg-gray-800 text-white shadow-lg rounded-md transform transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <ul className="p-4 space-y-3">
            {["#hero", "#about", "#services", "#projects", "/contact"].map(
              (href, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="block hover:text-red-500 hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-200"
                    onClick={closeMenu}
                  >
                    {["Home", "About", "Services", "My Project", "Contact"][index]}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbur;
