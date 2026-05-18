import { motion } from 'framer-motion';
import { CardSection3 } from './components';
import bg2 from '../../../../../shared/assets/landing/beta-bg2.png';
import './style.css';

export const Section3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  return (
    <div className="beta-section2-wrapper">
      <div className="beta-section2-container">
        <h3 className="beta-section2-title">
          Powerful <span>AI Systems</span> for Sellers and Buyers
        </h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="beta-section2-container-card"
        >
          <CardSection3
            counter={1}
            title="Personal Shopper"
            description="Buyer AI Assistant for finding deals, streams and sellers that maximize engagement and enjoyment"
          />
          <CardSection3
            counter={2}
            title="Stream Assist"
            description="AI Assistant for Sellers during live stream, to answer buyer questions and create unique deals"
          />
          <CardSection3
            counter={3}
            title="Shop Mate"
            description="Seller Shop Management AI Assistant for tracking inventory, answering customer questions and dealing with delivery tracking"
          />
        </motion.div>
      </div>
    </div>
  );
};
