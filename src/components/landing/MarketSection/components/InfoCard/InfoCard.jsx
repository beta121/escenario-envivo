import './style.css';

export const InfoCard = ({ number, subtitle, description }) => {
  return (
    <div className="market__info-card">
      <div className="market__card-left">
        <span className="market__card-num">{number}</span>
      </div>

      <div className="market__card-right">
        <h5 className="market__card-subtitle">{subtitle}</h5>
        <p className="market__card-description">{description}</p>
      </div>
    </div>
  );
};
