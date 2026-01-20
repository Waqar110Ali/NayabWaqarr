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
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">NavbarScroll</div>

          <ul className="hidden md:flex space-x-8 font-bold">
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

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setTheme((t) => (t === "light" ? "dark" : "light"))
              }
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>
        </div>
      </div>

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
