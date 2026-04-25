import './styles.css';

export const ChatMessage = ({ user, text, color }) => {
  return (
    <div className="chat-message">
      <div className="message-avatar">
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.userName} />
        ) : (
          <div className="avatar-placeholder" style={{ backgroundColor: color || '#6c5ce7' }}>
            {user?.userName?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="message-content">
        <span className="message-author">{user?.userName}</span>
        <p className="message-text" style={{ color: text?.isSpecial ? '#E67E22' : 'inherit' }}>
          {text?.content || text}
        </p>
      </div>
    </div>
  );
};
