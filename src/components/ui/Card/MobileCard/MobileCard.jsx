import { Link } from 'react-router-dom';
import './style.css';

export const MobileCard = ({ product }) => {
  const { type, price, oldPrice, time, description, imgSrc } = product;

  let cardModifier = '';
  if (type && type !== 'default') {
    cardModifier = `_${type}`;
  }

  let badgeText = '';
  if (type === 'showing-now') badgeText = 'Showing Now';
  if (type === 'discount') badgeText = 'Discount!';
  if (type === 'auction') badgeText = 'Auction';
  if (type === 'giveaway') badgeText = 'Giveaway!!!';

  let btnClass = '_grey';
  let btnText = 'BUY';

  if (type === 'showing-now') {
    btnClass = '_orange';
    btnText = 'BUY';
  } else if (type === 'discount') {
    btnClass = '_red';
    btnText = 'BUY';
  } else if (type === 'auction') {
    btnClass = '_red';
    btnText = 'BID';
  } else if (type === 'giveaway') {
    btnClass = '_red';
    btnText = 'JOIN';
  }

  const isValueText = String(price).toLowerCase().includes('value');

  return (
    <div style={{ marginTop: badgeText ? '25px' : '0px', position: 'relative' }}>
      {badgeText && (
        <div className="mobile-prod-badge-container">
          <span className={`mobile-prod-badge-text ${cardModifier}`}>{badgeText}</span>
          {time && <span className="mobile-prod-badge-time">{time}</span>}
        </div>
      )}

      <Link to={`/product/${product.productId}`} className={`mobile-prod-card ${cardModifier}`}>
        <div className="mobile-prod-card-image">
          <img src={imgSrc} alt="product" />
        </div>

        <div className="mobile-prod-card-text">{description}</div>

        <div className="mobile-prod-price">
          {oldPrice && <span className="mobile-prod-oldPrice">${oldPrice}</span>}

          <span className="mobile-prod-newPrice">{isValueText ? price : `$${price}`}</span>
        </div>

        <button className={`mobile-prod-button ${btnClass}`}>{btnText}</button>
      </Link>
    </div>
  );
};
