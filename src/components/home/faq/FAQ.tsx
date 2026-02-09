import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    answer:
      "Most projects range between 4–12 weeks depending on complexity.",
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["-30%", "0%"]
  );

  return (
    <section ref={ref} className="faq-section container">

      <div className="faq-container">

        {/* LEFT SIDE (Sticky) */}
        <div className="faq-left">
          <motion.h2
            className="faq-heading"
            style={{ x: headingX }}
          >
            FAQ'S
          </motion.h2>

          <p className="faq-subtext">
            Explore answers to frequently asked questions about our solutions
            and capabilities. For further assistance, feel free to contact us.
          </p>
        </div>

        {/* RIGHT SIDE (Normal Flow) */}
        <div className="faq-right">
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
