import React from "react";

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
    <section className="section">
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <span className="blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
