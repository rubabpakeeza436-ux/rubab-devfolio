import React from "react";

function Projects() {
  const projects = [
    {
      title: "Job Portal App",
      desc: "Full MERN stack job portal with authentication, job posting and applications.",
      tech: ["React", "Node", "MongoDB"],
      githubFrontend: "https://github.com/rubabpakeeza436-ux/job-portal",
      githubBackend: "https://github.com/rubabpakeeza436-ux/Job-Portal-Database",
      image: "/Dream job.webp",
      liveLink: "",
    },
    {
      title: "Todo App",
      desc: "CRUD Todo app with filtering and responsive UI.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/rubabpakeeza436-ux/Todo-App",
      liveLink: "https://todo-app-rho-ten-46.vercel.app/",
      image: "/List.jpg",
    },
    {
      title: "Expense Tracker",
      desc: "Track income and expenses with live balance updates.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/rubabpakeeza436-ux/Expense-traker",
      liveLink: "https://expense-traker-gamma.vercel.app/",
      image: "/Traker.webp",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-purple-400 mb-3">
          My Projects
        </h2>

        <p className="text-gray-400 mb-12">
          Fullstack & Frontend Projects I Built
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-purple-900 bg-black/40 shadow-lg transition transform hover:-translate-y-2 hover:shadow-purple-500/30 duration-300"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 w-full">

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-white/10 px-2 py-1 rounded-full text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-4">

                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      className="px-3 py-1 text-xs border border-purple-400 rounded-lg hover:bg-purple-600 hover:scale-105 transition"
                    >
                      Frontend
                    </a>
                  )}

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      className="px-3 py-1 text-xs border border-blue-400 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
                    >
                      Backend
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-3 py-1 text-xs border border-purple-400 rounded-lg hover:bg-purple-600 hover:scale-105 transition"
                    >
                      Code
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="px-3 py-1 text-xs border border-green-400 rounded-lg hover:bg-green-600 hover:scale-105 transition"
                    >
                      Live
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;