// src/components/nav/nav.tsx
"use client";
import "./nav.css"; // Import custom CSS for this component
import Image from "next/image";

import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="block py-2 px-3 hover:text-white text-[#c2c2c2] md:p-0"
          aria-current={item.label === "Home" ? "page" : undefined}
        >
          {item.label}
        </a>
      </li>
    ));

  return (
    <nav className="bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="py-4 max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="https://teracores.com/">
            {/* Use Image component for logo optimization */}
            <Image
              src="/logowhite.svg"
              alt="Logo"
              className="h-25 w-24"
              width={48} // Specify width
              height={48} // Specify height
            />
          </a>
        </div>

        {/* Center: Navbar Links (Desktop Only) */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
            {renderMenuItems()}
          </ul>
        </div>

        {/* Right: Contact Button (Desktop Only) */}
        <div className="items-center hidden md:block">
          <button className="text-black button bg-white  transition-all duration-200 rounded-full px-6 py-2">
            Contact
          </button>
        </div>

        {/* Hamburger Button for smaller screens */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-gray-100"
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar links inside hamburger menu (for smaller screens) */}
        <div
          id="navbar-default"
          className={`md:hidden block absolute left-0 top-16 w-3/4 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="font-medium ml-5 flex flex-col backdrop-blur-md p-4 mt-4 rounded-lg">
            {renderMenuItems()}
          </ul>

          {/* Contact Button inside Hamburger Menu */}
          <div className="flex backdrop-blur-md justify-left pb-10">
            <button className="text-black bg-white  ml-5 rounded-full px-6 py-2">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
