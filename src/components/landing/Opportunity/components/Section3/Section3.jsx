import { CountUp } from '../../../CountUp';
import section4 from '../../../../../shared/assets/landing/section4.png';
import section42 from '../../../../../shared/assets/landing/section42.png';

import './styles.css';

export const Section3 = () => {
  return (
    <>
      <div className="opportunity-market_container">
        <div>
          <img src={section4} />
        </div>
        <div className={`opportunity-card 'orange-theme' }`}>
          <div className="opportunity-card__content">
            <h2 className="opportunity-card__top-text">
              NORTH AMERICA <span className="light-text">IS</span>
            </h2>

            <div className="opportunity-card__main">
              <span className="opportunity-card__percentage">
                <CountUp to={31} duration={6} />%
              </span>
            </div>

            <h2 className="opportunity-card__bottom-text">OF THE GLOBAL MARKET</h2>

            <p className="opportunity-card__note">
              * With no leading platform for LiveStream Sales
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
