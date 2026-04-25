import './style.css';

export const Loader = ({ color = '#000' }) => {
  return (
    <div className="loader-container">
      <span
        className="loader"
        style={{
          border: `5px solid ${color}`,
          borderBottomColor: 'transparent',
        }}
      ></span>
    </div>
  );
};
