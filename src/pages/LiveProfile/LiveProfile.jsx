import { useParams } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, VideoLive, ExpandableBox } from '../../components/layout';
import { StreamCard } from '../../components/ui';
import { streamsData } from '../../shared/assets/user/streamsData';
import { products } from '../../shared/assets/products/products';
import './style.css';

export const LiveProfile = () => {
  const { id } = useParams();

  const currentVideo = Object.fromEntries(streamsData.map((item) => [item.videoId, item]));
  const currentProduct = Object.fromEntries(products.map((item) => [item.userId, item]));

  const prods = currentProduct[currentVideo[id].userId].products.filter(
    (product) => product.type === 'showing-now' || product.type === 'default'
  );

  return (
    <section className="video-section-page">
      <div className="live-section-wrapper">
        <h3 className="live-section-video-title">{currentVideo[id].videoTitle}</h3>

        <div className="live-section-video">
          <VideoLive title={currentVideo[id].videoTitle} video={currentVideo[id]} />
        </div>

        <div className="live-section-chat">
          <ChatSidebar />
        </div>

        <div className="live-section-product">
          <ProductCarousel currentProduct={prods} />
        </div>

        <div className="live-section-all-video">
          <ExpandableBox showGradient={false} showMo={streamsData.length}>
            {(streamsData || []).map((stream) => (
              <StreamCard stream={stream} key={`stream-${stream.videoId}`} />
            ))}
          </ExpandableBox>
        </div>
      </div>
    </section>
  );
};

export default LiveProfile;
