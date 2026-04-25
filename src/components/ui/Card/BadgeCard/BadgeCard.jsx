import './style.css';

export const BadgeCard = ({ text, background }) => {
  return (
    <div className="badge-card" style={{ background: background }}>
      <p className="badge-card-title">{text}</p>
    </div>
  );
};
