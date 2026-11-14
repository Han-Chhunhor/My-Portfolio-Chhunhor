import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { educationData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="space-y-4"
    >
      <SectionHeading id="education-title" eyebrow="Learning and development">
        Education
      </SectionHeading>

      <div className="space-y-4">
        {educationData.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-7"
          >
            <h3 className="text-lg font-bold leading-snug text-slate-800 sm:text-xl">
              {item.degree}
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={15}
                  className="shrink-0 text-purple-500"
                  aria-hidden="true"
                />
                {item.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={15}
                  className="shrink-0 text-purple-500"
                  aria-hidden="true"
                />
                {item.school}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
