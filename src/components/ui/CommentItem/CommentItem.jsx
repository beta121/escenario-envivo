import './style.css';

import './style.css';

export const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-avatar-wrapper">
        <img src={comment.userAvatar} alt="avatar" className="comment-avatar" />
      </div>
      <div className="comment-body">
        <div className="comment-header">
          <span className="comment-author">{comment.userName}</span>
          <span className="comment-date">{comment.date}</span>
          <div className="comment-rating">
            <span className="star-icon">★</span>
            <span className="rating-value">{comment.rating}</span>
          </div>
        </div>
        <p className="comment-text">{comment.comment}</p>
      </div>
    </div>
  );
};
