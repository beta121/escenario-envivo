import { useState, useEffect } from 'react';
import { Loader, StreamerInfo, Upcoming } from '../../../components/ui';
import './style.css';

export const VideoPlayer = ({ videoUrl, streamerData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isUpcoming = streamerData.status === 'upcoming';

  useEffect(() => {
    if (videoUrl) {
      setIsLoading(true);
    }
  }, [videoUrl]);

  return (
    <div className="video-player-container">
      <main className="video-screen">
        <div className="stream-info-overlay">
          <div className="top-row">
            <StreamerInfo
              userId={streamerData?.userId}
              avatar={streamerData?.avatarUrl}
              name={streamerData?.userName}
              rating={streamerData?.rating}
            />
            {!isUpcoming && <div className="live-badge">LIVE {streamerData?.badgeText}</div>}
          </div>
          <div className="bottom-row">
            <h4 className="live-direction">{streamerData?.description}</h4>
          </div>
        </div>

        {!isUpcoming && isLoading && videoUrl && <Loader color="#FFF" />}

        {isUpcoming && <Upcoming timeUpcoming={streamerData.badgeText} />}

        {isUpcoming ? (
          <div className="video-placeholder upcoming-blackout">
            <span>Трансляция скоро начнется...</span>
          </div>
        ) : (
          videoUrl && (
            <video
              key={videoUrl}
              src={videoUrl}
              className="main-video-element"
              autoPlay
              muted
              playsInline
              loop
              onCanPlay={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          )
        )}
      </main>
    </div>
  );
};
