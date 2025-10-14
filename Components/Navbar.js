"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Aperture } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState()

  // // Apply theme to <html>
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <div>
      {/* Top Navbar */}
<nav className="fixed top-1.8  left-0 sm:w-[98.9vw] mx-2 mt-3 w-[96vw] z-50 bg-[#101626] rounded-2xl my-0 sm:my-2 px-4 p-3 sm:px-6 sm:py-4 md:px-8 md:py-5">
  <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <Aperture size={28} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Portfolio
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden w-full md:flex md:w-auto md:items-center md:space-x-6">
            <ul className="flex flex-col md:flex-row md:space-x-8 text-xl mt-4 md:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 hover:text-[#4A4A4A]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 hover:text-[#4A4A4A]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 hover:text-[#4A4A4A]"
                >
                  Github
                </a>
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
            className="md:hidden text-white p-2 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[100vw] bg-[#101626] p-5 transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-7"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={28} />
        </button>

        <h2 className="text-xl  mb-10"></h2>
        <ul className="space-y-4 text-xl">
  {/* Home - internal link */}
  <li>
    <Link
      href="/"
      onClick={() => setSidebarOpen(false)}
      className="hover:text-[#4A4A4A] cursor-pointer"
    >
      Home
    </Link>
  </li>

  {/* LinkedIn - external link */}
  <li>
    <a
      href="https://www.linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setSidebarOpen(false)}
      className="hover:text-[#4A4A4A] cursor-pointer"
    >
      LinkedIn
    </a>
  </li>

  {/* GitHub - external link */}
  <li>
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setSidebarOpen(false)}
      className="hover:text-[#4A4A4A] cursor-pointer"
    >
      Github
    </a>
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
