import { motion } from 'framer-motion';
import './style.css';

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const MarketProjectionCard = ({ title, subtitle, tam, sam, som, footnote }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.15, duration: 0.5 }}
      className="projection-card"
    >
      <motion.header variants={itemVariants} className="projection-card__header">
        <h3 className="projection-card__title">{title}</h3>
        <p className="projection-card__subtitle">{subtitle}</p>
      </motion.header>

      <div className="projection-card__body">
        <motion.div variants={itemVariants} className="metric-group">
          <h4 className="metric-value">{tam.value}</h4>
          <h5 className="metric-label">{tam.label}</h5>
          <p className="metric-description">{tam.description}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="metric-group">
          <div className="metric-value-wrapper">
            <h4 className="metric-value">{sam.value}</h4>
            <span className="metric-badge">{sam.badge}</span>
          </div>
          <h5 className="metric-label">{sam.label}</h5>
          <p className="metric-description">{sam.description}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="metric-group">
          <div className="metric-value-wrapper">
            <h4 className="metric-value metric-value--highlight">{som.value}</h4>
            <span className="metric-badge metric-badge--som">{som.badge}</span>
          </div>
          <h5 className="metric-label">{som.label}</h5>
          <p className="metric-description">{som.description}</p>
        </motion.div>
      </div>

      <motion.footer variants={itemVariants} className="projection-card__footer">
        <p className="footnote">{footnote}</p>
      </motion.footer>
    </motion.div>
  );
};
