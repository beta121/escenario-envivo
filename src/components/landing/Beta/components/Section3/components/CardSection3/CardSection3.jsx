import { motion } from 'framer-motion';
import './style.css';

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

export const CardSection3 = ({ counter, title, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      className="card-beta-wrapper"
    >
      <div className="card-beta-left">{counter}</div>
      <div className="card-beta-right">
        <h4 className="card-beta-title">{title}</h4>
        <p className="card-beta-description">{description}</p>
      </div>
    </motion.div>
  );
};
