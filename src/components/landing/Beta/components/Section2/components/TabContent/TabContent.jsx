import './style.css';

export const TabContent = ({ title, description, img }) => {
  return (
    <div className="beta-tab-content-wrapper">
      <div className="beta-tab-text-block">
        <h2 className="beta-tab-title">{title}</h2>
        <p className="beta-tab-description">{description}</p>
      </div>

      <div className="beta-tab-image-block">
        <img src={img} alt={title} className="beta-tab-main-img" />
      </div>
    </div>
  );
};
