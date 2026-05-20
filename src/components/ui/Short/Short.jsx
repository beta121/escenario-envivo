import { Badge } from '../Badge';
import './style.css';

export const Short = ({ short, size = 'normal', showInfo = true }) => {
  return (
    <div className={`short-card ${size === 'small' ? 'short-card--small' : ''}`}>
      <Badge text={`Views ${short.views}`} type={'video'} />
      <div className="short-video-wrapper">
        <img src={short.videoUrl} alt={short.title} className="short-video-content" />
      </div>
      {showInfo && (
        <div className="short-info">
          <h3 className="short-title">{short.title}</h3>
          <p className="short-meta">
            <span className="short-category">{short.category} </span>
            {short.tags.map((tag, index) => (
              <span key={index} className="short-tag">
                {tag}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};
