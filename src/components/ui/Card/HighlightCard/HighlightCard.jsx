import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Toasty } from '../../../ui';
import { useTimer } from '../../../../shared/hooks/useTimer';
import { products } from '../../../../shared/assets/products/products';

import './style.css';

export const HighlightCard = ({ product }) => {
  const [isOpenTost, setIsOpenTost] = useState(false);
  const { type, oldPrice, price, discounts, imgSrc, time, sale } = product;
  const { timeLeft } = useTimer(time);
  const category = type === 'giveaway';

  const currentSellerId =
    products.find((seller) => seller.products.some((p) => p.productId === product.productId))
      ?.userId || null;

  return (
    <Link to={`user/${currentSellerId}`}>
      <div
        className="highlight-container"
        style={{
          border: category ? '1.5px solid #FF0033' : '1.5px solid #E35D25',
        }}
      >
        <div className="highlight-badge-container">
          <div
            className="highlight-badge"
            style={{
              background: category ? '#FF0033' : '#E35D25',
            }}
          >
            {category ? 'Giveaway!!!' : 'DISCOUNT!'}
          </div>
        </div>
        <div className="highlight-content">
          <div className="highlight-img">
            <img src={imgSrc} />
          </div>

          <div className="highlight-action">
            <div className="highlight-price">
              <p>${oldPrice}</p>
              <p style={{ color: type === 'discount' ? '#E55C28' : '#FF0832' }}>${price}</p>
            </div>

            <div className="highlight-description">
              {category && time && <p className="highlight-description-time">{timeLeft}</p>}
              <p
                className="highlight-description-sale"
                style={{
                  color: sale === 'Today Only!' ? '#FF0832' : '#454545',
                  fontWeight: sale === 'Today Only!' ? '600' : '400',
                }}
              >
                {sale}
              </p>
            </div>

            <button
              className="highlight-btn"
              style={{ background: category ? '#FF0033' : '#E35D25' }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpenTost(true);
              }}
            >
              {category ? 'join' : 'Shop'}
            </button>
          </div>
        </div>
        {isOpenTost && (
          <Toasty error text="Please create an account." setIsOpenTost={setIsOpenTost} />
        )}
      </div>
    </Link>
  );
};
