import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import ParallaxCard from "./parallaxCard";

import leftImg from "../../../assets/AI edited.png";
import rightImg from "../../../assets/MERN edited.png";

const ParallaxCardsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Horizontal movement
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 450]);

  // Rotation
  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section
      ref={ref}
      className="parallax-section relative overflow-hidden py-32"
    >
      <div className="parallax-container flex justify-center items-center gap-20">
        <ParallaxCard
          image={leftImg}
          x={leftX}
          rotate={leftRotate}
        />

        <ParallaxCard
          image={rightImg}
          x={rightX}
          rotate={rightRotate}
        />
      </div>
    </section>
  );
};

export default ParallaxCardsSection;
