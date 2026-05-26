import { Link } from 'react-router-dom';
import './style.css';

export const DefaultCard = ({ productId, variant, imgSrc, description, price, onClick }) => {
  const isAuction = variant === 'auction';
  const isGiveaway = variant === 'giveaway';
  const hasStatus = isAuction || isGiveaway;
  const showBuyBtn = variant === 'default' || isAuction;

  return (
    <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`card-container variant-${variant}`}>
        <div className="card-content">
          <div className="card-img">
            <img src={imgSrc} alt="Product" />
          </div>

          <div className="cart-info">
            <div className="text-content">
              {hasStatus && (
                <p className="card-status">{variant.charAt(0).toUpperCase() + variant.slice(1)}</p>
              )}
              <p className="card-description">{description}</p>
            </div>

            <div className="cart-footer">
              {showBuyBtn && (
                <>
                  <span className="price">${price}</span>
                  <button
                    className="card-button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    BUY
                  </button>
                </>
              )}

              {isGiveaway && <p className="price-giveaway">VALUE OF ${price}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
