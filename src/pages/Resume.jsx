import React from "react";
import { Download } from "lucide-react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import SectionHeading from "../components/SectionHeading";

const Resume = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 py-8 sm:py-10">
      <section
        aria-labelledby="resume-title"
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
      >
        <SectionHeading
          as="h1"
          id="resume-title"
          eyebrow="Career profile"
        >
          Resume &amp; CV
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Download my latest CV to learn more about my skills, projects, and
          experience.
        </p>
        <a
          href="/cv.pdf"
          download="Chhunhor-Han-CV.pdf"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2.5 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <Download size={16} aria-hidden="true" />
          Download CV (PDF)
        </a>
      </section>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
