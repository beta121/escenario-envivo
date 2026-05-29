import { useState, useEffect } from 'react';
import { Loader, StreamerInfo, Upcoming } from '../../../components/ui';
import './style.css';

const VIDEO_STATUS = {
  LIVE: 'live',
  UPCOMING: 'upcoming',
  VIDEO: 'video',
};

export const VideoPlayer = ({ videoUrl, streamerData, status }) => {
  const [isLoading, setIsLoading] = useState(true);

  const isUpcoming = status === VIDEO_STATUS.UPCOMING;
  const isRecordedVideo = status === VIDEO_STATUS.VIDEO;
  const isLive = status === VIDEO_STATUS.LIVE;

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
            <div style={{ width: '300px' }}>
              <StreamerInfo
                userId={streamerData?.userId}
                avatar={streamerData?.avatarUrl}
                name={streamerData?.userName}
                rating={streamerData?.rating}
              />
            </div>

            {isLive && <div className="live-badge">LIVE {streamerData?.badgeText}</div>}
            {isRecordedVideo && (
              <div className="live-badge video-badge">VIEWS {streamerData?.badgeText}</div>
            )}
          </div>
          {!isRecordedVideo && (
            <div className="bottom-row">
              <h4 className="live-direction">{streamerData?.description}</h4>
            </div>
          )}
        </div>

        {!isUpcoming && isLoading && videoUrl && <Loader color="#FFF" />}

        {isUpcoming && <Upcoming timeUpcoming={streamerData?.badgeText} />}

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
              controls={isRecordedVideo}
              autoPlay={!isRecordedVideo}
              loop={!isRecordedVideo}
              muted={!isRecordedVideo}
              autoPlay={true}
              playsInline
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
