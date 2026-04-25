import { useTimer } from '../../../../shared/hooks/useTimer';
import './style.css';

export const HighlightCard = ({ product }) => {
  const { type, oldPrice, newPrice, discounts, src, time } = product;
  const { timeLeft } = useTimer(time);
  const category = type === 'giveaway';
  return (
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
        {!category && <div className="highlight-discount">{discounts}% OFF</div>}
      </div>
      <div className="highlight-content">
        <div className="highlight-img">
          <img src={src} />
        </div>
        <h4 className="highlight-time" style={{ color: category ? '#FF0033' : '#E35D25' }}>
          {category ? timeLeft : time}
        </h4>
        <div className="highlight-action">
          <div className="highlight-price">
            <p>${oldPrice}</p>
            <p style={{ color: category ? '#FF0033' : '#000000' }}>${newPrice}</p>
          </div>
          <button
            className="highlight-btn"
            style={{ background: category ? '#FF0033' : '#E35D25' }}
          >
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};
