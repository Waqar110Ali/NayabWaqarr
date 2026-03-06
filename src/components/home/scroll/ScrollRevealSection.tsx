import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* Icons */
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

/* Image */
import img from "../../../assets/SHEHWA TECHNOLOGIES (2).png";

/* Components */
import StoryIcon from "../../../components/home/scroll/StoryIcon";
import StoryInlineImage from "../../../components/home/scroll/StoryInlineImage";

const StoryInlineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  /* ✅ Detect scroll direction (SAFE) */
  useEffect(() => {
    let last = scrollYProgress.get();
    return scrollYProgress.on("change", (v) => {
      setDirection(v > last ? "down" : "up");
      last = v;
    });
  }, [scrollYProgress]);

  /* ✅ ONE transform only (NO conditional hooks) */
  const maxWidth = useTransform(scrollYProgress, (v) => {
    if (direction === "up") return "0px"; // collapse only on scroll up
    if (v < 0.68) return "0px";            // delay reveal
    if (v > 0.8) return "220px";           // clamp max
    return `${(v - 0.38) / (0.38 - 0.68) * 220}px`;
  });

  const opacity = useTransform(scrollYProgress, (v) => {
    if (direction === "up") return 0;
    if (v < 0.42) return 0;
    if (v > 0.55) return 1;
    return (v - 0.42) / (0.55 - 0.42);
  });

  return (
    <section ref={ref} className="story-section">
      <div className="container">
        <div className="story-text story-line">

          <span className="text_span">
            AT SHEHWA, WE DON’T JUST BUILD TECH
          </span>

          <div className="icon-Andtext">
            <span className="text_span">WE DESIGN EXPERIENCES,</span>

            <span className="story-icons">
              <StoryIcon colorClass="text-sky-500"><FaReact size={36} /></StoryIcon>
              <StoryIcon colorClass="text-green-600"><FaNodeJs size={36} /></StoryIcon>
              <StoryIcon colorClass="text-purple-600"><FaFigma size={36} /></StoryIcon>
              <StoryIcon colorClass="text-blue-700"><SiHiveBlockchain size={36} /></StoryIcon>
            </span>

            <span className="text_span">SHAPE</span>
          </div>

          <span className="text_span Ideas_text">
            IDEAS INTO IMPACT, AND CREATE WHAT
          </span>

          <div className="image-Andtext">
            <span className="text_span">PEOPLE TRULY</span>

            <StoryInlineImage
              src={img}
              maxWidth={maxWidth}
              opacity={opacity}
            />

            <span className="text_span">BELIEVE IN.</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryInlineSection;
