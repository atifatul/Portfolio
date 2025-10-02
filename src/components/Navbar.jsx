import React, { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#111111] text-white p-4 sm:p-6 fixed w-full top-0 z-20"
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-2xl font-bold">
          <a href="#">Md Atif Reyyani</a>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400">
            Project
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon (bars)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (dropdown) */}
        {/* It appears below the navbar when isOpen is true */}
        <div
          className={`absolute top-full left-0 w-full bg-[#191919] md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            <a
              href="#home"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>

            <a
              href="#Project"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Project
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
