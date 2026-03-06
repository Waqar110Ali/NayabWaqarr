import { motion, MotionValue } from "framer-motion";

type StoryInlineImageProps = {
  src: string;
  maxWidth: MotionValue<string>;
  opacity: MotionValue<number>;
  alt?: string;
};

const StoryInlineImage = ({
  src,
  maxWidth,
  opacity,
  alt = "",
}: StoryInlineImageProps) => {
  return (
    <motion.span
      className="story-inline-image-wrapper"
      style={{ maxWidth, opacity }}
    >
      <img src={src} alt={alt} className="story-inline-img" />
    </motion.span>
  );
};

export default StoryInlineImage;
