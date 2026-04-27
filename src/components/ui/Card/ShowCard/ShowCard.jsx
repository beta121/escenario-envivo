import { Link } from 'react-router-dom';
import { BadgeCard } from '../BadgeCard';
import './style.css';

export const ShowCard = ({ productId, imgSrc, description, price }) => {
  return (
    <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-show">
        <BadgeCard text="Showing now" background="#E35D25" />

        <div className="card-show__content">
          <div className="card-show__img-wrapper">
            <img src={imgSrc} alt="Product" className="card-show__img" />
          </div>

          <div className="card-show__info">
            <div className="card-show__text">
              <p className="card-show__description">{description}</p>
            </div>

            <div className="card-show__footer">
              <span className="card-show__price">${price}</span>
              <button
                className="card-show__button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
