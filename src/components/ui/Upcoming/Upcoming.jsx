import { useState, useEffect } from 'react';
import './style.css';

const Ball = () => {
  return (
    <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.87633 14C3.87633 10.287 5.35132 6.72602 7.97683 4.10051C10.6023 1.475 14.1633 0 17.8763 0C21.5894 0 25.1503 1.475 27.7758 4.10051C30.4013 6.72602 31.8763 10.287 31.8763 14V21.528L35.5203 28.816C35.6881 29.1514 35.7673 29.5242 35.7504 29.8989C35.7336 30.2735 35.6212 30.6377 35.424 30.9567C35.2269 31.2757 34.9514 31.539 34.6238 31.7216C34.2962 31.9042 33.9274 32.0001 33.5523 32H25.6243C25.1795 33.7165 24.1772 35.2366 22.7749 36.3219C21.3725 37.4071 19.6495 37.9959 17.8763 37.9959C16.1031 37.9959 14.3801 37.4071 12.9778 36.3219C11.5755 35.2366 10.5732 33.7165 10.1283 32H2.20033C1.82528 32.0001 1.45645 31.9042 1.12886 31.7216C0.80127 31.539 0.525801 31.2757 0.328616 30.9567C0.13143 30.6377 0.0190754 30.2735 0.00222258 29.8989C-0.0146303 29.5242 0.0645784 29.1514 0.232326 28.816L3.87633 21.528V14ZM14.4123 32C14.7634 32.608 15.2684 33.1129 15.8764 33.464C16.4845 33.815 17.1742 33.9998 17.8763 33.9998C18.5784 33.9998 19.2682 33.815 19.8762 33.464C20.4843 33.1129 20.9892 32.608 21.3403 32H14.4123ZM17.8763 4C15.2242 4 12.6806 5.05357 10.8053 6.92893C8.92989 8.8043 7.87633 11.3478 7.87633 14V21.528C7.87628 22.1487 7.73181 22.7608 7.45433 23.316L5.11433 28H30.6403L28.3003 23.316C28.0222 22.761 27.877 22.1488 27.8763 21.528V14C27.8763 11.3478 26.8228 8.8043 24.9474 6.92893C23.072 5.05357 20.5285 4 17.8763 4Z"
        fill="white"
      />
    </svg>
  );
};

export const Upcoming = ({ timeUpcoming }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const parseTargetDate = (str) => {
    if (!str) return null;
    console.log('Входящая строка:', str); // Для отладки

    const now = new Date();
    let target = new Date();

    // 1. Ищем время (поддерживает 10:00, 10:00 AM, 10:00PM)
    const timeMatch = str.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (!timeMatch) {
      console.error('Не удалось найти время в строке');
      return null;
    }

    let [_, hours, minutes, ampm] = timeMatch;
    let hr = parseInt(hours, 10);
    if (ampm) {
      if (ampm.toUpperCase() === 'PM' && hr < 12) hr += 12;
      if (ampm.toUpperCase() === 'AM' && hr === 12) hr = 0;
    }
    const min = parseInt(minutes, 10);

    // 2. Ищем дату/день
    const lowerStr = str.toLowerCase();

    if (lowerStr.includes('tomorrow')) {
      target.setDate(now.getDate() + 1);
    } else if (/\d{1,2}\s+[a-z]{3}/i.test(str)) {
      // Формат "12 Nov"
      const dateMatch = str.match(/(\d{1,2})\s+([a-z]{3})/i);
      const day = parseInt(dateMatch[1], 10);
      const monthName = dateMatch[2];
      const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
      ];
      const monthIndex = months.indexOf(monthName.toLowerCase());

      if (monthIndex !== -1) {
        target.setMonth(monthIndex);
        target.setDate(day);
      }
    } else {
      // Формат "Tue", "Wed"...
      const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const dayMatch = str.match(/(sun|mon|tue|wed|thu|fri|sat)/i);
      if (dayMatch) {
        const targetDayIndex = daysOfWeek.indexOf(dayMatch[1].toLowerCase());
        let daysToAdd = (targetDayIndex + 7 - now.getDay()) % 7;
        if (
          daysToAdd === 0 &&
          (hr < now.getHours() || (hr === now.getHours() && min <= now.getMinutes()))
        ) {
          daysToAdd = 7; // Если день сегодня, но время вышло — переносим на след. неделю
        }
        target.setDate(now.getDate() + daysToAdd);
      }
    }

    target.setHours(hr, min, 0, 0);
    console.log('Рассчитанная дата:', target.toString());
    return target;
  };

  useEffect(() => {
    const targetDate = parseTargetDate(timeUpcoming);
    if (!targetDate) return;

    const tick = () => {
      const diff = targetDate - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0 });

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 60000);
    return () => clearInterval(interval);
  }, [timeUpcoming]);

  return (
    <div className="upcoming-wrapper">
      <div className="countdown-container">
        <div className="time-block">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">days</span>
        </div>
        <div className="time-block">
          <span className="time-value">{timeLeft.hours}</span>
          <span className="time-label">hours</span>
        </div>
        <div className="time-block">
          <span className="time-value">{timeLeft.minutes}</span>
          <span className="time-label">minutes</span>
        </div>
      </div>

      <button className="reminder-button">
        <Ball />
        SEND ME A REMINDER
      </button>
    </div>
  );
};
