import { motion, MotionValue } from "framer-motion";

interface ParallaxCardProps {
  image: string;
  x: MotionValue<number>;
  rotate: MotionValue<number>;
}

const ParallaxCard = ({ image, x, rotate }: ParallaxCardProps) => {
  return (
    <motion.div
      className="parallax-card"
      style={{ x, rotate }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-xl"
        draggable={false}
      />
    </motion.div>
  );
};

export default ParallaxCard;
