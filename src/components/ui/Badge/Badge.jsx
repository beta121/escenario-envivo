import './style.css';

export const Badge = ({ text, type }) => {
  const b = {
    live: { color: 'rgb(255, 255, 255)', background: 'rgb(255, 0, 51)', left: '10px' },
    upcoming: { color: 'rgb(18, 18, 18)', background: 'rgb(221, 221, 221)', left: '10px' },
    video: { color: 'rgb(255, 255, 255)', background: '#454545', right: '10px' },
  };
  return (
    <div className="badge" style={{ ...b[type] }}>
      {text}
    </div>
  );
};
