import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TechIcon from "./TechIcon";
import ServicePill from "./ServicePill";

/* Icons */
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
  SiGo,
  SiWordpress,
  SiOdoo,
} from "react-icons/si";

const OfferSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  /* ONLY "WHAT" MOVES */
  const whatX = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["-70%", "0%"]
  );

  return (
    <section ref={ref} className="offer-section container">

      {/* HEADING */}
      <div className="offer-heading-wrapper">
        <motion.h2
          className="offer-heading offerhead1"
          style={{ x: whatX }}
        >
          WHAT
        </motion.h2>

        <h2 className="offer-heading">
          WE OFFER
        </h2>
      </div>

      {/* CONTENT (STATIC) */}
      <div className="offer-card dark:bg-[#2F3134]">

        {/* LEFT SIDE */}
        <div className="offer-left">
          <p className="offer-text">
            Where ambition meets execution, we deliver.
            End-to-end solutions, built for scale, driven by purpose,
            and trusted by future-ready teams worldwide.
          </p>

          <div className="tech-icons ">
            <TechIcon><FaReact /></TechIcon>
            <TechIcon><FaNodeJs /></TechIcon>
            <TechIcon><SiMongodb /></TechIcon>
            <TechIcon><FaAws /></TechIcon>
            <TechIcon><SiWordpress /></TechIcon>
            <TechIcon><SiOdoo /></TechIcon>
            <TechIcon><FaFigma /></TechIcon>
            <TechIcon><SiFlutter /></TechIcon>
            <TechIcon><SiGo /></TechIcon>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="offer-right">
          <ServicePill text="AWS Cloud Services" />
          <ServicePill text="LAMP Stack Builds" />
          <ServicePill text="MERN Development" />
          <ServicePill text="React Native Apps" />
          <ServicePill text=".NET Solutions" />
          <ServicePill text="Odoo Integration" />
          <ServicePill text="AI & Automation" />
          <ServicePill text="Flutter Applications" />
          <ServicePill text="Golang Development" />
          <ServicePill text="SEO" />
          <ServicePill text="Design & Graphics" />
        </div>

      </div>
    </section>
  );
};

export default OfferSection;
