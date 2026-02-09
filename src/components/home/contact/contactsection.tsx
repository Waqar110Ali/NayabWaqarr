import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  title?: string;
}

const ContactSection = ({ title = "GET IN TOUCH" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["60px", "0px"]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 1]
  );

  return (
    <section ref={ref} className="contact-section">
      <div className="container">

        <motion.h2
          className="contact-heading"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          {title}
        </motion.h2>

        <div className="contact-card">

          <form className="contact-form">

            <div className="form-group">
              <label>Name*</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input type="email" placeholder="Your email address" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="Your phone number" />
            </div>

            <div className="form-group">
              <label>Tell us about your project*</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Submit
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
