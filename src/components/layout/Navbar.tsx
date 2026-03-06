import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutPreview from "../../pages/AboutPreview";
import ServicesPreview from "../../pages/ServicesPreview";
import PortfolioPreview from "../../pages/PortfolioPreview";

type Theme = "light" | "dark";
type HoverMenu = "about" | "services" | "portfolio" | null;

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
};

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<HoverMenu>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav
      className="relative bg-slate-100 dark:bg-slate-950 shadow sticky top-0 z-50"
      onMouseLeave={() => setHovered(null)}
    >
      {/* NAVBAR */}
      <div className="container py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-block" onClick={() => { setOpen(false); setHovered(null); }}>

          <div className="navbar-shehwa flex items-center gap-1 leading-none">
            <span className="logo-s">S</span>

            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-wide">HEHWA</h1>
              <p className="text-[10px] tracking-[0.3em] font-semibold opacity-80">
                TECHNOLOGIES
              </p>
            </div>
          </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 font-bold">
            <li className="cursor-pointer hover:text-blue-600">
              <Link to="/">HOME</Link>
            </li>
            <li
              onMouseEnter={() => setHovered("portfolio")}
              className="cursor-pointer hover:text-blue-600"
            >
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>

            <li
              onMouseEnter={() => setHovered("about")}
              className="cursor-pointer hover:text-blue-600"
            >
              <Link to="/about">ABOUT</Link>
            </li>

            <li
              onMouseEnter={() => setHovered("services")}
              className="cursor-pointer hover:text-blue-600"
            >
              <Link to="/services">SERVICES</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              <Link to="/plans">PLANS</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          {/* Theme toggle + mobile burger */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() =>
                setTheme((t) => (t === "light" ? "dark" : "light"))
              }
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              className="md:hidden text-2xl"
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 font-semibold">
              <li>
                <Link to="/" onClick={() => { setOpen(false); setHovered(null); }}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={() => { setOpen(false); setHovered(null); }}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => { setOpen(false); setHovered(null); }}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => { setOpen(false); setHovered(null); }}>
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="/plans" onClick={() => { setOpen(false); setHovered(null); }}>
                  PLANS
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => { setOpen(false); setHovered(null); }}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* HOVER PREVIEW */}
      {hovered && (
        <div className="w-full bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="container py-10">
            {hovered === "about" && <AboutPreview />}
            {hovered === "services" && <ServicesPreview />}
            {hovered === "portfolio" && <PortfolioPreview />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
