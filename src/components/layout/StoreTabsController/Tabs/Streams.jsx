import { useParams } from 'react-router-dom';
import { streamsData } from '../../../../shared/assets/user/streamsData';
import { StreamCard } from '../../../../components/ui';

export const Streams = () => {
  const { id } = useParams();

  const streams = streamsData.filter(
    (s) => Number(s.userId) === Number(id) && (s.status === 'live' || s.status === 'upcoming')
  );

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {streams?.map((stream) => (
        <StreamCard stream={stream} key={stream.videoId} />
      ))}
    </div>
  );
};
