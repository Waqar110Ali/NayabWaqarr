import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DomainsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Only animate first word
  const domainsX = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["-70%", "0%"]
  );

  return (
    <section ref={ref} className="domains-section container">

      <div className="domains-header">

        <div className="domains-left">
          <motion.h2
            className="domains-heading domain-heading1"
            style={{ x: domainsX }}
          >
            DOMAINS
          </motion.h2>

          <h2 className="domains-heading">
            OF EXPERTISE
          </h2>

          <p className="domains-subtext">
            Across every domain we serve, we build the strong
            digital foundations companies rely on.
          </p>
        </div>

        <div className="domains-right">
          <button className="explore-btn">
            Explore Works
          </button>
        </div>

      </div>

    </section>
  );
};

export default DomainsSection;
