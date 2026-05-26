import { Link } from 'react-router-dom';
import { BadgeCard } from '../BadgeCard';
import { useTimer } from '../../../../shared/hooks';
import './style.css';

export const DiscountCard = ({
  imgSrc,
  description,
  price,
  oldPrice,
  time,
  discountLabel,
  type,
  productId,
}) => {
  const { timeLeft } = useTimer(time);

  return (
    <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-discount">
        <BadgeCard text={type === 'auction' ? 'Auction' : 'Discount!'} background="#FF0033" />

        <div className="card-discount__content">
          <div className="card-discount__img-wrapper">
            <img src={imgSrc} alt="Product" className="card-discount__img" />
          </div>

          <div className="card-discount__info">
            <div className="card-discount__container">
              {discountLabel && <span className="card-discount__discount">{discountLabel}</span>}
              <p className="card-discount__time">{type === 'auction' ? time : timeLeft}</p>
            </div>

            <div className="card-discount__text">
              <p className="card-discount__description">{description}</p>
            </div>

            <div className="card-discount__footer">
              <div className="card-discount__price-container">
                <span className="card-discount__old-price">${oldPrice}</span>
                <span className="card-discount__price">${price}</span>
              </div>
              <button
                className="card-discount__button"
                style={{ textTransform: type === 'discount' ? 'uppercase' : 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
