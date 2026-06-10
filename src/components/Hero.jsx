import React, { useEffect, useState } from "react";

function Hero() {
  const roles = [
    {
      text: "Full Stack Developer 🚀",
      style:
        "bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-bold",
    },
    {
      text: "MERN Stack Developer 🚀",
      style:
        "bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-bold",
    },
    {
      text: "Problem Solver 🧠",
      style:
        "bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold",
    },
    {
      text: "Code Enthusiast ⚡",
      style:
        "bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold",
    },
    {
      text: "Freelancer 💼",
      style:
        "bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white px-6 py-20 overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left md:w-1/2">

          {/* NAME */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hey{" "}
            <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">
              👋
            </span>{" "}
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text font-extrabold tracking-wide">
              Pakeeza Rubab
            </span>
          </h1>

          {/* ROLE */}
          <h2 className="text-lg sm:text-2xl md:text-4xl mb-6 leading-relaxed">
            I'm{" "}
            <span className={`transition-all duration-500 ${roles[index].style}`}>
              {roles[index].text}
            </span>
            <span className="animate-pulse">|</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-7">
            I build modern, responsive and scalable web applications using
            React, Node.js and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects">
              <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl shadow-lg shadow-purple-900/40 w-full sm:w-auto">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="border border-purple-500 hover:bg-purple-500/20 transition px-6 py-3 rounded-xl w-full sm:w-auto">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative overflow-hidden">

            <div className="absolute -inset-4 bg-purple-600 blur-2xl opacity-30 rounded-full"></div>

            <img
              src="/cute girl.jpg"
              alt="profile"
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

