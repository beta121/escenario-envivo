import './style.css';

export const CardSection3 = ({ title, description }) => {
  return (
    <div className="card-beta-wrapper">
      <h4 className="card-beta-title">{title}</h4>
      <p className="card-beta-description">{description}</p>
    </div>
  );
};
