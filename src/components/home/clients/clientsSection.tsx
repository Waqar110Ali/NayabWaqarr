import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClientCard from "./clientCards";

import uk from "../../../assets/uk.png";
import us from "../../../assets/us.png";
import fr from "../../../assets/fr.png";
import de from "../../../assets/de.png";
import ca from "../../../assets/ca.png";
import au from "../../../assets/au.png";

const ClientsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.4], ["-25%", "0%"]);

  return (
    <section ref={ref} className="clients-section container">
      {/* Heading */}
      <div className="clients-heading-wrapper">
        <motion.h2 className="clients-heading" style={{ x: headingX }}>
          OUR CLIENTS
        </motion.h2>

        <h2 className="clients-heading static">OUR PRIDE</h2>
      </div>

      {/* Stats */}
      <div className="clients-stats">
        <div className="stat">
          <h3>200+</h3>
          <p>Years of Accumulated Team Experience</p>
        </div>
        <div className="stat">
          <h3>1500+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat">
          <h3>2500+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>Creative Minds</p>
        </div>
      </div>

      {/* Cards */}
      <div className="clients-cards-wrapper">
        <ClientCard
          index={0}
          progress={scrollYProgress}
          country="United Kingdom"
          flag={uk}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
        <ClientCard
          index={1}
          progress={scrollYProgress}
          country="United States"
          flag={us}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
        <ClientCard
          index={2}
          progress={scrollYProgress}
          country="France"
          flag={fr}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
        <ClientCard
          index={3}
          progress={scrollYProgress}
          country="Germany"
          flag={de}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
        <ClientCard
          index={4}
          progress={scrollYProgress}
          country="Canada"
          flag={ca}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
        <ClientCard
          index={5}
          progress={scrollYProgress}
          country="Australia"
          flag={au}
          description="Everyone I dealt with at Tafsol was great! Good attitudes and walked me through the process of building out my web app step by step. Even when we hit challenges they maintained professionalism and found a way to make it work exactly how I wanted."
        />
      </div>
    </section>
  );
};

export default ClientsSection;
