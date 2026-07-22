import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain"
              />

              <p className="text-white font-semibold text-base sm:text-lg">
                Lewis
                <span className="text-[#915EFF]"> | Gitonga</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10 lg:gap-14">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`transition duration-300 text-[15px] lg:text-base ${
                      active === link.title
                        ? "text-white"
                        : "text-gray-400 hover:text-[#915EFF]"
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setToggle(!toggle)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 top-full w-full bg-[#0b1020]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden ${
            toggle
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                  className={`block px-8 py-4 transition ${
                    active === link.title
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-[#915EFF] hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;