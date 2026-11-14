import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { experienceData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="space-y-4"
    >
      <SectionHeading id="experience-title" eyebrow="Career history">
        Professional Experience
      </SectionHeading>

      <div className="space-y-4">
        {experienceData.map((job) => (
          <article
            key={job.id}
            className="rounded-2xl border border-slate-100 border-l-4 border-l-purple-400 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-7"
          >
            <h3 className="text-lg font-bold leading-snug text-slate-800 sm:text-xl">
              {job.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-700">
                <CalendarDays size={14} aria-hidden="true" />
                {job.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={15}
                  className="shrink-0 text-pink-500"
                  aria-hidden="true"
                />
                {job.company}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {job.responsibilities.map((item, index) => (
                <li
                  key={`${job.id}-${index}`}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
