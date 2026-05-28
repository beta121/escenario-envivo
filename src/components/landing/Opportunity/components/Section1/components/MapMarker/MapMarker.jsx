import { motion } from 'framer-motion';
import './style.css';

const markerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const MapMarker = ({ top, left, value, color = '#E55C28' }) => {
  return (
    <motion.div
      className="map-marker"
      style={{ top, left }}
      variants={markerVariants}
      whileHover={{
        y: [0, -8, 0],
        transition: {
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <div className="marker-bubble" style={{ backgroundColor: color }}>
        {value} %
      </div>

      <div className="marker-dot" style={{ borderColor: color }} />
    </motion.div>
  );
};
