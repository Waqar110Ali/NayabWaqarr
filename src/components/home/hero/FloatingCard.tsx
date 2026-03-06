import { motion, useTransform, useScroll } from "framer-motion";

interface FloatingCardProps {
  image: string;
  direction: "right" | "left";
}

const FloatingCard = ({ image, direction }: FloatingCardProps) => {
  const { scrollY } = useScroll();

  // Move cards OUTWARD on scroll
  const x = useTransform(
    scrollY,
    [0, 400],
    direction === "right" ? [0, 140] : [0, -140]
  );

  const rotateZ = useTransform(
    scrollY,
    [0, 400],
    direction === "right" ? [7, -6] : [-7, 6]
  );

  return (
    <motion.div
      style={{ x, rotateZ }}
      className="
        w-56 h-56
        rounded-2xl
        shadow-xl
        bg-white dark:bg-slate-900
        flex items-center justify-center
        will-change-transform
      "
    >
      <img
        src={image}
        alt="card"
        className="w-full h-full object-cover rounded-2xl"
        draggable={false}
      />
    </motion.div>
  );
};

export default FloatingCard;
