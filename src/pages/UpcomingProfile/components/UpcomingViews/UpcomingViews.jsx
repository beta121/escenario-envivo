import { useState, useEffect } from 'react';
import { UpcomingBtn } from '../../components';
import { StreamerInfo } from '../../../../components/ui';
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

const getPluralForm = (count, singular, plural) => {
  return count === 1 ? singular : plural;
};

export const UpcomingViews = ({ timeUpcoming, video, title }) => {
  const [isSend, setIsSend] = useState(false);
  const [follow, setFollow] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(() => parseTimeToMinutes(timeUpcoming));

  useEffect(() => {
    setTotalMinutes(parseTimeToMinutes(timeUpcoming));
  }, [timeUpcoming]);

  useEffect(() => {
    if (totalMinutes <= 0) return;

    const interval = setInterval(() => {
      setTotalMinutes((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(interval);
  }, [totalMinutes]);

  const displayDays = Math.floor(totalMinutes / (24 * 60));
  const displayHours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const displayMinutes = totalMinutes % 60;

  if (!timeUpcoming && totalMinutes === 0) return null;

  return (
    <>
      <div className="upcoming-views-container">
        <div className="upcoming-video-live-heder">
          <div>
            <StreamerInfo
              userId={video?.userId}
              avatar={video?.avatarUrl}
              name={video?.userName}
              rating={video?.rating}
            />
          </div>
          <p className="upcoming-video-live-title">{title}</p>

          <div
            className="upcoming-live-video-button"
            onClick={() => setFollow(!follow)}
            style={{
              background: follow ? 'rgb(20, 170, 58)' : '#E85D26',
            }}
          >
            + Follow
          </div>
        </div>

        <>
          <div className="upcoming-countdown-container">
            <div className="upcoming-time-block">
              <span className="upcoming-time-value">{displayDays}</span>
              <span className="upcoming-time-label">
                {getPluralForm(displayDays, 'day', 'days')}
              </span>
            </div>
            <div className="upcoming-time-block">
              <span className="upcoming-time-value">{displayHours}</span>
              <span className="upcoming-time-label">
                {getPluralForm(displayHours, 'hour', 'hours')}
              </span>
            </div>
            <div className="upcoming-time-block">
              <span className="upcoming-time-value">{displayMinutes}</span>
              <span className="upcoming-time-label">
                {getPluralForm(displayMinutes, 'minute', 'minutes')}
              </span>
            </div>
          </div>

          <div className="upcoming-btn-desktop">
            <UpcomingBtn onClick={() => setIsSend((prev) => !prev)} isSend={isSend} />
          </div>
        </>
      </div>
    </>
  );
};
