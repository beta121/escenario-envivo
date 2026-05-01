import { useState, useEffect } from 'react';
import ball from '../../../shared/assets/svg/ball.svg';
import gemini from '../../../shared/assets/svg/gemini-svg.svg';

import './style.css';

const parseTimeToMinutes = (timeString) => {
  if (!timeString) return 0;
  const parts = timeString.split(':').map((p) => parseInt(p.trim(), 10));
  if (parts.length === 3) {
    const [days, hours, minutes] = parts;
    return days * 24 * 60 + hours * 60 + minutes;
  }
  return 0;
};

export const Upcoming = ({ timeUpcoming }) => {
  const [totalMinutes, setTotalMinutes] = useState(() => parseTimeToMinutes(timeUpcoming));
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    setTotalMinutes(parseTimeToMinutes(timeUpcoming));
  }, [timeUpcoming]);

  useEffect(() => {
    if (totalMinutes <= 0) return;

    const interval = setInterval(() => {
      setTotalMinutes((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(interval);
  }, [totalMinutes > 0]);

  const displayDays = Math.floor(totalMinutes / (24 * 60));
  const displayHours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const displayMinutes = totalMinutes % 60;

  if (!timeUpcoming && totalMinutes === 0) return null;

  console.log(isSend);

  return (
    <div className="upcoming-wrapper">
      <div className="countdown-container">
        <div className="time-block">
          <span className="time-value">{displayDays}</span>
          <span className="time-label">days</span>
        </div>
        <div className="time-block">
          <span className="time-value">{displayHours}</span>
          <span className="time-label">hours</span>
        </div>
        <div className="time-block">
          <span className="time-value">{displayMinutes}</span>
          <span className="time-label">minutes</span>
        </div>
      </div>

      <button
        className="reminder-button"
        onClick={(e) => setIsSend((prev) => !prev)}
        style={{ background: isSend ? '#14aa3a' : '#e85d26' }}
      >
        <img src={isSend ? gemini : ball} alt="bell" />
        SEND ME A REMINDER
      </button>
    </div>
  );
};
