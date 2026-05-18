import { motion } from 'framer-motion';
import { CountUp } from '../../../../../CountUp';
import './style.css';

export const MapMarker = ({
  top,
  left,
  value,
  color = '#E55C28',
  isAnimated = false,
  duration,
  index,
}) => {
  const appearanceDelay = index * 0.5;

  return (
    <motion.div
      className="map-marker"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        y: [0, -8, 0],
        transition: {
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      transition={{
        opacity: { duration: 0.5, delay: appearanceDelay, ease: 'easeOut' },
        scale: { duration: 0.5, delay: appearanceDelay, ease: 'easeOut' },
      }}
    >
      <div className="marker-bubble" style={{ backgroundColor: color }}>
        {value} %
      </div>

      <div className="marker-dot" style={{ borderColor: color }} />
    </motion.div>
  );
};
