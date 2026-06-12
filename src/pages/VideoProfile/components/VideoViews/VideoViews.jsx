import { useState, useEffect } from 'react';
import { StreamerInfo } from '../../../../components/ui';
import { useLiveVideoRandomTime } from '../../../../shared/hooks';
import './style.css';

export const VideoViews = ({ video, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useLiveVideoRandomTime(true, video.streamVideo);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="video-wrapper">
      <div className="video-heder">
        <div>
          <StreamerInfo
            userId={video?.userId}
            avatar={video?.avatarUrl}
            name={video?.userName}
            rating={video?.rating}
          />
        </div>
        <p className="video-title">{title}</p>

        <div className="video-badge">LIVE {video?.badgeText}</div>
      </div>

      <video
        ref={videoRef}
        src={video.streamVideo}
        className="video"
        muted={false}
        controls={true}
        autoPlay={true}
        controlsList="nodownload"
        playsInline
        onCanPlay={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};
