import { motion, MotionValue, useTransform } from "framer-motion";
import { FaTwitter } from "react-icons/fa";

interface Props {
  index: number;
  progress: MotionValue<number>;
  country: string;
  flag: string;
  description: string;
  isDesktop: boolean;
}

const ClientCard = ({
  index,
  progress,
  country,
  flag,
  description,
  isDesktop,
}: Props) => {

  /* Desktop fan layout */
  const fanX = [-450, -270, -90, 90, 270, 450];
  const fanRotate = [-18, -10, -4, 4, 10, 18];

  /* Desktop grid layout */
  const gridX = [-360, 50, 460, -360, 50, 460];
  const gridY = [0, 0, 0, 330, 330, 330];

  const x = useTransform(progress, [0.15, 0.75], [fanX[index], gridX[index]]);
  const y = useTransform(progress, [0.15, 0.75], [0, gridY[index]]);
  const rotate = useTransform(progress, [0.15, 0.75], [fanRotate[index], 0]);

  const isWhite = index === 1 || index === 4;

  return (
    <motion.div
      className={`
        w-full
        sm:w-[420px]
        lg:w-[350px]
        p-6
        mx-auto
        rounded-2xl
        shadow-xl
        relative
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        mb-8 lg:mb-0
        ${isWhite ? "bg-white text-black" : "bg-black text-white"}
      `}
      style={isDesktop ? { x, y, rotate } : undefined}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <img
              src={flag}
              alt={country}
              className="w-6 h-6 rounded-full object-cover"
            />
            <h4 className="font-semibold">{country}</h4>
          </div>

          <FaTwitter className="text-blue-400" />
        </div>

        <span className="text-xs opacity-70">
          A European Organization focused on Advanced Sports Streaming Solutions.
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ClientCard;