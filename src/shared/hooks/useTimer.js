import { useState, useEffect } from 'react';

export const useTimer = (initialTimeStr) => {
  const parseTimeToSeconds = (timeStr) => {
    if (!timeStr || typeof timeStr !== 'string') return 0;
    const [mins, secs] = timeStr.split(':').map(Number);
    return mins * 60 + (secs || 0);
  };

  const [seconds, setSeconds] = useState(() => parseTimeToSeconds(initialTimeStr));

  useEffect(() => {
    setSeconds(parseTimeToSeconds(initialTimeStr));
  }, [initialTimeStr]);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = () => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(m)}:${pad(s)}`;
  };

  return {
    timeLeft: formatTime(),
    isFinished: seconds <= 0
  };
};