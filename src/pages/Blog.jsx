import React from "react";
import SectionHeading from "../components/SectionHeading";

const posts = [
  {
    title: "Building a modern portfolio with React",
    tag: "React",
    description:
      "A quick guide to turning a simple personal site into a polished portfolio with strong UX and accessible navigation.",
  },
  {
    title: "Why clean UI matters for developers",
    tag: "Design",
    description:
      "Good interfaces help visitors understand your work faster and make your projects feel more trustworthy.",
  },
  {
    title: "From learning to launching projects",
    tag: "Growth",
    description:
      "Small consistent steps and clear presentation can turn ideas into complete digital experiences.",
  },
];

const Blog = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">
      <SectionHeading eyebrow="Notes and insights">Blog</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            key={post.title}
          >
            <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              {post.tag}
            </span>
            <h3 className="mt-4 text-lg font-bold leading-snug text-slate-800">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
