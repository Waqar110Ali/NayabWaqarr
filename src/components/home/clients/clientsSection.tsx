import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ClientCard from "./clientCards";

import uk from "../../../assets/uk.png";
import us from "../../../assets/us.png";
import fr from "../../../assets/fr.png";
import de from "../../../assets/de.png";
import ca from "../../../assets/ca.png";
import au from "../../../assets/au.png";

const ClientsSection = () => {

  const ref = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.4], ["-25%", "0%"]);

  const clients = [
    {
      country: "United Kingdom",
      flag: uk,
      description:
        "Everyone I dealt with was great! They walked me step by step through the web app development process and maintained professionalism even during challenges.",
    },
    {
      country: "United States",
      flag: us,
      description:
        "Professional, responsive, and highly skilled. The team delivered exactly what we envisioned and exceeded expectations.",
    },
    {
      country: "France",
      flag: fr,
      description:
        "Great collaboration and seamless communication. They handled every challenge with expertise.",
    },
    {
      country: "Germany",
      flag: de,
      description:
        "Outstanding development quality and attention to detail. Highly recommended.",
    },
    {
      country: "Canada",
      flag: ca,
      description:
        "Clear communication and clean implementation. Our platform runs smoothly thanks to their expertise.",
    },
    {
      country: "Australia",
      flag: au,
      description:
        "Highly professional team delivering innovative digital solutions.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full py-20 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="relative mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            style={{ x: headingX }}
          >
            OUR CLIENTS
          </motion.h2>

          <h2 className="text-4xl md:text-6xl font-bold absolute left-0 top-12">
            OUR PRIDE
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-sm mt-2">Years of Accumulated Team Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1500+</h3>
            <p className="text-sm mt-2">Satisfied Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2500+</h3>
            <p className="text-sm mt-2">Projects Completed</p>git status
          </div>

          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-sm mt-2">Creative Minds</p>
          </div>
        </div>

        {/* Cards Container */}
        <div
          className="
            relative
            w-full
            flex
            flex-col
            items-center
            gap-8
            lg:block
            min-h-[1200px]
          "
        >
          {clients.map((client, i) => (
            <ClientCard
              key={i}
              index={i}
              progress={scrollYProgress}
              country={client.country}
              flag={client.flag}
              description={client.description}
              isDesktop={isDesktop}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;