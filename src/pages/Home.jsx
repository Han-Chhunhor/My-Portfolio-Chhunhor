import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppWindow,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Search,
  Smartphone,
} from "lucide-react";
import { FaFacebookF, FaGithub, FaReact, FaYoutube } from "react-icons/fa";
import { SiFigma, SiJavascript, SiNodedotjs } from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import { personalInfo } from "../data/portfolioData";

const roles = ["Full-Stack Developer", "Frontend Developer", "UI/UX Enthusiast"];

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Strategy",
    description:
      "Thoughtful digital solutions that help your business work smarter and grow with confidence.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, accessible websites built with React and modern tools, shaped around your goals.",
  },
  {
    icon: AppWindow,
    title: "App Development",
    description:
      "Practical web applications with clear interfaces and dependable, maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "A consistent, comfortable experience across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Well-structured pages and careful performance work that make content easier to discover.",
  },
  {
    icon: Layers3,
    title: "UX Consulting",
    description:
      "User-focused layouts and interaction details that make digital products feel effortless.",
  },
];

function useTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(roles[0]);
      return undefined;
    }

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const phrase = roles[phraseIndex];
      characterIndex += deleting ? -1 : 1;
      setText(phrase.slice(0, characterIndex));

      if (!deleting && characterIndex === phrase.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 1300);
        return;
      }

      if (deleting && characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % roles.length;
        timeoutId = window.setTimeout(tick, 350);
        return;
      }

      timeoutId = window.setTimeout(tick, deleting ? 42 : 82);
    };

    timeoutId = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return text;
}

function SocialAndSkills() {
  const links = [
    {
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=100011639634737",
      icon: FaFacebookF,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@ChhunhorHan",
      icon: FaYoutube,
    },
    { label: "GitHub", href: "https://github.com/Chhunhor", icon: FaGithub },
  ];
  const skills = [
    { label: "React", icon: FaReact, color: "text-sky-500" },
    { label: "JavaScript", icon: SiJavascript, color: "text-amber-500" },
    { label: "Node.js", icon: SiNodedotjs, color: "text-emerald-600" },
    { label: "Figma", icon: SiFigma, color: "text-pink-500" },
  ];

  return (
    <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
      <div>
        <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-slate-700">
          FIND WITH ME
        </p>
        <div className="flex gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecf0f3] text-lg text-slate-700 shadow-[6px_6px_12px_#c7cbd0,-6px_-6px_12px_#ffffff] transition duration-200 hover:-translate-y-1 hover:text-[#ff014f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff014f]"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-slate-700">
          BEST SKILLS ON
        </p>
        <div className="flex gap-3">
          {skills.map(({ label, icon: Icon, color }) => (
            <span
              key={label}
              title={label}
              aria-label={label}
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecf0f3] text-xl ${color} shadow-[6px_6px_12px_#c7cbd0,-6px_-6px_12px_#ffffff]`}
            >
              <Icon aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const typedRole = useTypewriter();

  return (
    <div className="home-inbio">
      <section className="grid items-center gap-12 border-b border-slate-300/70 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-slate-700 sm:text-xs">
            WELCOME TO MY WORLD
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-[3.65rem]">
            Hi, I’m <span className="text-[#ff014f]">{personalInfo.name}</span>
          </h1>
          <p className="mt-2 text-2xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-3xl">
            a <span className="typewriter-role">{typedRole}</span>
            <span className="sr-only">{personalInfo.title}</span>
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            {personalInfo.summary}
          </p>

          <SocialAndSkills />
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 bottom-0 top-16 rounded-2xl bg-[#e3e8ec] shadow-[inset_7px_7px_16px_#c7ccd0,inset_-7px_-7px_16px_#ffffff]"
          />
          <div className="relative mx-5 mt-2 overflow-hidden rounded-2xl bg-white p-2 shadow-[12px_12px_26px_#c4c9ce,-10px_-10px_24px_#ffffff] sm:mx-8">
            <img
              src={profilePic}
              alt={`${personalInfo.name}, ${personalInfo.title}`}
              className="h-[360px] w-full rounded-xl object-cover object-top sm:h-[470px]"
            />
          </div>
          <div className="absolute -bottom-5 left-1 rounded-xl bg-[#ecf0f3] px-4 py-3 shadow-[6px_6px_14px_#c7cbd0,-6px_-6px_14px_#ffffff] sm:left-4">
            <p className="text-xs font-bold text-slate-800">Available for projects</p>
            <p className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Let’s build something useful
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-28 border-b border-slate-300/70 py-16 sm:py-20">
        <div className="mb-9 sm:mb-10">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#ff014f]">
            FEATURES
          </p>
          <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-slate-800 sm:text-5xl">
            What I Do
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group min-h-[220px] rounded-2xl bg-gradient-to-br from-[#f0f3f6] to-[#e8ecf0] p-7 shadow-[8px_8px_18px_#c7cbd0,-8px_-8px_18px_#ffffff] transition duration-300 hover:-translate-y-1.5 hover:shadow-[11px_14px_24px_#c1c6cb,-8px_-8px_18px_#ffffff] sm:p-8"
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="mb-6 h-8 w-8 text-[#ff014f] transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 className="mb-3 text-lg font-semibold text-slate-800">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 text-center sm:py-16">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-slate-800 sm:text-5xl">
          My Portfolio
        </h2>
        <Link
          to="/portfolio"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#ecf0f3] px-5 py-3 text-sm font-semibold text-[#ff014f] shadow-[6px_6px_12px_#c7cbd0,-6px_-6px_12px_#ffffff] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_16px_#c7cbd0,-7px_-7px_16px_#ffffff]"
        >
          Explore projects <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}

export default Home;
