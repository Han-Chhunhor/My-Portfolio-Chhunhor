import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const projects = [
  { id: 2, title: "E-commerce Website (My Shop)", name: "Han Chhunhor" },
];

const Portfolio = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">
      <SectionHeading eyebrow="Selected work">My Projects</SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="group flex min-h-52 flex-col rounded-2xl border border-slate-100 border-l-4 border-l-purple-400 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-purple-700">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-slate-400 transition-colors group-hover:text-purple-600"
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 text-sm text-slate-500">{project.name}</p>
            <span className="mt-auto pt-6 text-sm font-semibold text-purple-700">
              View project
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
