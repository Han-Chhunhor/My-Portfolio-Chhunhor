import React from "react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">
      <SectionHeading eyebrow="Profile">About Me</SectionHeading>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="max-w-3xl text-base leading-8 text-slate-600">
          {personalInfo.summary}
        </p>

        <dl className="mt-7 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Address
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-700">
              {personalInfo.address}
            </dd>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Phone
            </dt>
            <dd className="mt-2 text-sm text-slate-700">
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-purple-700"
              >
                {personalInfo.phone}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 sm:col-span-2">
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Email
            </dt>
            <dd className="mt-2 break-words text-sm text-slate-700">
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors hover:text-purple-700"
              >
                {personalInfo.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default About;
