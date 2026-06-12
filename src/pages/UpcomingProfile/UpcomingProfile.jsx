import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, ExpandableBox } from '../../components/layout';
import { StreamCard } from '../../components/ui';
import { UpcomingViews, UpcomingBtn } from './components';
import { streamsData } from '../../shared/assets/user/streamsData';
import { products } from '../../shared/assets/products/products';
import './style.css';

const UpcomingProfile = () => {
  const [isSend, setIsSend] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { id } = useParams();

  const currentVideo = Object.fromEntries(streamsData.map((item) => [item.videoId, item]));
  const currentProduct = Object.fromEntries(products.map((item) => [item.userId, item]));

  const prods = currentProduct[currentVideo[id].userId].products.filter(
    (product) =>
      product.type === 'giveaway' || (product.type === 'default' && product.variant === 'default')
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
      <div className="upcoming-section-wrapper">
        <h3 className="upcoming-section-video-title">{currentVideo[id].videoTitle}</h3>

        <div className="upcoming-section-video">
          <UpcomingViews
            timeUpcoming={currentVideo[id]?.badgeText}
            video={currentVideo[id]}
            title={currentVideo[id]?.videoTitle}
          />
        </div>

        <div className="upcoming-section-btn-rem">
          <UpcomingBtn onClick={() => setIsSend((prev) => !prev)} isSend={isSend} />
        </div>

        <div className="upcoming-section-chat">
          <ChatSidebar
            isLive={windowWidth >= 800 ? true : false}
            isDefaultOpen={windowWidth >= 576 ? true : false}
          />
        </div>

        <div className="upcoming-section-product">
          <ProductCarousel currentProduct={prods} />
        </div>

        <div className="upcoming-section-all-video">
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

export default UpcomingProfile;
