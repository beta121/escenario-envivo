import { Link } from 'react-router-dom';
import { sellersUsers } from '../../../shared/assets/user/sellersUsers';
import { streamsData } from '../../../shared/assets/user/streamsData';

import './styles.css';

export const FavoriteSellers = ({ title }) => {
  const currentUpcoming = streamsData;

  return (
    <div className="carousel-container">
      <h3 className="avatar-title">{title}</h3>
      <div className="carousel-track">
        {sellersUsers.map((user) => (
          <div key={user.id} className="avatar-box">
            <Link to={user.online ? `/live/${user?.id}` : `/upcoming/${user?.upcomingID}`}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{ border: user.online && '2px solid #FF0033' }}
              />
            </Link>
            {!user.online && (
              <div
                className="avatar-badge"
                style={{
                  backgroundColor: user.time?.includes('min') ? '#e85d26' : '#333333',
                }}
              >
                {user.time}
              </div>
            )}
            <Link to={`/user/${user?.id}`}>
              <span className="avatar-name">{user.name}</span>
            </Link>
            {user.online && (
              <div className="live-play-icon">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '3px' }}
                >
                  <path d="M10 6L0 12L0 0L10 6Z" fill="white" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
