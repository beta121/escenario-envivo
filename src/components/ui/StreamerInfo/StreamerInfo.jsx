import { useState } from 'react';
import { Link } from 'react-router-dom';
import star from '../../../shared/assets/svg/star.svg';
import './style.css';

export const StreamerInfo = ({ userId, avatar, name, rating }) => {
  const [isFollow, setFollow] = useState(true);

  return (
    <div className="streamer-info" style={{ background: '#00000080', padding: '13px 12px' }}>
      <Link
        to={`/user/${userId}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img src={avatar} alt={`${name}'s avatar`} className="streamer-avatar" />

        <div className="streamer-details">
          <span className="streamer-name">{name}</span>
          <span className="streamer-rating">
            <i className="fa-solid fa-star">
              <img src={star} />
            </i>
            {rating}
          </span>
        </div>
      </Link>

      <button
        style={{ background: isFollow ? '#e85d26' : '#14aa3a' }}
        className="button"
        onClick={(e) => {
          e.preventDefault();
          setFollow(false);
        }}
      >
        {isFollow ? (
          <>
            <span>+</span> Follow
          </>
        ) : (
          'Following'
        )}
      </button>
    </div>
  );
};
