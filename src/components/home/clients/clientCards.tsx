import { motion, MotionValue, useTransform } from "framer-motion";
import { FaTwitter } from "react-icons/fa";

interface Props {
  index: number;
  progress: MotionValue<number>;
  country: string;
  flag: string;
  description: string;
}

const ClientCard = ({
  index,
  progress,
  country,
  flag,
  description,
}: Props) => {

  /* FAN LAYOUT */
  const fanX = [-450, -270, -90, 90, 270, 450];
  const fanRotate = [-18, -10, -4, 4, 10, 18];

  /* GRID LAYOUT */
  const gridX = [-360, 50, 460, -360, 50, 460];
  const gridY = [0, 0, 0, 330, 330, 330];

  const x = useTransform(progress, [0.15, 0.75], [fanX[index], gridX[index]]);
  const y = useTransform(progress, [0.15, 0.75], [0, gridY[index]]);
  const rotate = useTransform(progress, [0.15, 0.75], [fanRotate[index], 0]);

  const isWhite = index === 1 || index === 4;

  return (
    <motion.div
      className={`client-card ${isWhite ? "white-card" : ""}`}
      style={{ x, y, rotate }}
    >
      {/* Header */}
      <div className="client-header">

        <div className="client-title-row">
          <div className="client-left">
            <img src={flag} alt={country} className="client-flag" />
            <h4 className="client-country">{country}</h4>
          </div>

          <div className="client-social">
            <FaTwitter className="social-icon twitter" />
          </div>
        </div>

        <span className="client-subtitle">
          A European Organization focused on Advanced Sports Streaming Solutions.
        </span>

      </div>

      {/* Description */}
      <p className="client-description">
        {description}
      </p>

    </motion.div>
  );
};

export default ClientCard;
