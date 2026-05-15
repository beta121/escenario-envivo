import { CountUp } from '../../../CountUp';
import './style.css';

export const Section3 = () => {
  return (
    <div className="entity-banner">
      <div className="entity-banner-content">
        <div className="entity-banner-counter">
          <CountUp to={559} />
        </div>
        <div className="entity-banner-title">
          <span>million</span> Spanish Speakers
        </div>
        <div className="entity-banner-subtitle">
          *Collectively 3rd Most powerful economy in the world by GDP
        </div>
      </div>
    </div>
  );
};
