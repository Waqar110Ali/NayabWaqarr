import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";
import { MdFlag } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== Moving Marquee ===== */}
      <div className="footer-marquee-wrapper">
        <div className="footer-line"></div>

        <motion.div
          className="footer-marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <div className="marquee-content">
            LET'S CREATE LET'S CONNECT! —
            LET'S CREATE LET'S CONNECT! —
          </div>
          <div className="marquee-content">
            LET'S CREATE LET'S CONNECT! —
            LET'S CREATE LET'S CONNECT! —
          </div>
        </motion.div>
      </div>

      {/* ===== Top Footer Section ===== */}
      <div className="footer-top container">

        {/* Logo Column */}
        <div className="footer-column logo-column">

          <Link to="/" className="inline-block mb-6">
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

          <p className="footer-desc">
            See how we can help you. <br />
            Get in touch today.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Services</li>
            <li>Plans</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Mern Stack</li>
            <li>Lamp Stack</li>
            <li>React Native</li>
            <li>Graphic Design</li>
            <li>AI & Automation</li>
            <li>Flutter</li>
            <li>Headless CMS</li>
            <li>.NET Fintech</li>
            <li>Golang Server Side</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h4>Social Links</h4>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>

      </div>

      {/* ===== Locations Section ===== */}
      <div className="footer-locations container">

        <div className="location">
          <h4><FaFlagUsa className="flag-icon" /> United States of America</h4>
          <p>+1-404-496-5151</p>
          <p>usa@shehwa.com</p>
          <p>2018 156th Ave NE, Building F100,<br />
            Bellevue, WA 98007-3825, USA</p>
        </div>

        <div className="location">
          <h4>< MdFlag className="flag-icon" /> United Kingdom</h4>
          <p>+44-20-8123-6810</p>
          <p>uk@shehwa.com</p>
          <p>F5A, Brightfield Business Hub,<br />
            Bakewell Road, Orton,<br />
            Peterborough, UK</p>
        </div>

        <div className="location">
          <h4><MdFlag className="flag-icon" /> United Arab Emirates</h4>
          <p>+971-50-335-8156</p>
          <p>uae@shehwa.com</p>
          <p>Office No. 2068, 20th Floor,<br />
            The Binary by OMNIYAT,<br />
            Marasi Drive, Business Bay,<br />
            Dubai, UAE</p>
        </div>

        <div className="location">
          <h4>< MdFlag className="flag-icon" /> Pakistan</h4>
          <p>+92-334-4823765</p>
          <p>info@shehwa.com</p>
          <p>SHEHWA House, Block 8,<br />
            Gulshan-e-Iqbal,<br />
            Karachi, PK</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SHEHWA. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
