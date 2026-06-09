import { useParams } from 'react-router-dom';
import { ProductCarousel, ChatSidebar, VideoLive } from '../../components/layout';
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

        <footer className="live-section-product">
          <ProductCarousel currentProduct={prods} />
        </footer>
      </div>
    </section>
  );
};

export default LiveProfile;
