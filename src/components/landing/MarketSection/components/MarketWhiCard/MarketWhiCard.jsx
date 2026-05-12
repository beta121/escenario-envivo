import './style.css';

export const MarketWhiCard = ({ description, subtitle }) => {
  return (
    <div className="market-whi__card">
      <h4 className="market-whi__subtitle">{subtitle}</h4>
      <div className="market-whi__description">{description}</div>
    </div>
  );
};
