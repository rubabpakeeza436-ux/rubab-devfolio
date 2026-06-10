import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8 sm:mb-10 text-center">
          About Me
        </h2>

        {/* CARD */}
        <div className="bg-white/5 border border-purple-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-purple-500/30 transition duration-300">

          {/* INITIALS LOGO */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-purple-600 text-white text-2xl sm:text-3xl font-bold shadow-lg hover:scale-105 transition duration-300">
              PR
            </div>
          </div>

          {/* INTRO */}
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed text-center">

            I am a{" "}
            <span className="text-purple-400 font-semibold">
              MERN Stack Developer
            </span>{" "}
            focused on building modern, responsive, and scalable web applications.

            <br /><br />

            I work with{" "}
            <span className="text-purple-400 font-semibold">
              React, Node.js, Express, and MongoDB
            </span>{" "}
            to create full-stack solutions with clean UI and smooth performance.

            <br /><br />

            My goal is to deliver user-friendly and high-quality web experiences.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">

            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-purple-900/40 text-purple-300 rounded-full hover:bg-purple-700/40 transition"
                >
                  {skill}
                </span>
              )
            )}

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">

            <a
              href="#projects"
              className="px-5 sm:px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition shadow-md hover:shadow-purple-500/40 text-center w-full sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-6 py-2 border border-purple-500 hover:bg-purple-700/20 rounded-lg transition text-center w-full sm:w-auto"
            >
              Contact Me
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;