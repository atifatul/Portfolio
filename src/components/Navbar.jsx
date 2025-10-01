import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#111111] text-white p-4 sm:p-6 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">Md Atif Reyyani</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-400">
            Home{" "}
          </a>
          <a href="#work" className="hover:text-gray-400">
            About
          </a>
          <a href="#testimonials" className="hover:text-gray-400">
            Project
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
