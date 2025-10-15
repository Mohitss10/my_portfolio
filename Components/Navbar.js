"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false); // New state for resume modal

  return (
    <div>
      {/* Top Navbar */}
      <nav className="fixed top-1.8 left-0 sm:w-[98.9vw] mx-2 mt-3 w-[96vw] z-50 
        bg-[#071329] rounded-2xl my-0 sm:my-2 px-4 p-3 sm:px-6 sm:py-4 md:px-8 md:py-5">

        <div className="flex flex-wrap items-center justify-between">
          {/* View Resume Button */}
         <button
  onClick={() => setResumeOpen(true)}
  className="p-2 rounded-xl flex gap-2 items-center bg-white hover:scale-[1.05] transition text-black"
>
  <FileText size={20} />
  View Resume
</button>

          {/* Desktop Menu */}
          <div className="hidden w-full md:flex md:w-auto md:items-center md:space-x-6">
            <ul className="flex flex-col md:flex-row md:space-x-8 text-xl mt-4 md:mt-0">
              <li>
                <a href="/" className="block py-2 px-3 md:p-0 hover:text-[#6b6b6b]">Home</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohit-gawande-774402253" className="block py-2 px-3 md:p-0 hover:text-[#6b6b6b]">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Mohitss10" className="block py-2 px-3 md:p-0 hover:text-[#6b6b6b]">Github</a>
              </li>
            </ul>

            {/* Desktop Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-6 p-2 rounded-xl flex gap-2 items-center bg-white hover:scale-[1.05] transition text-black"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />} Theme
            </button>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="md:hidden text-white hover:text-[#6b6b6b] p-2 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

{/* Resume Modal */}
{resumeOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div className="relative bg-white rounded-xl shadow-lg transform transition-transform duration-300 animate-scaleIn
                    w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
                    max-h-[90vh] overflow-auto p-4">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-black hover:text-[#6b6b6b] overflow-hidden"
        onClick={() => setResumeOpen(false)}
      >
        <X size={28} />
      </button>
      {/* Resume Image */}
      <img
        src="/resume.png" // Replace with your resume image path
        alt="Resume"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
)}


      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[100vw] bg-gradient-to-r from-[#081021] to-[#0a1f3f] p-5 transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-7 hover:text-[#6b6b6b]"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={28} />
        </button>

        <h2 className="mb-10"></h2>
        <ul className="space-y-4 text-xl">
          <li>
            <Link href="/" onClick={() => setSidebarOpen(false)} className="hover:text-[#6b6b6b] text-2xl cursor-pointer">Home</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohit-gawande-774402253" target="_blank" rel="noopener noreferrer" onClick={() => setSidebarOpen(false)} className="hover:text-[#6b6b6b] text-2xl cursor-pointer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Mohitss10" target="_blank" rel="noopener noreferrer" onClick={() => setSidebarOpen(false)} className="hover:text-[#6b6b6b] text-2xl cursor-pointer">Github</a>
          </li>
        </ul>

        {/* Mobile Theme Toggle */}
        <div className="absolute bottom-6 -left-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-10 p-2 rounded-xl flex gap-2 items-center bg-white hover:scale-[1.05] transition text-black"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />} Theme
          </button>
        </div>
      </div>

      {/* Push content down so it doesn't hide under fixed navbar */}
      <div className="pt-[90px]"></div>
    </div>
  );
};

export default Navbar;
