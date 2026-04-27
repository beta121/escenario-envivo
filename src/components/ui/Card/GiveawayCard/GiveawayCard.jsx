import { Link } from 'react-router-dom';
import { BadgeCard } from '../BadgeCard';
import { useTimer } from '../../../../shared/hooks';
import './style.css';

export const GiveawayCard = ({ productId, imgSrc, description, joined, time }) => {
  return (
    <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-giveaway">
        <BadgeCard text="Giveaway!!!" background="#E35D25" />

        <div className="card-giveaway__content">
          <div className="card-giveaway__img-wrapper">
            <img src={imgSrc} alt="Giveaway" className="card-giveaway__img" />
          </div>

          <div className="card-giveaway__info">
            <div className="card-giveaway__header">
              <span className="card-giveaway__joined">{joined} joined</span>
              <p className="card-giveaway__time">{time}</p>
            </div>

            <div className="card-giveaway__text">
              <p className="card-giveaway__description">{description}</p>
            </div>

            <div className="card-giveaway__footer">
              <button
                className="card-giveaway__button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                join
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
