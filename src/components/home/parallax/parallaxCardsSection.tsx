import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValue } from "framer-motion";

import ParallaxCard from "./parallaxCard";

import leftImg from "../../../assets/AI edited.png";
import rightImg from "../../../assets/MERN edited.png";

const ParallaxCardsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Default motion values (0 transform for mobile)
  const zero = useMotionValue(0);

  // Horizontal movement
  const leftX = isMobile
    ? zero
    : useTransform(scrollYProgress, [0, 1], [0, -450]);

  const rightX = isMobile
    ? zero
    : useTransform(scrollYProgress, [0, 1], [0, 450]);

  // Rotation
  const leftRotate = isMobile
    ? zero
    : useTransform(scrollYProgress, [0, 1], [0, -12]);

  const rightRotate = isMobile
    ? zero
    : useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section
      ref={ref}
      className="parallax-section relative overflow-hidden py-32"
    >
      <div className="parallax-container flex justify-center items-center gap-20">
        <ParallaxCard image={leftImg} x={leftX} rotate={leftRotate} />
        <ParallaxCard image={rightImg} x={rightX} rotate={rightRotate} />
      </div>
    </section>
  );
};

export default ParallaxCardsSection;