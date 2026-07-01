import { Link } from 'react-router-dom';
import { Badge } from '../Badge';
import './style.css';

export const Short = ({ short, showInfo = true }) => {
  return (
    <Link to={`/shorts/${short.id}`} className="short-card">
      <div className="short-video-wrapper">
        <img src={short.screenSaver} alt={short.title} className="short-video-content" />
      </div>
      {showInfo && (
        <div className="short-info">
          <h3 className="short-title">{short.title}</h3>
          <p className="short-meta">
            <span className="short-category">{short.category} </span>
            {(short.tags || []).map((tag, index) => (
              <span key={index} className="short-tag">
                {tag}
              </span>
            ))}
          </p>
        </div>
      )}
    </Link>
  );
};
