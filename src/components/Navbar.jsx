import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 text-white shadow-md">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="text-lg sm:text-xl font-bold text-purple-400 tracking-wide">
            Portfolio
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm">

            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative flex items-center gap-2 text-gray-200 hover:text-purple-300 transition group"
              >
                {item.icon}
                {item.label}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

          </div>

          {/* MOBILE BUTTON */}
          <div
            className="md:hidden text-2xl cursor-pointer text-white hover:text-purple-300 transition"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </div>

        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-black/95 backdrop-blur-2xl text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5 text-2xl">
          <FaTimes
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-purple-400 transition"
          />
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-6 px-6 mt-6">

          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 text-gray-200 hover:text-purple-300 transition text-lg py-2"
            >
              <span className="text-purple-400">{item.icon}</span>
              {item.label}
            </a>
          ))}

        </div>

      </div>
    </>
  );
}

export default Navbar;