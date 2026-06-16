import ball from '../../../../shared/assets/svg/ball.svg';
import gemini from '../../../../shared/assets/svg/gemini-svg.svg';
import './style.css';

export const UpcomingBtn = ({ onClick, isSend }) => {
  return (
    <button
      className="reminder-button"
      onClick={onClick}
      style={{ background: isSend ? '#14aa3a' : '#e85d26' }}
    >
      <img src={isSend ? gemini : ball} alt="bell" />
      SEND ME A REMINDER
    </button>
  );
};
