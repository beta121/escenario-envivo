import './style.css';

export const MarketProjectionCard = ({ title, subtitle, tam, sam, som, footnote }) => {
  return (
    <div className="projection-card">
      <header className="projection-card__header">
        <h3 className="projection-card__title">{title}</h3>
        <p className="projection-card__subtitle">{subtitle}</p>
      </header>

      <div className="projection-card__body">
        <div className="metric-group">
          <h4 className="metric-value">{tam.value}</h4>
          <h5 className="metric-label">{tam.label}</h5>
          <p className="metric-description">{tam.description}</p>
        </div>

        <div className="metric-group">
          <div className="metric-value-wrapper">
            <h4 className="metric-value">{sam.value}</h4>
            <span className="metric-badge">{sam.badge}</span>
          </div>
          <h5 className="metric-label">{sam.label}</h5>
          <p className="metric-description">{sam.description}</p>
        </div>

        <div className="metric-group">
          <div className="metric-value-wrapper">
            <h4 className="metric-value metric-value--highlight">{som.value}</h4>
            <span className="metric-badge metric-badge--som">{som.badge}</span>
          </div>
          <h5 className="metric-label">{som.label}</h5>
          <p className="metric-description">{som.description}</p>
        </div>
      </div>

      <footer className="projection-card__footer">
        <p className="footnote">{footnote}</p>
      </footer>
    </div>
  );
};
