<<<<<<< HEAD
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValue } from "framer-motion";
=======
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb

import ParallaxCard from "./parallaxCard";

import leftImg from "../../../assets/AI edited.png";
import rightImg from "../../../assets/MERN edited.png";

const ParallaxCardsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

<<<<<<< HEAD
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
=======
  // Horizontal movement
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 450]);

  // Rotation
  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb

  return (
    <section
      ref={ref}
      className="parallax-section relative overflow-hidden py-32"
    >
      <div className="parallax-container flex justify-center items-center gap-20">
<<<<<<< HEAD
        <ParallaxCard image={leftImg} x={leftX} rotate={leftRotate} />
        <ParallaxCard image={rightImg} x={rightX} rotate={rightRotate} />
=======
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
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ParallaxCardsSection;
=======
export default ParallaxCardsSection;
>>>>>>> a72b0953b8e534481b748b3c33f8780e3c4d8abb
