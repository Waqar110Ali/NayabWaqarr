import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FaqItem from "./faqItem";

const faqData = [
  {
    question: "What does SHEHWA Technologies offer?",
    answer:
      "We provide end-to-end digital solutions including web development, mobile applications, cloud services, AI automation, and enterprise integrations.",
  },
  {
    question: "What makes SHEHWA different?",
    answer:
      "Our structured execution, transparent communication, and performance-driven development approach ensure scalable and future-ready products.",
  },
  {
    question: "How can I get started with SHEHWA?",
    answer:
      "Simply reach out through our contact form. Our team will schedule a discovery call and guide you through the onboarding process.",
  },
  {
    question: "What is SHEHWA's onboarding process like?",
    answer:
      "We follow a structured onboarding process including requirement gathering, roadmap planning, milestone definition, and transparent delivery timelines.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing maintenance, performance optimization, and feature enhancements.",
  },
  {
    question: "How long does a project take?",
    answer: "Most projects range between 4–12 weeks depending on complexity.",
  },
  {
    question: "Do you provide UI/UX design?",
    answer:
      "Yes, we design user-centered modern interfaces focused on engagement.",
  },
  {
    question: "Can you handle enterprise systems?",
    answer:
      "Absolutely. We build scalable, secure systems for enterprises.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, Next.js, Node.js, AI integrations, and cloud architecture.",
  },
];

const FaqSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.4], ["-30%", "0%"]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");

    const handleChange = () => setIsMobile(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <section ref={ref} className="w-full py-20 px-6">

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        md:flex-row
        gap-16
        items-center
        md:items-start
      "
      >
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left md:sticky md:top-32">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={!isMobile ? { x: headingX } : {}}
          >
            FAQ'S
          </motion.h2>

          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            Explore answers to frequently asked questions about our solutions
            and capabilities. For further assistance, feel free to contact us.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 w-full">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default FaqSection;