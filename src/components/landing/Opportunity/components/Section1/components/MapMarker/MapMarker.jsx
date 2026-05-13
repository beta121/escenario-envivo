import { motion } from 'framer-motion';
import './style.css';

export const MapMarker = ({ top, left, value, color = '#E55C28', isAnimated = false }) => {
  return (
    <div className="map-marker" style={{ top, left }}>
      <motion.div
        className="marker-bubble"
        style={{ backgroundColor: color }}
        animate={isAnimated ? { y: [0, -15, 0] } : { y: 0 }}
        transition={
          isAnimated
            ? {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : { duration: 0 }
        }
      >
        {value}
      </motion.div>

      <div className="marker-dot" style={{ borderColor: color }} />
    </div>
  );
};
