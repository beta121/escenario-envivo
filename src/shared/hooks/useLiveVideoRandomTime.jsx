import { useEffect, useRef } from 'react';

export const useLiveVideoRandomTime = (isLive, videoUrl) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (isLive && videoElement) {
      const setRandomTimestamp = () => {
        const duration = videoElement.duration;

        if (duration && !isNaN(duration)) {
          // Устанавливаем буфер в 60 секунд (1 минута) от конца видео
          const endBuffer = 60;

          // Вычисляем верхнюю границу для рандома.
          // Если видео меньше 60 секунд, верхней границей станет само duration, чтобы не уйти в минус.
          const maxAllowedTime = duration > endBuffer ? duration - endBuffer : duration;

          // Генерируем случайное время от 0 до maxAllowedTime
          const randomTime = Math.random() * maxAllowedTime;

          videoElement.currentTime = randomTime;

          videoElement.play();

          console.log(`рандом ${randomTime.toFixed(2)}s. `);
        }
      };

      videoElement.addEventListener('loadedmetadata', setRandomTimestamp);

      videoElement.addEventListener('ended', setRandomTimestamp);

      if (videoElement.readyState >= 1) {
        setRandomTimestamp();
      }

      return () => {
        videoElement.removeEventListener('loadedmetadata', setRandomTimestamp);
        videoElement.removeEventListener('ended', setRandomTimestamp);
      };
    }
  }, [isLive, videoUrl]);

  return videoRef;
};
