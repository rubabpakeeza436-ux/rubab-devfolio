import React from "react";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-blue-400 text-3xl sm:text-4xl" /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400 text-3xl sm:text-4xl" /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400 text-3xl sm:text-4xl" /> },
    { name: "Express", level: 80, icon: <SiExpress className="text-gray-300 text-3xl sm:text-4xl" /> },
    { name: "Tailwind", level: 90, icon: <SiTailwindcss className="text-sky-400 text-3xl sm:text-4xl" /> },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-3 sm:mb-4">
          My Skills
        </h2>

        <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
          Technologies I use to build modern full-stack applications
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-purple-900 rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition"
            >

              {/* ICON */}
              <div className="flex justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition">
                {skill.name}
              </h3>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-800 h-2 rounded-full mt-3 sm:mt-4">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* PERCENT */}
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                {skill.level}% proficiency
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;