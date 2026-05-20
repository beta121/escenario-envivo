import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '../../ui';

import './styles.css';

const Bell = ({ isActive }) => {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.19531 14.542C9.05465 14.7451 8.87992 14.9241 8.67578 15.0684C8.31678 15.322 7.88783 15.4582 7.44824 15.458C7.00862 15.4582 6.57972 15.3221 6.2207 15.0684C6.01657 14.9241 5.84182 14.7452 5.70117 14.542H9.19531ZM7.44824 0.375C8.89575 0.375 10.284 0.950169 11.3076 1.97363C12.3312 2.99719 12.9071 4.38549 12.9072 5.83301V8.77344L12.915 8.91406C12.9314 9.05284 12.9722 9.1879 13.0352 9.31348L14.4648 12.1748C14.506 12.2573 14.5256 12.3493 14.5215 12.4414C14.5173 12.5334 14.4897 12.6228 14.4414 12.7012C14.3929 12.7797 14.3247 12.8447 14.2441 12.8896C14.1636 12.9346 14.0727 12.958 13.9805 12.958H0.916992C0.824736 12.958 0.733918 12.9345 0.65332 12.8896C0.572665 12.8447 0.504605 12.7797 0.456055 12.7012C0.407633 12.6228 0.380188 12.5335 0.375977 12.4414C0.37183 12.3492 0.391371 12.2574 0.432617 12.1748L1.86328 9.31348C1.94683 9.14585 1.99034 8.96073 1.99023 8.77344V5.83301C1.99032 4.38549 2.56531 2.99719 3.58887 1.97363C4.61244 0.950081 6.00071 0.37506 7.44824 0.375Z"
        fill={isActive ? '#E35D25' : 'white'}
        stroke={isActive ? 'none' : '#121212'}
        strokeWidth="0.75"
      />
    </svg>
  );
};

const StarIcon = () => (
  <div className="u-star">
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.70703 0.25C5.78093 0.25 5.85819 0.269921 5.94141 0.317383C6.00653 0.354552 6.05685 0.409966 6.09277 0.496094L6.09375 0.49707L7.34375 3.46387L7.40234 3.60254L7.55176 3.61523L10.7783 3.89844C10.8975 3.91635 10.9683 3.95197 11.0098 3.98828C11.0636 4.03553 11.1072 4.09903 11.1387 4.18555C11.1669 4.26324 11.173 4.34051 11.1553 4.42285C11.1441 4.47467 11.1195 4.5262 11.0752 4.57812L11.0244 4.62988L8.57715 6.74414L8.46289 6.84277L8.49707 6.99023L9.23047 10.1396C9.25302 10.2375 9.24272 10.3095 9.21484 10.3682C9.17573 10.4504 9.12284 10.5166 9.05469 10.5693C8.99497 10.6155 8.9243 10.6437 8.83594 10.6514C8.76227 10.6578 8.68834 10.641 8.6084 10.5898V10.5889L8.60254 10.5859L5.83594 8.91895L5.70703 8.8418L5.57812 8.91895L2.81152 10.5859L2.80664 10.5889C2.72649 10.6399 2.65238 10.6566 2.57812 10.6504C2.49027 10.6431 2.41987 10.6156 2.36035 10.5693C2.29182 10.516 2.23829 10.45 2.19922 10.3682C2.1716 10.3103 2.1609 10.2373 2.18359 10.1387L2.91699 6.99023L2.95117 6.84277L2.83691 6.74414L0.390625 4.63086H0.391602C0.313823 4.56086 0.275704 4.49137 0.260742 4.42188C0.242955 4.33918 0.247514 4.26172 0.275391 4.18457C0.306328 4.09905 0.350689 4.03611 0.405273 3.98828C0.44705 3.9517 0.516702 3.91601 0.633789 3.89844L3.8623 3.61523L4.0127 3.60254L4.07129 3.46387L5.32129 0.49707V0.496094C5.35716 0.410023 5.40766 0.354573 5.47266 0.317383C5.55579 0.269968 5.6332 0.250039 5.70703 0.25Z"
        fill="#F7C040"
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

export const StreamCard = ({ stream }) => {
  const [isBell, setIsBell] = useState('');
  const location = useLocation();

  if (!stream) return null;

  const {
    userName,
    star,
    avatarUrl,
    streamVideo,
    videoTitle,
    category,
    description,
    linkToVideo,
    badgeText,
    status,
    isNewSeller,
    videoId,
    hasNotification,
    isBellActive,
    userId,
    textBadge,
    screenSaver,
  } = stream;

  const currentUrl = status === 'live' ? `/live/${videoId}` : `/upcoming/${videoId}`;
  const isUserPage = location.pathname.startsWith('/user/');

  const finalBadgeText =
    status === 'live' ? `Live ${badgeText}` : status === 'video' ? `Views ${badgeText}` : textBadge;
  return (
    <article className="stream-card">
      {!isUserPage && (
        <header className="upcoming-header">
          <Link to={`/user/${userId}`}>
            <div className="avatar-wrapper">
              <img src={avatarUrl} className="u-avatar" alt={userName} />
              {star && <StarIcon />}
            </div>
            <span className="u-username">{userName}</span>

            {isNewSeller && <div className="new-user">NEW SELLER</div>}
          </Link>
        </header>
      )}

      <div className="u-videoBox">
        <Link to={currentUrl}>
          <Badge text={finalBadgeText} type={status} />

          {hasNotification && (
            <div
              className="u-bell"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsBell((prev) => (prev === videoId ? '' : videoId));
              }}
            >
              <Bell isActive={videoId === isBell} />
            </div>
          )}

          <video src={streamVideo} className="u-poster" poster={screenSaver} />

          <div className="u-descriptionBox">
            <h4 className="video-title">{videoTitle}</h4>
            <p className="description">
              <span className="category-title">{category}</span>
              {description}
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
};
