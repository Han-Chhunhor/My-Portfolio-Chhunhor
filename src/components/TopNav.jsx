import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import profilePic from "../assets/profile.jpg";

const navigation = [
  { label: "HOME", to: "/", end: true },
  { label: "FEATURES", href: "/#features" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "RESUME", to: "/resume" },
  { label: "TESTIMONIAL", to: "/about" },
  { label: "CLIENTS", to: "/portfolio" },
  { label: "PRICING", to: "/contact" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACTS", to: "/contact" },
];

function TopNav({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-300/60 bg-[#ecf0f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 text-slate-800"
          aria-label="INBIO home"
        >
          <img
            src={profilePic}
            alt=""
            className="h-10 w-10 rounded-full border border-white object-cover object-top shadow-[3px_3px_8px_#c5c9ce,-3px_-3px_8px_#ffffff]"
          />
          <span className="text-lg font-extrabold tracking-tight">INBIO</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} site-nav absolute left-0 right-0 top-full flex-col gap-1 border-b border-slate-300/70 bg-[#ecf0f3] px-5 pb-4 pt-2 shadow-lg sm:px-8 lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigation.map((item) => {
            const className =
              "rounded-lg px-2.5 py-2 text-[10px] font-semibold tracking-wide text-slate-600 transition hover:text-[#ff014f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff014f]";

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={className}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${className}${isActive ? " text-[#ff014f]" : ""}`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecf0f3] text-slate-600 shadow-[4px_4px_9px_#c7cbd0,-4px_-4px_9px_#ffffff] transition hover:text-[#ff014f]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-xl bg-[#ecf0f3] px-4 py-3 text-[10px] font-bold tracking-wide text-[#ff014f] shadow-[5px_5px_11px_#c7cbd0,-5px_-5px_11px_#ffffff] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_14px_#c7cbd0,-6px_-6px_14px_#ffffff] sm:flex"
          >
            <ShoppingCart size={14} aria-hidden="true" />
            BUY NOW
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecf0f3] text-slate-700 shadow-[4px_4px_9px_#c7cbd0,-4px_-4px_9px_#ffffff] lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
