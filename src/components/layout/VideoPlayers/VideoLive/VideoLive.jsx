import { useState, useEffect } from 'react';
import { StreamerInfo } from '../../../ui';
import './style.css';

export const VideoLive = ({ video, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="video-live-wrapper">
      <div className="video-live-heder">
        <div>
          <StreamerInfo
            userId={video?.userId}
            avatar={video?.avatarUrl}
            name={video?.userName}
            rating={video?.rating}
          />
        </div>
        <p className="video-live-title">{title}</p>

        <div className="live-video-badge">LIVE {video?.badgeText}</div>
      </div>

      <video
        src={video.streamVideo}
        className="video-live"
        muted={false}
        // autoPlay={true}
        playsInline
        onCanPlay={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};
