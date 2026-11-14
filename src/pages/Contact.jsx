import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields before sending your message.");
      return;
    }

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Thanks! Your email app should open with your message ready to send.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100";

  return (
    <section className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">
      <SectionHeading eyebrow="Let’s talk">Contact Me</SectionHeading>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <h3 className="text-lg font-bold text-slate-800">Contact information</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Reach out if you would like to discuss a project or get in touch.
          </p>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Phone
              </dt>
              <dd className="mt-1 text-sm text-slate-700">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-purple-700"
                >
                  {personalInfo.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Email
              </dt>
              <dd className="mt-1 break-words text-sm text-slate-700">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition-colors hover:text-purple-700"
                >
                  {personalInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Address
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                {personalInfo.address}
              </dd>
            </div>
          </dl>
        </aside>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <h3 className="text-lg font-bold text-slate-800">Send a message</h3>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-700"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClassName}
                autoComplete="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClassName}
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className={`${inputClassName} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Send Message
            </button>
            {status ? (
              <p
                aria-live="polite"
                className="text-sm leading-relaxed text-slate-600"
              >
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
