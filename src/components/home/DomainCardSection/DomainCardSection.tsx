/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import image1 from "../../../assets/AI edited.png";
import image2 from "../../../assets/MERN edited.png";
import image3 from "../../../assets/AI edited.png";
import image4 from "../../../assets/MERN edited.png";
import image5 from "../../../assets/AI edited.png";
import image6 from "../../../assets/MERN edited.png";
import image7 from "../../../assets/AI edited.png";
import image8 from "../../../assets/MERN edited.png";
import image9 from "../../../assets/AI edited.png";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  reverse?: boolean;
}

// All cards including additional ones
const allCards: CardProps[] = [
  // Initial 4 cards
  { title: "MERN STACK", subtitle: "Development", image: image1 },
  { title: "LAMP STACK", subtitle: "Framework", image: image2 },
  { title: "AI & AUTOMATION", subtitle: "Engineering", image: image3 },
//   { title: "NEXT JS", subtitle: "Modern Web", image: image4 },

  // View More 1
  { title: "Graphic Design", subtitle: "Creative Solutions", image: image5 },
  { title: "React Native", subtitle: "Mobile App Development", image: image6 },
  { title: "Flutter", subtitle: "Cross-Platform Apps", image: image7 },

  // View More 2
  { title: "Headless CMS", subtitle: "Content Management", image: image8 },
  { title: ".NET Fintech", subtitle: "Financial Solutions", image: image9 },
  { title: "Golang Server Side", subtitle: "Backend Development", image: image1 },
];

const DomainCardSection = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 4 cards

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allCards.length));
  };

  return (
    <section className="domain-section">
      {allCards.slice(0, visibleCount).map((card, index) => (
        <SingleCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
          reverse={index % 2 !== 0} // alternate left/right layout
        />
      ))}

      {visibleCount < allCards.length && (
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default DomainCardSection;

/* ------------------ SINGLE CARD COMPONENT ------------------ */

const SingleCard = ({ title, subtitle, image, reverse }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], reverse ? [-150, 0] : [150, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], reverse ? [50, 0] : [-50, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], reverse ? [85, 0] : [-85, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], reverse ? [40, 0] : [-40, 0]);
  const skewX = useTransform(scrollYProgress, [0, 1], reverse ? [4, 0] : [-4, 0]);

  return (
    <div ref={ref} className={`domain-card-wrapper ${reverse ? "reverse" : ""}`}>
      <div className="domain-content">
        <h2 className="domain-title">{title}</h2>
        <p className="domain-subtitle">{subtitle}</p>
        <button className="domain-btn">View Projects</button>
      </div>

      <motion.div
        className="domain-card"
        style={{
          x,
          rotateX,
          rotateY,
          rotateZ,
          skewX,
        }}
      >
        <img src={image} alt={title} />
      </motion.div>
    </div>
  );
};
