import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, ExpandableBox } from '../../components/layout';
import { streamsData } from '../../shared/mocks/streamsData';
import { VideoViews } from './components/VideoViews';
import { StreamCard, MobileCard } from '../../components/ui';
import { products } from '../../shared/mocks/productsData';
import './style.css';

const VideoProfile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { id } = useParams();

  const currentVideo = Object.fromEntries(streamsData.map((item) => [item.videoId, item]));
  const currentProduct = Object.fromEntries(products.map((item) => [item.userId, item]));

  const prods = currentProduct[currentVideo[id].userId].products.filter(
    (product) =>
      product.type === 'discount' || (product.type === 'default' && product.variant === 'default')
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="video-section-page">
      <div className="video-section-wrapper">
        <h3 className="video-section-title">{currentVideo[id]?.videoTitle}</h3>

        <div className="video-section-video">
          <VideoViews title={currentVideo[id].videoTitle} video={currentVideo[id]} />
        </div>

        <div className="video-section-chat">
          <ChatSidebar isDefaultOpen={windowWidth >= 576 ? true : false} />
        </div>

        <div className="video-products-mobile">
          <div className="video-section-product-mobile">
            {prods.map((prod) => {
              return <MobileCard key={prod.productId} product={prod} />;
            })}
          </div>
        </div>

        <div className="video-section-product">
          <ProductCarousel currentProduct={prods} />
        </div>

        <div className="video-section-all-video">
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

export default VideoProfile;
