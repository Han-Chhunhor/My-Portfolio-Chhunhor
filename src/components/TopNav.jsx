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
  const linkClassName = ({ isActive } = {}) =>
    `rounded-md px-2 py-2 text-[10px] font-bold tracking-[0.08em] transition-colors duration-200 hover:text-[#ff014f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff014f] ${
      isActive ? "text-[#ff014f]" : "text-slate-600"
    }`;

  const buyNowLink = (mobile = false) => (
    <Link
      to="/contact"
      onClick={closeMenu}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff014f] px-4 py-3 text-[10px] font-extrabold tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(255,1,79,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e60046] hover:shadow-[0_10px_22px_rgba(255,1,79,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff014f] ${
        mobile ? "w-full" : "hidden shrink-0 sm:inline-flex"
      }`}
    >
      <ShoppingCart size={14} strokeWidth={2.25} aria-hidden="true" />
      BUY NOW
    </Link>
  );

  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-300/60 bg-[#ecf0f3]/90 text-slate-800 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 text-slate-800"
          aria-label="INBIO home"
        >
          <img
            src={profilePic}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-white object-cover object-top shadow-[3px_3px_8px_#c5c9ce,-3px_-3px_8px_#ffffff]"
          />
          <span className="text-sm font-extrabold tracking-[0.12em]">INBIO</span>
        </Link>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } site-nav absolute left-0 right-0 top-full flex-col gap-1 border-b border-slate-300/70 bg-[#ecf0f3] px-5 pb-5 pt-3 shadow-[0_16px_24px_rgba(31,41,55,0.08)] sm:px-8 lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-0.5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigation.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={linkClassName()}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={linkClassName}
              >
                {item.label}
              </NavLink>
            ),
          )}

          <div className="mt-2 border-t border-slate-300/70 pt-3 sm:hidden">
            {buyNowLink(true)}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ecf0f3] text-slate-600 shadow-[4px_4px_9px_#c7cbd0,-4px_-4px_9px_#ffffff] transition-colors duration-200 hover:text-[#ff014f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff014f]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {buyNowLink()}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ecf0f3] text-slate-700 shadow-[4px_4px_9px_#c7cbd0,-4px_-4px_9px_#ffffff] transition-colors duration-200 hover:text-[#ff014f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff014f] lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
