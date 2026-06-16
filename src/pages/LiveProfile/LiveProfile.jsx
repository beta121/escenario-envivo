import { useParams, useLocation } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, ExpandableBox } from '../../components/layout';
import { VideoLive } from './components';
import { StreamCard, MobileCard } from '../../components/ui';
import { streamsData } from '../../shared/mocks/streamsData';
import { products } from '../../shared/mocks/productsData';
import './style.css';

export const LiveProfile = () => {
  const location = useLocation();
  const { id } = useParams();

  const currentVideo = Object.fromEntries(streamsData.map((item) => [item.videoId, item]));
  const currentProduct = Object.fromEntries(products.map((item) => [item.userId, item]));

  const prods = currentProduct[currentVideo[id].userId].products.filter(
    (product) => product.type === 'showing-now' || product.type === 'default'
  );
  const isLive = location.pathname.includes('/live');

  return (
    <section className="video-section-page">
      <div className="live-section-wrapper">
        <h3 className="live-section-video-title">{currentVideo[id].videoTitle}</h3>

        <div className="live-section-video">
          <VideoLive title={currentVideo[id].videoTitle} video={currentVideo[id]} />

          <div className="section-product-mobile">
            {prods.map((prod) => {
              return <MobileCard key={prod.productId} product={prod} />;
            })}
          </div>
        </div>

        <div className="live-section-chat">
          <ChatSidebar isLive={isLive} />
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
