import React from "react";
import SectionHeading from "./SectionHeading";

const ProjectDetail = () => {
  const project = {
    title: "E-commerce Website (My Shop)",
    name: "Han Chhunhor",
    category: "Web design",
    client: "ACC Company",
    date: "15 july, 2026",
    url: "my-shop-steel-beta.vercel.app/",
    description:
      "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
  };

  const details = [
    { label: "Category", value: project.category },
    { label: "Client", value: project.client },
    { label: "Project date", value: project.date },
    {
      label: "Project URL",
      value: (
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all font-semibold text-purple-700 transition-colors hover:text-purple-900"
        >
          {project.url}
        </a>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">
      <header className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeading as="h1" eyebrow="Portfolio project">
          {project.title}
        </SectionHeading>
        <p className="mt-4 pl-4 text-sm text-slate-500">{project.name}</p>
      </header>

      <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {details.map(({ label, value }) => (
          <div
            key={label}
            className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {label}
            </dt>
            <dd className="mt-2 break-words text-sm font-semibold leading-relaxed text-slate-800">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeading eyebrow="Overview">Project Description</SectionHeading>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          {project.description}
        </p>
      </section>
    </div>
  );
};

export default ProjectDetail;
