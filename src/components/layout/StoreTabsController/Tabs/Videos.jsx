import { useParams } from 'react-router-dom';
import { streamsData } from '../../../../shared/mocks/streamsData';
import { StreamCard } from '../../../../components/ui';

export const Videos = () => {
  const { id } = useParams();

  const streams = streamsData
    .filter((s) => Number(s.userId) === Number(id))
    .filter((s) => s.status === 'video');

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {streams?.map((stream) => (
        <StreamCard stream={stream} key={stream.videoId} />
      ))}
    </div>
  );
};
