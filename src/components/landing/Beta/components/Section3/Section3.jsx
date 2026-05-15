import bg2 from '../../../../../shared/assets/landing/beta-bg2.png';
import { CardSection3 } from './components';

import './style.css';

export const Section3 = () => {
  return (
    <div className="beta-section2-wrapper">
      <div className="beta-section2-container">
        <h3 className="beta-section2-title">
          Powerful <span>AI Systems</span> for Sellers and Buyers
        </h3>

        <div className="beta-section2-container-card">
          <CardSection3
            title="Personal Shopper"
            description="Buyer AI Assistant for finding deals, streams and sellers that maximize engagement and enjoyment"
          />
          <CardSection3
            title="Stream Assist"
            description="AI Assistant for Sellers during live stream, to answer buyer questions and create unique deals"
          />
          <CardSection3
            title="Shop Mate"
            description="Seller Shop Management AI Assistant for tracking inventory, answering customer questions and dealing with delivery tracking"
          />
        </div>
      </div>
    </div>
  );
};
